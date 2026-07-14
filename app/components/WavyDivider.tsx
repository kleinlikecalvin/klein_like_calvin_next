import clsx from "clsx";

export default function WavyDivider({ color }: { color?: string }) {
  return (
    <div className="WavyDivider w-full overflow-hidden">
      <svg
        className={clsx("h-8", color || "text-special-one")}
        viewBox="0 0 700 12"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M0 6 Q5 0 10 6 T20 6 T30 6 T40 6 T50 6 T60 6 T70 6 T80 6 T90 6 T100 6 T110 6 T120 6 T130 6 T140 6 T150 6 T160 6 T170 6 T180 6 T190 6 T200 6 T210 6 T220 6 T230 6 T240 6 T250 6 T260 6 T270 6 T280 6 T290 6 T300 6 T310 6 T320 6 T330 6 T340 6 T350 6 T360 6 T370 6 T380 6 T390 6 T400 6 T410 6 T420 6 T430 6 T440 6 T450 6 T460 6 T470 6 T480 6 T490 6 T500 6 T510 6 T520 6 T530 6 T540 6 T550 6 T560 6 T570 6 T580 6 T590 6 T600 6 T610 6 T620 6 T630 6 T640 6 T650 6 T660 6 T670 6 T680 6 T690 6 T700 6"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}
