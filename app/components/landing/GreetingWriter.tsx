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
          (prevIndex) => (prevIndex + 1) % greetings.length,
        );
      }
    }, SPEED);

    return () => clearInterval(typingInterval);
  }, [currentGreetingIndex]);

  return (
    <span className="GreetingWriter block">
      <span>{displayedText}</span>
      <span className="blink">|</span>
    </span>
  );
}
