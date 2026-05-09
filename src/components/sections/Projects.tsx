// // "use client";

// // import { useEffect, useRef } from "react";
// // import Image from "next/image";
// // import gsap from "gsap";
// // import { ScrollTrigger } from "gsap/ScrollTrigger";

// // export default function Projects() {
// //   const containerRef = useRef<HTMLDivElement>(null);
// //   const project1Ref = useRef<HTMLDivElement>(null);
// //   const project2Ref = useRef<HTMLDivElement>(null);

// //   useEffect(() => {
// //     gsap.registerPlugin(ScrollTrigger);

// //     const tl = gsap.timeline({
// //       scrollTrigger: {
// //         trigger: containerRef.current,
// //         start: "top 70%",
// //       },
// //     });

// //     tl.from([project1Ref.current, project2Ref.current], {
// //       y: 100,
// //       opacity: 0,
// //       stagger: 0.2,
// //       duration: 1.2,
// //       ease: "power4.out",
// //     });
// //   }, []);

// //   return (
// //     <section id="Projects" ref={containerRef} className="py-section-gap px-margin-mobile md:px-gutter">
// //       <div className="max-w-container-max mx-auto">
// //         <h2 className="font-headline-lg text-[40px] mb-16 text-right font-bold tracking-tight">
// //           ACTIVE_DEPLOYMENTS
// //         </h2>
// //         <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
// //           {/* Project 1 */}
// //           <div 
// //             ref={project1Ref}
// //             className="md:col-span-8 group cursor-pointer perspective-1000"
// //           >
// //             <div className="relative overflow-hidden rounded-3xl h-[450px] transition-transform duration-500 group-hover:rotate-x-2 group-hover:rotate-y-[-2deg]">
// //               <Image 
// //                 src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGeksw76m4MAzuyG0RZjCTAkAanRc-5TYW-9DE2O9i8uhv5cv-ONkj7y1XLfJTlexkkmP8Uad_TXuJ5B69NSsJ-ANrGFMe97cEssAe57lmCrXhXFV9qHBZg6te6eYtrRLVdNFsmtYtUd7dNvarj2dZYnjXsjHGfG6d7sMp5YGBjWIismGe76TxFJjh91P36XdgpCphpoAyNo952PxwdUsuJkDqppm_-nDeDa-Yw_wox563SKfzWI0zD9cB0cBM99abDLr5wo7gJ9k"
// //                 alt="Project Xeno"
// //                 fill
// //                 className="object-cover group-hover:scale-110 transition-transform duration-1000"
// //               />
// //               <div className="absolute inset-0 bg-gradient-to-t from-[#0B1026] via-[#0B1026]/40 to-transparent opacity-80" />
// //               <div className="absolute bottom-10 left-10">
// //                 <h3 className="font-headline-md text-[40px] text-white font-bold mb-2">PROJECT_XENO</h3>
// //                 <span className="font-label-caps text-[14px] text-[#00F5FF] uppercase tracking-widest bg-[#00F5FF]/10 px-4 py-1 rounded-full backdrop-blur-md">
// //                   AI_INFRASTRUCTURE
// //                 </span>
// //               </div>
// //             </div>
// //           </div>
          
// //           {/* Project 2 */}
// //           <div 
// //             ref={project2Ref}
// //             className="md:col-span-4 md:mt-24 group cursor-pointer"
// //           >
// //             <div className="glass-card p-8 rounded-3xl border-[#FF8A00]/20 border-2 hover:border-[#FF8A00] transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,138,0,0.2)]">
// //               <div className="w-full h-72 relative rounded-2xl overflow-hidden mb-8">
// //                 <Image 
// //                   src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8zNRFMwqBQoWJgDfexIKvtD_lDT6Nju3-TETvN_6X4X84d_1_HjoTCzMvLyeolyzjfw8HK_PLhkxzUWNImzCHHmcGjiKgfzm-8J5z3IPxU_5yv1X_BDNqSArht4T59Gu0LTplfiw-Z7eI-p_CUnkvudWZ15xBkpxrywBtaR8WTTfTqYcezEqASKsyejlJhzkgGtkFBms41dx-pHMJsvuOgUTpiHiRLlx3RbeVYyqf6pnc2-6H5nKbx2dFWCOUGozu0AZxeVLJ7kc"
// //                   alt="Neon Pulse"
// //                   fill
// //                   className="object-cover group-hover:scale-110 transition-transform duration-700"
// //                 />
// //               </div>
// //               <h3 className="font-headline-sm text-[28px] mb-4 font-bold">NEON_PULSE</h3>
// //               <p className="font-body-md text-on-surface-variant text-[16px] mb-8 leading-relaxed">
// //                 Interactive dashboard for bio-metric monitoring systems. Designed for real-time synaptic data visualization.
// //               </p>
// //               <a className="interactive inline-flex items-center gap-4 text-[#FF8A00] font-label-caps text-[14px] uppercase tracking-widest group/link" href="#">
// //                 DECODE_MODULE 
// //                 <span className="material-symbols-outlined group-hover/link:translate-x-2 transition-transform">arrow_right_alt</span>
// //               </a>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }




