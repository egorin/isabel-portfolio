/**
 * Capstone Section - Frutiger Aero Aesthetic
 * Bright daytime scene with rolling hills
 * Sky blues, soft greens, bright whites
 * Features the AI Sustainability Policy Brief
 */

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FileText, Download, ExternalLink, Leaf, Cpu, Droplets, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export default function CapstoneSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showPdf, setShowPdf] = useState(false);

  const keyTopics = [
    {
      icon: Droplets,
      title: "Water Usage",
      description: "Examining AI data centers' water consumption and cooling requirements"
    },
    {
      icon: Zap,
      title: "Energy Impact",
      description: "Analyzing electricity demands of AI training and inference"
    },
    {
      icon: Cpu,
      title: "Semiconductor Production",
      description: "Understanding the environmental cost of chip manufacturing"
    },
    {
      icon: Leaf,
      title: "Sustainable Solutions",
      description: "Policy recommendations for clean energy integration"
    }
  ];

  return (
    <section
      id="capstone"
      ref={ref}
      className="relative min-h-screen py-24 overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-frutiger.png')" }}
      />
      
      {/* Light overlay for readability */}
      <div className="absolute inset-0 bg-white/20" />

      {/* Floating bubbles decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: 40 + Math.random() * 60,
              height: 40 + Math.random() * 60,
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              background: "linear-gradient(135deg, rgba(135, 206, 235, 0.4) 0%, rgba(152, 255, 152, 0.3) 100%)",
              border: "1px solid rgba(255, 255, 255, 0.5)",
            }}
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-accent text-sm tracking-widest uppercase text-[#2E7D32] mb-4">
            Senior Capstone Project
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-[#1565C0] mb-6 leading-tight">
            The Future of AI<br />& Sustainability
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#87CEEB] to-[#98FF98] mx-auto rounded-full" />
        </motion.div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          {/* Hero Card with Policy Brief */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card p-8 md:p-12 mb-12"
            style={{ background: "rgba(255, 255, 255, 0.85)" }}
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Text Content */}
              <div>
                <h3 className="font-display text-2xl md:text-3xl font-semibold text-[#1565C0] mb-4">
                  What No One Knows About the Future of AI and Sustainability
                </h3>
                <p className="font-accent text-sm text-[#2E7D32] mb-4">
                  Assessing the Environmental Impacts of AI
                </p>
                <p className="font-body text-[#37474F] leading-relaxed mb-6">
                  In a world rapidly changing with the development of artificial intelligence, it can be 
                  difficult to accurately assess the environmental and political changes that come along 
                  with it. This policy brief reviews the most common concerns about AI's environmental 
                  impact—including water usage and electricity consumption—to propose effective policy 
                  solutions that support clean energy implementation.
                </p>
                
                <div className="flex flex-wrap gap-3">
                  <Dialog open={showPdf} onOpenChange={setShowPdf}>
                    <DialogTrigger asChild>
                      <Button 
                        className="bg-[#1565C0] hover:bg-[#0D47A1] text-white font-accent"
                      >
                        <FileText className="w-4 h-4 mr-2" />
                        Read Policy Brief
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl h-[85vh]">
                      <DialogHeader>
                        <DialogTitle className="font-display text-xl">
                          Senior Capstone Policy Brief
                        </DialogTitle>
                      </DialogHeader>
                      <iframe
                        src="/Senior_Capstone_Isabel_Gorin.pdf"
                        className="w-full h-full rounded-lg"
                        title="Senior Capstone Policy Brief"
                      />
                    </DialogContent>
                  </Dialog>
                  
                  <Button 
                    variant="outline"
                    className="border-[#2E7D32] text-[#2E7D32] hover:bg-[#2E7D32]/10 font-accent"
                    asChild
                  >
                    <a href="/Senior_Capstone_Isabel_Gorin.pdf" download>
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF
                    </a>
                  </Button>
                </div>
              </div>

              {/* Visual */}
              <div className="relative">
                <img 
                  src="/images/ai-sustainability.png" 
                  alt="AI and Sustainability Visualization"
                  className="w-full rounded-2xl shadow-lg"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#87CEEB] to-[#98FF98] rounded-full opacity-50 blur-xl" />
              </div>
            </div>
          </motion.div>

          {/* Key Topics Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h4 className="font-display text-2xl font-semibold text-[#1565C0] text-center mb-8">
              Key Topics Explored
            </h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {keyTopics.map((topic, index) => (
                <motion.div
                  key={topic.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300"
                  style={{ background: "rgba(255, 255, 255, 0.9)" }}
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#87CEEB] to-[#98FF98] flex items-center justify-center">
                    <topic.icon className="w-7 h-7 text-[#1565C0]" />
                  </div>
                  <h5 className="font-display text-lg font-semibold text-[#1565C0] mb-2">
                    {topic.title}
                  </h5>
                  <p className="font-body text-sm text-[#37474F]">
                    {topic.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Creative Companion Piece Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12"
          >
            <div 
              className="glass-card p-8 text-center"
              style={{ background: "rgba(255, 255, 255, 0.8)" }}
            >
              <h4 className="font-display text-xl font-semibold text-[#1565C0] mb-3">
                Creative Companion Piece
              </h4>
              <p className="font-body text-[#37474F] mb-4">
                A picture book or song exploring the themes of AI and environmental sustainability
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#87CEEB]/20 text-[#1565C0] font-accent text-sm">
                <ExternalLink className="w-4 h-4" />
                Coming Soon
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Transition gradient to night section */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-64"
        style={{
          background: "linear-gradient(180deg, transparent 0%, #4A148C 50%, #1A0A2E 100%)"
        }}
      />
    </section>
  );
}
