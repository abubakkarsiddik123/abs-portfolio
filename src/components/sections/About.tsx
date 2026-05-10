

"use client";

import { motion } from "framer-motion";

export default function About() {
  const skills = [
    { name: "React", color: "#00F5FF" },
    { name: "Next.js", color: "#FF00FF" },
    { name: "Tailwind CSS", color: "#FFFFFF" },
    { name: "UI/UX Design", color: "#00F5FF" },
  ];

  return (
    <section
      id="about"
      className="py-20 md:py-section-gap px-4 sm:px-6 md:px-gutter"
    >
      <div className="max-w-container-max mx-auto">

        {/* MAIN CARD */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          className="relative glass-card p-8 md:p-14 rounded-[2.5rem] md:rounded-[3rem] border border-white/10 overflow-hidden backdrop-blur-md md:backdrop-blur-xl"
        >

          {/* LIGHT GLOWS */}
          <div className="absolute -top-20 -left-20 w-60 md:w-72 h-60 md:h-72 bg-[#FF00FF]/10 blur-2xl md:blur-3xl rounded-full" />

          <div className="absolute -bottom-20 -right-20 w-60 md:w-72 h-60 md:h-72 bg-[#00F5FF]/10 blur-2xl md:blur-3xl rounded-full" />

          {/* CONTENT */}
          <div className="relative z-10 text-center">

            {/* LABEL */}
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-[11px] sm:text-[12px] text-[#00F5FF] uppercase tracking-[0.3em]"
            >
              FRONTEND DEVELOPER
            </motion.span>

            {/* HEADING */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-[34px] sm:text-[44px] md:text-[56px] font-black mt-4 mb-6 text-white leading-tight"
            >
              Building Modern <br />
              <span className="bg-gradient-to-r from-[#FF00FF] via-[#8B5CF6] to-[#00F5FF] bg-clip-text text-transparent">
                Web Experiences
              </span>
            </motion.h2>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-[15px] md:text-[18px] text-on-surface-variant max-w-2xl mx-auto leading-relaxed"
            >
              Hi, I’m{" "}
              <span className="text-white font-semibold">
                Abu Bakkar Siddik
              </span>
              . I’m a passionate Frontend Developer focused on creating fast,
              responsive, and visually engaging web applications using React and
              Next.js. I love turning complex ideas into simple, elegant, and
              user-friendly interfaces.
            </motion.p>

            {/* DIVIDER */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: 96, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
              className="h-[2px] bg-gradient-to-r from-[#FF00FF] to-[#00F5FF] mx-auto my-8 rounded-full"
            />

            {/* SKILLS */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
              className="flex flex-wrap justify-center gap-3"
            >

              {skills.map((skill, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 15 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.4 }}
                  className="text-[11px] sm:text-[12px] px-4 py-2 rounded-full border transition duration-300 md:hover:scale-105"
                  style={{
                    borderColor: skill.color,
                    color: skill.color,
                  }}
                >
                  {skill.name}
                </motion.span>
              ))}

            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}