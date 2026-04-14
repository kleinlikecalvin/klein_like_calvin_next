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
    <div className="CarouselDots py-4 w-full flex justify-center gap-2">
      {images.map((_, i) => (
        <button
          key={i}
          onClick={() => goTo(i)}
          className={`h-2 w-2 rounded-full focus:ring ${
            current === i ? "bg-accent-one" : "bg-accent-one/50"
          }`}
          aria-label={`Go to slide ${i + 1}`}
          aria-current={current === i}
        />
      ))}
    </div>
  );
}
