"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="
      min-h-screen
      flex
      items-center
      justify-center
      relative
      overflow-hidden
      bg-black
      px-6
      "
    >

      {/* Neon Glow Background */}
      <div
        className="
        absolute
        top-20
        left-20
        w-[500px]
        h-[500px]
        bg-pink-500/20
        rounded-full
        blur-[120px]
        "
      />

      <div
        className="
        absolute
        bottom-20
        right-20
        w-[500px]
        h-[500px]
        bg-cyan-400/20
        rounded-full
        blur-[120px]
        "
      />


      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="
        relative
        z-10
        text-center
        max-w-5xl
        "
      >

        {/* Small Brand Line */}
        <p
          className="
          text-cyan-400
          uppercase
          tracking-[0.4em]
          text-sm
          mb-6
          "
        >
          Creative • Technology • Growth
        </p>


        {/* Main Heading */}
        <h1
          className="
          text-5xl
          md:text-7xl
          font-extrabold
          text-white
          leading-tight
          "
        >
          From First Impression
          <br />

          <span
            className="
            bg-gradient-to-r
            from-pink-500
            via-purple-500
            to-cyan-400
            bg-clip-text
            text-transparent
            "
          >
            To IT Infrastructure
          </span>

        </h1>


        {/* Description */}
        <p
          className="
          mt-8
          text-gray-300
          text-lg
          md:text-xl
          max-w-3xl
          mx-auto
          "
        >
          PixelFlow Solutions is a complete Digital Business Partner
          combining Creative Design, Enterprise IT, AI Solutions,
          and Technology Innovation under one powerful ecosystem.
        </p>


        {/* Buttons */}
        <div
          className="
          mt-10
          flex
          justify-center
          gap-5
          flex-wrap
          "
        >

          <button
            className="
            px-8
            py-4
            rounded-full
            bg-gradient-to-r
            from-pink-500
            to-cyan-400
            text-black
            font-bold
            hover:scale-105
            transition
            "
          >
            Explore Solutions
          </button>


          <button
            className="
            px-8
            py-4
            rounded-full
            border
            border-white/20
            text-white
            hover:bg-white/10
            transition
            "
          >
            Request Consultation
          </button>

        </div>


      </motion.div>

    </section>
  );
}