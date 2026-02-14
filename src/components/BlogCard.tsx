import Link from "next/link";

export default function BlogCard({
  title,
  excerpt,
  slug,
}: {
  title: string;
  excerpt: string;
  slug: string;
}) {
  return (
    <article className="rounded-xl border border-borderSoft bg-bgCard p-5 shadow-sm">
      <h4 className="mb-2 font-serif text-xl leading-snug">{title}</h4>
      <p className="mb-4 text-sm text-textSecondary">{excerpt}</p>
      <Link href={`/writing/${slug}`} className="link-underline text-sm text-accent">
        Read →
      </Link>
    </article>
  );
}
