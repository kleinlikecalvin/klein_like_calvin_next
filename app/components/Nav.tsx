"use client";

import NavMenu from "./NavMenu";
import DisplayModeToggle from "./DisplayModeToggle";
import NavLogo from "./NavLogo";
import MobileNavTrigger from "./MobileNavTrigger";
import { useState } from "react";

// TODO: handle mobile - no hover, slightly different color background, maybe a transition so it's smoother, need more margin underneath on the page to make space for multicolor, inconsistent padding around the edges, maybe just a little too tall still

export default function Nav() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <nav className="Nav bg-special-one text-background fixed top-0 right-0 left-0 z-10 shadow-[0_0_50px_10px_var(--color-special-one)] transition-transform duration-300 ease-in-out">
      <div className="py-half px-quarter lg:px-full flex justify-between lg:items-center">
        <NavLogo />
        <MobileNavTrigger
          showMobileMenu={showMobileMenu}
          onClick={() => setShowMobileMenu((prev) => !prev)}
        />
        {!showMobileMenu && <NavMenu classes="hidden" />}
        <DisplayModeToggle />
      </div>
      {showMobileMenu && <NavMenu classes="flex bg-special-two" />}
    </nav>
  );
}
