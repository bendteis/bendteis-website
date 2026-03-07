"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Hero from "@/components/Hero";
import { portfolioItems, type PortfolioItem } from "@/data/portfolio";

const statementPhotos = [
  { item: portfolioItems[2], label: "Reisfotografie", aspect: "aspect-[4/5]" },
  {
    item: portfolioItems[7],
    label: "Straatfotografie",
    aspect: "aspect-[3/4]",
  },
  { item: portfolioItems[13], label: "Architectuur", aspect: "aspect-[2/3]" },
  { item: portfolioItems[17], label: "Natuur", aspect: "aspect-[3/4]" },
  { item: portfolioItems[27], label: "Landschap", aspect: "aspect-[4/5]" },
];

const aboutPhotos = [
  portfolioItems[4],
  portfolioItems[15],
  portfolioItems[20],
];

const collectionPhotos = [
  { item: portfolioItems[23], label: "Eilandlicht", num: "01" },
  { item: portfolioItems[25], label: "Kustlijn", num: "02" },
  { item: portfolioItems[28], label: "Funchal", num: "03" },
  { item: portfolioItems[30], label: "Natuur", num: "04" },
  { item: portfolioItems[33], label: "Bergen", num: "05" },
  { item: portfolioItems[35], label: "Architectuur", num: "06" },
  { item: portfolioItems[38], label: "Gouden uur", num: "07" },
];

function NumberedPhoto({
  item,
  label,
  num,
  delay = 0,
}: {
  item: PortfolioItem;
  label: string;
  num: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <p className="text-[10px] tracking-[0.2em] text-mid-gray mb-2">
        {num}/
      </p>
      <div className="relative overflow-hidden aspect-[4/3] group">
        <img
          src={item.image}
          alt={label}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-amber/5 mix-blend-multiply pointer-events-none" />
      </div>
      <p className="text-[10px] tracking-[0.15em] uppercase text-mid-gray mt-2">
        {label}
      </p>
    </motion.div>
  );
}

