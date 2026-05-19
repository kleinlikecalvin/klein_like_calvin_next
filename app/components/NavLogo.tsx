import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";

// TODO: Resolve animation on navigation

export default function NavLogo() {
  const { resolvedTheme } = useTheme();
  const logoRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (logoRef.current) {
      const curr = logoRef.current;

      if (resolvedTheme === "dark") {
        curr.classList.add("scale-x-[-1]");
      } else {
        curr.classList.remove("scale-x-[-1]");
      }
    }
  }, [resolvedTheme]);

  return (
    <a
      ref={logoRef}
      href="/"
      className="pseudo-logo font-headers scale m-0 w-fit text-xl transition-transform duration-300 ease-in-out lg:text-3xl"
      aria-label="Navigates to home page."
    >
      N. Klein
    </a>
  );
}
