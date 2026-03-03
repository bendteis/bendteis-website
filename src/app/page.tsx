"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Hero from "@/components/Hero";
import { portfolioItems } from "@/data/portfolio";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Statement */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl text-ink leading-[1.1] mb-8">
              Analoge warmte,
              <br />
              digitale precisie,
              <br />
              creatief verhaal
            </h2>
            <p className="text-sm text-mid-gray leading-loose max-w-lg">
              bendteis is een creatief merk dat draait om fotografie met de
              Fujifilm X100VI. Daarnaast help ik merken groeien met marketing en
              AI automation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Collection 1: MADEIRA */}
      <section className="relative py-16 md:py-24 px-6">
        {/* Background watermark — flows behind content */}
        <div className="absolute inset-0 flex items-center overflow-hidden pointer-events-none select-none">
          <p className="text-[6rem] md:text-[14rem] font-heading text-warm-gray/[0.04] leading-none tracking-tight whitespace-nowrap -translate-x-[10%]">
            LICHT &middot; KLEUR &middot; WARMTE
          </p>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Collection label */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] tracking-[0.3em] uppercase text-amber mb-6"
          >
            collectie 01
          </motion.p>

          {/* Desktop collage — overlapping photos */}
          <div className="hidden md:block relative min-h-[75vh]">
            {/* Large photo — left */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="absolute top-0 left-0 w-[54%] h-[90%] overflow-hidden group"
            >
              <img
                src={portfolioItems[4].image}
                alt="Madeira"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-amber/5 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-warm-dark/70 via-warm-dark/10 to-transparent" />
            </motion.div>

            {/* Title — on the main photo */}
            <h2 className="absolute bottom-[18%] left-[3%] font-heading text-[7rem] lg:text-[9rem] text-cream leading-[0.8] z-30">
              MADEIRA
            </h2>

            {/* Top right photo — overlaps with slight rotation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="absolute top-[3%] right-0 w-[43%] h-[52%] overflow-hidden group z-20 rotate-[1deg] shadow-2xl"
            >
              <img
                src={portfolioItems[6].image}
                alt="Madeira"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-amber/5 mix-blend-multiply" />
            </motion.div>

            {/* Bottom right photo */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="absolute bottom-[2%] right-[6%] w-[36%] h-[43%] overflow-hidden group z-20 shadow-2xl"
            >
              <img
                src={portfolioItems[9].image}
                alt="Madeira"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-amber/5 mix-blend-multiply" />
            </motion.div>
          </div>

          {/* Mobile collage — overlapping with rotation */}
          <div className="md:hidden">
            <div className="aspect-[3/4] overflow-hidden relative">
              <img
                src={portfolioItems[4].image}
                alt="Madeira"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-warm-dark/70 via-warm-dark/10 to-transparent" />
              <h2 className="absolute bottom-20 left-4 font-heading text-6xl text-cream leading-[0.8]">
                MADEIRA
              </h2>
            </div>
            <div className="flex gap-3 -mt-12 relative z-10 px-4">
              <div className="flex-1 aspect-[4/5] overflow-hidden shadow-xl -rotate-1">
                <img
                  src={portfolioItems[6].image}
                  alt="Madeira"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 aspect-square overflow-hidden shadow-xl rotate-1 mt-6">
                <img
                  src={portfolioItems[9].image}
                  alt="Madeira"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mt-8 md:mt-12">
            <p className="text-sm text-mid-gray leading-loose mb-4 max-w-md">
              Eilandlicht vastgelegd met de Fujifilm X100VI. Analoge
              filmkleuren, handmatige scherpte.
            </p>
            <Link
              href="/portfolio"
              className="text-xs tracking-widest uppercase text-mid-gray border-b border-warm-gray pb-1 hover:text-ink hover:border-ink transition-colors"
            >
              bekijk alle
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Collection 2: LICHT & SCHADUW */}
      <section className="relative py-16 md:py-24 px-6">
        {/* Background watermark */}
        <div className="absolute inset-0 flex items-center justify-end overflow-hidden pointer-events-none select-none">
          <p className="text-[6rem] md:text-[14rem] font-heading text-warm-gray/[0.04] leading-none tracking-tight whitespace-nowrap translate-x-[10%]">
            VERHAAL &middot; BEELD &middot; FILM
          </p>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Collection label */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] tracking-[0.3em] uppercase text-amber mb-6 md:text-right"
          >
            collectie 02
          </motion.p>

          {/* Desktop collage — reversed layout */}
          <div className="hidden md:block relative min-h-[75vh]">
            {/* Large photo — right */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="absolute top-0 right-0 w-[54%] h-[90%] overflow-hidden group"
            >
              <img
                src={portfolioItems[22].image}
                alt="Licht & Schaduw"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-amber/5 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-warm-dark/70 via-warm-dark/10 to-transparent" />
            </motion.div>

            {/* Title */}
            <h2 className="absolute bottom-[18%] right-[3%] font-heading text-[6rem] lg:text-[8rem] text-cream leading-[0.8] z-30 text-right">
              LICHT &<br />
              SCHADUW
            </h2>

            {/* Top left photo — overlapping with rotation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="absolute top-[3%] left-0 w-[43%] h-[52%] overflow-hidden group z-20 -rotate-[1deg] shadow-2xl"
            >
              <img
                src={portfolioItems[27].image}
                alt="Licht & Schaduw"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-amber/5 mix-blend-multiply" />
            </motion.div>

            {/* Bottom left photo */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="absolute bottom-[2%] left-[6%] w-[36%] h-[43%] overflow-hidden group z-20 shadow-2xl"
            >
              <img
                src={portfolioItems[32].image}
                alt="Licht & Schaduw"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-amber/5 mix-blend-multiply" />
            </motion.div>
          </div>

          {/* Mobile collage */}
          <div className="md:hidden">
            <div className="aspect-[3/4] overflow-hidden relative">
              <img
                src={portfolioItems[22].image}
                alt="Licht & Schaduw"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-warm-dark/70 via-warm-dark/10 to-transparent" />
              <h2 className="absolute bottom-20 right-4 font-heading text-5xl text-cream leading-[0.8] text-right">
                LICHT &<br />
                SCHADUW
              </h2>
            </div>
            <div className="flex gap-3 -mt-12 relative z-10 px-4">
              <div className="flex-1 aspect-square overflow-hidden shadow-xl rotate-1 mt-6">
                <img
                  src={portfolioItems[27].image}
                  alt="Licht & Schaduw"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 aspect-[4/5] overflow-hidden shadow-xl -rotate-1">
                <img
                  src={portfolioItems[32].image}
                  alt="Licht & Schaduw"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mt-8 md:mt-12 md:text-right">
            <p className="text-sm text-mid-gray leading-loose mb-4 max-w-md md:ml-auto">
              Het spel tussen licht en donker. Contrasten die het verhaal
              vertellen.
            </p>
            <Link
              href="/portfolio"
              className="text-xs tracking-widest uppercase text-mid-gray border-b border-warm-gray pb-1 hover:text-ink hover:border-ink transition-colors"
            >
              bekijk alle
            </Link>
          </div>
        </div>
      </section>

      {/* View all photos button */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <Link
            href="/portfolio"
            className="inline-block text-xs tracking-widest uppercase border border-warm-gray px-8 py-4 text-mid-gray hover:border-ink hover:text-ink transition-colors"
          >
            bekijk alle foto&apos;s
          </Link>
        </div>
      </section>

      {/* Services — Dark warm section */}
      <section className="py-24 md:py-32 px-6 bg-warm-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-amber/[0.02]" />

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-amber/60 text-[10px] tracking-[0.3em] uppercase mb-6">
              meer dan fotografie
            </p>
            <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl text-cream leading-[1.1] mb-8">
              Creativiteit
              <br />
              ontmoet technologie
            </h2>
            <p className="text-cream/50 text-sm leading-loose mb-8 max-w-lg">
              Naast fotografie bied ik ook marketing en AI automation aan. Van
              social media strategie tot het automatiseren van workflows — ik
              combineer creativiteit met technologie.
            </p>
            <Link
              href="/services"
              className="text-xs tracking-widest uppercase text-cream/50 border-b border-cream/20 pb-1 hover:text-cream hover:border-cream/50 transition-colors"
            >
              bekijk services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-4xl md:text-6xl text-ink mb-6">
              Laten we iets
              <br />
              moois maken
            </h2>
            <p className="text-sm text-mid-gray mb-10">
              Neem contact op voor een samenwerking of een vrijblijvend gesprek.
            </p>
            <Link
              href="/contact"
              className="inline-block text-xs tracking-widest uppercase border border-ink px-8 py-4 text-ink hover:bg-ink hover:text-cream transition-all"
            >
              neem contact op
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
