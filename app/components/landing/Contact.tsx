import { contactInfoData } from "../../data/landing/contact_info";
import MultiColorContainer from "../MultiColorContainer";

export default function Contact() {
  return (
    <MultiColorContainer>
      <section className="Contact multi-color-child flex flex-col items-center justify-evenly gap-5 lg:flex-row">
        <h2>Follow me</h2>
        <div className="links-container flex flex-col items-center justify-center gap-5 p-5 text-center lg:flex-row">
          {contactInfoData.map((obj) => {
            return (
              <a
                href={obj.url}
                className="button-link scale w-37.5 font-bold"
                target="_blank"
                rel="noreferrer noopener"
                key={obj.displayValue}
              >
                {obj.displayValue}
              </a>
            );
          })}
        </div>
      </section>
    </MultiColorContainer>
  );
}
