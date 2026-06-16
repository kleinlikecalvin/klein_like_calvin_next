import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CarouselControls({
  prev,
  next,
}: {
  prev: () => void;
  next: () => void;
}) {
  return (
    <div className="CarouselControls pointer-events-none absolute top-0 flex h-full w-full items-center justify-between border px-4">
      <button
        onClick={prev}
        className="bg-accent-two/50 text-accent-two pointer-events-auto rounded px-3 py-1 focus:ring"
        aria-label="Previous slide"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={next}
        className="bg-accent-two/50 text-accent-two pointer-events-auto rounded px-3 py-1 focus:ring"
        aria-label="Next slide"
      >
        <ChevronRight />
      </button>
    </div>
  );
}
