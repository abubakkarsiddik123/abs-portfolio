// "use client";

// import { useEffect, useRef } from "react";
// import Image from "next/image";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { FaGithub } from "react-icons/fa";
// import { FiExternalLink } from "react-icons/fi";

// export default function Projects() {
//   const sectionRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     const cards = gsap.utils.toArray(".project-card");

//     gsap.fromTo(
//       cards,
//       {
//         y: 80,
//         opacity: 0,
//         scale: 0.95,
//       },
//       {
//         y: 0,
//         opacity: 1,
//         scale: 1,
//         stagger: 0.2,
//         duration: 1,
//         ease: "power4.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 80%",
//         },
//       }
//     );
//   }, []);

//   const projects = [
//     {
//       title: "KEEN_KEEPER",
//       desc: "Fullstack Task Manager",
//       image: "/project1.png",
//       github: "https://github.com/abubakkarsiddik123/Keen-Keeper",
//       live: "https://keen-keeper-olive-zeta.vercel.app",
//       color: "#00F5FF",
//     },
//     {
//       title: "DIGI_TOOLS",
//       desc: "SaaS Platform",
//       image: "/project2.png",
//       github: "https://github.com/abubakkarsiddik123/DigiTools-Platform",
//       live: "https://digitools-plat-form.netlify.app/",
//       color: "#FF8A00",
//     },
//     {
//       title: "AI_MODAL_HUB",
//       desc: "AI Tools Platform",
//       image: "/project3.png",
//       github: "https://github.com/abubakkarsiddik123/Ai-Modal-Hub",
//       live: "https://ai-hube.netlify.app/",
//       color: "#FF00FF",
//     },
//     {
//       title: "GitHub_Issues_Tracker",
//       desc: "Git Hub Issues Tracker",
//       image: "/project4.png",
//       github: "https://github.com/abubakkarsiddik123/Assingment-5-Github-Issuse-Tracker",
//       live: "https://abubakkarsiddik123.github.io/Assingment-5-Github-Issuse-Tracker/",
//       color: "#FF00FF",
//     },
//     {
//       title: "Book_Vibes",
//       desc: "Book-Vibes-platform",
//       image: "/project5.png",
//       github: "https://github.com/abubakkarsiddik123/book-vibe",
//       live: "https://book-vibes-platfrom.netlify.app/",
//       color: "#FF00FF",
//     },
//     {
//       title: "English_Janala",
//       desc: "English Learning Platform",
//       image: "/project6.png",
//       github: "https://github.com/abubakkarsiddik123/English-janala-code",
//       live: "https://abubakkarsiddik123.github.io/English-janala-code/",
//       color: "#FF00FF",
//     },
//   ];

//   return (
//     <section
//       id="projects"
//       ref={sectionRef}
//       className="py-24 px-margin-mobile md:px-gutter"
//     >
//       <div className="max-w-container-max mx-auto">

//         {/* TITLE */}
//         <h2 className="text-[30px] md:text-[40px] font-bold mb-14">
//           SELECTED_PROJECTS
//         </h2>
//         {/* GRID */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

//           {projects.map((project, i) => (
//             <div
//               key={i}
//               className="project-card group relative rounded-3xl overflow-hidden cursor-pointer"
//             >

//               {/* IMAGE */}
//               <div className="relative h-[320px] overflow-hidden">
//                 <Image
//                   src={project.image}
//                   alt={project.title}
//                   fill
//                   className="object-cover group-hover:scale-110 transition-transform duration-700"
//                 />
//               </div>

//               {/* OVERLAY (FIXED CLICK ISSUE) */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />

//               {/* CONTENT */}
//               <div className="absolute bottom-6 left-6 right-6 z-10">

//                 <h3 className="text-white text-[26px] font-bold">
//                   {project.title}
//                 </h3>

//                 <p className="text-sm text-white/70 mb-4">
//                   {project.desc}
//                 </p>

//                 {/* LINKS */}
//                 <div className="flex gap-6 text-sm">

