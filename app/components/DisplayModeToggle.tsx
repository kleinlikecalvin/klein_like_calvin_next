"use client";

import clsx from "clsx";
import { useTheme } from "next-themes";
import { useRef, useEffect } from "react";

export default function DisplayModeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const toggleRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (toggleRef.current && resolvedTheme === "dark") {
      toggleRef.current?.classList.add("before:translate-x-6");
    } else {
      toggleRef.current?.classList.remove("before:translate-x-6");
    }
  }, [resolvedTheme]);

  function handleDisplayModeToggleClick() {
    if (resolvedTheme === "light") {
      setTheme("dark");
      return;
    }

    if (resolvedTheme === "dark") {
      setTheme("light");
      return;
    }

    setTheme("system");
  }

  return (
    <div className="DisplayModeToggle flex items-center [&>p]:p-2.5">
      <p>light</p>
      <label className="relative inline-block w-12.5 h-6.5">
        <input
          className="toggle peer w-full h-full"
          type="checkbox"
          onClick={handleDisplayModeToggleClick}
        />
        <span
          ref={toggleRef}
          className={clsx(
            "toggle-container absolute cursor-pointer top-0 left-0 right-0 bottom-0 rounded-[34px] bg-background duration-300 before:absolute before:content-[''] before:h-5 before:w-5 before:bg-special-two before:rounded-full before:left-0.75 before:translate-x-0 before:bottom-0.75 before:transition-transform",
          )}
        ></span>
      </label>
      <p>dark</p>
    </div>
  );
}
