"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Hero from "@/components/Hero";
import { portfolioItems } from "@/data/portfolio";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Intro */}
      <section className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm text-mid-gray leading-loose">
              bendteis is een creatief merk dat draait om fotografie met de
              Fujifilm X100VI. Analoge esthetiek, digitale precisie. Daarnaast
              help ik merken groeien met marketing en AI automation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Photo preview */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
            {portfolioItems.slice(0, 4).map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="aspect-square overflow-hidden border border-warm-gray/30"
              >
                <img
                  src={item.image}
                  alt={item.title || item.filename}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/portfolio"
              className="text-xs tracking-widest uppercase text-mid-gray border-b border-warm-gray pb-1 hover:text-ink hover:border-ink transition-colors"
            >
              alle foto&apos;s bekijken
            </Link>
          </div>
        </div>
      </section>

      {/* Services mention */}
      <section className="py-24 px-6 border-t border-warm-gray/30">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl text-ink mb-6">
              Meer dan fotografie
            </h2>
            <p className="text-sm text-mid-gray leading-loose mb-4">
              Naast fotografie bied ik ook marketing en AI automation aan. Van
              social media strategie tot het automatiseren van workflows — ik
              combineer creativiteit met technologie.
            </p>
            <Link
              href="/services"
              className="text-xs tracking-widest uppercase text-mid-gray border-b border-warm-gray pb-1 hover:text-ink hover:border-ink transition-colors"
            >
              bekijk services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 px-6 border-t border-warm-gray/30">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-3xl text-ink mb-4">
              Interesse?
            </h2>
            <p className="text-sm text-mid-gray mb-8">
              Neem contact op voor een samenwerking of een vrijblijvend gesprek.
            </p>
            <Link
              href="/contact"
              className="text-xs tracking-widest uppercase text-ink border-b border-ink pb-1 hover:text-brown hover:border-brown transition-colors"
            >
              contact
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
