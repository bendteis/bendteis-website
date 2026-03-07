"use client";

import { motion } from "framer-motion";
import { portfolioItems } from "@/data/portfolio";

const heroPhotos = [
  { item: portfolioItems[0], aspect: "aspect-[3/4]" },
  { item: portfolioItems[5], aspect: "aspect-square" },
  { item: portfolioItems[10], aspect: "aspect-[3/4]" },
  { item: portfolioItems[22], aspect: "aspect-square" },
];

export default function Hero() {
  return (
    <section className="pt-28 md:pt-36 pb-16 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xs text-mid-gray tracking-wide uppercase mb-3"
        >
          Hey, ik ben Bend &mdash;
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="font-heading text-5xl md:text-7xl lg:text-[5.5rem] text-ink leading-[0.9] uppercase tracking-tight"
        >
          Creatief
          <br />
          Fotograaf
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 mt-8 mb-4"
        >
          <p className="text-sm text-mid-gray leading-loose max-w-xs">
            Ik leg verhalen vast met mijn Fujifilm X100VI. Analoge esthetiek,
            digitale precisie.
          </p>
          <p className="text-[10px] tracking-[0.3em] uppercase text-amber">
            Sinds 2024
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-ink text-cream text-[10px] tracking-widest uppercase px-5 py-2.5 cursor-default">
            Scroll Down <span>&darr;</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {heroPhotos.map(({ item, aspect }, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 + i * 0.1 }}
              className={`relative overflow-hidden group ${aspect}`}
            >
              <img
                src={item.image}
                alt={item.location}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-amber/5 mix-blend-multiply pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
