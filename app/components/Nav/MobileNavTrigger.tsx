import { Menu, X } from "lucide-react";

export default function MobileNavTrigger({
  showMobileMenu,
  onClick,
}: {
  showMobileMenu: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className="mobile-menu-trigger px-0 lg:hidden"
      aria-label={showMobileMenu ? "Open Menu." : "Close Menu."}
      onClick={onClick}
    >
      {showMobileMenu ? <X /> : <Menu />}
    </button>
  );
}
