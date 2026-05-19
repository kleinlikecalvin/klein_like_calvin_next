import { Link } from "../types/types";
import navData from "../data/NavData";
import clsx from "clsx";

export default function NavMenu({ classes }: { classes?: string }) {
  return (
    <ul
      className={clsx(
        "NavMenu m-0 items-center justify-center gap-2.5 p-0 lg:flex lg:h-auto lg:w-[40%]",
        classes
      )}
    >
      {navData.map(({ id, link, displayValue }: Link) => {
        return (
          <li key={id} className="link-item p-2.5">
            <a href={link} className="link text-background scale">
              {displayValue}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
