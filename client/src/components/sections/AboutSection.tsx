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
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFB5BA] to-[#FFE4B5] rounded-full blur-2xl opacity-60 scale-110" />
              
              {/* Profile image with glass frame */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden glass-card p-2">
                <img 
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663078358779/jzlcpqOHqROkyCDn.jpeg" 
                  alt="Isabel Gorin"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              
              {/* Decorative ring */}
              <div className="absolute -inset-4 border-2 border-white/30 rounded-full" />
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
                  My name is Isabel Gorin, and I am a high school senior attending Arizona School for the Arts, where I've spent the past 7 years exploring my creativity, leadership, and academic passions. At ASA, I have participated in several clubs and activities.
                </p>
                
                <p>
                  In 9th grade, curious about social justice issues, I ran for president of ASA's volunteer club, RISE. As the president since 10th grade, I have organized over 20 volunteering events and expanded the club's mission to include local advocacy to engage students in civil service.
                </p>
                
                <p>
                  My success with RISE encouraged me to get involved in a student-run organization called HeartBEATS, where we connect local refugees with musical instruments. Since joining, I have worked my way up to Program Director and have coordinated instrument drives for our instrument petting zoos, where children of refugee families can engage with musical instruments. HeartBEATS has taught me the meaning of service and the impact on local communities, informing my future goals.
                </p>
                
                <p>
                  In 10th grade, I began leading my school's STEM Society club, fostering student involvement in STEM outside the classroom; I created a coding initiative, where I taught Java basics and Vibe coding using AI, growing our membership from 12 to over 30. I also co-lead my school's Mu Alpha Theta math honors society, working with both middle and high school students within ASA to provide tutoring and engagement through our math olympiad.
                </p>
                
                <p>
                  Finally, through Model UN, I have learned valuable leadership skills through diplomacy and negotiation, sparking my passion for the intersection between STEM and policymaking. These experiences have shaped my career aspirations. In college, I plan to study policy and international relations, hoping to get involved in environmental and social justice through political reform. With this passion in mind, in my senior capstone project, I wrote about the environmental impacts of AI, an issue close to my heart, and one I feel is crucial to today's social and technological development.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-[#C65D3B]/20">
                <div className="text-center">
                  <p className="font-display text-3xl font-semibold text-[#C65D3B]">7</p>
                  <p className="font-accent text-sm text-[#5D3A3A]/70">Years at ASA</p>
                </div>
                <div className="text-center">
                  <p className="font-display text-3xl font-semibold text-[#C65D3B]">20+</p>
                  <p className="font-accent text-sm text-[#5D3A3A]/70">Events Organized</p>
                </div>
                <div className="text-center">
                  <p className="font-display text-3xl font-semibold text-[#C65D3B]">∞</p>
                  <p className="font-accent text-sm text-[#5D3A3A]/70">Curiosity</p>
                </div>
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
