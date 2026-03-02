/**
 * Capstone Section - Frutiger Aero Aesthetic
 * Bright daytime scene with rolling hills
 * Sky blues, soft greens, bright whites
 * Features the AI Sustainability Policy Brief
 */

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FileText, Download, ExternalLink, Leaf, Cpu, Droplets, Zap, Music } from "lucide-react";
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
        style={{ backgroundImage: "url('https://files.manuscdn.com/user_upload_by_module/session_file/310519663078358779/vDborPuqRgbUoNNh.png')" }}
      />
      
      {/* Light overlay for readability */}
      <div className="absolute inset-0 bg-white/20" />

      {/* Floating bubbles decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => {
          const size = 50 + Math.random() * 80;
          return (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: size,
                height: size,
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
                background: `radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.8) 0%, rgba(135, 206, 235, 0.4) 30%, rgba(100, 180, 220, 0.2) 100%)`,
                border: "2px solid rgba(255, 255, 255, 0.6)",
                boxShadow: `inset -10px -10px 20px rgba(255, 255, 255, 0.3), inset 10px 10px 20px rgba(100, 180, 220, 0.2), 0 8px 20px rgba(135, 206, 235, 0.3)`,
              }}
              animate={{
                y: [0, -40, 0],
                x: [0, Math.random() * 20 - 10, 0],
                scale: [1, 1.08, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 7 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          );
        })}
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
                  What No One Understands About the Future of AI and Sustainability
                </h3>
                <p className="font-accent text-sm text-[#2E7D32] mb-4">
                  Assessing the Environmental Impacts of AI
                </p>
                <p className="font-body text-[#37474F] leading-relaxed mb-6">
                  In a world rapidly changing with the development of artificial intelligence, it can be difficult to accurately assess the environmental and political changes that accompany it. This policy brief reviews the most common concerns about AI's environmental impact, including water usage and electricity consumption, to propose effective policy solutions that support clean energy implementation.
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
                        src="https://docs.google.com/viewer?url=https://d2xsxph8kpxj0f.cloudfront.net/310519663078358779/dzAvsv2VFQWwzWaFUEjKgc/SeniorCapstone(1)-IsabelGorin_fb7fef37.pdf&embedded=true"
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
                    <a href="https://docs.google.com/viewer?url=https://d2xsxph8kpxj0f.cloudfront.net/310519663078358779/dzAvsv2VFQWwzWaFUEjKgc/Holistically_Evaluating_the_Environmental_Impact_o_7d366798.pdf" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Scientific Article
                    </a>
                  </Button>
                </div>
              </div>

                {/* Visual */}
              <div className="relative">
                <img 
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663078358779/dzAvsv2VFQWwzWaFUEjKgc/1_1b4c2018.png" 
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

          {/* Creative Companion Piece */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12"
          >
            <div 
              className="glass-card p-8 md:p-12"
              style={{ background: "rgba(255, 255, 255, 0.85)" }}
            >
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Text Content */}
                <div>
                  <h3 className="font-display text-2xl md:text-3xl font-semibold text-[#1565C0] mb-4">
                    Creative Companion Piece
                  </h3>
                  <p className="font-body text-[#37474F] leading-relaxed mb-6">
                    For my creative companion piece, I chose to write a song. Drawing from my foundation in choir and music composition, I created “Artificial Constraint” using Logic Pro. My inspiration for this song came from Penelope Scott’s “Rät”, a unique lyrical masterpiece that calls out Elon Musk and other tech giants for corruption. This was consistent with my vision for this project, which focuses on the “artificial constraints” imposed on innovation and sustainability by those in power. Specifically, I aim to speak directly to those in power and empower the millions of young people who will grow up facing the repercussions. Ultimately, this song is both a call to action and a playful portrayal of the absurdity of our political systems and the race for innovation. This is conveyed in the song’s dreamy, psychedelic tone and in the retro-futuristic collages that accompany it.
                  </p>
                  
                  <Button 
                    size="lg"
                    className="bg-[#2E7D32] hover:bg-[#1B5E20] text-white font-accent text-base px-8 py-6"
                    asChild
                  >
                    <a
                      href="https://docs.google.com/document/d/1x269xsyefOGBikOqoFOI5clf_mYMV89Ar7OgQQSDfV8/edit?tab=t.0"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Read full Artist's Statement
                    </a>
                  </Button>
                </div>

                {/* Music Video */}
                <div className="relative">
                  <video
                    controls
                    className="w-full rounded-2xl shadow-lg"
                    style={{ aspectRatio: "16/9" }}
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663078358779/dzAvsv2VFQWwzWaFUEjKgc/MyMovie_9a4aac74.mp4"
                  >
                    Your browser does not support the video element.
                  </video>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#98FF98] to-[#87CEEB] rounded-full opacity-50 blur-xl" />
                </div>
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
