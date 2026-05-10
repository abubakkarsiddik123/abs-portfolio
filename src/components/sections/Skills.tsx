
"use client";

import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

const skills = [
  {
    label: "JAVASCRIPT",
    color: "#F7DF1E",
    icon: <FaJs size={55} className="animate-float" />,
  },
  {
    label: "REACT JS",
    color: "#61DAFB",
    icon: <FaReact size={55} className="animate-spin-slow" />,
  },
  {
    label: "NEXT JS",
    color: "#FFFFFF",
    icon: <SiNextdotjs size={55} className="animate-pulse-soft" />,
  },
  {
    label: "TAILWIND CSS",
    color: "#38BDF8",
    icon: <SiTailwindcss size={55} className="animate-wave" />,
  },
  {
    label: "NODE JS",
    color: "#4CAF50",
    icon: <FaNodeJs size={55} className="animate-bounce-soft" />,
  },
  {
    label: "EXPRESS JS",
    color: "#F5A623",
    icon: <SiExpress size={55} className="animate-fade" />,
  },
  {
    label: "MONGODB",
    color: "#4DB33D",
    icon: <SiMongodb size={55} className="animate-float" />,
  },
  {
    label: "GIT / GITHUB",
    color: "#F1502F",
    icon: (
      <div className="flex gap-3 animate-wave">
        <FaGitAlt size={42} />
        <FaGithub size={42} />
      </div>
    ),
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-margin-mobile md:px-gutter">
      
      {/* TITLE */}
      <h2 className="text-center text-4xl font-bold mb-16 text-white">
        TECHNICAL SKILLS
      </h2>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="
              group
              relative
              h-[220px]
              flex
              flex-col
              items-center
              justify-center
              gap-6
              rounded-3xl
              bg-white/5
              border border-white/10
              backdrop-blur-xl
              transition-all duration-500
              hover:scale-105
              hover:-translate-y-2
              hover:shadow-[0_25px_60px_rgba(0,0,0,0.5)]
              overflow-hidden
            "
            style={{
              borderColor: skill.color,
            }}
          >
            {/* Animated Glow */}
            <div
              className="
                absolute inset-0
                opacity-10
                blur-3xl
                animate-pulse
              "
              style={{ backgroundColor: skill.color }}
            />

            {/* Icon */}
            <div
              className="
                relative z-10
                transition-all duration-500
                group-hover:scale-125
              "
              style={{ color: skill.color }}
            >
              {skill.icon}
            </div>

            {/* Text */}
            <p
              className="
                relative z-10
                text-lg md:text-xl
                font-bold
                tracking-[0.2em]
                text-center
                transition-all duration-300
                group-hover:tracking-[0.35em]
              "
              style={{ color: skill.color }}
            >
              {skill.label}
            </p>

            {/* Bottom Neon Line */}
            <div
              className="
                absolute bottom-0 left-0
                h-[3px] w-0
                group-hover:w-full
                transition-all duration-500
              "
              style={{ backgroundColor: skill.color }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}