"use client";

import { motion } from "framer-motion";
import FadeInOnScroll from "@/components/FadeInOnScroll";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="section-shell">
      <div className="content-wrap">
        <FadeInOnScroll>
          <h2 className="mb-12 font-serif text-4xl">Experience</h2>
        </FadeInOnScroll>

        <div className="relative space-y-8 md:space-y-10">
          <div className="pointer-events-none absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-borderSoft md:block" />
          {experience.map((item, index) => (
            <FadeInOnScroll key={item.role + item.org}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className={`relative rounded-xl border border-borderSoft bg-bgCard p-6 shadow-sm transition-shadow hover:shadow-lg md:w-[calc(50%-1.6rem)] ${
                  index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                }`}
              >
                <div
                  className={`absolute -top-3 hidden rounded-full border border-borderSoft bg-bgCard px-3 py-1 font-mono text-[11px] text-accent shadow-sm md:block ${
                    index % 2 === 0 ? "-right-8" : "-left-8"
                  }`}
                >
                  {item.impact}
                </div>
                <div
                  className={`absolute top-14 hidden h-10 w-10 items-center justify-center rounded-full border border-borderSoft bg-bgCard text-lg shadow-sm md:flex ${
                    index % 2 === 0 ? "-right-12" : "-left-12"
                  }`}
                >
                  {item.emoji}
                </div>
                <div className={`absolute hidden gap-2 md:flex md:flex-col ${index % 2 === 0 ? "-right-44 top-28" : "-left-44 top-28"}`}>
                  {item.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="rounded-full border border-borderSoft bg-tagBg px-3 py-1 font-mono text-[11px] text-textSecondary">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mb-4 border-l-2 border-accent pl-4">
                  <h3 className="font-serif text-2xl leading-tight">{item.role}</h3>
                  <p className="text-sm text-textSecondary">
                    {item.org} | {item.location}
                  </p>
                  <p className="text-sm text-textTertiary">{item.date}</p>
                </div>
                <ul className="space-y-2.5 pl-5 text-textSecondary">
                  {item.highlights.map((point) => (
                    <li key={point} className="list-disc leading-7 marker:text-accent">
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.article>
            </FadeInOnScroll>
          ))}
        </div>

        <FadeInOnScroll className="mt-16">
          <h3 className="mb-5 font-serif text-3xl">Education</h3>
          <div className="rounded-xl border border-borderSoft bg-bgCard p-5 text-sm text-textSecondary">
            <p className="text-base font-bold text-textPrimary md:text-lg">
              🎓 Bachelor of Management Studies | Shiv Nadar University (2017–21) | CGPA: 8.5+
            </p>
            <ul className="mt-4 space-y-2 pl-5">
              <li className="list-disc leading-7 marker:text-accent">Recognized on the Dean&apos;s List for strong academic performance.</li>
              <li className="list-disc leading-7 marker:text-accent">
                Headed the annual fest sponsorship team, managing 20+ members and raising ₹50L+, the highest sponsorship budget in the fest&apos;s history.
              </li>
              <li className="list-disc leading-7 marker:text-accent">
                Part of the university&apos;s football team, winning 2+ tournaments and competing across several inter-university competitions in India.
              </li>
            </ul>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
