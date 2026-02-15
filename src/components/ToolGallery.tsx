"use client";

import Image from "next/image";
import { useState } from "react";

type ToolGalleryProps = {
  images: string[];
  title: string;
};

export default function ToolGallery({ images, title }: ToolGalleryProps) {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2">
        {images.map((img, idx) => (
          <button
            key={img}
            type="button"
            onClick={() => setActiveImage(img)}
            className="group block overflow-hidden rounded-xl border border-borderSoft bg-[#f7f7f5] text-left"
            aria-label={`Open ${title} screenshot ${idx + 1}`}
          >
            <Image
              src={img}
              alt={`${title} screenshot ${idx + 1}`}
              width={1600}
              height={900}
              className="h-56 w-full object-contain transition duration-300 group-hover:scale-[1.02] md:h-64"
            />
          </button>
        ))}
      </div>

      {activeImage ? (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/80 p-4"
          onClick={() => setActiveImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-6xl" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              onClick={() => setActiveImage(null)}
              className="absolute right-2 top-2 z-10 rounded bg-black/65 px-3 py-1 text-sm text-white"
            >
              Close
            </button>
            <div className="overflow-hidden rounded-xl border border-white/20 bg-black">
              <Image
                src={activeImage}
                alt={`${title} full screenshot`}
                width={2000}
                height={1200}
                className="max-h-[82vh] w-full object-contain"
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
