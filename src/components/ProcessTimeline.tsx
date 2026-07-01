"use client";

import { motion } from "framer-motion";
import { Search, Compass, Layers, Code, Zap, BarChart, ArrowRight } from "lucide-react";

const steps = [
  {
    phase: "01",
    title: "Discovery & Audit",
    desc: "We research your business vertical, audit competitor marketing channels, analyze customer target cohorts, and define baseline KPIs.",
    icon: Search,
    color: "text-neon-cyan border-neon-cyan/25 bg-neon-cyan/5",
    glow: "group-hover:border-neon-cyan/40 group-hover:shadow-[0_10px_30px_rgba(6,182,212,0.06)]",
    textGlow: "text-neon-cyan",
  },
  {
    phase: "02",
    title: "Strategy & Roadmap",
    desc: "We construct a comprehensive growth blueprint: technical architecture designs, campaign calendars, and PPC bid parameters.",
    icon: Compass,
    color: "text-neon-blue border-neon-blue/25 bg-neon-blue/5",
    glow: "group-hover:border-neon-blue/40 group-hover:shadow-[0_10px_30px_rgba(59,130,246,0.06)]",
    textGlow: "text-neon-blue",
  },
  {
    phase: "03",
    title: "Design & UX Architecture",
    desc: "Drafting conversion-optimized user flows, wireframes, and premium high-fidelity user interface layouts that reflect brand authority.",
    icon: Layers,
    color: "text-neon-purple border-neon-purple/25 bg-neon-purple/5",
    glow: "group-hover:border-neon-purple/40 group-hover:shadow-[0_10px_30px_rgba(168,85,247,0.06)]",
    textGlow: "text-neon-purple",
  },
  {
    phase: "04",
    title: "Agile Development",
    desc: "Writing production-ready React/Next.js store engines, robust backend APIs, and clean data architectures optimized for Google ranks.",
    icon: Code,
    color: "text-neon-magenta border-neon-magenta/25 bg-neon-magenta/5",
    glow: "group-hover:border-neon-magenta/40 group-hover:shadow-[0_10px_30px_rgba(217,70,239,0.06)]",
    textGlow: "text-neon-magenta",
  },
  {
    phase: "05",
    title: "Marketing Execution",
    desc: "Launching precision-targeted search engine campaigns, organic content distributions, and structured conversion audits.",
    icon: Zap,
    color: "text-pink-500 border-pink-500/25 bg-pink-500/5",
    glow: "group-hover:border-pink-500/40 group-hover:shadow-[0_10px_30px_rgba(244,63,94,0.06)]",
    textGlow: "text-pink-500",
  },
  {
    phase: "06",
    title: "Growth & Optimization",
    desc: "Continuous A/B user path testing, deep query speedups, content expansions, and platform scalability audits.",
    icon: BarChart,
    color: "text-emerald-500 border-emerald-500/25 bg-emerald-500/5",
    glow: "group-hover:border-emerald-500/40 group-hover:shadow-[0_10px_30px_rgba(16,185,129,0.06)]",
    textGlow: "text-emerald-500",
  },
];

export default function ProcessTimeline() {
  return (
    <div className="relative w-full mx-auto px-4 py-16 font-sans">
      {/* Horizontal connector line on large screens */}
      <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-[3px] bg-[linear-gradient(to_right,var(--color-neon-cyan),var(--color-neon-blue),var(--color-neon-purple),var(--color-neon-magenta),#f43f5e,#10b981)] opacity-30 pointer-events-none z-0" />

      {/* Vertical connector line on mobile screens */}
      <div className="block lg:hidden absolute top-[48px] bottom-[48px] left-8 w-[3px] bg-[linear-gradient(to_bottom,var(--color-neon-cyan),var(--color-neon-blue),var(--color-neon-purple),var(--color-neon-magenta),#f43f5e,#10b981)] opacity-30 pointer-events-none z-0" />

      {/* Grid container: Placed pl-16 on mobile to make room for vertical line on the left */}
      <div className="flex flex-col lg:grid lg:grid-cols-6 gap-12 lg:gap-6 pl-12 lg:pl-0 relative z-10">
        {steps.map((step, i) => {
          const Icon = step.icon;

          return (
            <motion.div
              key={step.phase}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="flex flex-col lg:items-center relative group w-full"
            >
              {/* Step Circle with Phase */}
              <div className={`w-12 h-12 rounded-full border-2 bg-white flex items-center justify-center absolute left-[-56px] lg:static lg:mb-6 z-10 shadow-md group-hover:scale-115 transition-transform duration-300 border-slate-200 ${step.textGlow}`}>
                <span className="text-sm font-extrabold font-mono">{step.phase}</span>
              </div>

              {/* Card content with glassmorphism and subtle background number */}
              <div className={`w-full relative p-6 rounded-3xl border border-slate-200/80 bg-white/70 hover:bg-white backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 overflow-hidden flex flex-col items-start lg:items-center lg:text-center min-h-[220px] ${step.glow}`}>
                
                {/* Giant faint phase number behind text */}
                <div className="text-7xl font-extrabold text-slate-100 absolute top-2 right-4 select-none pointer-events-none group-hover:text-slate-200/40 transition-colors duration-300 font-display opacity-35 lg:opacity-25">
                  {step.phase}
                </div>

                {/* Glowing icon box */}
                <div className={`w-11 h-11 rounded-2xl border flex items-center justify-center mb-5 shrink-0 relative z-10 ${step.color}`}>
                  <Icon className="w-5 h-5" />
                </div>

                {/* Details */}
                <div className="flex flex-col gap-2 relative z-10">
                  <h3 className="text-base font-extrabold text-slate-900 tracking-tight font-display transition-colors duration-300 group-hover:text-slate-950">
                    {step.title}
                  </h3>
                  <p className="text-[12px] text-slate-500 leading-relaxed font-semibold">
                    {step.desc}
                  </p>
                </div>

                {/* Subtle right-pointing arrow on cards */}
                <div className="mt-auto pt-4 flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-slate-800 transition-colors duration-300 relative z-10 lg:hidden">
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
