import Image from "next/image";
import { Image as ImageType } from "@/app/types/project_types";

export default function CarouselItems({
  current,
  images,
}: {
  current: number;
  images: ImageType[];
}) {
  return (
    <div
      className="CarouselItems flex transition-transform duration-500 ease-in-out items-center"
      style={{ transform: `translateX(-${current * 100}%)` }}
    >
      {images.map((image, i) => (
        <div
          key={i}
          className="Item flex w-full h-125 items-center shrink-0 overflow-hidden px-20"
          role="group"
          aria-roledescription="slide"
          aria-label={`Item ${i + 1} of ${images.length}`}
          aria-hidden={current !== i}
        >
          <Image
            src={image.src}
            alt={image.alt}
            height={image.height}
            width={image.width}
            className="mx-auto max-h-full w-auto"
          />
        </div>
      ))}
    </div>
  );
}