function Divider() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="border-t border-warm-gray/50" />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Hero />

      <Divider />

      {/* Statement */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-heading text-3xl md:text-5xl lg:text-6xl text-ink leading-[1.05] uppercase mb-6"
          >
            Ik breng warmte en
            <br />
            verhaal in elke foto
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm text-mid-gray leading-loose max-w-md mx-auto"
          >
            Ik begon mijn reis als fotograaf met landschappen en natuur, en
            ontwikkelde me richting portret- en straatfotografie met een analoge
            esthetiek.
          </motion.p>
        </div>

        {/* Staggered photo row — arc pattern via items-end + different aspects */}
        <div className="max-w-5xl mx-auto">
          <div className="hidden md:flex items-end gap-4">
            {statementPhotos.map(({ item, label, aspect }, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex-1"
              >
                <div className={`relative overflow-hidden group ${aspect}`}>
                  <img
                    src={item.image}
                    alt={label}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-amber/5 mix-blend-multiply pointer-events-none" />
                </div>
                <p className="text-[10px] tracking-[0.15em] uppercase text-mid-gray mt-3">
                  {label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Mobile: 2-column grid */}
          <div className="md:hidden grid grid-cols-2 gap-3">
            {statementPhotos.slice(0, 4).map(({ item, label }, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="relative overflow-hidden aspect-[3/4]">
                  <img
                    src={item.image}
                    alt={label}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-amber/5 mix-blend-multiply pointer-events-none" />
                </div>
                <p className="text-[10px] tracking-[0.15em] uppercase text-mid-gray mt-2">
                  {label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* About / Mijn Aanpak */}
      <section className="py-20 md:py-28 px-6 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-gold/[0.04] rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {/* Left column */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="font-heading text-4xl md:text-5xl text-ink uppercase mb-6">
                  Mijn Aanpak
                </h2>
                <p className="text-sm text-mid-gray leading-loose mb-8 max-w-sm">
                  Mijn camera is mijn schetsboek. Ik shoot op gevoel en probeer
                  unieke, eerlijke momenten vast te leggen die tijdloos zijn.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="max-w-[280px]"
              >
                <div className="relative overflow-hidden aspect-[4/3] group">
                  <img
                    src={aboutPhotos[0].image}
                    alt="Madeira"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-amber/5 mix-blend-multiply pointer-events-none" />
                </div>
                <p className="text-[10px] tracking-[0.15em] uppercase text-mid-gray mt-2">
                  Madeira, 2024
                </p>
              </motion.div>
            </div>

            {/* Right column */}
            <div>
              {/* Overlapping photo collage */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative h-[320px] md:h-[400px] mb-12"
              >
                <div className="absolute top-0 right-0 w-[65%] h-[85%] overflow-hidden z-10 group">
                  <img
                    src={aboutPhotos[1].image}
                    alt="Madeira"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-amber/5 mix-blend-multiply pointer-events-none" />
                </div>
                <div className="absolute bottom-0 left-0 w-[55%] h-[70%] overflow-hidden z-20 shadow-2xl group">
                  <img
                    src={aboutPhotos[2].image}
                    alt="Madeira"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-amber/5 mix-blend-multiply pointer-events-none" />
                </div>
              </motion.div>

              <div className="w-full h-px bg-warm-gray/30 mb-8" />

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-8"
              >
                <h3 className="font-heading text-2xl text-ink uppercase mb-3">
                  Mijn Doel
                </h3>
                <p className="text-sm text-mid-gray leading-loose max-w-sm">
                  Een warme, ontspannen sfeer creëren tijdens het vastleggen
                  &mdash; zodat je je comfortabel voelt en het proces kunt
                  genieten.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h3 className="font-heading text-2xl text-ink uppercase mb-3">
                  Mijn Principes
                </h3>
                <p className="text-sm text-mid-gray leading-loose max-w-sm">
                  Iedere klant en elk project verdient een individuele aanpak. Ik
                  probeer het verhaal achter het beeld te begrijpen.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* Recent Collection */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-heading text-3xl md:text-5xl text-ink uppercase leading-[1.05]"
            >
              Recente Clicks
              <br />
              Uit Mijn Collectie
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-sm text-mid-gray leading-loose md:pt-4 max-w-sm md:ml-auto"
            >
              Ik creëer visuele verhalen die unieke ervaringen vastleggen. Met
              mijn passie voor het ontdekken van schoonheid in elk moment.
            </motion.p>
          </div>

          {/* Collection date */}
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-heading text-2xl text-ink uppercase mb-8"
          >
            Madeira 2024
          </motion.h3>

          {/* Row 1: 3 photos */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
            {collectionPhotos.slice(0, 3).map((photo, i) => (
              <NumberedPhoto
                key={photo.item.id}
                item={photo.item}
                label={photo.label}
                num={photo.num}
                delay={i * 0.1}
              />
            ))}
          </div>

          {/* Row 2: 4 columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <NumberedPhoto
              item={collectionPhotos[3].item}
              label={collectionPhotos[3].label}
              num={collectionPhotos[3].num}
            />
            <NumberedPhoto
              item={collectionPhotos[4].item}
              label={collectionPhotos[4].label}
              num={collectionPhotos[4].num}
              delay={0.1}
            />

            {/* Date card + photo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="font-heading text-2xl md:text-3xl text-ink uppercase leading-tight mb-4">
                Collectie
                <br />
                2024
              </h4>
              <p className="text-[10px] tracking-[0.2em] text-mid-gray mb-2">
                {collectionPhotos[5].num}/
              </p>
              <div className="relative overflow-hidden aspect-[4/3] group">
                <img
                  src={collectionPhotos[5].item.image}
                  alt={collectionPhotos[5].label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-amber/5 mix-blend-multiply pointer-events-none" />
              </div>
              <p className="text-[10px] tracking-[0.15em] uppercase text-mid-gray mt-2">
                {collectionPhotos[5].label}
              </p>
            </motion.div>

            <NumberedPhoto
              item={collectionPhotos[6].item}
              label={collectionPhotos[6].label}
              num={collectionPhotos[6].num}
              delay={0.3}
            />
          </div>

          {/* View all link */}
          <div className="mt-12 text-center">
            <Link
              href="/portfolio"
              className="inline-block text-xs tracking-widest uppercase border border-amber/40 px-8 py-4 text-amber hover:border-amber hover:bg-amber hover:text-cream transition-all"
            >
              bekijk alle foto&apos;s
            </Link>
          </div>
        </div>
      </section>

      {/* Contact — Dark */}
      <section className="py-20 md:py-28 px-6 bg-warm-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-amber/[0.02]" />
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-amber/8 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[10px] tracking-[0.3em] uppercase text-gold/50 mb-3">
              Neem direct contact op
            </p>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
              <h2 className="font-heading text-4xl md:text-6xl text-cream uppercase">
                Contact
              </h2>
              <Link
                href="/contact"
                className="text-xs tracking-widest uppercase text-gold/60 flex items-center gap-2 hover:text-gold transition-colors"
              >
                Voor al je vragen <span>&rarr;</span>
              </Link>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-6">
                <input
                  type="text"
                  placeholder="Naam"
                  readOnly
                  className="w-full px-0 py-3 bg-transparent border-b border-cream/20 text-sm text-cream/50 placeholder:text-cream/30 outline-none cursor-default"
                />
                <input
                  type="email"
                  placeholder="E-mailadres"
                  readOnly
                  className="w-full px-0 py-3 bg-transparent border-b border-cream/20 text-sm text-cream/50 placeholder:text-cream/30 outline-none cursor-default"
                />
                <textarea
                  placeholder="Je bericht..."
                  readOnly
                  rows={4}
                  className="w-full px-0 py-3 bg-transparent border-b border-cream/20 text-sm text-cream/50 placeholder:text-cream/30 outline-none resize-none cursor-default"
                />
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-amber text-cream text-xs tracking-widest uppercase px-6 py-3 hover:bg-amber/90 transition-colors mt-2"
                >
                  Verstuur Bericht <span>&rarr;</span>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden md:block relative overflow-hidden aspect-[4/3]"
            >
              <img
                src={portfolioItems[40].image}
                alt="Contact"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-amber/10 mix-blend-multiply pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
