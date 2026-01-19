import MultiColorContainer from "../MultiColorContainer";
import GreetingWriter from "./GreetingWriter";

export default function Blurb() {
  return (
    <MultiColorContainer>
      <section className="Blurb bg-background rounded-[30px] m-0 mx-auto p-5 grid gap-5 grid-cols-[1fr_3px_1fr] max-lg:flex max-lg:flex-wrap">
        <div className="greeting-container">
          <GreetingWriter />
          <h3 className="text-5xl">Nikki Klein</h3>
        </div>
        <hr className="w-0.75 h-full bg-special-one m-0 border-none" />
        <p className="about text-foreground">
          I’m a software engineer who builds pixel-perfect interfaces and
          thoughtful, maintainable software. I enjoy solving complex problems
          with clean, elegant solutions. When I’m not coding, I’m exploring new
          languages, painting, playing drums, or watching a great film.
        </p>
      </section>
    </MultiColorContainer>
  );
}
