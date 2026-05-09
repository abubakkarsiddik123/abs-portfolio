"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import SplitType from "split-type";
import { useMagnetic } from "@/hooks/useMagnetic";
import { useParallax } from "@/hooks/useParallax";
import dynamic from "next/dynamic";
import Image from "next/image";

const Orb = dynamic(() => import("@/components/Orb"), { ssr: false });

export default function Hero() {



  const headingRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const magneticBtn1 = useMagnetic();
  const magneticBtn2 = useMagnetic();
  const parallaxRef = useParallax(0.05);
useEffect(() => {
  if (!headingRef.current) return;

  const el = headingRef.current;

  const split = new SplitType(el, {
    types: "words, chars",
  });

  const chars = split.chars || [];

  gsap.set(chars, {
    opacity: 0,
  });

  const anim = gsap.to(chars, {
    opacity: 1,
    stagger: 0.05,
    duration: 0.01,
    ease: "none",
  });

  return () => {
    anim.kill();
    split.revert();
  };
}, []);
  return (
    <section
      id="home"
      ref={containerRef}
      className="
        relative
        min-h-screen
        flex
        items-center
        pt-24
        overflow-hidden
        px-margin-mobile
        md:px-gutter
      "
    >
      <div
        className="
          max-w-container-max
          mx-auto
          w-full
          grid
          grid-cols-1
          md:grid-cols-12
          items-center
          gap-12
        "
      >
        {/* LEFT CONTENT */}
        <div className="md:col-span-7 z-10">
<motion.h1
  initial={{ opacity: 0, y: 50 }}
  animate={{
    opacity: 1,
    y: [0, -10, 0],
  }}
  transition={{
    duration: 2,
    ease: "easeInOut",
    repeat: Infinity,
    repeatType: "mirror",
  }}
  className="
     font-Outfit  
     antialiased tracking-tight
    font-display
    text-[56px]
    sm:text-[72px]
    md:text-[88px]
    leading-[0.9]
    font-black
    text-transparent
    bg-clip-text
    bg-gradient-to-r
    from-[#00F5FF]
    via-[#8B5CF6]
    to-[#FF00FF]
  "
>
  Hi, <br /> I'm Abu Bakkar Siddik.
</motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="
              text-[18px]
              text-on-surface-variant
              max-w-xl
              mb-10
              pt-4
              leading-relaxed
            "
          >
            Frontend Developer focused on building modern, responsive, and interactive web experiences with React and Next.js.
          </motion.p>

          <div className="flex flex-wrap gap-5">
            <div ref={magneticBtn1}>
              <button
                className="
                  interactive
                  bg-[#FF00FF]
                  text-white
                  text-[12px]
                  px-4
                  py-2
                  lg:px-8
                  lg:py-4
                  rounded-2xl
                  hover:scale-105
                  transition-all
                  uppercase
                  tracking-[0.2em]
                  relative
                  overflow-hidden
                  group
                  shadow-[0_0_40px_rgba(255,0,255,0.5)]
                "
              >
                <span className="relative z-10">
                  INITIALIZE_STREAM
                </span>

                <div
                  className="
                    absolute
                    inset-0
                    bg-white/20
                    translate-y-full
                    group-hover:translate-y-0
                    transition-transform
                    duration-300
                  "
                />
              </button>
            </div>

            <div ref={magneticBtn2}>
              <button
                className="
                  interactive
                  border
                  border-[#00F5FF]
                  text-[#00F5FF]
                  text-[12px]
                  px-4
                  py-2
                  lg:px-8
                  lg:py-4
                  rounded-2xl
                  hover:bg-[#00F5FF]/10
                  hover:scale-105
                  transition-all
                  uppercase
                  tracking-[0.2em]
                  shadow-[0_0_30px_rgba(0,245,255,0.3)]
                "
              >
                VIEW_CORE
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE SHOWCASE */}
        <div
          ref={parallaxRef}
          className="
            md:col-span-5
            relative
            h-[500px]
            flex
            items-center
            justify-center
          "
        >
          {/* AMBIENT BACKGROUND GLOWS */}
          <div className="absolute w-[450px] h-[450px] bg-[#00F5FF]/15 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute w-[300px] h-[300px] bg-[#FF00FF]/10 blur-[100px] rounded-full bottom-0 right-0" />

          {/* ROTATING OUTER RING */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              w-[400px]
              h-[400px]
              rounded-full
              border
              border-dashed
              border-[#00F5FF]/30
              z-0
            "
          />

          {/* PROFILE IMAGE */}
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              relative
              w-[340px]
              h-[340px]
              rounded-full
              overflow-hidden
              border-4
              border-[#0B1120]
              shadow-[0_0_100px_rgba(0,245,255,0.4)]
              z-10
              group
            "
          >
            <Image
              src="/profile.png"
              alt="Profile"
              fill
              priority
              className="
                object-cover
                object-[center_30%]
                scale-110
                group-hover:scale-125
                transition-transform
                duration-700
              "
            />

            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#00F5FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </motion.div>

          {/* FLOATING ELEMENTS */}
          <div className="absolute top-10 right-0 w-4 h-4 rounded-full bg-[#FF00FF] blur-[2px] animate-ping" />
          <div className="absolute bottom-10 left-0 w-3 h-3 rounded-full bg-[#00F5FF] blur-[2px] animate-bounce" />
          <div className="absolute top-1/2 left-[-20px] w-2 h-2 rounded-full bg-white blur-[1px] opacity-30" />
        </div>
      </div>
    </section>
  );
}


