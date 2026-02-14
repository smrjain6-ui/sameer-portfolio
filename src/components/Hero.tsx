"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import TypewriterEffect from "@/components/TypewriterEffect";
import RotatingLines from "@/components/RotatingLines";

const social = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sameer-jain-bb153716a/" },
  { label: "Twitter/X", href: "https://twitter.com/Sameer_jain22" },
  { label: "Email", href: "mailto:smrjain6@gmail.com" },
  { label: "Medium", href: "https://smrjain6.medium.com/" },
];

export default function Hero() {
  const rotatingLines = [
    "I build with AI",
    "I write about growth, startups, investing and business",
    "I love books, and I rarely miss a good sports match",
  ];

  return (
    <section id="home" className="content-wrap grid gap-10 pb-24 pt-32 md:grid-cols-[1fr_320px] md:items-center md:pt-36">
      <div className="order-2 md:order-1">
        <h1 className="mb-6 text-center font-serif text-[2.9rem] leading-[1.05] md:text-left md:text-6xl">
          <TypewriterEffect text="Hi, I'm Sameer Jain." />
        </h1>
        <RotatingLines lines={rotatingLines} />
        <p className="mb-6 max-w-xl text-[1.2rem] leading-relaxed text-textSecondary">
          Growth professional exploring the intersection of strategy, experimentation, and AI.
        </p>
        <p className="max-w-2xl text-[1.05rem] leading-8 text-textSecondary">
          I&apos;ve spent 4+ years driving growth across early-stage startups and enterprises — from 0-1 D2C
          launches at Ten x You to scaling a $100K sports analytics practice at EXL. Previously at CRED and
          Yogami (Founder&apos;s Office). I write about business, build AI tools, and think a lot about what
          makes companies tick.
        </p>
        <p className="mt-7 inline-flex rounded-full border border-borderSoft bg-bgCard px-4 py-1.5 text-sm font-medium text-textPrimary">
          ✨ Open to opportunities
        </p>

        <div className="mt-8 flex flex-wrap gap-5 text-sm text-textSecondary">
          {social.map((item) => (
            <a key={item.label} className="link-underline hover:text-accent" href={item.href} target="_blank" rel="noreferrer">
              {item.label}
            </a>
          ))}
        </div>
      </div>

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="order-1 mx-auto md:order-2"
      >
        <div className="flex flex-col items-center gap-3">
          <Image
            src="/sameer-illustration.png"
            alt="Watercolor portrait of Sameer Jain"
            width={280}
            height={280}
            className="h-[280px] w-[280px] rounded-[20px] border border-borderSoft bg-bgCard object-cover shadow-md"
            priority
          />
          <p className="text-sm italic text-textSecondary">I can be seen smiling like this</p>
        </div>
      </motion.div>
    </section>
  );
}
