"use client";

import { motion } from "framer-motion";
import { Search, Compass, Layers, Code, Zap, BarChart } from "lucide-react";

const steps = [
  {
    phase: "01",
    title: "Discovery",
    desc: "We research your business vertical, audit competitors, analyze target users, and understand core growth objectives.",
    icon: Search,
    color: "text-neon-cyan border-neon-cyan/30 bg-neon-cyan/10",
  },
  {
    phase: "02",
    title: "Strategy",
    desc: "Structuring a technical roadmap, architectural plan, design blueprint, and marketing campaign schedule.",
    icon: Compass,
    color: "text-neon-blue border-neon-blue/30 bg-neon-blue/10",
  },
  {
    phase: "03",
    title: "Design",
    desc: "Drafting user flows, wireframes, and modern high-fidelity UI/UX layouts that embody your premium brand values.",
    icon: Layers,
    color: "text-neon-purple border-neon-purple/30 bg-neon-purple/10",
  },
  {
    phase: "04",
    title: "Development",
    desc: "Writing production-ready React/Next.js code, robust APIs, and structured data with high SEO score standards.",
    icon: Code,
    color: "text-neon-magenta border-neon-magenta/30 bg-neon-magenta/10",
  },
  {
    phase: "05",
    title: "Marketing",
    desc: "Launching conversion rate campaigns, precision local/technical SEO optimizations, and paid search campaigns.",
    icon: Zap,
    color: "text-pink-600 border-pink-500/30 bg-pink-500/10",
  },
  {
    phase: "06",
    title: "Growth",
    desc: "A/B testing user flows, reviewing traffic metrics, database speedups, and implementing scaling workflows.",
    icon: BarChart,
    color: "text-emerald-600 border-emerald-400/30 bg-emerald-400/10",
  },
];

export default function ProcessTimeline() {
  return (
    <div className="relative w-full mx-auto px-4 py-8 font-sans">
      {/* Horizontal connector line on large screens */}
      <div className="hidden lg:block absolute top-[24px] left-[8%] right-[8%] h-[2px] bg-gradient-to-r from-neon-cyan via-neon-blue via-neon-purple via-neon-magenta via-pink-500 to-emerald-400 opacity-40 pointer-events-none z-0" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 relative z-10">
        {steps.map((step, i) => {
          const Icon = step.icon;

          return (
            <motion.div
              key={step.phase}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col items-center text-center relative group"
            >
              {/* Step Circle with Phase */}
              <div className={`w-12 h-12 rounded-full border-2 bg-white flex items-center justify-center relative z-10 group-hover:scale-110 transition-all duration-300 shadow-sm ${
                step.color.split(" ").filter(c => c.startsWith("border-") || c.startsWith("text-")).join(" ")
              }`}>
                <span className="text-sm font-black font-mono">{step.phase}</span>
              </div>

              {/* Card content */}
              <div className="mt-6 flex flex-col items-center p-5 rounded-2xl border border-slate-200/80 bg-white/70 hover:bg-white backdrop-blur-md transition-all duration-300 hover:shadow-lg hover:shadow-slate-200/40 hover:border-neon-purple/30 flex-1 w-full">
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-4 ${step.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 font-display">{step.title}</h3>
                <p className="text-[12px] text-slate-500 leading-relaxed font-semibold text-center">{step.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
