"use client";

import { useEffect, useState } from "react";

export default function TypewriterEffect({
  text,
  speed = 85,
}: {
  text: string;
  speed?: number;
}) {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setDisplay(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span>
      {display}
      <span className="ml-1 inline-block h-[1em] w-[2px] animate-blink bg-textPrimary align-middle" />
    </span>
  );
}
