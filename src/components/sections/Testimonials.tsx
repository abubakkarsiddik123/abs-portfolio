// "use client";

// import { motion } from "framer-motion";

// export default function Testimonials() {
//   return (
//     <section id="Testimonials" className="py-section-gap px-margin-mobile md:px-gutter overflow-hidden relative">
//       <div className="max-w-4xl mx-auto relative z-10">
//         <motion.div 
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           viewport={{ once: true }}
//           className="text-center"
//         >
//           <span className="material-symbols-outlined text-6xl text-[#FF00FF] mb-8 opacity-50">format_quote</span>
//           <p className="font-headline-md text-[32px] italic leading-relaxed mb-8">
//             "The integration of DEV_CORE into our workflow was like adding a second brain to the team. The fluid architecture approach is revolutionary."
//           </p>
//           <div className="flex items-center justify-center gap-4">
//             <div className="w-12 h-12 rounded-full cyber-acid-gradient p-0.5">
//               <div className="w-full h-full rounded-full bg-surface"></div>
//             </div>
//             <div className="text-left">
//               <div className="font-label-caps text-[12px] text-white uppercase tracking-widest">DIRECTOR_VON_NEUMANN</div>
//               <div className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-widest">CYBERDYNE_SYSTEMS</div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }


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
    <section id="testimonials" className="py-24 overflow-hidden relative">

      {/* TITLE */}
      <h2 className="text-center text-4xl font-bold mb-16 text-white">
        TESTIMONIALS
      </h2>

      {/* MARQUEE */}
      <div className="overflow-hidden">

        <motion.div
          className="flex gap-10 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
        >

          {[...testimonials, ...testimonials].map((item, i) => (
            <div
              key={i}
              className="
                min-w-[420px]
                p-8
                rounded-3xl
                bg-white/5
                backdrop-blur-xl
                border border-white/10
                hover:border-[#FF00FF]/40
                transition
              "
            >

              <p className="text-lg italic text-white/80 leading-relaxed mb-8">
                “{item.text}”
              </p>

              <div>
                <div className="text-sm text-white font-bold tracking-widest">
                  {item.name}
                </div>
                <div className="text-xs text-white/50 tracking-widest">
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