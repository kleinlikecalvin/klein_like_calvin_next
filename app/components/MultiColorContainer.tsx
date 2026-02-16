import { ReactNode } from "react";

export default function MultiColorContainer({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="MultiColorContainer border-one multi-color-container bg-accent-one rounded-[60px] hover:shadow-[0_0_0_60px_var(--color-accent-one)] my-10">
      <div className="border-two multi-color-container bg-special-two rounded-[55px] hover:shadow-[0_0_0_45px_var(--color-special-two)]">
        <div className="border-three multi-color-container bg-accent-two rounded-[50px] hover:shadow-[0_0_0_30px_var(--color-accent-two)]">
          <div className="border-four multi-color-container bg-special-one rounded-[40px] hover:shadow-[0_0_0_15px_var(--color-special-one)]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
