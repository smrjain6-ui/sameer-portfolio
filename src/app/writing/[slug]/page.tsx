import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { summaryBullets } from "@/lib/summaryBullets";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return { title: "Post not found" };
  }

  return {
    title: `${post.title} | Sameer Jain`,
    description: post.excerpt,
  };
}

export default function WritingPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) {
    notFound();
  }
  const bullets = post.category === "summary" ? summaryBullets[post.slug] ?? [] : [];

  return (
    <article className="prose-content">
      <Link href="/" className="mb-8 inline-block text-sm text-accent link-underline">
        ← Back to Home
      </Link>
      <p className="mb-4 text-xs uppercase tracking-wider text-textTertiary">
        {post.category === "summary" ? "Book Summary" : "Case Study"}
      </p>
      <h1>{post.title}</h1>
      <p className="text-sm text-textTertiary">{post.date}</p>
      {post.category === "summary" ? (
        <ul className="mt-8 space-y-3 pl-6">
          {bullets.map((point) => (
            <li key={point} className="list-disc marker:text-accent">
              {point}
            </li>
          ))}
        </ul>
      ) : (
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      )}
    </article>
  );
}
