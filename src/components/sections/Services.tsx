// "use client";

// import { motion } from "framer-motion";

// export default function Services() {
//   return (
//     <section id="Services" className="py-section-gap px-margin-mobile md:px-gutter">
//       <div className="max-w-container-max mx-auto">
//         <div className="flex flex-col md:flex-row gap-8">
//           <motion.div 
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="flex-1 glass-card p-10 rounded-tr-[5rem] border-t-2 border-[#FF00FF]"
//           >
//             <h3 className="font-headline-sm text-[24px] mb-4 text-[#FF00FF] font-bold">VISUAL_SYNTHESIS</h3>
//             <p className="font-body-md text-on-surface-variant text-[16px]">
//               Engineering high-impact interfaces that transcend traditional grid layouts. We create movement in static spaces.
//             </p>
//           </motion.div>
//           <motion.div 
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             viewport={{ once: true }}
//             className="flex-1 glass-card p-10 rounded-bl-[5rem] mt-12 md:mt-24 border-b-2 border-[#00F5FF]"
//           >
//             <h3 className="font-headline-sm text-[24px] mb-4 text-[#00F5FF] font-bold">KINETIC_ENGINES</h3>
//             <p className="font-body-md text-on-surface-variant text-[16px]">
//               Developing robust backend structures that adapt and scale like organic life forms. High-performance data pipelines.
//             </p>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { motion } from "framer-motion";

export default function Services() {
  return (
    <section
      id="services"
      className="py-section-gap px-margin-mobile md:px-gutter"
    >
      <div className="max-w-container-max mx-auto">

        <div className="flex flex-col md:flex-row gap-8">

          {/* SERVICE 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="flex-1 glass-card p-10 rounded-tr-[5rem] border-t-2 border-[#FF00FF] transition"
          >
            <h3 className="text-[24px] mb-4 text-[#FF00FF] font-bold">
              Frontend Development
            </h3>

            <p className="text-[16px] text-on-surface-variant leading-relaxed">
              I build modern, responsive and high-performance web applications using React and Next.js.
              Focused on clean code, reusable components, and smooth user experience.
            </p>
          </motion.div>

          {/* SERVICE 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="flex-1 glass-card p-10 rounded-bl-[5rem] mt-12 md:mt-24 border-b-2 border-[#00F5FF] transition"
          >
            <h3 className="text-[24px] mb-4 text-[#00F5FF] font-bold">
              UI & Responsive Design
            </h3>

            <p className="text-[16px] text-on-surface-variant leading-relaxed">
              I create pixel-perfect, mobile-friendly interfaces using Tailwind CSS.
              Every design is optimized for all screen sizes with attention to usability.
            </p>
          </motion.div>

          {/* SERVICE 3 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="flex-1 glass-card p-10 rounded-tr-[5rem] border-t-2 border-white/30 transition"
          >
            <h3 className="text-[24px] mb-4 text-white font-bold">
              UI Animations & Interactions
            </h3>

            <p className="text-[16px] text-on-surface-variant leading-relaxed">
              I enhance user experience using Framer Motion and GSAP,
              creating smooth animations and engaging micro-interactions.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}