// "use client";

// import { useEffect, useRef } from "react";
// import Image from "next/image";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// export default function Projects() {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const wrapperRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     const ctx = gsap.context(() => {
//       const cards = gsap.utils.toArray(".project-card");

//       gsap.to(cards, {
//         xPercent: -100 * (cards.length - 1),
//         ease: "none",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           pin: true,
//           scrub: 1,
//           start: "top top",
//           end: () => "+=" + window.innerWidth * cards.length,
//         },
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       id="Projects"
//       ref={sectionRef}
//       className="h-screen overflow-hidden flex items-center"
//     >
//       <div className="w-full">

//         {/* TITLE */}
//         <h2 className="text-[40px] font-bold px-margin-mobile md:px-gutter mb-10">
//           ACTIVE_DEPLOYMENTS
//         </h2>

//         {/* SCROLL WRAPPER */}
//         <div
//           ref={wrapperRef}
//           className="flex w-[300vw] gap-10 px-margin-mobile md:px-gutter"
//         >

//           {/* CARD 1 */}
//           <div className="project-card w-screen md:w-[80vw] h-[500px] relative rounded-3xl overflow-hidden group">

//             <Image
//               src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGeksw76m4MAzuyG0RZjCTAkAanRc-5TYW-9DE2O9i8uhv5cv-ONkj7y1XLfJTlexkkmP8Uad_TXuJ5B69NSsJ-ANrGFMe97cEssAe57lmCrXhXFV9qHBZg6te6eYtrRLVdNFsmtYtUd7dNvarj2dZYnjXsjHGfG6d7sMp5YGBjWIismGe76TxFJjh91P36XdgpCphpoAyNo952PxwdUsuJkDqppm_-nDeDa-Yw_wox563SKfzWI0zD9cB0cBM99abDLr5wo7gJ9k"
//               alt="Project Xeno"
//               fill
//               className="object-cover group-hover:scale-110 transition-transform duration-700"
//             />

//             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

//             <div className="absolute bottom-10 left-10">
//               <h3 className="text-white text-[42px] font-bold">
//                 PROJECT_XENO
//               </h3>
//               <p className="text-[#00F5FF] uppercase tracking-widest text-sm mt-2">
//                 AI_INFRASTRUCTURE
//               </p>
//             </div>

//           </div>

//           {/* CARD 2 */}
//           <div className="project-card w-screen md:w-[80vw] h-[500px] relative rounded-3xl overflow-hidden group">

//             <Image
//               src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8zNRFMwqBQoWJgDfexIKvtD_lDT6Nju3-TETvN_6X4X84d_1_HjoTCzMvLyeolyzjfw8HK_PLhkxzUWNImzCHHmcGjiKgfzm-8J5z3IPxU_5yv1X_BDNqSArht4T59Gu0LTplfiw-Z7eI-p_CUnkvudWZ15xBkpxrywBtaR8WTTfTqYcezEqASKsyejlJhzkgGtkFBms41dx-pHMJsvuOgUTpiHiRLlx3RbeVYyqf6pnc2-6H5nKbx2dFWCOUGozu0AZxeVLJ7kc"
//               alt="Neon Pulse"
//               fill
//               className="object-cover group-hover:scale-110 transition-transform duration-700"
//             />

//             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

//             <div className="absolute bottom-10 left-10">
//               <h3 className="text-white text-[42px] font-bold">
//                 NEON_PULSE
//               </h3>
//               <p className="text-[#FF8A00] uppercase tracking-widest text-sm mt-2">
//                 BIOMETRIC_DASHBOARD
//               </p>
//             </div>

//           </div>

//           {/* CARD 3 */}
//           <div className="project-card w-screen md:w-[80vw] h-[500px] relative rounded-3xl overflow-hidden group">

//             <Image
//               src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
//               alt="Web UI"
//               fill
//               className="object-cover group-hover:scale-110 transition-transform duration-700"
//             />

//             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

//             <div className="absolute bottom-10 left-10">
//               <h3 className="text-white text-[42px] font-bold">
//                 UI_SYSTEMS
//               </h3>
//               <p className="text-[#FF00FF] uppercase tracking-widest text-sm mt-2">
//                 FRONTEND_ARCHITECTURE
//               </p>
//             </div>

