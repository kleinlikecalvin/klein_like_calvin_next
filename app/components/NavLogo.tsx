"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";

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
      className="pseudo-logo transition-transform ease-in-out duration-300 text-3xl m-0 font-headers scale"
    >
      N. Klein
    </a>
  );
}
