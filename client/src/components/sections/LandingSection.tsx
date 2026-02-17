/**
 * Landing Section - Click to Enter
 * Arizona sunset gradient with ethereal glassmorphism
 * Warm rose, peach, and soft gold colors
 */

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface LandingSectionProps {
  onEnter: () => void;
}

export default function LandingSection({ onEnter }: LandingSectionProps) {
  return (
    <motion.section
      className="relative min-h-screen flex items-center justify-center overflow-hidden cursor-pointer"
      onClick={onEnter}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://files.manuscdn.com/user_upload_by_module/session_file/310519663078358779/iVDZnBrnPVCThAXQ.png')" }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-white/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6">
        {/* Logo/Name Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-8"
        >
          {/* Glass Card for Name */}
          <div className="glass-card px-12 py-10 inline-block animate-pulse-glow" style={{ background: 'rgba(93, 58, 58, 0.4)' }}>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-white tracking-wide mb-4 drop-shadow-lg">
              Isabel Gorin
            </h1>
            <p className="font-accent text-lg md:text-xl text-white tracking-widest uppercase drop-shadow-md">
              Arizona School for the Arts
            </p>
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="font-body text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto drop-shadow-md"
        >
          Artist • Scholar • Leader • Changemaker
        </motion.p>

        {/* Enter Prompt */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-col items-center"
        >
          <p className="font-accent text-white/80 text-sm tracking-wider mb-4 uppercase">
            Click anywhere to enter
          </p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-8 h-8 text-white/70" />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FFB5BA]/20 to-transparent" />
    </motion.section>
  );
}
