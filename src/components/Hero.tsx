"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative bg-ink overflow-hidden">
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/10 to-ink/60 z-10" />
      {/* Placeholder bg — vervang met echte hero foto */}
      <div className="absolute inset-0 bg-ink" />

      <div className="relative z-20 text-center px-6">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="font-heading text-6xl md:text-8xl text-cream mb-4"
        >
          bendteis
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="text-cream/50 text-xs tracking-[0.3em] uppercase"
        >
          shot on fujifilm x100vi
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12"
        >
          <Link
            href="/portfolio"
            className="text-cream/60 text-xs tracking-widest uppercase border-b border-cream/20 pb-1 hover:text-cream hover:border-cream/50 transition-colors"
          >
            bekijk portfolio
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
