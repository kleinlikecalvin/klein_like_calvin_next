"use client";

import { Link } from "../types/types";
import navData from "../data/NavData";
import { useState } from "react";

export default function NavMenu() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  function handleMobileMenuTriggerClick() {
    setShowMobileMenu((prev) => !prev);
  }

  return (
    <div className="NavMenu">
      <button
        className="mobile-menu-trigger"
        data-status={showMobileMenu}
        onClick={handleMobileMenuTriggerClick}
      >
        🍔
      </button>
      <ul className={`menu ${showMobileMenu ? "small-screens" : "desktop"}`}>
        {navData.map(({ id, link, displayValue }: Link) => {
          return (
            <li key={id} className="link-item">
              <a href={link} className="link">
                {displayValue}
              </a>
            </li>
          );
        })}
        <button className="close" onClick={() => setShowMobileMenu(false)}>
          X
        </button>
      </ul>
    </div>
  );
}
