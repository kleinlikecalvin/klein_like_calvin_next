import { contactInfoData } from "../../data/landing/contact_info";
import MultiColorContainer from "../MultiColorContainer";

export default function Contact() {
  // TODO: figure out styling, The HR was bugging me but I also don't like the header free floating by itself
  return (
    <MultiColorContainer>
      <section className="Contact multi-color-child">
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
