"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { ReactNode, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new (require("lenis").default)({
      lerp: 0.08,
      duration: 1.2,
      smoothWheel: true,
    });

    lenis.on("scroll", (e: any) => {
      ScrollTrigger.update();
      const progress = e.progress;
      const progressBar = document.getElementById("scroll-progress");
      if (progressBar) {
        progressBar.style.transform = `scaleX(${progress})`;
      }
    });

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(lenis.raf);
      lenis.destroy();
    };
  }, []);

  return (
    <ReactLenis root options={{ lerp: 0.08, duration: 1.2, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}
