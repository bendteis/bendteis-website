"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Warm gradient overlay — stronger for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-warm-dark/50 via-warm-dark/20 to-warm-dark/80 z-10" />

      {/* Warm color wash for vintage feel */}
      <div className="absolute inset-0 bg-amber/10 mix-blend-multiply z-[5]" />

      {/* Background photo */}
      <img
        src="/images/portfolio/dscf0809.jpg"
        alt="BendTeis hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Center content */}
      <div className="relative z-20 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="font-heading text-7xl md:text-9xl lg:text-[12rem] text-cream leading-[0.85]"
        >
          BEND
          <br />
          TEIS
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex items-center justify-center gap-4 mt-8"
        >
          <div className="w-8 h-px bg-cream/30" />
          <p className="text-cream/70 text-xs tracking-[0.3em] uppercase">
            Analoog Verhaal — Digitale Precisie
          </p>
          <div className="w-8 h-px bg-cream/30" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-amber/60 text-[10px] tracking-[0.25em] uppercase mt-3"
        >
          Fujifilm X100VI
        </motion.p>
      </div>

      {/* Location tag — bottom right */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 right-8 z-20 text-cream/40 text-[10px] tracking-[0.2em] uppercase"
      >
        Madeira, PT
      </motion.p>

      {/* Scroll indicator — bottom center */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-cream/30 text-[9px] tracking-[0.3em] uppercase">
          scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-cream/25 to-transparent" />
      </motion.div>
    </section>
  );
}
