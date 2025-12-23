import React, { useState, useEffect } from "react";
import "../../styles/components/landing/_GreetingWriter.scss";

const GREETINGS = [
  "Hello World, my name is",
  "Salut Monde, je m'appelle",
  "Hola Mundo, mi nombre es",
  "Hallo Welt, mein Name ist",
  "Ciao Mondo, mi chiamo",
  "こんにちは世界、私の名前は",
];
const SPEED = 200;

export default function GreetingWriter() {
  const [displayedText, setDisplayedText] = useState("");
  const [currentGreetingIndex, setCurrentGreetingIndex] = useState(0);

  useEffect(() => {
    let index = 0;
    const pause = 5;
    const currentGreeting = GREETINGS[currentGreetingIndex];

    const typingInterval = setInterval(() => {
      if (index < currentGreeting.length + pause) {
        setDisplayedText(currentGreeting.slice(0, ++index));
      } else {
        setDisplayedText("");
        setCurrentGreetingIndex(
          (prevIndex) => (prevIndex + 1) % GREETINGS.length
        );
      }
    }, SPEED);

    return () => clearInterval(typingInterval);
  }, [currentGreetingIndex]);

  return (
    <h2 className="GreetingWriter">
      <span>{displayedText}</span>
      <span className="blink">|</span>
    </h2>
  );
}
