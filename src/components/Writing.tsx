import FadeInOnScroll from "@/components/FadeInOnScroll";
import BlogCard from "@/components/BlogCard";
import type { BlogPost } from "@/lib/blog";

const sportsBusinessArticles = [
  {
    title: "My Sports Business Article Was Featured in a Journal",
    href: "https://www.linkedin.com/posts/sameer-jain-bb153716a_cdsa-communique-july-2024-activity-7221463774610743297-lquW?utm_source=share&utm_medium=member_desktop&rcm=ACoAAChNRPUBahxp4Ehj6zaBkmFXF7t1YuinLco",
  },
  {
    title: "Toys for Billionaires: Sports Franchises",
    href: "https://www.linkedin.com/posts/sameer-jain-bb153716a_toys-for-billionaires-sports-franchises-activity-7102213088686313472-p1YV?utm_source=share&utm_medium=member_desktop&rcm=ACoAAChNRPUBahxp4Ehj6zaBkmFXF7t1YuinLco",
  },
  {
    title: "Sports Analytics, Sports Business, AI",
    href: "https://www.linkedin.com/posts/sameer-jain-bb153716a_sportsanalytics-sportsbusiness-ai-activity-7066755580094222336-Vbkf?utm_source=share&utm_medium=member_desktop&rcm=ACoAAChNRPUBahxp4Ehj6zaBkmFXF7t1YuinLco",
  },
];

export default function Writing({
  caseStudies,
  summaries,
}: {
  caseStudies: BlogPost[];
  summaries: BlogPost[];
}) {
  return (
    <section id="writing" className="section-shell">
      <div className="content-wrap">
        <FadeInOnScroll>
          <h2 className="mb-4 font-serif text-4xl">Writing</h2>
          <p className="mb-12 max-w-3xl text-[1.05rem] leading-8 text-textSecondary">
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
          <h3 className="mb-5 font-serif text-2xl">Sports Business Articles</h3>
          <div className="grid gap-4 md:grid-cols-3">
            {sportsBusinessArticles.map((article) => (
              <a
                key={article.href}
                href={article.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-borderSoft bg-bgCard p-5 shadow-sm transition hover:-translate-y-1 hover:border-accent"
              >
                <h4 className="font-serif text-xl leading-snug text-textPrimary">{article.title}</h4>
                <p className="mt-3 text-sm text-accent">Read on LinkedIn →</p>
              </a>
            ))}
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll className="mt-12 rounded-xl border border-borderSoft bg-bgCard p-6">
          <p className="mb-2 text-2xl">🏈</p>
          <p className="text-textSecondary">I also write about the English Premier League on Medium.</p>
          <p className="mt-2 text-sm italic text-textTertiary">PC (Pre ChatGPT era), written the old-school way.</p>
          <a href="https://smrjain6.medium.com/" target="_blank" rel="noreferrer" className="link-underline mt-3 inline-block text-accent">
            Read on Medium →
          </a>
        </FadeInOnScroll>

        <FadeInOnScroll className="mt-12">
          <h3 className="mb-5 font-serif text-2xl">Book Summaries</h3>
          <div className="grid gap-4 md:grid-cols-3">
            {summaries.map((post) => (
              <BlogCard key={post.slug} title={post.title} excerpt={post.excerpt} slug={post.slug} />
            ))}
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
