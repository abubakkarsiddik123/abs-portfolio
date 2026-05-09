"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import Image from "next/image";
import { FiDownload } from "react-icons/fi";

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

  const navItem = (to: string, label: string) => (
    <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
      <Link
        to={to}
        smooth
        duration={500}
        offset={-80}
        onClick={() => setActiveSection(to)}
        className={cn(
          "relative cursor-pointer text-[12px] uppercase tracking-widest transition",
          activeSection === to
            ? "text-[#00F5FF]"
            : "text-white/70 hover:text-white"
        )}
      >
        {label}

        <span className="absolute -bottom-1 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-300 bg-gradient-to-r from-[#00F5FF] to-[#8B5CF6]" />
      </Link>
    </motion.div>
  );

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        isScrolled
          ? "bg-black/70 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      )}
    >
      <div className="flex items-center justify-between md:px-14 px-4 max-w-7xl mx-auto h-16">

        {/* LEFT: LOGO ONLY */}
        <div className="flex items-center">
          <Image
            src="/bannarlogo.png"
            alt="logo"
            width={90}
            height={90}
            className="cursor-pointer"
          />
        </div>

        {/* CENTER: NAV LINKS (ONLY DESKTOP) */}
        <div className="hidden md:flex gap-8 items-center">
          {navItem("home", "Home")}
          {navItem("about", "About")}
          {navItem("skills", "Skills")}
          {navItem("services", "Services")}
          {navItem("projects", "Projects")}
          {navItem("testimonials", "Testimonials")}
          {navItem("contact", "Contact")}
        </div>

        {/* RIGHT: RESUME BUTTON */}
<motion.a
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  href="/resume.pdf"
  download="Abu_Bakkar_Siddik_Resume.pdf"
  className="
    group
    flex
    items-center
    gap-2
    bg-primary
    text-on-primary
    px-4
    py-2
    md:px-6
    md:py-2
    rounded-full
    text-[11px]
    md:text-[12px]
    uppercase
    tracking-widest
    hover:shadow-[0_0_20px_rgba(0,245,255,0.5)]
    transition-all
  "
>
  RESUME

  {/* FLOATING ICON */}
  <motion.span
    animate={{ y: [0, -4, 0] }}
    transition={{
      duration: 1.2,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="flex items-center"
  >
    <FiDownload className="text-[16px]" />
  </motion.span>
</motion.a>

      </div>
    </motion.nav>
  );
}