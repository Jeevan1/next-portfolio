"use client";
import { useState, useEffect } from "react";

export default function AnimatedText({
  text = "",
  speed = 100,
}: {
  text: string;
  speed: number;
}) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => {
        if (index >= text.length) {
          clearInterval(interval);
          return prev;
        }
        const next = text.slice(0, index + 1);
        index++;
        return next;
      });
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <>
      {displayedText.split("").map((char, index) => (
        <b
          key={index}
          className="opacity-0 animate-fade-in font-semibold"
          style={{ animationDelay: `${index * 0.05}s` }}
        >
          {char}
        </b>
      ))}
    </>
  );
}
