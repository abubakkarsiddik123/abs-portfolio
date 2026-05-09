"use client";

import Image from "next/image";
import { Link } from "react-scroll";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-surface-400 border-t border-white/10">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-100px] left-[-100px] w-[320px] h-[320px] bg-[#00F5FF]/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[320px] h-[320px] bg-[#FF00FF]/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">

        {/* LOGO */}
        <div className="flex justify-center items-center gap-3 group">

<div className="flex justify-center items-center gap-3 group">

  {/* LOGO WITH FLOAT + GLOW */}
  <div className="relative">

    <Image
      src="/bannarlogo.png"
      alt="logo"
      width={80}
      height={80}
      className="rounded-full animate-[float_4s_ease-in-out_infinite] group-hover:scale-110 transition"
    />

    {/* glow ring */}
    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00F5FF] to-[#FF00FF] blur-2xl opacity-20 group-hover:opacity-40 transition duration-500" />

  </div>

  {/* TEXT WITH GRADIENT SHIFT */}
  <h2 className="text-2xl md:text-3xl font-semibold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60 group-hover:from-[#00F5FF] group-hover:to-[#FF00FF] transition-all duration-700">

    Abubakkar<span className="text-white/50 group-hover:text-white transition">.dev</span>

  </h2>

</div>

</div>

        {/* NAVIGATION */}
    <div className="flex justify-center items-center flex-wrap gap-10 mt-10 text-sm md:text-base text-white/80">

  <Link
    to="home"
    smooth={true}
    duration={500}
    className="relative cursor-pointer transition-all duration-300 hover:text-white hover:scale-105 group"
  >
    Home
    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-[#00F5FF] to-[#FF00FF] transition-all duration-300 group-hover:w-full"></span>
  </Link>

  <Link
    to="about"
    smooth={true}
    duration={500}
    className="relative cursor-pointer transition-all duration-300 hover:text-white hover:scale-105 group"
  >
    About Us
    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-[#00F5FF] to-[#FF00FF] transition-all duration-300 group-hover:w-full"></span>
  </Link>

  <Link
    to="contact"
    smooth={true}
    duration={500}
    className="relative cursor-pointer transition-all duration-300 hover:text-white hover:scale-105 group"
  >
    Contact Us
    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-[#00F5FF] to-[#FF00FF] transition-all duration-300 group-hover:w-full"></span>
  </Link>

  <Link
    to="projects"
    smooth={true}
    duration={500}
    className="relative cursor-pointer transition-all duration-300 hover:text-white hover:scale-105 group"
  >
    Projects
    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-[#00F5FF] to-[#FF00FF] transition-all duration-300 group-hover:w-full"></span>
  </Link>

  <Link
    to="services"
    smooth={true}
    duration={500}
    className="relative cursor-pointer transition-all duration-300 hover:text-white hover:scale-105 group"
  >
    Services
    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-[#00F5FF] to-[#FF00FF] transition-all duration-300 group-hover:w-full"></span>
  </Link>

</div>

        {/* SOCIAL ICONS */}
     <div className="flex justify-center items-center gap-4 mt-10">

  <a
    href="https://www.facebook.com/share/1DQcYcVqFK/"
    target="_blank"
    className="w-11 h-11 flex items-center justify-center rounded-full bg-white/5 text-white/70
    transition-all duration-300 hover:scale-110 hover:-translate-y-1
    hover:text-[#1877F2] hover:shadow-[0_0_15px_rgba(24,119,242,0.4)]"
  >
    <FaFacebookF />
  </a>
  <a
    href="https://www.instagram.com/abubakkarsiddik1557?igsh=ZHIxMml4czVvMXJz"
    target="_blank"
    className="w-11 h-11 flex items-center justify-center rounded-full bg-white/5 text-white/70
    transition-all duration-300 hover:scale-110 hover:-translate-y-1
    hover:text-[#E4405F] hover:shadow-[0_0_15px_rgba(228,64,95,0.4)]"
  >
    <FaInstagram />
  </a>

  <a
    href="www.linkedin.com/in/abubakkarsiddik07"
    target="_blank"
    className="w-11 h-11 flex items-center justify-center rounded-full bg-white/5 text-white/70
    transition-all duration-300 hover:scale-110 hover:-translate-y-1
    hover:text-[#0A66C2] hover:shadow-[0_0_15px_rgba(10,102,194,0.4)]"
  >
    <FaLinkedinIn />
  </a>

  <a
    href="https://github.com/abubakkarsiddik123"
    target="_blank"
    className="w-11 h-11 flex items-center justify-center rounded-full bg-white/5 text-white/70
    transition-all duration-300 hover:scale-110 hover:-translate-y-1
    hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]"
  >
    <FaGithub />
  </a>

</div>

      </div>
    </footer>
  );
}