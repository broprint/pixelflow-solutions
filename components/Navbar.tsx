"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const menuItems = [
  "Home",
  "About",
  "Services",
  "Portfolio",
  "Marketplace",
  "Contact",
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div
        className="
        max-w-7xl mx-auto
        flex items-center justify-between
        rounded-2xl
        border border-white/10
        bg-black/40
        backdrop-blur-xl
        px-6 py-3
        shadow-lg
        "
      >

        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/logo/pf-logo.svg"
            alt="PixelFlow Solutions"
            width={220}
            height={60}
            priority
          />
        </div>


        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">

          {menuItems.map((item) => (
            <a
              key={item}
              href="#"
              className="
              text-sm text-gray-300
              hover:text-white
              transition
              "
            >
              {item}
            </a>
          ))}

        </div>


        {/* Button */}
        <button
          className="
          hidden md:block
          rounded-full
          px-6 py-3
          bg-gradient-to-r
          from-pink-500
          to-cyan-400
          text-black
          font-semibold
          hover:scale-105
          transition
          "
        >
          Book Consultation
        </button>


      </div>
    </motion.nav>
  );
}