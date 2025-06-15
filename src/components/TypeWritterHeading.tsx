"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const TypewriterHeading = () => {
  const textRef = useRef<HTMLHeadingElement>(null);
  const text = "Publishing Excellence, Inspiring Progress";

  useEffect(() => {
    if (!textRef.current) return;

    const createTypewriterEffect = () => {
      const chars = text.split("");
      textRef.current!.innerHTML = "";

      // Create spans for each character
      chars.forEach((char) => {
        const span = document.createElement("span");
        span.textContent = char;
        span.style.opacity = "0";
        textRef.current!.appendChild(span);
      });

      // Create GSAP timeline for infinite animation
      const tl = gsap.timeline({ repeat: -1 });

      // Type in animation
      tl.to(Array.from(textRef.current!.children), {
        opacity: 1,
        duration: 0.02,
        stagger: 0.05,
        ease: "none",
      })
        // Wait for 3 seconds
        .to({}, { duration: 3 })
        // Type out animation (fade out)
        .to(Array.from(textRef.current!.children), {
          opacity: 0,
          duration: 0.01,
          stagger: 0.02,
          ease: "none",
        })
        // Small pause before restarting
        .to({}, { duration: 0.5 });

      return tl;
    };

    const timeline = createTypewriterEffect();

    // Cleanup function
    return () => {
      timeline.kill();
    };
  }, [text]);

  return (
    <h1
      ref={textRef}
      className="text-center md:text-start text-3xl md:text-6xl font-bold pr-0 md:pr-8 heading-color"
      style={{ whiteSpace: "pre-wrap" }}
    ></h1>
  );
};

export default TypewriterHeading;