//                   <a
//                     href={project.github}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-2 text-white hover:opacity-80 transition"
//                   >
//                     <FaGithub />
//                     Code
//                   </a>

//                   <a
//                     href={project.live}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-2 transition"
//                     style={{ color: project.color }}
//                   >
//                     <FiExternalLink />
//                     Live
//                   </a>

//                 </div>

//               </div>

//               {/* GLOW BORDER */}
//               <div
//                 className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500"
//                 style={{
//                   boxShadow: `0 0 40px ${project.color}`,
//                 }}
//               />

//             </div>
//           ))}

//         </div>

//       </div>
//     </section>
//   );
// }



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

  // SMOOTH REVEAL ANIMATION
  gsap.fromTo(
    cards,
    {
      y: 60,
      opacity: 0,
      scale: 0.96,
    },
    {
      y: 0,
      opacity: 1,
      scale: 1,
      stagger: 0.15,
      duration: 1.4,
      ease: "expo.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    }
  );

  // VERY SMOOTH FLOATING EFFECT
  cards.forEach((card: any, index) => {
    gsap.to(card, {
      y: -6,
      duration: 3 + index * 0.2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  });
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
    {
      title: "GitHub_Issues_Tracker",
      desc: "Git Hub Issues Tracker",
      image: "/project4.png",
      github: "https://github.com/abubakkarsiddik123/Assingment-5-Github-Issuse-Tracker",
      live: "https://abubakkarsiddik123.github.io/Assingment-5-Github-Issuse-Tracker/",
      color: "#00FF85",
    },
    {
      title: "Book_Vibes",
      desc: "Book-Vibes-platform",
      image: "/project5.png",
      github: "https://github.com/abubakkarsiddik123/book-vibe",
      live: "https://book-vibes-platfrom.netlify.app/",
      color: "#8B5CF6",
    },
    {
      title: "English_Janala",
      desc: "English Learning Platform",
      image: "/project6.png",
      github: "https://abubakkarsiddik123.github.io/English-janala-code/",
      live: "https://abubakkarsiddik123.github.io/English-janala-code/",
      color: "#FFD600",
    },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-16 md:py-24 px-4 sm:px-6 md:px-gutter"
    >
      <div className="max-w-container-max mx-auto">

        {/* TITLE */}
        <h2 className="text-[20px] sm:text-[24px] md:text-[26px] font-bold mb-14">
          SELECTED_PROJECTS
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-10">

          {projects.map((project, i) => (
            <div
              key={i}
              className="project-card group relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-4"
            >

              {/* IMAGE */}
              <div className="relative h-[260px] sm:h-[300px] md:h-[320px] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* ANIMATED OVERLAY */}
                <div
                  className="absolute inset-0 opacity-20 mix-blend-screen animate-pulse"
                  style={{
                    background: `linear-gradient(135deg, transparent, ${project.color})`,
                  }}
                />
              </div>

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />

              {/* CONTENT */}
              <div className="absolute bottom-6 left-6 right-6 z-10">

                <h3
                  className="text-white text-[26px] font-bold tracking-wide transition-all duration-500 group-hover:tracking-widest"
                  style={{
                    textShadow: "0 0 12px rgba(255,255,255,0.5)",
                  }}
                >
                  {project.title}
                </h3>

                <p className="text-sm text-white/70 mb-4">
                  {project.desc}
                </p>

                {/* LINKS */}
                <div className="flex flex-wrap gap-4 text-sm">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white hover:scale-110 transition duration-300"
                  >
                    <FaGithub />
                    Code
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-semibold transition duration-300 hover:scale-110 hover:drop-shadow-[0_0_10px_currentColor]"
                    style={{ color: project.color }}
                  >
                    <FiExternalLink />
                    Live
                  </a>

                </div>

              </div>

              {/* GLOW BORDER */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500"
                style={{
                  boxShadow: `0 0 20px ${project.color}`,
                }}
              />

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}