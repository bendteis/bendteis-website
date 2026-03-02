"use client";

import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <section className="pt-28 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="font-heading text-4xl md:text-5xl text-ink mb-3">
            Contact
          </h1>
          <p className="text-sm text-mid-gray max-w-md">
            Een project in gedachten? Stuur me een bericht.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <ContactForm />
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xs text-mid-gray tracking-wide mb-4">
                Direct contact
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-mid-gray">e-mail</p>
                  <a
                    href="mailto:info@bendteis.nl"
                    className="text-sm text-ink hover:text-brown transition-colors"
                  >
                    info@bendteis.nl
                  </a>
                </div>
                <div>
                  <p className="text-xs text-mid-gray">instagram</p>
                  <a
                    href="https://instagram.com/bendteis"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-ink hover:text-brown transition-colors"
                  >
                    @bendteis
                  </a>
                </div>
                <div>
                  <p className="text-xs text-mid-gray">linkedin</p>
                  <a
                    href="https://linkedin.com/in/bendteis"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-ink hover:text-brown transition-colors"
                  >
                    bendteis
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-warm-gray/30 pt-6">
              <p className="text-xs text-mid-gray leading-relaxed">
                Ik reageer normaal gesproken binnen 24 uur. Voor dringende
                zaken bereik je me het snelst via Instagram DM.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
