import { contactInfoData } from "../../data/landing/contact_info";
import MultiColorContainer from "../MultiColorContainer";

export default function Contact() {
  return (
    <MultiColorContainer>
      <section className="Contact bg-background rounded-[30px] p-half text-center">
        <h2 className="text-[35px] font-black">Let's be friends!</h2>
        <hr className="w-full h-0.75 bg-accent-one" />
        <div className="links-container flex justify-center items-center gap-5 p-5">
          {contactInfoData.map((obj) => {
            return (
              <a
                href={obj.url}
                className="button-link w-37.5"
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
