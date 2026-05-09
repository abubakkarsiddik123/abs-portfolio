"use client";

const skills = [
  { label: "JAVASCRIPT", color: "#FF00FF" },
  { label: "REACT JS", color: "#61DAFB" },
  { label: "NEXT JS", color: "#FFFFFF" },
  { label: "TAILWIND CSS", color: "#38BDF8" },
  { label: "NODE JS", color: "#4CAF50" },
  { label: "EXPRESS JS", color: "#F5A623" },
  { label: "MONGODB", color: "#4DB33D" },
  { label: "GIT / GITHUB", color: "#F1502F" },
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
              h-[200px]
              flex
              items-center
              justify-center
              rounded-3xl
              bg-white/5
              border border-white/10
              transition-all duration-300
              transform
              hover:rotate-x-6
              hover:rotate-y-[-6deg]
              hover:scale-105
              hover:shadow-[0_25px_60px_rgba(0,0,0,0.5)]
              overflow-hidden
            "
            style={{
              borderColor: skill.color,
              transformStyle: "preserve-3d",
            }}
          >

            {/* glow */}
            <div
              className="
                absolute inset-0 opacity-0 group-hover:opacity-20
                blur-2xl transition duration-300
              "
              style={{ backgroundColor: skill.color }}
            />

            {/* text */}
            <p
              className="relative z-10 text-xl font-bold tracking-widest"
              style={{ color: skill.color }}
            >
              {skill.label}
            </p>

            {/* bottom line */}
            <div
              className="
                absolute bottom-0 left-0 h-[3px] w-0
                group-hover:w-full transition-all duration-300
              "
              style={{ backgroundColor: skill.color }}
            />

          </div>
        ))}

      </div>
    </section>
  );
}