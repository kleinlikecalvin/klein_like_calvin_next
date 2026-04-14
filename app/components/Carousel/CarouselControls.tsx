export default function CarouselControls({
  prev,
  next,
}: {
  prev: () => void;
  next: () => void;
}) {
  return (
    <div className="CarouselControls absolute top-0 h-full w-full flex items-center justify-between pointer-events-none px-4">
      <button
        onClick={prev}
        className="pointer-events-auto bg-accent-two/50 text-accent-two px-3 py-1 rounded focus:ring"
        aria-label="Previous slide"
      >
        ‹
      </button>

      <button
        onClick={next}
        className="pointer-events-auto bg-accent-two/50 text-accent-two px-3 py-1 rounded focus:ring"
        aria-label="Next slide"
      >
        ›
      </button>
    </div>
  );
}
