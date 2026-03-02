"use client";

import { motion } from "framer-motion";
import type { Service } from "@/data/services";

export default function ServiceCard({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="border-t border-warm-gray/50 pt-8"
    >
      <h3 className="font-heading text-2xl text-ink mb-4">{service.title}</h3>
      <p className="text-sm text-mid-gray leading-loose mb-6">
        {service.description}
      </p>
      <ul className="space-y-1.5">
        {service.features.map((feature) => (
          <li key={feature} className="text-xs text-brown flex items-center gap-2">
            <span className="w-1 h-1 bg-warm-gray rounded-full flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
