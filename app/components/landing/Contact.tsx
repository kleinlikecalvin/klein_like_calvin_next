import "../../styles/components/landing/_Contact.scss";
import { contactInfoData } from "../../data/landing/contact_info.ts";
import MultiColorContainer from "../MultiColorContainer.tsx";

export default function Contact() {
  return (
    <MultiColorContainer>
      <section className="Contact">
        <h3>Let's be friends!</h3>
        <hr />
        <div className="links-container">
          {contactInfoData.map((obj) => {
            return (
              <a
                href={obj.url}
                className="button-link"
                target="_blank"
                rel="noreferrer noopener"
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
