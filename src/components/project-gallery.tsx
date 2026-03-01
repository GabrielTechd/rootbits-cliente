"use client";

import { useState, useCallback } from "react";
import Image from "next/image";

type ProjectGalleryProps = {
  images: string[];
  title: string;
};

function isBase64(src: string) {
  return src.startsWith("data:");
}

export function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const [index, setIndex] = useState(0);
  const total = images.length;
  const hasMultiple = total > 1;

  const goPrev = useCallback(() => {
    setIndex((i) => (i <= 0 ? total - 1 : i - 1));
  }, [total]);

  const goNext = useCallback(() => {
    setIndex((i) => (i >= total - 1 ? 0 : i + 1));
  }, [total]);

  if (total === 0) {
    return (
      <div className="flex aspect-video w-full items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-neutral-500">
        Sem imagem
      </div>
    );
  }

  const src = images[index];

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-xl">
      <div className="relative aspect-video w-full">
        {isBase64(src) ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt={`${title} ${index + 1}`}
            className="h-full w-full object-cover"
          />
        ) : (
          <Image
            src={src}
            alt={`${title} ${index + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 896px"
            priority={index === 0}
          />
        )}

        {hasMultiple && (
          <>
            <button
              type="button"
              onClick={goPrev}
              className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white shadow-lg backdrop-blur-sm transition-colors hover:bg-black/70 hover:border-white/40"
              aria-label="Imagem anterior"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={goNext}
              className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white shadow-lg backdrop-blur-sm transition-colors hover:bg-black/70 hover:border-white/40"
              aria-label="Próxima imagem"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5 rounded-full bg-black/50 px-3 py-1.5 backdrop-blur-sm">
              {images.map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 w-1.5 rounded-full transition-colors ${
                    i === index ? "bg-white" : "bg-white/40"
                  }`}
                  aria-hidden
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
