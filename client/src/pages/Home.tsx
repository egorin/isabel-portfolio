/**
 * Isabel Gorin Portfolio - Single Page Scrolling Website
 * Design: Celestial Journey - Ethereal Glassmorphism
 * Three sections: Sunset (About) → Day (Capstone) → Night (Extracurriculars)
 */

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import LandingSection from "@/components/sections/LandingSection";
import AboutSection from "@/components/sections/AboutSection";
import CapstoneSection from "@/components/sections/CapstoneSection";
import ExtracurricularSection from "@/components/sections/ExtracurricularSection";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";


export default function Home() {
  const [hasEntered, setHasEntered] = useState(false);
  const [activeSection, setActiveSection] = useState("landing");
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Track active section based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "capstone", "extracurricular"];
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    if (hasEntered) {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [hasEntered]);

  const handleEnter = () => {
    setHasEntered(true);
    setTimeout(() => {
      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div ref={containerRef} className="relative">

      <AnimatePresence mode="wait">
        {!hasEntered ? (
          <LandingSection key="landing" onEnter={handleEnter} />
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Navigation activeSection={activeSection} />
            <AboutSection />
            <CapstoneSection />
            <ExtracurricularSection />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
