import MultiColorContainer from "../MultiColorContainer";
import GreetingWriter from "./GreetingWriter";

export default function Blurb() {
  return (
    <MultiColorContainer>
      <section className="Blurb">
        <div className="greeting-container">
          <GreetingWriter />
          <h3>Nikki Klein</h3>
        </div>
        <hr />
        <p className="about">
          I’m a software engineer who loves crafting pixel-perfect interfaces,
          clean code, and elegant solutions. When I’m not coding, you’ll find me
          exploring new languages, painting, playing drums, or diving into a
          good movie.
        </p>
      </section>
    </MultiColorContainer>
  );
}
