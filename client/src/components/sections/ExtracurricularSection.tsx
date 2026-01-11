/**
 * Extracurricular Section - Night/Space Theme
 * Deep space purple, midnight blue, ethereal cyan
 * Interactive cards for activities
 */

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { 
  Globe, Music, Palette, Users, Award, Heart, 
  Sparkles, GraduationCap, ExternalLink, ChevronRight,
  Mic, BookOpen, Star
} from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface Activity {
  id: string;
  title: string;
  category: "leadership" | "arts";
  icon: React.ElementType;
  shortDesc: string;
  fullDesc: string;
  highlights?: string[];
  mediaPlaceholder?: boolean;
  link?: string;
}

const activities: Activity[] = [
  {
    id: "model-un",
    title: "Model United Nations",
    category: "leadership",
    icon: Globe,
    shortDesc: "Diplomatic excellence and global awareness",
    fullDesc: "As an active participant in Model UN, I've developed skills in diplomacy, public speaking, and international relations. Through conference participation and position paper writing, I've gained deep insights into global issues and the complexities of international cooperation.",
    highlights: ["Conference Awards", "Position Papers", "Diplomatic Skills"]
  },
  {
    id: "heartbeats",
    title: "HeartBeats Director",
    category: "leadership",
    icon: Heart,
    shortDesc: "Leading a community music initiative",
    fullDesc: "As the director of HeartBeats, I lead a program that brings the healing power of music to those who need it most. This role has taught me about servant leadership, program management, and the profound impact that arts can have on community wellbeing.",
    highlights: ["Program Leadership", "Community Impact", "Team Management"]
  },
  {
    id: "asa-ambassador",
    title: "ASA Ambassador",
    category: "leadership",
    icon: GraduationCap,
    shortDesc: "Representing Arizona School for the Arts",
    fullDesc: "As an ASA Ambassador, I represent our school to prospective students and families through campus tours and outreach events. This role allows me to share my passion for arts education and help others discover the unique opportunities at ASA.",
    highlights: ["Campus Tours", "Student Outreach", "School Representation"]
  },
  {
    id: "rise",
    title: "RISE",
    category: "leadership",
    icon: Users,
    shortDesc: "Student empowerment in local policy",
    fullDesc: "Through RISE, I engage in student empowerment initiatives focused on local policy and volunteering. This program has deepened my understanding of civic engagement and the importance of youth voices in shaping our communities.",
    highlights: ["Policy Advocacy", "Volunteering", "Youth Empowerment"]
  },
  {
    id: "stem-society",
    title: "STEM Society",
    category: "leadership",
    icon: Sparkles,
    shortDesc: "Promoting STEM education and curiosity",
    fullDesc: "As a member of STEM Society, I work to promote science, technology, engineering, and mathematics education among my peers. We organize events and activities that spark curiosity and make STEM accessible and exciting for all students.",
    highlights: ["STEM Education", "Event Organization", "Peer Mentorship"]
  },
  {
    id: "science-opera",
    title: "Global Science Opera",
    category: "arts",
    icon: Globe,
    shortDesc: "International collaborative arts project",
    fullDesc: "The Global Science Opera project represents a unique intersection of science and art, bringing together students from around the world to create operatic works inspired by scientific themes. This experience has expanded my understanding of how art can communicate complex ideas across cultures.",
    highlights: ["International Collaboration", "Science & Art Fusion", "Performance"],
    mediaPlaceholder: true
  },
  {
    id: "chamber-choir",
    title: "Chamber Choir",
    category: "arts",
    icon: Mic,
    shortDesc: "Vocal excellence and ensemble performance",
    fullDesc: "As a member of Chamber Choir, I've honed my vocal skills while learning the art of ensemble performance. The discipline of choral singing has taught me about harmony—both musical and interpersonal—and the beauty of voices coming together as one.",
    highlights: ["Vocal Performance", "Ensemble Work", "Musical Growth"],
    mediaPlaceholder: true
  },
  {
    id: "visual-arts",
    title: "Visual Arts Portfolio",
    category: "arts",
    icon: Palette,
    shortDesc: "Paintings and musical compositions",
    fullDesc: "My visual arts portfolio represents years of exploration across various media, from painting to digital art. Each piece reflects my journey of self-expression and my belief that visual art can communicate emotions and ideas that words cannot capture.",
    highlights: ["Paintings", "Musical Compositions", "Creative Expression"],
    mediaPlaceholder: true
  }
];

