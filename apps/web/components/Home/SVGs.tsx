"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SVGs() {
  const leftArrowRef = useRef<HTMLDivElement>(null);
  const rightArrowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animasi fade out yang sangat smooth dengan ScrollTrigger
    gsap.to([leftArrowRef.current, rightArrowRef.current], {
      opacity: 0,
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "+=20%",
        scrub: 1, // Smooth animation yang mengikuti scroll
        onUpdate: (self) => {
          // Optional: bisa ditambahkan callback untuk debugging
          // console.log("Progress:", self.progress);
        },
      },
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="hidden lg:grid grid-cols-2 w-full">
      <div ref={leftArrowRef}>
        <Image
          src="/arrow-left.svg"
          width={170}
          height={170}
          alt="Preview Porto"
          className="z-0 absolute translate-x-[-40%] top-[200] dark:hidden"
        />
      </div>
      <div ref={rightArrowRef}>
        <Image
          src="/arrow-right.svg"
          width={170}
          height={170}
          alt="Preview Porto"
          className="z-0 absolute -translate-x-[-200%] top-[200] dark:hidden"
        />
      </div>
    </div>
  );
}
