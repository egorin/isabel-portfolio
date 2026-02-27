/**
 * About Section - Arizona Sunset Theme
 * Warm rose, peach, and soft gold gradients
 * Personal bio and introduction
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="relative min-h-screen py-24 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #FFB5BA 0%, #FFDAB9 30%, #FFE4B5 60%, #87CEEB 100%)"
      }}
    >
      {/* Floating Particles Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white shadow-lg"
            style={{
              width: 3 + Math.random() * 4,
              height: 3 + Math.random() * 4,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: "0 0 10px rgba(255, 255, 255, 0.6)"
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0.4, 0.9, 0.4],
            }}
            transition={{
              duration: 6 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Soft glowing orbs */}
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-white/20 blur-3xl" />
        <div className="absolute bottom-40 right-20 w-96 h-96 rounded-full bg-[#FFE4B5]/30 blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-48 h-48 rounded-full bg-[#FFDAB9]/40 blur-2xl" />
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-[#5D3A3A] mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-[#C65D3B]/60 mx-auto rounded-full" />
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFB5BA] to-[#FFE4B5] rounded-3xl blur-2xl opacity-60 scale-105" />
              
              {/* Profile image with glass frame - larger rectangular */}
              <div className="relative w-80 h-96 md:w-96 md:h-[500px] rounded-3xl overflow-hidden glass-card p-2">
                <img 
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663078358779/jzlcpqOHqROkyCDn.jpeg" 
                  alt="Isabel Gorin"
                  className="w-full h-full rounded-2xl object-cover"
                />
              </div>
              
              {/* Decorative border */}
              <div className="absolute -inset-3 border-2 border-white/30 rounded-3xl" />
            </div>
          </motion.div>

          {/* Bio Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="glass-card p-8 md:p-10">
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-[#5D3A3A] mb-6">
                Hello, I'm Isabel Gorin
              </h3>
              
              <div className="space-y-4 font-body text-[#5D3A3A]/90 leading-relaxed">
                <p>
                  I am a high school senior at Arizona School for the Arts, where I've spent the past 7 years exploring creativity, leadership, and academic passions through clubs like RISE, HeartBEATS, STEM Society, Mu Alpha Theta, and Model UN.
                </p>
                
                <p>
                  As president of RISE since 10th grade, I've organized over 20 volunteering events and expanded our mission to include local advocacy. My involvement with HeartBEATS, where I serve as Program Director, has deepened my commitment to service—coordinating instrument drives and petting zoos that connect refugee families with music.
                </p>
                
                <p>
                  Leading STEM Society, I created a coding initiative teaching Java and AI-powered Vibe coding, growing membership from 12 to over 30 students. As co-leader of Mu Alpha Theta, I provide tutoring and organize our math olympiad. Through Model UN, I've developed diplomacy and negotiation skills that sparked my passion for the intersection of STEM and policymaking.
                </p>
                
                <p>
                  These experiences have shaped my career aspirations: studying policy and international relations in college to advance environmental and social justice through political reform. My senior capstone project explores the environmental impacts of AI—an issue close to my heart and crucial to today's social and technological development.
                </p>
              </div>


            </div>
          </motion.div>
        </div>
      </div>

      {/* Transition to next section - gradient fade */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-48"
        style={{
          background: "linear-gradient(180deg, transparent 0%, #87CEEB 100%)"
        }}
      />
    </section>
  );
}