export default function ExtracurricularSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);
  const [filter, setFilter] = useState<"all" | "leadership" | "arts">("all");

  const filteredActivities = filter === "all" 
    ? activities 
    : activities.filter(a => a.category === filter);

  return (
    <section
      id="extracurricular"
      ref={ref}
      className="relative min-h-screen py-24 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #1A0A2E 0%, #0D1B2A 50%, #0A0A1A 100%)"
      }}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{ backgroundImage: "url('/images/hero-space.png')" }}
      />

      {/* Twinkling Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Nebula glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#00FFFF]/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[#FF10F0]/10 blur-3xl" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-[#4A148C]/20 blur-3xl" />
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="font-accent text-sm tracking-widest uppercase text-[#00FFFF] mb-4">
            Beyond the Classroom
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6">
            Leadership & Arts
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00FFFF] to-[#FF10F0] mx-auto rounded-full" />
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center gap-4 mb-12"
        >
          {[
            { key: "all", label: "All" },
            { key: "leadership", label: "Leadership & Civic" },
            { key: "arts", label: "Arts Portfolio" }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key as typeof filter)}
              className={`px-6 py-2 rounded-full font-accent text-sm transition-all duration-300 ${
                filter === tab.key
                  ? "bg-gradient-to-r from-[#00FFFF] to-[#FF10F0] text-white"
                  : "glass-card-dark text-white/70 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Activities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {filteredActivities.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <button
                    className="w-full text-left glass-card-dark p-6 hover:scale-105 transition-all duration-300 group"
                    onClick={() => setSelectedActivity(activity)}
                  >
                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center ${
                      activity.category === "leadership" 
                        ? "bg-gradient-to-br from-[#00FFFF]/30 to-[#00FFFF]/10" 
                        : "bg-gradient-to-br from-[#FF10F0]/30 to-[#FF10F0]/10"
                    }`}>
                      <activity.icon className={`w-6 h-6 ${
                        activity.category === "leadership" ? "text-[#00FFFF]" : "text-[#FF10F0]"
                      }`} />
                    </div>

                    {/* Content */}
                    <h3 className="font-display text-lg font-semibold text-white mb-2 group-hover:text-[#00FFFF] transition-colors">
                      {activity.title}
                    </h3>
                    <p className="font-body text-sm text-white/60 mb-4">
                      {activity.shortDesc}
                    </p>

                    {/* View More */}
                    <div className="flex items-center gap-1 text-[#00FFFF] font-accent text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn More <ChevronRight className="w-4 h-4" />
                    </div>
                  </button>
                </DialogTrigger>
                
                <DialogContent className="bg-[#1A0A2E] border-[#00FFFF]/20 text-white max-w-lg">
                  <DialogHeader>
                    <div className={`w-14 h-14 rounded-xl mb-4 flex items-center justify-center ${
                      activity.category === "leadership" 
                        ? "bg-gradient-to-br from-[#00FFFF]/30 to-[#00FFFF]/10" 
                        : "bg-gradient-to-br from-[#FF10F0]/30 to-[#FF10F0]/10"
                    }`}>
                      <activity.icon className={`w-7 h-7 ${
                        activity.category === "leadership" ? "text-[#00FFFF]" : "text-[#FF10F0]"
                      }`} />
                    </div>
                    <DialogTitle className="font-display text-2xl text-white">
                      {activity.title}
                    </DialogTitle>
                  </DialogHeader>
                  
                  <div className="space-y-4">
                    <p className="font-body text-white/80 leading-relaxed">
                      {activity.fullDesc}
                    </p>
                    
                    {activity.highlights && (
                      <div className="flex flex-wrap gap-2">
                        {activity.highlights.map((highlight) => (
                          <span 
                            key={highlight}
                            className="px-3 py-1 rounded-full text-xs font-accent bg-white/10 text-white/70"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    {activity.mediaPlaceholder && (
                      <div className="mt-4 p-6 rounded-xl bg-white/5 border border-white/10 text-center">
                        <ExternalLink className="w-8 h-8 mx-auto mb-2 text-white/40" />
                        <p className="font-accent text-sm text-white/50">
                          Media content coming soon
                        </p>
                      </div>
                    )}
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </div>

        {/* Special Feature: Global Science Opera */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="glass-card-dark p-8 md:p-12 relative overflow-hidden">
            {/* Decorative stars */}
            <Star className="absolute top-4 right-4 w-6 h-6 text-[#00FFFF]/30" />
            <Star className="absolute bottom-8 left-8 w-4 h-4 text-[#FF10F0]/30" />
            
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#00FFFF]/20 to-[#FF10F0]/20 mb-6">
                <Globe className="w-4 h-4 text-[#00FFFF]" />
                <span className="font-accent text-sm text-white/80">Featured Project</span>
              </div>
              
              <h3 className="font-display text-3xl md:text-4xl font-semibold text-white mb-4">
                Global Science Opera
              </h3>
              
              <p className="font-body text-white/70 max-w-2xl mx-auto mb-6 leading-relaxed">
                A groundbreaking international collaboration that brings together students from around 
                the world to create operatic works inspired by scientific themes. This project represents 
                the beautiful intersection of art, science, and global community.
              </p>
              
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 text-white/60 font-accent">
                <ExternalLink className="w-4 h-4" />
                Project documentation coming soon
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
