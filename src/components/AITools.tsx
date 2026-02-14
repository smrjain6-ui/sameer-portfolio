"use client";

import { motion } from "framer-motion";
import FadeInOnScroll from "@/components/FadeInOnScroll";
import { aiTools, workflowPlaceholders } from "@/lib/data";

export default function AITools() {
  return (
    <section id="ai-tools" className="section-shell">
      <div className="content-wrap">
        <FadeInOnScroll>
          <h2 className="mb-4 font-serif text-4xl">What I&apos;m Building with AI</h2>
          <p className="mb-10 max-w-3xl text-[1.05rem] leading-8 text-textSecondary">
            I&apos;m deeply curious about how AI can augment growth workflows, automate the mundane, and unlock new
            possibilities. Here&apos;s what I&apos;ve been experimenting with.
          </p>
        </FadeInOnScroll>

        {/* Replace titles/descriptions below with final tool details when available. */}
        <div className="grid gap-5 md:grid-cols-2">
          {aiTools.map((tool) => (
            <FadeInOnScroll key={tool.title}>
              <motion.article
                whileHover={{ y: -4 }}
                className="h-full rounded-xl border border-borderSoft bg-bgCard p-5 shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="mb-4 border-l-2 border-accentAi pl-4">
                  <p className="mb-1 text-2xl">{tool.emoji}</p>
                  <h3 className="font-serif text-2xl">{tool.title}</h3>
                </div>
                <p className="text-textSecondary">{tool.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {tool.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-tagBg px-3 py-1 font-mono text-xs text-accentAi transition-transform hover:scale-105"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            </FadeInOnScroll>
          ))}
        </div>

        <FadeInOnScroll className="mt-12">
          <h3 className="mb-4 font-serif text-2xl">Automation Workflows</h3>
          <ul className="space-y-2 text-textSecondary">
            {workflowPlaceholders.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
