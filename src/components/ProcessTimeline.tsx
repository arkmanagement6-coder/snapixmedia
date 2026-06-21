"use client";

import { motion } from "framer-motion";
import { Search, Compass, Layers, Code, Zap, BarChart } from "lucide-react";

const steps = [
  {
    phase: "01",
    title: "Discovery",
    desc: "We research your business vertical, audit competitors, analyze target users, and understand core growth objectives.",
    icon: Search,
    color: "text-neon-cyan border-neon-cyan/20 bg-neon-cyan/5",
  },
  {
    phase: "02",
    title: "Strategy",
    desc: "Structuring a technical roadmap, architectural plan, design blueprint, and marketing campaign schedule.",
    icon: Compass,
    color: "text-neon-blue border-neon-blue/20 bg-neon-blue/5",
  },
  {
    phase: "03",
    title: "Design",
    desc: "Drafting user flows, wireframes, and modern high-fidelity UI/UX layouts that embody your premium brand values.",
    icon: Layers,
    color: "text-neon-purple border-neon-purple/20 bg-neon-purple/5",
  },
  {
    phase: "04",
    title: "Development",
    desc: "Writing production-ready React/Next.js code, robust APIs, and structured data with high SEO score standards.",
    icon: Code,
    color: "text-neon-magenta border-neon-magenta/20 bg-neon-magenta/5",
  },
  {
    phase: "05",
    title: "Marketing",
    desc: "Launching conversion rate campaigns, precision local/technical SEO optimizations, and paid search campaigns.",
    icon: Zap,
    color: "text-pink-500 border-pink-500/20 bg-pink-500/5",
  },
  {
    phase: "06",
    title: "Growth",
    desc: "A/B testing user flows, reviewing traffic metrics, database speedups, and implementing scaling workflows.",
    icon: BarChart,
    color: "text-emerald-400 border-emerald-400/20 bg-emerald-400/5",
  },
];

export default function ProcessTimeline() {
  return (
    <div className="relative max-w-4xl mx-auto px-4 py-10 font-sans">
      {/* Central timeline background connector line */}
      <div className="absolute left-[34px] md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-neon-purple via-neon-blue to-neon-magenta opacity-40 pointer-events-none" />

      <div className="flex flex-col gap-16">
        {steps.map((step, i) => {
          const Icon = step.icon;
          const isEven = i % 2 === 0;

          return (
            <motion.div
              key={step.phase}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-12 relative ${
                isEven ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Connector node */}
              <div className="absolute left-[17px] md:left-1/2 md:-translate-x-1/2 w-[34px] h-[34px] flex items-center justify-center rounded-full bg-white border-2 border-neon-purple/20 z-10">
                <span className="w-1.5 h-1.5 rounded-full bg-neon-purple" />
              </div>

              {/* Text Content block */}
              <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${isEven ? "md:text-left" : "md:text-right"}`}>
                <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-mono font-bold tracking-wider mb-3 ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                } ${step.color.split(" ")[0]} ${step.color.split(" ")[1]}`}>
                  <span>Phase {step.phase}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 font-display">{step.title}</h3>
                <p className="text-sm text-slate-650 leading-relaxed font-semibold">{step.desc}</p>
              </div>

              {/* Icon / graphic visual block */}
              <div className="hidden md:flex w-[45%] justify-center">
                <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110 ${step.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
