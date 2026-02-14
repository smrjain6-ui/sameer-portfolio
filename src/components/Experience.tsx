"use client";

import { motion } from "framer-motion";
import FadeInOnScroll from "@/components/FadeInOnScroll";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="section-shell">
      <div className="mx-auto max-w-[1100px] px-6">
        <FadeInOnScroll>
          <h2 className="mb-12 font-serif text-4xl">Experience</h2>
        </FadeInOnScroll>

        <div className="relative space-y-8">
          {experience.map((item, index) => (
            <FadeInOnScroll key={item.role + item.org}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className={`rounded-xl border border-borderSoft bg-bgCard p-6 shadow-sm transition-shadow hover:shadow-md md:w-[calc(50%-1rem)] ${
                  index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                }`}
              >
                <div className="mb-4 border-l-2 border-accent pl-4">
                  <h3 className="font-serif text-2xl leading-tight">{item.role}</h3>
                  <p className="text-sm text-textSecondary">
                    {item.org} | {item.location}
                  </p>
                  <p className="text-sm text-textTertiary">{item.date}</p>
                </div>
                <p className="text-textSecondary">{item.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-tagBg px-3 py-1 font-mono text-xs text-textSecondary transition-transform hover:scale-105"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            </FadeInOnScroll>
          ))}
        </div>

        <FadeInOnScroll className="mt-10 rounded-xl border border-borderSoft bg-bgCard p-5 text-sm text-textSecondary">
          🎓 Bachelor of Management Studies | Shiv Nadar University (2017–21) | CGPA: 8.5+
        </FadeInOnScroll>
      </div>
    </section>
  );
}
