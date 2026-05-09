// "use client";

// import { useState, useEffect } from "react";
// import { cn } from "@/lib/utils";
// import { motion, AnimatePresence } from "framer-motion";

// const navLinks = [
//   { name: "Repository", href: "#" },
//   { name: "Architecture", href: "#" },
//   { name: "Timeline", href: "#" },
//   { name: "Contact", href: "#" },
// ];

// export default function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [activeSection, setActiveSection] = useState("Hero");

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
      
//       const sections = ["Hero", "About", "Skills", "Services", "Projects", "Testimonials", "Contact"];
//       for (const section of sections) {
//         const el = document.getElementById(section);
//         if (el) {
//           const rect = el.getBoundingClientRect();
//           if (rect.top <= 100 && rect.bottom >= 100) {
//             setActiveSection(section);
//             break;
//           }
//         }
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav 
//       className={cn(
//         "fixed top-0 w-full z-50 transition-all duration-500 py-4",
//         isScrolled ? "bg-surface/80 backdrop-blur-xl border-b border-white/10 shadow-2xl" : "bg-transparent py-6"
//       )}
//     >
//       <div className="flex justify-between items-center px-margin-mobile md:px-gutter w-full max-w-container-max mx-auto">
//         <div 
//           onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//           className="font-headline-sm text-headline-sm font-bold tracking-tighter text-primary interactive cursor-pointer"
//         >
//           DEV_CORE // OS
//         </div>
        
//         <div className="hidden md:flex gap-gutter items-center">
//           {navLinks.map((link) => (
//             <a
//               key={link.name}
//               className={cn(
//                 "interactive font-label-caps text-[12px] uppercase tracking-widest transition-all duration-300 relative group",
//                 activeSection === link.name ? "text-primary" : "text-on-surface-variant hover:text-primary"
//               )}
//               href={`#${link.name}`}
//             >
//               {link.name}
//               <span className={cn(
//                 "absolute -bottom-1 left-0 h-px bg-primary transition-all duration-300",
//                 activeSection === link.name ? "w-full" : "w-0 group-hover:w-full"
//               )} />
//             </a>
//           ))}
//         </div>
        
//         <button className="interactive bg-primary text-on-primary px-6 py-2 rounded-full font-label-caps text-[12px] uppercase tracking-widest hover:shadow-[0_0_20px_rgba(207,188,255,0.5)] transition-all active:scale-95">
//           RESUME_V2.0
//         </button>
//       </div>
//     </nav>
//   );
// }





// "use client";

// import { useState, useEffect } from "react";
// import { cn } from "@/lib/utils";
// import { motion } from "framer-motion";

// const navLinks = [
//   { name: "Hero", href: "#Hero" },
//   { name: "About", href: "#About" },
//   { name: "Skills", href: "#Skills" },
//   { name: "Services", href: "#Services" },
//   { name: "Projects", href: "#Projects" },
//   { name: "Testimonials", href: "#Testimonials" },
//   { name: "Contact", href: "#Contact" },
// ];

// export default function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [activeSection, setActiveSection] = useState("Hero");

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);

//       const sections = [
//         "Hero",
//         "About",
//         "Skills",
//         "Services",
//         "Projects",
//         "Testimonials",
//         "Contact",
//       ];

//       for (const section of sections) {
//         const el = document.getElementById(section);
//         if (el) {
//           const rect = el.getBoundingClientRect();
//           if (rect.top <= 120 && rect.bottom >= 120) {
//             setActiveSection(section);
//             break;
//           }
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <motion.nav
//       initial={{ y: -20, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//       className={cn(
//         "fixed top-0 w-full z-50 transition-all duration-500 py-4",
//         isScrolled
//           ? "bg-surface/80 backdrop-blur-xl border-b border-white/10 shadow-2xl"
//           : "bg-transparent py-6"
//       )}
//     >
//       <div className="flex justify-between items-center px-margin-mobile md:px-gutter w-full max-w-container-max mx-auto">

