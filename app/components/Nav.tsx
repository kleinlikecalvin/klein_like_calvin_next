"use client";

import NavMenu from "./NavMenu";
import DisplayModeToggle from "./DisplayModeToggle";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function Nav() {
  const { theme } = useTheme();

  return (
    <nav className="Nav fixed top-0 right-0 left-0 py-half px-full flex justify-between items-center z-10 bg-special-one text-background shadow-[0_0_50px_10px_var(--color-special-one)] transition-transform duration-300 ease-in-out">
      <p
        className={clsx(
          "pseudo-logo transition-transform ease-in-out duration-300 text-3xl m-0 font-headers",
          {
            "scale-x-[-1]": theme === "dark",
          },
        )}
      >
        N. Klein
      </p>
      <NavMenu />
      <DisplayModeToggle />
    </nav>
  );
}
