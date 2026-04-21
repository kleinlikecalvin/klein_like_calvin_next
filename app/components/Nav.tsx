import NavMenu from "./NavMenu";
import DisplayModeToggle from "./DisplayModeToggle";
import NavLogo from "./NavLogo";

export default function Nav() {
  return (
    <nav className="Nav fixed top-0 right-0 left-0 py-quarter px-full flex justify-between items-center z-10 bg-special-one text-background shadow-[0_0_50px_10px_var(--color-special-one)] transition-transform duration-300 ease-in-out">
      <NavLogo />
      <NavMenu />
      <DisplayModeToggle />
    </nav>
  );
}
