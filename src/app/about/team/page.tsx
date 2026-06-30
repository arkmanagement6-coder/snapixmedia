"use client";

import { Sparkles, Users, Award, ShieldAlert, Heart, Compass } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MouseFollower from "@/components/MouseFollower";
import WhatsAppChat from "@/components/WhatsAppChat";
import GlassCard from "@/components/GlassCard";

const teamMembers = [
  {
    name: "Harsh Khubchandani",
    role: "Founder & Owner",
    initials: "HK",
    gradient: "from-purple-500 to-indigo-600",
    bio: "Founder & Owner of Snapix Media, leading strategy, web engineering deployments, and result-oriented growth marketing campaigns.",
  },
  {
    name: "Diana Chen",
    role: "Head of Digital Strategy",
    initials: "DC",
    gradient: "from-purple-400 to-pink-500",
    bio: "Growth expert specializing in data-driven user acquisition, technical SEO, and paid campaign scalability.",
  },
  {
    name: "Vikram Mehta",
    role: "Lead Full-Stack Developer",
    initials: "VM",
    gradient: "from-emerald-400 to-cyan-500",
    bio: "Next.js enthusiast dedicated to code organization, headless storefronts, and serverless API speedups.",
  },
  {
    name: "Sonia Kelly",
    role: "Principal UI/UX Architect",
    initials: "SK",
    gradient: "from-amber-400 to-orange-500",
    bio: "Visual designer crafting dark-theme layouts, responsive design wireframes, and fluid user flows.",
  },
];

export default function OurTeam() {
  return (
    <div className="relative min-h-screen bg-transparent text-slate-650 overflow-x-hidden flex flex-col font-sans">
      <MouseFollower />
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-36 pb-20 px-6 glow-grid">
        <div className="absolute top-1/3 left-1/2 w-[500px] h-[300px] bg-radial from-neon-purple/5 to-transparent blur-[100px] pointer-events-none -translate-x-1/2" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-neon-purple/20 bg-neon-purple/5 text-neon-purple text-xs font-bold tracking-wider mb-6 uppercase">
            <Users className="w-3.5 h-3.5" />
            <span>Our Core Panel</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6 font-display">
            Meet the Builders and{" "}
            <span className="text-gradient-purple-cyan">Growth Experts</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            We are a hybrid collective of software engineers, creative UI/UX architects, and marketing strategists dedicated to scaling brands.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-12 px-6 relative border-t border-slate-200/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, i) => (
              <GlassCard key={i} className="flex flex-col justify-between text-center items-center h-[340px]" hoverGlow>
                <div className="flex flex-col items-center gap-4">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-tr ${member.gradient} flex items-center justify-center font-bold text-white text-2xl shadow-md`}>
                    {member.initials}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{member.name}</h3>
                    <p className="text-xs text-neon-purple uppercase tracking-wider mt-1">{member.role}</p>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mt-2">{member.bio}</p>
                </div>
                
                <div className="flex gap-4 mt-6">
                  {["LinkedIn", "GitHub"].map((social) => (
                    <span key={social} className="text-[10px] font-mono text-slate-500 hover:text-slate-900 cursor-pointer transition-colors duration-300">
                      {social}
                    </span>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Values */}
      <section className="py-20 px-6 border-t border-slate-200/50 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-xs font-bold text-neon-cyan uppercase tracking-widest">Culture</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-3 mb-2 font-display">How We Work Together</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <GlassCard className="flex flex-col gap-4 bg-white" hoverGlow>
              <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-neon-purple">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Extreme Ownership</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We take end-to-end accountability for performance, code efficiency, Lighthouse metrics, and campaign conversion indicators.
              </p>
            </GlassCard>

            <GlassCard className="flex flex-col gap-4 bg-white" hoverGlow>
              <div className="w-10 h-10 rounded-xl bg-violet-50 border border-violet-200 flex items-center justify-center text-neon-purple">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Data-First Ideation</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                No design decisions or search structures are left to guesswork. We map all user journeys to concrete analytics platforms and test milestones.
              </p>
            </GlassCard>

            <GlassCard className="flex flex-col gap-4 bg-white" hoverGlow>
              <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center text-neon-blue">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Collaborative Velocity</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Operating asynchronously globally allows our experts to deliver clean updates fast and collaborate without bottlenecks.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppChat />
    </div>
  );
}
