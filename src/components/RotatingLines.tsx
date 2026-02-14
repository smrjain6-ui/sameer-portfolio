"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function RotatingLines({
  lines,
  intervalMs = 2300,
}: {
  lines: string[];
  intervalMs?: number;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % lines.length);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [intervalMs, lines.length]);

  return (
    <div className="mb-7 min-h-[76px] rounded-2xl border border-borderSoft bg-bgCard px-5 py-4 shadow-sm md:min-h-[94px]">
      <AnimatePresence mode="wait">
        <motion.p
          key={lines[index]}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="font-serif text-2xl leading-snug text-textPrimary md:text-[2rem]"
        >
          {lines[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
