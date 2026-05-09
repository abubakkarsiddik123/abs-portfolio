"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function useParallax(speed: number = 0.1, axis: "x" | "y" | "both" = "both") {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX - window.innerWidth / 2) * speed;
      const y = (clientY - window.innerHeight / 2) * speed;

      gsap.to(element, {
        x: axis === "x" || axis === "both" ? x : 0,
        y: axis === "y" || axis === "both" ? y : 0,
        duration: 1,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [speed, axis]);

  return ref;
}
