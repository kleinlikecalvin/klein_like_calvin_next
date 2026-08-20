import { Link as LinkType } from "@/app/types/types";
import navData from "@/app/data/nav_data";
import clsx from "clsx";
import Link from "next/link";

export default function MobileNavMenu({ classes }: { classes?: string }) {
  return (
    <ul
      className={clsx(
        "MobileNavMenu from-main-one to-main-two m-0 flex items-center justify-center gap-2.5 overflow-hidden bg-linear-to-b transition-all duration-300 ease-in-out lg:hidden",
        classes
      )}
    >
      {navData.map(({ id, link, displayValue }: LinkType) => {
        return (
          <li key={id} className="link-item">
            <Link
              href={link}
              className="link text-background bg-transparent underline underline-offset-2"
            >
              {displayValue}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
