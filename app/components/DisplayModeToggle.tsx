import clsx from "clsx";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useRef, useEffect } from "react";

// TODO: Resolve animation on navigation

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

  return (
    <div className="DisplayModeToggle flex items-center">
      <Sun className="mr-1" />
      <label className="relative inline-block h-6.5 w-12.5">
        <input
          className="toggle peer h-full w-full"
          type="checkbox"
          onClick={() =>
            resolvedTheme === "light" ? setTheme("dark") : setTheme("light")
          }
        />
        <span
          ref={toggleRef}
          className={clsx(
            "toggle-container bg-background before:bg-special-two absolute top-0 right-0 bottom-0 left-0 cursor-pointer rounded-[34px] duration-300 before:absolute before:bottom-0.75 before:left-0.75 before:h-5 before:w-5 before:translate-x-0 before:rounded-full before:transition-transform before:content-['']"
          )}
        ></span>
      </label>
      <Moon className="ml-1" />
    </div>
  );
}
