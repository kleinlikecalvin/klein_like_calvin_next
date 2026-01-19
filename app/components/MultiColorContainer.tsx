import { ReactNode } from "react";

export default function MultiColorContainer({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="border-one p-2.5 transition-shadow duration-500 ease-in-out bg-accent-one rounded-[70px] hover:shadow-[0_0_0_10px_var(--color-accent-one)] overflow-hidden">
      <div className="border-two p-2.5 transition-shadow duration-500 ease-in-out bg-special-two rounded-[60px] hover:shadow-[0_0_0_10px_var(--color-special-two)] overflow-hidden">
        <div className="border-three p-2.5 transition-shadow duration-500 ease-in-out bg-accent-two rounded-[50px] hover:shadow-[0_0_0_10px_var(--color-accent-two)] overflow-hidden">
          <div className="border-four p-2.5 transition-shadow duration-500 ease-in-out bg-special-one rounded-[40px] hover:shadow-[0_0_0_10px_var(--color-special-one)] overflow-hidden">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
