import FadeInOnScroll from "@/components/FadeInOnScroll";
import { podcasts } from "@/lib/data";

export default function Podcasts() {
  return (
    <section className="section-shell py-20 md:py-24">
      <div className="mx-auto max-w-[1100px] px-6">
        <FadeInOnScroll>
          <h2 className="mb-3 font-serif text-3xl">What I Listen To</h2>
          <p className="mb-6 text-textSecondary">Podcasts and YouTube channels I follow regularly.</p>
        </FadeInOnScroll>

        <div className="flex gap-3 overflow-x-auto pb-2">
          {podcasts.map((podcast) => (
            <a
              key={podcast.name}
              href={podcast.url}
              target="_blank"
              rel="noreferrer"
              className="shrink-0 rounded-full border border-borderSoft bg-bgCard px-4 py-2 text-sm text-textSecondary transition hover:border-accent hover:text-accent"
            >
              {podcast.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
