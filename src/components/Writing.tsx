import FadeInOnScroll from "@/components/FadeInOnScroll";
import BlogCard from "@/components/BlogCard";
import type { BlogPost } from "@/lib/blog";

export default function Writing({
  caseStudies,
  summaries,
}: {
  caseStudies: BlogPost[];
  summaries: BlogPost[];
}) {
  return (
    <section id="writing" className="section-shell">
      <div className="mx-auto max-w-[1100px] px-6">
        <FadeInOnScroll>
          <h2 className="mb-4 font-serif text-4xl">Writing</h2>
          <p className="mb-12 max-w-3xl text-textSecondary">
            I&apos;ve been writing about business and startups for 5+ years. Unfiltered thoughts on what makes
            companies tick.
          </p>
        </FadeInOnScroll>

        <FadeInOnScroll>
          <h3 className="mb-5 font-serif text-2xl">Business Case Studies</h3>
          <div className="grid gap-4 md:grid-cols-3">
            {caseStudies.map((post) => (
              <BlogCard key={post.slug} title={post.title} excerpt={post.excerpt} slug={post.slug} />
            ))}
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll className="mt-12">
          <h3 className="mb-5 font-serif text-2xl">Book Summaries</h3>
          <div className="grid gap-4 md:grid-cols-3">
            {summaries.map((post) => (
              <BlogCard key={post.slug} title={post.title} excerpt={post.excerpt} slug={post.slug} />
            ))}
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll className="mt-12 rounded-xl border border-borderSoft bg-bgCard p-6">
          <p className="mb-2 text-2xl">🏈</p>
          <p className="text-textSecondary">I also write about the English Premier League on Medium.</p>
          <a href="https://smrjain6.medium.com/" target="_blank" rel="noreferrer" className="link-underline mt-3 inline-block text-accent">
            Read on Medium →
          </a>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
