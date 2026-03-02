"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-16"
      >
        <h3 className="font-heading text-2xl text-ink mb-2">Verstuurd.</h3>
        <p className="text-sm text-mid-gray">
          Bedankt voor je bericht. Ik neem zo snel mogelijk contact op.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-lg">
      <div>
        <label htmlFor="name" className="block text-xs text-mid-gray mb-2 tracking-wide">
          Naam
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-0 py-2 bg-transparent border-b border-warm-gray focus:border-ink outline-none transition-colors text-sm text-ink"
          placeholder="Je naam"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-xs text-mid-gray mb-2 tracking-wide">
          E-mail
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-0 py-2 bg-transparent border-b border-warm-gray focus:border-ink outline-none transition-colors text-sm text-ink"
          placeholder="je@email.nl"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-xs text-mid-gray mb-2 tracking-wide">
          Onderwerp
        </label>
        <select
          id="subject"
          name="subject"
          className="w-full px-0 py-2 bg-transparent border-b border-warm-gray focus:border-ink outline-none transition-colors text-sm text-ink"
        >
          <option value="fotografie">Fotografie & Video</option>
          <option value="marketing">Marketing</option>
          <option value="ai-automation">AI Automation</option>
          <option value="anders">Anders</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs text-mid-gray mb-2 tracking-wide">
          Bericht
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-0 py-2 bg-transparent border-b border-warm-gray focus:border-ink outline-none transition-colors text-sm text-ink resize-none"
          placeholder="Vertel me over je project..."
        />
      </div>

      <button
        type="submit"
        className="text-xs tracking-widest uppercase text-ink border-b border-ink pb-1 hover:text-brown hover:border-brown transition-colors mt-4"
      >
        verstuur bericht
      </button>
    </form>
  );
}