//           </div>

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

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              {/* CONTENT */}
              <div className="absolute bottom-6 left-6 right-6">

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
                    className="flex items-center gap-2 text-white hover:opacity-80 transition"
                  >
                    <FaGithub />
                    Code
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    className="flex items-center gap-2"
                    style={{ color: project.color }}
                  >
                    <FiExternalLink />
                    Live
                  </a>

                </div>

              </div>

              {/* GLOW BORDER */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition"
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

//     const ctx = gsap.context(() => {
//       const cards = gsap.utils.toArray(".project-card");

//       gsap.to(cards, {
//         xPercent: -100 * (cards.length - 1),
//         ease: "none",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           pin: true,
//           scrub: 1,
//           start: "top top",
//           end: () => "+=" + window.innerWidth * cards.length,
//         },
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       id="Projects"
//       ref={sectionRef}
//       className="h-screen overflow-hidden flex items-center"
//     >
//       <div className="w-full">

//         <h2 className="text-[40px] font-bold px-margin-mobile md:px-gutter mb-10">
//           ACTIVE_DEPLOYMENTS
//         </h2>

//         <div className="flex w-[300vw] gap-10 px-margin-mobile md:px-gutter">

//           {/* PROJECT 1 */}
//           <div className="project-card w-screen md:w-[80vw] h-[500px] relative rounded-3xl overflow-hidden group">
//             <Image
//               src="/project1.png"
//               alt="Keen Keeper"
//               fill
//               className="object-cover group-hover:scale-110 transition-transform duration-700"
//             />

//             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

//             <div className="absolute bottom-10 left-10">
//               <h3 className="text-white text-[42px] font-bold">
//                 KEEN_KEEPER
//               </h3>

//               <p className="text-[#00F5FF] text-sm mt-2">
//                 FULLSTACK_PROJECT
//               </p>

//               <div className="flex gap-6 mt-4 text-sm">

//                 {/* GITHUB */}
//                 <a
//                   href="https://github.com/abubakkarsiddik123/Keen-Keeper"
//                   target="_blank"
//                   className="flex items-center gap-2 text-white hover:text-[#00F5FF] transition"
//                 >
//                   <FaGithub />
//                   GitHub
//                 </a>

//                 {/* LIVE */}
//                 <a
//                   href="https://keen-keeper-olive-zeta.vercel.app"
//                   target="_blank"
//                   className="flex items-center gap-2 text-[#00F5FF] hover:scale-105 transition"
//                 >
//                   <FiExternalLink />
//                   Live
//                 </a>

//               </div>
//             </div>
//           </div>

//           {/* PROJECT 2 */}
//           <div className="project-card w-screen md:w-[80vw] h-[500px] relative rounded-3xl overflow-hidden group">
//             <Image
//               src="/project2.png"
//               alt="DigiTools"
//               fill
//               className="object-cover group-hover:scale-110 transition-transform duration-700"
//             />

//             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

//             <div className="absolute bottom-10 left-10">
//               <h3 className="text-white text-[42px] font-bold">
//                 DIGI_TOOLS
//               </h3>

//               <p className="text-[#FF8A00] text-sm mt-2">
//                 SAAS_PLATFORM
//               </p>

//               <div className="flex gap-6 mt-4 text-sm">

//                 <a
//                   href="https://github.com/abubakkarsiddik123/DigiTools-Platform"
//                   target="_blank"
//                   className="flex items-center gap-2 text-white hover:text-[#FF8A00] transition"
//                 >
//                   <FaGithub />
//                   GitHub
//                 </a>

//                 <a
//                   href="https://digitools-plat-form.netlify.app/"
//                   target="_blank"
//                   className="flex items-center gap-2 text-[#FF8A00] hover:scale-105 transition"
//                 >
//                   <FiExternalLink />
//                   Live
//                 </a>

//               </div>
//             </div>
//           </div>

//           {/* PROJECT 3 */}
//           <div className="project-card w-screen md:w-[80vw] h-[500px] relative rounded-3xl overflow-hidden group">
//             <Image
//               src="/project3.png"
//               alt="AI Modal Hub"
//               fill
//               className="object-cover group-hover:scale-110 transition-transform duration-700"
//             />

//             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

//             <div className="absolute bottom-10 left-10">
//               <h3 className="text-white text-[42px] font-bold">
//                 AI_MODAL_HUB
//               </h3>

//               <p className="text-[#FF00FF] text-sm mt-2">
//                 AI_TOOLS_PLATFORM
//               </p>

//               <div className="flex gap-6 mt-4 text-sm">

//                 <a
//                   href="https://github.com/abubakkarsiddik123/Ai-Modal-Hub"
//                   target="_blank"
//                   className="flex items-center gap-2 text-white hover:text-[#FF00FF] transition"
//                 >
//                   <FaGithub />
//                   GitHub
//                 </a>

//                 <a
//                   href="https://ai-hube.netlify.app/"
//                   target="_blank"
//                   className="flex items-center gap-2 text-[#FF00FF] hover:scale-105 transition"
//                 >
//                   <FiExternalLink />
//                   Live
//                 </a>

//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }