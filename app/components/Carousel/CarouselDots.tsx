import { Image } from "@/app/types/project_types";
import { ReactNode } from "react";

export default function CarouselDots({
  current,
  images,
  goTo,
}: {
  current: number;
  images: Image[];
  goTo: (i: number) => void;
}) {
  return (
    <div className="CarouselDots flex w-full gap-4 overflow-y-scroll p-3 lg:justify-center lg:pt-6">
      {images.map((_, i) => (
        <button
          key={i}
          onClick={() => goTo(i)}
          className={`h-3 w-3 rounded-full p-0 focus:ring lg:h-6 lg:w-6 ${
            current === i ? "bg-accent-one" : "bg-accent-one/50"
          }`}
          aria-label={`Go to slide ${i + 1}`}
          aria-current={current === i}
        />
      ))}
    </div>
  );
}
