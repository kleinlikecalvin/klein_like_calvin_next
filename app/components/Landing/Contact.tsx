import Link from "next/link";
import { contactInfoData } from "../../data/landing/contact_info";
import MultiColorContainer from "../MultiColorContainer";

export default function Contact() {
  return (
    <MultiColorContainer>
      <section className="Contact multi-color-child flex flex-col items-center justify-evenly gap-5 lg:flex-row">
        <h2>I've got links.</h2>
        <div className="links-container flex flex-col items-center justify-center gap-5 p-5 text-center lg:flex-row">
          {contactInfoData.map((obj) => {
            return (
              <Link
                href={obj.url}
                className="scale w-37.5"
                target="_blank"
                rel="noreferrer noopener"
                key={obj.displayValue}
                aria-label="Opens in a new tab."
              >
                {obj.displayValue}
              </Link>
            );
          })}
        </div>
      </section>
    </MultiColorContainer>
  );
}
