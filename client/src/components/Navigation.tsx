/**
 * Navigation Component
 * Floating pill navigation that transforms based on section
 * Ethereal glassmorphism style
 */

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface NavigationProps {
  activeSection: string;
}

const sections = [
  { id: "about", label: "About", color: "#C65D3B" },
  { id: "capstone", label: "Capstone", color: "#1565C0" },
  { id: "extracurricular", label: "Activities", color: "#00FFFF" }
];

export default function Navigation({ activeSection }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show/hide based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      // Add background when scrolled
      setIsScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Determine background style based on active section
  const getNavBackground = () => {
    if (!isScrolled) return "rgba(255, 255, 255, 0.15)";
    
    switch (activeSection) {
      case "about":
        return "rgba(93, 58, 58, 0.85)";
      case "capstone":
        return "rgba(21, 101, 192, 0.85)";
      case "extracurricular":
        return "rgba(26, 10, 46, 0.9)";
      default:
        return "rgba(255, 255, 255, 0.9)";
    }
  };

  const getTextColor = () => {
    if (!isScrolled) return "text-white";
    
    switch (activeSection) {
      case "about":
        return "text-white";
      case "capstone":
        return "text-white";
      case "extracurricular":
        return "text-white";
      default:
        return "text-white";
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ 
        y: isVisible ? 0 : -100, 
        opacity: isVisible ? 1 : 0 
      }}
      transition={{ duration: 0.3 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
    >
      <motion.div
        className="flex items-center gap-1 px-2 py-2 rounded-full backdrop-blur-xl border border-white/20 shadow-lg"
        style={{ background: getNavBackground() }}
        layout
      >
        {/* Logo/Name */}
        <button
          onClick={() => scrollToSection("about")}
          className={`px-4 py-2 font-display text-lg font-semibold ${getTextColor()} hover:opacity-80 transition-opacity`}
        >
          IG
        </button>

        {/* Divider */}
        <div className="w-px h-6 bg-white/30" />

        {/* Section Links */}
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={`relative px-4 py-2 font-accent text-sm transition-all duration-300 rounded-full ${
              activeSection === section.id
                ? `${getTextColor()} font-semibold`
                : `${getTextColor()} opacity-70 hover:opacity-100`
            }`}
          >
            {section.label}
            {activeSection === section.id && (
              <motion.div
                layoutId="activeIndicator"
                className="absolute inset-0 rounded-full -z-10"
                style={{ 
                  background: isScrolled 
                    ? "rgba(255, 255, 255, 0.3)" 
                    : "rgba(255, 255, 255, 0.15)" 
                }}
                transition={{ type: "spring", duration: 0.5 }}
              />
            )}
          </button>
        ))}
      </motion.div>
    </motion.nav>
  );
}
