import { Link } from "../types/types";
import navData from "../data/NavData";

export default function NavMenu() {
  return (
    <ul className="NavMenu m-0 flex h-auto w-[40%] items-center justify-center gap-2.5 p-0 max-lg:hidden">
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
