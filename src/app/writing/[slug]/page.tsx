import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

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

  return (
    <article className="prose-content">
      <p className="mb-4 text-xs uppercase tracking-wider text-textTertiary">
        {post.category === "summary" ? "Book Summary" : "Case Study"}
      </p>
      <h1>{post.title}</h1>
      <p className="text-sm text-textTertiary">{post.date}</p>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
}
