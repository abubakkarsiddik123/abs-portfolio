"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    text: "The integration of DEV_CORE into our workflow was like adding a second brain to the team.",
    name: "DIRECTOR_VON_NEUMANN",
    role: "CYBERDYNE_SYSTEMS",
  },
  {
    text: "Clean UI, smooth performance and futuristic design approach. Highly impressive work.",
    name: "CLIENT_ALPHA",
    role: "TECH_STUDIO",
  },
  {
    text: "The animations and structure feel like a high-end product, not just a portfolio.",
    name: "LEAD_ENGINEER_X",
    role: "INNOVATION_LAB",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 md:py-24 overflow-hidden relative"
    >
      {/* TITLE */}
      <h2 className="text-center mb-4 text-2xl sm:text-3xl md:text-4xl font-bold mb-12 text-white">
        TESTIMONIALS
      </h2>

      {/* MARQUEE WRAPPER */}
      <div className="overflow-hidden">

        <motion.div
          className="flex gap-6 md:gap-10 w-max will-change-transform"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >

          {[...testimonials, ...testimonials].map((item, i) => (
            <div
              key={i}
              className="
                min-w-[260px] sm:min-w-[340px] md:min-w-[420px]
                p-6 md:p-8
                mt-2
                rounded-2xl md:rounded-3xl
                bg-white/5
                backdrop-blur-md md:backdrop-blur-xl
                border border-white/10
                transition-all duration-500
                hover:border-[#FF00FF]/30
                hover:-translate-y-1
                hover:scale-[1.02]
              "
            >
              <p className="text-sm sm:text-base md:text-lg italic text-white/80 leading-relaxed mb-6 md:mb-8">
                “{item.text}”
              </p>

              <div>
                <div className="text-xs sm:text-sm text-white font-bold tracking-widest">
                  {item.name}
                </div>
                <div className="text-[10px] sm:text-xs text-white/50 tracking-widest">
                  {item.role}
                </div>
              </div>

            </div>
          ))}

        </motion.div>

      </div>
    </section>
  );
}