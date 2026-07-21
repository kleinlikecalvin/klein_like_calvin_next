import { ReactNode } from "react";

// TODO: might need to refactor for consistent effect on mobile. Thinking that scale and hover should just be default on mobile.

export default function MultiColorContainer({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="MultiColorContainer border-one multi-color-container bg-accent-one my-0 rounded-[60px] max-lg:shadow-[0_0_0_9px_var(--color-accent-one)] lg:my-10 lg:hover:shadow-[0_0_0_60px_var(--color-accent-one)]">
      <div className="border-two multi-color-container bg-special-two rounded-[55px] max-lg:shadow-[0_0_0_7px_var(--color-special-two)] lg:hover:shadow-[0_0_0_45px_var(--color-special-two)]">
        <div className="border-three multi-color-container bg-accent-two rounded-[50px] max-lg:shadow-[0_0_0_5px_var(--color-accent-two)] lg:hover:shadow-[0_0_0_30px_var(--color-accent-two)]">
          <div className="border-four multi-color-container bg-special-one rounded-[40px] max-lg:shadow-[0_0_0_3px_var(--color-special-one)] lg:hover:shadow-[0_0_0_15px_var(--color-special-one)]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
