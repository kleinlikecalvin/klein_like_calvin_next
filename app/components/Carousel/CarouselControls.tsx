import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CarouselControls({
  prev,
  next,
}: {
  prev: () => void;
  next: () => void;
}) {
  return (
    <div className="CarouselControls pointer-events-none absolute top-3 z-10 flex items-center justify-between max-lg:right-0 max-lg:gap-4 lg:top-0 lg:h-full lg:w-full lg:px-4">
      <button
        onClick={prev}
        className="bg-accent-two/50 text-accent-two pointer-events-auto rounded px-3 py-1 hover:cursor-pointer focus:ring"
        aria-label="Previous slide"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={next}
        className="bg-accent-two/50 text-accent-two pointer-events-auto rounded px-3 py-1 hover:cursor-pointer focus:ring"
        aria-label="Next slide"
      >
        <ChevronRight />
      </button>
    </div>
  );
}
