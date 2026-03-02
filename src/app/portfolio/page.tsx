"use client";

import { motion } from "framer-motion";
import PortfolioGrid from "@/components/PortfolioGrid";

export default function PortfolioPage() {
  return (
    <section className="pt-28 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="font-heading text-4xl md:text-5xl text-ink mb-3">
            Portfolio
          </h1>
          <p className="text-xs text-mid-gray tracking-wide">
            Shot on Fujifilm X100VI
          </p>
        </motion.div>

        <PortfolioGrid />
      </div>
    </section>
  );
}
