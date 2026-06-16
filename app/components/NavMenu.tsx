import { Link as LinkType } from "../types/types";
import navData from "../data/NavData";
import Link from "next/link";

export default function NavMenu() {
  return (
    <ul className="NavMenu m-0 flex h-auto w-[40%] items-center justify-center gap-2.5 p-0 max-lg:hidden">
      {navData.map(({ id, link, displayValue }: LinkType) => {
        return (
          <li key={id} className="link-item p-2.5">
            <Link href={link} className="link text-background scale">
              {displayValue}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
