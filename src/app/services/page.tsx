"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";

export default function ServicesPage() {
  return (
    <section className="pt-28 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="font-heading text-4xl md:text-5xl text-ink mb-3">
            Services
          </h1>
          <p className="text-sm text-mid-gray leading-loose max-w-lg">
            Naast fotografie bied ik marketing en AI automation aan. Een
            complete aanpak voor jouw merk.
          </p>
        </motion.div>

        <div className="space-y-16">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Werkwijze */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-warm-gray/50 mt-24 pt-16"
        >
          <h2 className="font-heading text-3xl text-ink mb-12">Werkwijze</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Kennismaking", desc: "We bespreken je doelen en wensen." },
              { step: "02", title: "Strategie", desc: "Een plan dat past bij jouw merk." },
              { step: "03", title: "Uitvoering", desc: "Hands-on, van concept tot resultaat." },
              { step: "04", title: "Oplevering", desc: "Meten, bijsturen, verbeteren." },
            ].map((item) => (
              <div key={item.step}>
                <span className="text-warm-gray text-2xl font-heading block mb-2">
                  {item.step}
                </span>
                <h3 className="text-sm text-ink font-medium mb-1">{item.title}</h3>
                <p className="text-xs text-mid-gray">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <div className="border-t border-warm-gray/50 mt-24 pt-16">
          <h2 className="font-heading text-3xl text-ink mb-4">
            Laten we samenwerken
          </h2>
          <Link
            href="/contact"
            className="text-xs tracking-widest uppercase text-ink border-b border-ink pb-1 hover:text-brown hover:border-brown transition-colors"
          >
            neem contact op
          </Link>
        </div>
      </div>
    </section>
  );
}
