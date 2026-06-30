"use client";

import NavMenu from "./NavMenu";
import DisplayModeToggle from "./DisplayModeToggle";
import NavLogo from "./NavLogo";
import MobileNavTrigger from "./MobileNavTrigger";
import { useState } from "react";
import MobileNavMenu from "./MobileNavMenu";

export default function Nav() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <nav className="Nav bg-special-one text-background fixed top-0 right-0 left-0 z-10 shadow-[0_0_50px_10px_var(--color-special-one)]">
      <div className="px-half lg:pr-full flex items-center justify-between">
        <NavLogo />
        <MobileNavTrigger
          showMobileMenu={showMobileMenu}
          onClick={() => setShowMobileMenu((prev) => !prev)}
        />
        <NavMenu />
        <DisplayModeToggle />
      </div>
      <MobileNavMenu classes={showMobileMenu ? "max-h-[80px]" : "max-h-0"} />
    </nav>
  );
}
