"use client";

import { Link } from "../types/types";
import navData from "../data/NavData";
import { useState } from "react";
import clsx from "clsx";

export default function NavMenu() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  function handleMobileMenuTriggerClick() {
    setShowMobileMenu((prev) => !prev);
  }

  return (
    <div className="NavMenu w-[40%]">
      <button
        className={clsx("mobile-menu-trigger", {
          hidden: !showMobileMenu,
        })}
        data-status={showMobileMenu}
        onClick={handleMobileMenuTriggerClick}
      >
        🍔
      </button>
      <ul
        // TODO: work on mobile menu
        className={clsx(
          "menu flex items-center justify-center gap-2.5 p-0 m-0",
          {
            hidden: showMobileMenu,
          }
        )}
      >
        {navData.map(({ id, link, displayValue }: Link) => {
          return (
            <li
              key={id}
              className="link-item transition-transform duration-300 ease-in-out p-2.5 hover:scale-[1.1]"
            >
              <a href={link} className="link text-background">
                {displayValue}
              </a>
            </li>
          );
        })}
        <button
          className={clsx("close", {
            hidden: !showMobileMenu,
          })}
          onClick={() => setShowMobileMenu(false)}
        >
          X
        </button>
      </ul>
    </div>
  );
}
