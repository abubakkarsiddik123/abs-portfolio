"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cards = gsap.utils.toArray(".project-card");

    gsap.fromTo(
      cards,
      {
        y: 80,
        opacity: 0,
        scale: 0.95,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        stagger: 0.2,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  const projects = [
    {
      title: "KEEN_KEEPER",
      desc: "Fullstack Task Manager",
      image: "/project1.png",
      github: "https://github.com/abubakkarsiddik123/Keen-Keeper",
      live: "https://keen-keeper-olive-zeta.vercel.app",
      color: "#00F5FF",
    },
    {
      title: "DIGI_TOOLS",
      desc: "SaaS Platform",
      image: "/project2.png",
      github: "https://github.com/abubakkarsiddik123/DigiTools-Platform",
      live: "https://digitools-plat-form.netlify.app/",
      color: "#FF8A00",
    },
    {
      title: "AI_MODAL_HUB",
      desc: "AI Tools Platform",
      image: "/project3.png",
      github: "https://github.com/abubakkarsiddik123/Ai-Modal-Hub",
      live: "https://ai-hube.netlify.app/",
      color: "#FF00FF",
    },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 px-margin-mobile md:px-gutter"
    >
      <div className="max-w-container-max mx-auto">

        {/* TITLE */}
        <h2 className="text-[40px] md:text-[52px] font-bold mb-14">
          SELECTED_PROJECTS
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {projects.map((project, i) => (
            <div
              key={i}
              className="project-card group relative rounded-3xl overflow-hidden cursor-pointer"
            >

              {/* IMAGE */}
              <div className="relative h-[320px] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* OVERLAY (FIXED CLICK ISSUE) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />

              {/* CONTENT */}
              <div className="absolute bottom-6 left-6 right-6 z-10">

                <h3 className="text-white text-[26px] font-bold">
                  {project.title}
                </h3>

                <p className="text-sm text-white/70 mb-4">
                  {project.desc}
                </p>

                {/* LINKS */}
                <div className="flex gap-6 text-sm">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white hover:opacity-80 transition"
                  >
                    <FaGithub />
                    Code
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 transition"
                    style={{ color: project.color }}
                  >
                    <FiExternalLink />
                    Live
                  </a>

                </div>

              </div>

              {/* GLOW BORDER */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500"
                style={{
                  boxShadow: `0 0 40px ${project.color}`,
                }}
              />

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}