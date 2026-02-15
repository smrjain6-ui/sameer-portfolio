import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ToolGallery from "@/components/ToolGallery";
import { getToolBySlug, tools } from "@/lib/tools";

export function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const tool = getToolBySlug(params.slug);
  if (!tool) {
    return { title: "Tool not found" };
  }

  return {
    title: `${tool.title} | Sameer Jain`,
    description: tool.preview,
  };
}

export default function ToolPage({ params }: { params: { slug: string } }) {
  const tool = getToolBySlug(params.slug);
  if (!tool) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-[960px] px-6 pb-20 pt-32">
      <Link href="/#ai-tools" className="mb-8 inline-block text-sm text-accent link-underline">
        ← Back to AI & Tools
      </Link>

      <div className="rounded-2xl border border-borderSoft bg-bgCard p-6 md:p-8">
        <p className="mb-2 text-3xl">{tool.emoji}</p>
        <h1 className="mb-3 font-serif text-4xl md:text-5xl">{tool.title}</h1>
        <p className="text-[1.08rem] leading-8 text-textSecondary">{tool.description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {tool.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-tagBg px-3 py-1 font-mono text-xs text-accentAi">
              {tag}
            </span>
          ))}
        </div>

        {tool.appUrl ? (
          <a
            href={tool.appUrl}
            target="_blank"
            rel="noreferrer"
            className="link-underline mt-6 inline-block text-sm font-medium text-accent"
          >
            Open Live App →
          </a>
        ) : null}
      </div>

      <section className="mt-12 grid gap-8 md:grid-cols-2">
        <div className="rounded-xl border border-borderSoft bg-bgCard p-6">
          <h2 className="mb-4 font-serif text-2xl">What It Does</h2>
          <ul className="space-y-2 pl-5 text-textSecondary">
            {tool.keyFeatures.map((point) => (
              <li key={point} className="list-disc marker:text-accent">
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-borderSoft bg-bgCard p-6">
          <h2 className="mb-4 font-serif text-2xl">My Build Experience</h2>
          <ul className="space-y-2 pl-5 text-textSecondary">
            {tool.buildExperience.map((point) => (
              <li key={point} className="list-disc marker:text-accent">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-12 rounded-xl border border-borderSoft bg-bgCard p-6">
        <h2 className="mb-5 font-serif text-2xl">Screenshots</h2>
        <p className="mb-5 text-sm text-textSecondary">Click any image to view full-size.</p>
        <ToolGallery images={tool.images} title={tool.title} />
      </section>
    </main>
  );
}
