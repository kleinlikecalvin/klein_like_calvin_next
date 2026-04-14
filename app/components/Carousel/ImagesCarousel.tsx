"use client";

import { useRef, useState, KeyboardEvent } from "react";
import CarouselDots from "./CarouselDots";
import CarouselItems from "./CarouselItems";
import CarouselControls from "./CarouselControls";
import { Image } from "@/app/types/project_types";

type CarouselProps = {
  images: Image[];
  label: string;
};

// TODO: mobile UI, controls together in top right corner

export default function ImagesCarousel({ images, label }: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const length = images.length;
  const containerRef = useRef<HTMLDivElement>(null);
  const goTo = (index: number) => setCurrent(index);
  const next = () => setCurrent((prev) => (prev + 1) % length);
  const prev = () => setCurrent((prev) => (prev - 1 + length) % length);
  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    switch (e.key) {
      case "ArrowRight":
        e.preventDefault();
        next();
        break;
      case "ArrowLeft":
        e.preventDefault();
        prev();
        break;
      case "Home":
        e.preventDefault();
        goTo(0);
        break;
      case "End":
        e.preventDefault();
        goTo(length - 1);
        break;
    }
  };

  return (
    <div
      ref={containerRef}
      className="ImagesCarousel relative mx-auto overflow-hidden"
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      {/* Live region for announcements */}
      <div className="sr-only" aria-live="polite">
        {`Slide ${current + 1} of ${length}`}
      </div>

      <CarouselItems current={current} images={images} />

      <CarouselControls prev={prev} next={next} />

      <CarouselDots current={current} images={images} goTo={goTo} />
    </div>
  );
}
