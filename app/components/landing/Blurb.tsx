import MultiColorContainer from "../MultiColorContainer";
import GreetingWriter from "./GreetingWriter";

export default function Blurb() {
  return (
    <MultiColorContainer>
      <section className="Blurb bg-background rounded-[30px] m-0 mx-auto p-half grid gap-5 grid-cols-[1fr_3px_1fr] max-lg:flex max-lg:flex-wrap">
        <div className="greeting-container">
          <GreetingWriter />
          <h3 className="text-5xl">Nikki Klein</h3>
        </div>
        <hr className="w-0.75 h-full bg-special-one m-0 border-none" />
        <p className="about text-foreground">
          I'm a software engineer who loves owning problems end-to-end — from
          architecture and technical design all the way through to the thing
          people actually use. I care about the details that make experiences
          feel right, not just functional. When I'm not building, I'm painting,
          playing drums, learning languages, or watching a great film.
        </p>
      </section>
    </MultiColorContainer>
  );
}
