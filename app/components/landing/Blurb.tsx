import MultiColorContainer from "../MultiColorContainer";
import GreetingWriter from "./GreetingWriter";

export default function Blurb() {
  return (
    <MultiColorContainer>
      <section className="Blurb multi-color-child m-0 mx-auto grid items-center gap-5 max-lg:grid-rows-[0.5fr_3px_1fr] lg:grid-cols-[1fr_3px_1fr]">
        <GreetingWriter />
        <hr className="bg-special-one m-0 h-0.75 w-full border-none lg:h-full lg:w-0.75" />
        <p className="about text-foreground">
          I'm a software engineer who loves owning problems end-to-end — from
          architecture and technical design all the way through to the UI people
          actually use. I care about the details that make experiences feel
          right, not just functional. When I'm not building, I'm painting,
          playing drums, learning languages, or watching a great film.
        </p>
      </section>
    </MultiColorContainer>
  );
}
