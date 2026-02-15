"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import FadeInOnScroll from "@/components/FadeInOnScroll";
import { dailyAiStack } from "@/lib/data";
import { tools } from "@/lib/tools";

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
          <a
            href="https://github.com/smrjain6-ui"
            target="_blank"
            rel="noreferrer"
            className="mb-10 inline-block text-sm font-medium text-accent link-underline"
          >
            Check out my GitHub profile →
          </a>
        </FadeInOnScroll>

        <div className="grid gap-6 md:grid-cols-2">
          {tools.map((tool) => {
            const previewImage = tool.images?.[0] ?? "/sameer-illustration.png";
            const safeTags = tool.tags ?? [];
            return (
              <FadeInOnScroll key={tool.title}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="h-full rounded-xl border border-borderSoft bg-bgCard p-5 shadow-sm transition-shadow hover:shadow-lg"
                >
                  <Link href={`/tools/${tool.slug}`} className="block">
                    <div className="mb-4 overflow-hidden rounded-lg border border-borderSoft">
                      <Image
                        src={previewImage}
                        alt={`${tool.title} preview`}
                        width={1200}
                        height={700}
                        className="h-44 w-full object-cover transition duration-300 hover:scale-[1.02]"
                      />
                    </div>
                    <div className="mb-4 border-l-2 border-accentAi pl-4">
                      <p className="mb-1 text-2xl">{tool.emoji}</p>
                      <h3 className="font-serif text-2xl">{tool.title}</h3>
                    </div>
                    <p className="text-textSecondary">{tool.preview}</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {safeTags.map((tag: string) => (
                        <span
                          key={tag}
                          className="rounded-full bg-tagBg px-3 py-1 font-mono text-xs text-accentAi transition-transform hover:scale-105"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="mt-5 text-sm font-medium text-accent">Open full build story →</p>
                  </Link>
                </motion.div>
              </FadeInOnScroll>
            );
          })}
        </div>

        <FadeInOnScroll className="mt-12">
          <h3 className="mb-4 font-serif text-2xl">Automation Workflows</h3>
          <div className="max-w-3xl overflow-hidden rounded-xl border border-borderSoft bg-bgCard shadow-sm">
            <div className="grid gap-0 md:grid-cols-[1.2fr_1fr]">
              <div className="p-5">
                <p className="mb-2 text-sm font-medium text-accentAi">n8n Workflow Playbook</p>
                <h4 className="mb-3 font-serif text-2xl text-textPrimary">Google Suite + X Insights Workflows</h4>
                <p className="text-sm leading-7 text-textSecondary">
                  Two workflows documented end-to-end: a personal Google Suite assistant and a high-engagement tweets
                  collector that auto-saves results to Google Sheets.
                </p>
                <Link href="/workflows/n8n" className="link-underline mt-4 inline-block text-sm font-medium text-accent">
                  Open detailed workflow page →
                </Link>
              </div>
              <Link href="/workflows/n8n" className="block border-t border-borderSoft md:border-l md:border-t-0">
                <Image
                  src="/workflows/n8n/page-1.png"
                  alt="n8n workflow document preview"
                  width={1224}
                  height={1584}
                  className="h-full w-full object-cover"
                />
              </Link>
            </div>
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll className="mt-12">
          <h3 className="mb-4 font-serif text-2xl">Daily AI Stack</h3>
          <p className="mb-6 max-w-3xl text-sm leading-7 text-textSecondary">
            AI tools I use daily and the exact jobs I rely on them for.
          </p>
          <div className="grid gap-3 md:grid-cols-2">
            {dailyAiStack.map((item) => (
              <div key={item.tool} className="rounded-xl border border-borderSoft bg-bgCard p-4">
                <p className="font-mono text-xs text-[#1f3a8a]">{item.tool}</p>
                <p className="mt-2 text-sm leading-7 text-textSecondary">{item.purpose}</p>
              </div>
            ))}
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
