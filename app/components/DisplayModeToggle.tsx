import clsx from "clsx";
import { useTheme } from "next-themes";

export default function DisplayModeToggle() {
  const { setTheme, theme } = useTheme();

  function handleDisplayModeToggleClick() {
    if (theme === "light") {
      setTheme("dark");
      return;
    }

    if (theme === "dark") {
      setTheme("light");
      return;
    }

    setTheme("system");
  }

  // TODO: resolve bug where the toggle is in the wrong position when the user refreshes the page because we aren't using state or anything to determine the CSS
  return (
    <div className="DisplayModeToggle flex items-center [&>p]:p-2.5">
      <p>light</p>
      <label className="relative inline-block w-12.5 h-6.5">
        <input
          className="toggle peer w-full h-full"
          type="checkbox"
          defaultValue={theme}
          onClick={handleDisplayModeToggleClick}
        />
        <span
          className={clsx(
            "toggle-container absolute cursor-pointer top-0 left-0 right-0 bottom-0 rounded-[34px] bg-background duration-300 before:absolute before:content-[''] before:h-5 before:w-5 before:bg-special-two before:rounded-full before:left-0.75 before:bottom-0.75 before:translate-x-0 peer-checked:before:translate-x-6 before:transition-transform",
            {
              "text-green-300": theme === "dark",
            },
          )}
        ></span>
      </label>
      <p>dark</p>
    </div>
  );
}
