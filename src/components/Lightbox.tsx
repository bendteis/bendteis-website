"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import type { PortfolioItem } from "@/data/portfolio";

interface LightboxProps {
  items: PortfolioItem[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({
  items,
  currentIndex,
  onClose,
  onNavigate,
}: LightboxProps) {
  const item = items[currentIndex];

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && currentIndex < items.length - 1)
        onNavigate(currentIndex + 1);
      if (e.key === "ArrowLeft" && currentIndex > 0)
        onNavigate(currentIndex - 1);
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [currentIndex, items.length, onClose, onNavigate]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-ink/95 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-cream/40 hover:text-cream/70 transition-colors text-xs tracking-widest uppercase"
        >
          sluiten
        </button>

        {/* Image placeholder */}
        <div className="w-full bg-ink-light border border-cream/5 flex items-center justify-center min-h-[50vh]">
          <div className="text-center text-cream/30">
            <p className="text-lg font-heading text-cream/60 mb-1">{item.filename}</p>
            <p className="text-xs">{item.title}</p>
          </div>
        </div>

        {/* Info bar */}
        <div className="flex justify-between items-center mt-4 text-xs text-cream/40">
          <div>
            <span>{item.filename}</span>
            <span className="mx-2">/</span>
            <span>{item.location}</span>
            <span className="mx-2">/</span>
            <span>{item.camera}</span>
          </div>
          <span>
            {currentIndex + 1} / {items.length}
          </span>
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-6">
          <button
            onClick={() => currentIndex > 0 && onNavigate(currentIndex - 1)}
            disabled={currentIndex === 0}
            className="text-cream/40 hover:text-cream/70 disabled:text-cream/10 transition-colors text-xs tracking-widest"
          >
            &larr; vorige
          </button>
          <button
            onClick={() =>
              currentIndex < items.length - 1 && onNavigate(currentIndex + 1)
            }
            disabled={currentIndex === items.length - 1}
            className="text-cream/40 hover:text-cream/70 disabled:text-cream/10 transition-colors text-xs tracking-widest"
          >
            volgende &rarr;
          </button>
        </div>
      </div>
    </motion.div>
  );
}
