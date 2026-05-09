// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";

// export default function About() {
//   return (
//     <section id="About" className="py-section-gap px-margin-mobile md:px-gutter">
//       <div className="max-w-container-max mx-auto flex flex-col md:flex-row gap-16 items-center">
//         <motion.div 
//           initial={{ opacity: 0, x: -30 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="w-full md:w-1/2 order-2 md:order-1"
//         >
//           <div className="glass-card p-8 rounded-[4rem] border-l-4 border-[#00F5FF]">
//             <span className="font-label-caps text-[12px] text-[#FF8A00] mb-4 block uppercase tracking-widest">
//               IDENTIFIER: CORE_UNIT_01
//             </span>
//             <h2 className="font-headline-lg text-[40px] mb-stack-md font-bold">THE SYSTEM ARCHITECT</h2>
//             <p className="font-body-md text-[16px] text-on-surface-variant leading-relaxed">
//               Navigating the intersection of chaotic organic growth and rigid computational logic. I don't just build websites; I engineer digital ecosystems that pulse with life. Every line of code is a synapse firing in a larger, interconnected machine.
//             </p>
//           </div>
//         </motion.div>
        
//         <motion.div 
//           initial={{ opacity: 0, x: 30 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="w-full md:w-1/2 order-1 md:order-2 flex justify-center"
//         >
//           <div className="relative w-72 h-72">
//             <div className="absolute inset-0 cyber-acid-gradient organic-blob animate-pulse blur-xl opacity-30"></div>
//             <div className="w-full h-full relative organic-blob overflow-hidden border-2 border-[#FF00FF] z-10">
//               <Image 
//                 src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgQUmSg2ha1LUUVCzoFWaVlLrG8GVn_uDgergBj1ymT7wmKYpjwgQl5UUaj6ycSIn-ewi7Okbp6czR6K-FApnTSof4przBmJ__O77GTSVGn4qLjwr5V_1gU8B8UQSO7kmfc1SUhb-dbBbbqWnFbfQtIp_NNKiT769MLD6E-G9ELDfBz_YStxrIoU-zbr2YGWWGS3gdLghBQe9g4szRWQb2rAFuBlK28R7qNsiPZieH1G-dhQqjUq7e3b2nszGOnjhAUEdBFOffirs"
//                 alt="Humanoid figure portrait"
//                 fill
//                 className="object-cover"
//               />
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-section-gap px-margin-mobile md:px-gutter"
    >
      <div className="max-w-container-max mx-auto">

        {/* CENTER CONTENT CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative glass-card p-10 md:p-14 rounded-[3rem] border border-white/10 overflow-hidden"
        >

          {/* glow background */}
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#FF00FF]/20 blur-3xl rounded-full" />
          <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-[#00F5FF]/20 blur-3xl rounded-full" />

          {/* CONTENT */}
          <div className="relative z-10 text-center">

            <span className="text-[12px] text-[#00F5FF] uppercase tracking-[0.3em]">
              FRONTEND DEVELOPER
            </span>

            <h2 className="text-[44px] md:text-[56px] font-black mt-4 mb-6 text-white leading-tight">
              Building Modern <br />
              <span className="bg-gradient-to-r from-[#FF00FF] via-[#8B5CF6] to-[#00F5FF] bg-clip-text text-transparent">
                Web Experiences
              </span>
            </h2>

            <p className="text-[16px] md:text-[18px] text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
              Hi, I’m <span className="text-white font-semibold">Abu Bakkar Siddik</span>.
              I’m a passionate Frontend Developer focused on creating fast, responsive,
              and visually engaging web applications using React and Next.js.
              I love turning complex ideas into simple, elegant, and user-friendly interfaces.
            </p>

            {/* divider line */}
            <div className="w-24 h-[2px] bg-gradient-to-r from-[#FF00FF] to-[#00F5FF] mx-auto my-8 rounded-full" />

            {/* SKILLS */}
            <div className="flex flex-wrap justify-center gap-3">

              <span className="text-[12px] px-4 py-2 border border-[#00F5FF] text-[#00F5FF] rounded-full hover:scale-105 transition">
                React
              </span>

              <span className="text-[12px] px-4 py-2 border border-[#FF00FF] text-[#FF00FF] rounded-full hover:scale-105 transition">
                Next.js
              </span>

              <span className="text-[12px] px-4 py-2 border border-white text-white rounded-full hover:scale-105 transition">
                Tailwind CSS
              </span>

              <span className="text-[12px] px-4 py-2 border border-[#00F5FF] text-[#00F5FF] rounded-full hover:scale-105 transition">
                UI/UX Design
              </span>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}