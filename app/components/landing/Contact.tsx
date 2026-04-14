import { contactInfoData } from "../../data/landing/contact_info";
import MultiColorContainer from "../MultiColorContainer";

export default function Contact() {
  return (
    <MultiColorContainer>
      <section className="Contact multi-color-child flex items-center justify-evenly gap-5">
        <h2>Follow me</h2>
        <div className="links-container flex justify-center items-center gap-5 p-5 text-center">
          {contactInfoData.map((obj) => {
            return (
              <a
                href={obj.url}
                className="button-link w-37.5 scale"
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