//         {/* BRAND */}
//         <motion.div
//           whileHover={{ scale: 1.05 }}
//           transition={{ type: "spring", stiffness: 300 }}
//           onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//           className="font-bold tracking-tighter text-primary cursor-pointer"
//         >
//           DEV_CORE // OS
//         </motion.div>

//         {/* NAV LINKS */}
//         <div className="hidden md:flex gap-8 items-center">

//           {navLinks.map((link) => (
//             <motion.a
//               key={link.name}
//               href={link.href}
//               whileHover={{ y: -2 }}
//               transition={{ type: "spring", stiffness: 300 }}
//               className={cn(
//                 "relative text-[12px] uppercase tracking-widest transition-colors duration-300 group",
//                 activeSection === link.name
//                   ? "text-[#00F5FF]"
//                   : "text-on-surface-variant hover:text-white"
//               )}
//             >
//               {link.name}

//               {/* underline animation */}
//               <span
//                 className={cn(
//                   "absolute -bottom-1 left-0 h-[2px] transition-all duration-300",
//                   activeSection === link.name
//                     ? "w-full bg-gradient-to-r from-[#00F5FF] to-[#8B5CF6]"
//                     : "w-0 group-hover:w-full bg-white"
//                 )}
//               />
//             </motion.a>
//           ))}

//         </div>

//         {/* BUTTON */}
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="
//             bg-primary
//             text-on-primary
//             px-6
//             py-2
//             rounded-full
//             text-[12px]
//             uppercase
//             tracking-widest
//             hover:shadow-[0_0_20px_rgba(0,245,255,0.5)]
//             transition-all
//           "
//         >
//           RESUME_V2.0
//         </motion.button>

//       </div>
//     </motion.nav>
//   );
// }


"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = [
        "home",
        "about",
        "skills",
        "services",
        "projects",
        "testimonials",
        "contact",
      ];

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItem = (to, label) => (
    <motion.div
      whileHover={{ y: -2, scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Link
        to={to}
        smooth={true}
        duration={500}
        offset={-80}
        onClick={() => setActiveSection(to)}
        className={cn(
          "relative text-[12px] uppercase tracking-widest transition-colors duration-300 cursor-pointer group",
          activeSection === to
            ? "text-[#00F5FF]"
            : "text-on-surface-variant hover:text-white"
        )}
      >
        {label}

        <span
          className="
            absolute
            -bottom-1
            left-0
            h-[2px]
            w-0
            group-hover:w-full
            transition-all
            duration-300
            bg-gradient-to-r
            from-[#00F5FF]
            to-[#8B5CF6]
          "
        />
      </Link>
    </motion.div>
  );

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500 py-4",
        isScrolled
          ? "bg-surface/80 backdrop-blur-xl border-b border-white/10 shadow-2xl"
          : "bg-transparent py-6"
      )}
    >
      <div className="flex justify-between items-center px-margin-mobile md:px-gutter w-full max-w-container-max mx-auto">

        {/* BRAND */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-bold tracking-tighter text-primary cursor-pointer"
        >
          DEV_CORE // OS
        </motion.div>

        {/* NAV LINKS */}
        <div className="hidden md:flex gap-8 items-center">

          {navItem("home", "Home")}
          {navItem("about", "About")}
          {navItem("skills", "Skills")}
          {navItem("services", "Services")}
          {navItem("projects", "Projects")}
          {navItem("testimonials", "Testimonials")}
          {navItem("contact", "Contact")}

        </div>

        {/* BUTTON */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="
            bg-primary
            text-on-primary
            px-6
            py-2
            rounded-full
            text-[12px]
            uppercase
            tracking-widest
            hover:shadow-[0_0_20px_rgba(0,245,255,0.5)]
            transition-all
          "
        >
          RESUME_V2.0
        </motion.button>

      </div>
    </motion.nav>
  );
}