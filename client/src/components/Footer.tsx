/**
 * Footer Component
 * Continues the night/space theme from the extracurricular section
 */

import { motion } from "framer-motion";
import { Mail, Linkedin, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer 
      className="relative py-16 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0A0A1A 0%, #050510 100%)"
      }}
    >
      {/* Subtle star background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.3 + Math.random() * 0.7,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            className="mb-8 mx-auto w-12 h-12 rounded-full glass-card-dark flex items-center justify-center hover:scale-110 transition-transform"
            whileHover={{ y: -5 }}
          >
            <ArrowUp className="w-5 h-5 text-[#00FFFF]" />
          </motion.button>

          {/* Name */}
          <h3 className="font-display text-3xl md:text-4xl font-semibold text-white mb-4">
            Isabel Gorin
          </h3>
          
          <p className="font-body text-white/60 mb-8 max-w-md mx-auto">
            Arizona School for the Arts, Class of 2026
          </p>

          {/* Contact Links */}
          <div className="flex justify-center gap-4 mb-12">
            <a
              href="mailto:contact@example.com"
              className="w-12 h-12 rounded-full glass-card-dark flex items-center justify-center hover:scale-110 transition-transform group"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-white/60 group-hover:text-[#00FFFF] transition-colors" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full glass-card-dark flex items-center justify-center hover:scale-110 transition-transform group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-white/60 group-hover:text-[#00FFFF] transition-colors" />
            </a>
          </div>

          {/* Divider */}
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto mb-8" />

          {/* Copyright */}
          <p className="font-accent text-sm text-white/40">
            © {new Date().getFullYear()} Isabel Gorin. All rights reserved.
          </p>
          
          <p className="font-accent text-xs text-white/30 mt-2">
            Senior Capstone Project • Arizona School for the Arts
          </p>
        </div>
      </div>
    </footer>
  );
}
