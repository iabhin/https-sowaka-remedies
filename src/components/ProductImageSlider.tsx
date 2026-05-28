"use client";

import { useState } from "react";
import Image from "next/image";

interface ProductImageSliderProps {
  images: string[];
  alt: string;
}

export default function ProductImageSlider({
  images,
  alt,
}: ProductImageSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const hasMultiple = images.length > 1;

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-sage/20 bg-white shadow-sm">
      <div className="relative aspect-square">
        <Image
          src={images[activeIndex]}
          alt={`${alt} image ${activeIndex + 1}`}
          width={700}
          height={700}
          className="h-full w-full object-cover"
          priority
        />

        {hasMultiple && (
          <>
            <button
              type="button"
              onClick={goToPrevious}
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/85 p-2 text-forest shadow-md transition hover:bg-white"
              aria-label="Previous image"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              type="button"
              onClick={goToNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/85 p-2 text-forest shadow-md transition hover:bg-white"
              aria-label="Next image"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </>
        )}
      </div>

      {hasMultiple && (
        <div className="flex items-center justify-center gap-2 p-4">
          {images.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 w-2.5 rounded-full transition ${
                activeIndex === index ? "bg-gold" : "bg-sage/40 hover:bg-sage/70"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
