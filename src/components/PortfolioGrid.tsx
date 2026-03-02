"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { portfolioItems } from "@/data/portfolio";
import Lightbox from "./Lightbox";

export default function PortfolioGrid() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
        {portfolioItems.map((item, index) => (
          <div
            key={item.id}
            className="relative aspect-square bg-light-gray border border-warm-gray/20 cursor-pointer group overflow-hidden"
            onClick={() => setLightboxIndex(index)}
          >
            <img
              src={item.image}
              alt={item.title || item.filename}
              className="w-full h-full object-cover"
              loading="lazy"
            />

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/40 transition-all duration-300 flex items-end p-3 opacity-0 group-hover:opacity-100">
              <div>
                <p className="text-cream text-xs">{item.title}</p>
                <p className="text-cream/50 text-[10px]">{item.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            items={portfolioItems}
            currentIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
            onNavigate={setLightboxIndex}
          />
        )}
      </AnimatePresence>
    </>
  );
}
