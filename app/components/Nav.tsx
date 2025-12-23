import NavMenu from "./NavMenu";
import DisplayModeToggle from "./DisplayModeToggle";

export default function Nav({ setIsLightMode }: { setIsLightMode: Function }) {
  return (
    <nav className="Nav fixed top-0 right-0 left-0 p-3 flex justify-between items-center z-10 ">
      <p className="pseudo-logo">N. Klein</p>
      <NavMenu />
      <DisplayModeToggle setIsLightMode={setIsLightMode} />
    </nav>
  );
}
