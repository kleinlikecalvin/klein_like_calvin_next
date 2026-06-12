"use client";

import { useState, useEffect } from "react";
import { greetings } from "@/app/data/landing/greetings";

const SPEED = 200;

export default function GreetingWriter() {
  const [displayedText, setDisplayedText] = useState("");
  const [currentGreetingIndex, setCurrentGreetingIndex] = useState(0);

  useEffect(() => {
    let index = 0;
    const pause = 5;
    const currentGreeting = greetings[currentGreetingIndex];

    const typingInterval = setInterval(() => {
      if (index < currentGreeting.length + pause) {
        setDisplayedText(currentGreeting.slice(0, ++index));
      } else {
        setDisplayedText("");
        setCurrentGreetingIndex(
          (prevIndex) => (prevIndex + 1) % greetings.length
        );
      }
    }, SPEED);

    return () => clearInterval(typingInterval);
  }, [currentGreetingIndex]);

  return (
    <h2 className="GreetingWriter max-md:text-2xl">
      <span>{displayedText}</span>
      <span className="blink">|</span>
      <span className="special block">Nikki Klein</span>
    </h2>
  );
}
