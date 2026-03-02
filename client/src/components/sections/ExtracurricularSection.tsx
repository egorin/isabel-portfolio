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
  image?: string;
  video?: string;
  videoLabel?: string;
  link?: string;
  linkLabel?: string;
  extraContent?: React.ReactNode;
}

const activities: Activity[] = [
  {
    id: "rise",
    title: "RISE",
    category: "leadership",
    icon: Users,
    shortDesc: "Student empowerment and civic engagement",
    fullDesc: "As co-president of Rise, I organize volunteer events and student empowerment initiatives focused on pressing social justice issues. Through advocacy for local policy, working directly with communities, and building leadership skills, this program has deepened my understanding of civic engagement and the importance of youth voices in shaping our futures. We have worked with St. Mary's Foodbank, Feed My Starving Children, the Welcome to America Project to organize over 20 volunteering opportunities, open to anyone. We have also corresponded with Arizona representatives on issues ranging from sex education policy to lobbying the Senate on 2022 Proposition 314.",
    highlights: ["Policy Advocacy", "20+ Volunteer Events", "Youth Empowerment"],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663078358779/dzAvsv2VFQWwzWaFUEjKgc/image(2)_ba4323fd.jpeg"
  },
  {
    id: "stem-society",
    title: "STEM Society",
    category: "leadership",
    icon: Sparkles,
    shortDesc: "Promoting STEM education and curiosity",
    fullDesc: "Having been passionate about science and technology topics from a young age, getting involved in STEM Society has been a rewarding way to explore my interests and share them with others. As president, I work to promote student interest in STEM through engaging activities, guest speakers, and student-led projects. Projects have spanned topics from earthquake preventative models to explore architecture, to data analysis of blood cells for an ongoing study on Cynomolgus monkeys to explore biology. Passionate about fostering female involvement in STEM, I also created a \"Coding is for Girls\" initiative, where I taught Java basics and vibe coding using AI, growing our membership from 12 to over 30.",
    highlights: ["STEM Education", "Coding Initiative", "Membership Growth 12→30+"],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663078358779/dzAvsv2VFQWwzWaFUEjKgc/Screenshot2026-03-02at11.26.35AM_456b50bb.png"
  },
  {
    id: "heartbeats",
    title: "HeartBEATS Director",
    category: "leadership",
    icon: Heart,
    shortDesc: "Leading a community music initiative",
    fullDesc: "As a director of HeartBeats, I lead a program that brings the healing power of music to those who need it most. Through the Welcome to America Project, HeartBEATS provides music lessons and free instruments to families in need. We also set up an instrument petting zoo at Welcome to America project events to allow children an opportunity to explore music while their parents obtain important resources. This role has taught me about leadership, program management, and the profound impact that arts can have on community wellbeing.",
    highlights: ["Program Leadership", "Community Impact", "Instrument Drives"],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663078358779/dzAvsv2VFQWwzWaFUEjKgc/Screenshot2026-02-18at11.51.21AM_e33b8d5b.JPEG",
    link: "https://www.heartbeatsaz.org/",
    linkLabel: "Visit the HeartBEATS Website"
  },
  {
    id: "model-un",
    title: "Model United Nations",
    category: "leadership",
    icon: Globe,
    shortDesc: "Diplomatic excellence and global awareness",
    fullDesc: "As a model UN delegate, I have learned not only about global relations, how politics, economics, and innovation work together, but also valuable leadership skills as I navigated difficult negotiations with other countries, and the importance of professionalism and diplomatic communication. At the Sonoran Desert conference, I have won several awards, including the peer-voted Rapporteur award and the Best Diplomat award. I also participated in a collegiate conference in San Francisco, MUN Far West, where I received a Country Team award for best policy papers. As president of my school's MUN, I have learned how to teach valuable leadership skills, and how to communicate effectively, not just about policy, but about brainstorming, writing, and developing students' ideas.",
    highlights: ["Best Diplomat Award", "Rapporteur Award", "MUN Far West Country Team Award"],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663078358779/dzAvsv2VFQWwzWaFUEjKgc/IMG_5137_1595bfba.jpeg"
  },
  {
    id: "asa-ambassador",
    title: "ASA Ambassadors",
    category: "leadership",
    icon: GraduationCap,
    shortDesc: "Representing Arizona School for the Arts",
    fullDesc: "As an ASA Ambassador, I represent our school to prospective students and families through campus tours and outreach events. This role allows me to share my passion for arts education and help others discover the unique opportunities at ASA, as well as develop my public speaking and adaptability, as each family comes to tour with different questions, experiences and ideas. This has been an incredible way to learn professionalism in my presenting skills and I believe a skill that will serve me well in college and beyond.",
    highlights: ["Campus Tours", "Public Speaking", "Student Outreach"],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663078358779/dzAvsv2VFQWwzWaFUEjKgc/image(2)_0d78af17.png"
  },
  {
    id: "science-opera",
    title: "Global Science Opera",
    category: "arts",
    icon: Globe,
    shortDesc: "International collaborative arts & science project",
    fullDesc: "The Global Science Opera is a global creative education initiative that showcases important STEM topics through an annual opera. Every year, scientists, arts institutions, and schools from around the world collaborate to create a culmination of creative works that embody science and culture in order to educate. ASA has participated in the GSO several times, and in 2023 and 2025, I helped create a soundtrack for the Opera. These experiences vastly expanded my understanding of what it means to collaborate and create, empowering me to explore new media and share knowledge in new ways.\n\nGSO 2023, \"Unfold the Universe\": I focused on Proxima Centauri B, an Earth-sized exoplanet orbiting our closest neighboring star. I composed a graphic score using color, symbols, and shapes to represent the planet's tidal lock, one side in perpetual sun, the other in perpetual darkness. The score was performed live by an ASA ensemble and uses a musical cryptogram where each letter of \"Proxima Centauri B\" was assigned a musical note.\n\nGSO 2025, \"H2O\": I composed an ambient soundscape based on a poem titled \"Dead Ice\" by Norwegian student Kai Greig, about glacial conservation. I used laser and synthesizer effects to simulate ice cracking, with layered chords and building motifs to represent the increasing danger of global warming.",
    highlights: ["GSO 2023 & 2025", "Graphic Score Composition", "International Collaboration"],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663078358779/dzAvsv2VFQWwzWaFUEjKgc/proxima_centauri_b_rotated_v2_2eb4e925.png",
    video: "https://d2xsxph8kpxj0f.cloudfront.net/310519663078358779/dzAvsv2VFQWwzWaFUEjKgc/DeadIceLogo(1)_b5abb1ba.mp4",
    videoLabel: "Watch: GSO 2025 Dead Ice",
    link: "https://globalscienceopera.com/",
    linkLabel: "Visit the GSO Website"
  },
  {
    id: "chamber-choir",
    title: "Chamber Singers",
    category: "arts",
    icon: Mic,
    shortDesc: "Vocal excellence and ensemble performance",
    fullDesc: "As a member of Chamber Singers, I have learned what it means to be a part of an advanced ensemble. From the accelerated pace of repertoire learning to the group's vast talent, I have been pushed out of my comfort zone and grown tremendously as a singer. As an ensemble, we have performed for arts fundraisers, community jazz clubs, and even traveled to Flagstaff for the AMEA jazz/madrigal competition, where we received the highest rank, superior with distinction.",
    highlights: ["AMEA Superior with Distinction", "Jazz & Madrigal", "Arts Fundraisers"],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663078358779/dzAvsv2VFQWwzWaFUEjKgc/E8F69302-4CC2-4760-8E95-18C45CA48D21_3b2d72f0.JPG"
  },
  {
    id: "mu-alpha-theta",
    title: "Mu Alpha Theta",
    category: "leadership",
    icon: BookOpen,
    shortDesc: "Math Honors Society officer and tutor",
    fullDesc: "As an officer of Mu Alpha Theta (Math Honors Society), and a second year member, I have learned how to reconnect with my passion for mathematics outside of the classroom. Tutoring has been not only a great way of practicing skills and strengthening understanding, but it has also been invaluable at my school. Students can go to another student directly, who may have different and more helpful methods of teaching than a teacher. Also, through explorations of the origin of fascinating math concepts, or creative projects that combine mathematics and the arts, it has taught me the creative side of math, and been a deeply enjoyable part of my high school experience.",
    highlights: ["Math Honors Society", "Peer Tutoring", "Math & Arts Projects"]
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
        style={{ backgroundImage: "url('https://files.manuscdn.com/user_upload_by_module/session_file/310519663078358779/KzRFiJRLZUlFDoVP.png')" }}
      />

      {/* Twinkling Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(100)].map((_, i) => {
          const size = 1 + Math.random() * 2;
          return (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: size,
                height: size,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                boxShadow: `0 0 ${size * 3}px rgba(255, 255, 255, 0.8)`
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.4, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          );
        })}
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                    className="w-full h-full text-left glass-card-dark p-8 hover:scale-105 transition-all duration-300 group flex flex-col"
                    onClick={() => setSelectedActivity(activity)}
                  >
                    {/* Icon and Title */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                        activity.category === "leadership" 
                          ? "bg-gradient-to-br from-[#00FFFF]/30 to-[#00FFFF]/10" 
                          : "bg-gradient-to-br from-[#FF10F0]/30 to-[#FF10F0]/10"
                      }`}>
                        <activity.icon className={`w-6 h-6 ${
                          activity.category === "leadership" ? "text-[#00FFFF]" : "text-[#FF10F0]"
                        }`} />
                      </div>
                      <h3 className="font-display text-lg font-semibold text-white group-hover:text-[#00FFFF] transition-colors">
                        {activity.title}
                      </h3>
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col">
                      <p className="font-body text-sm text-white/60 mb-4 flex-1">
                        {activity.shortDesc}
                      </p>

                      {/* View More */}
                      <div className="flex items-center gap-1 text-[#00FFFF] font-accent text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                        Learn More <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  </button>
                </DialogTrigger>
                
                <DialogContent className="bg-[#1A0A2E] border-[#00FFFF]/20 text-white max-w-lg max-h-[85vh] overflow-y-auto">
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
                    {/* Image */}
                    {activity.image ? (
                      <img
                        src={activity.image}
                        alt={activity.title}
                        className="w-3/4 mx-auto object-cover rounded-xl"
                      />
                    ) : (
                      <div 
                        className="w-full aspect-video rounded-xl flex items-center justify-center text-center p-6"
                        style={{ background: "linear-gradient(135deg, rgba(0, 255, 255, 0.1) 0%, rgba(255, 16, 240, 0.1) 100%)" }}
                      >
                        <div>
                          <Palette className="w-8 h-8 mx-auto mb-2 text-white/40" />
                          <p className="font-body text-sm text-white/50">Activity Image</p>
                          <p className="font-body text-xs text-white/30">Add image for {activity.title}</p>
                        </div>
                      </div>
                    )}

                    <p className="font-body text-white/80 leading-relaxed whitespace-pre-line">
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

                    {activity.video && (
                      <div>
                        <p className="font-accent text-xs text-white/50 mb-2 uppercase tracking-wider">{activity.videoLabel || "Video"}</p>
                        <video
                          src={activity.video}
                          controls
                          className="w-full rounded-xl"
                        />
                      </div>
                    )}

                    {activity.link && (
                      <a
                        href={activity.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-[#00FFFF] font-accent text-sm hover:underline mt-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        {activity.linkLabel || activity.link}
                      </a>
                    )}
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}
