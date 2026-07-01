"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Rocket, Handshake, ShieldCheck, Award } from "lucide-react";

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
  icon: any;
  glowColor: string;
  textColor: string;
  iconColor: string;
}

function StatCounter({ value, suffix, label, icon: Icon, glowColor, textColor, iconColor }: StatItemProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const end = value;
    const duration = 2000; // 2 seconds animate length
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function: easeOutQuad
      const easedProgress = progress * (2 - progress);
      
      setCount(Math.floor(easedProgress * (end - start) + start));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="relative flex flex-col items-center justify-center p-6 sm:p-8 rounded-3xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-md group hover:border-slate-700 hover:bg-slate-900/80 transition-all duration-300 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.3)] hover:shadow-2xl hover:shadow-purple-950/20"
    >
      {/* Decorative vertical gradient bar on hover */}
      <span className="absolute left-0 top-1/4 bottom-1/4 w-[3px] rounded-r bg-gradient-to-b from-neon-purple to-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Floating brand icon */}
      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 border border-slate-850 bg-slate-950/90 shadow-inner group-hover:scale-110 transition-transform duration-300 ${iconColor}`}>
        <Icon className="w-5 h-5" />
      </div>

      <span className="text-4xl sm:text-5xl font-black font-display text-white tracking-tight mb-2">
        {count}
        <span className={textColor}>{suffix}</span>
      </span>
      <span className="text-[11px] text-slate-400 font-extrabold tracking-widest uppercase text-center group-hover:text-slate-200 transition-colors duration-300">{label}</span>
    </motion.div>
  );
}

export default function InteractiveStats() {
  const stats = [
    { 
      value: 250, 
      suffix: "+", 
      label: "Projects Launched", 
      icon: Rocket,
      glowColor: "rgba(168,85,247,0.25)",
      textColor: "text-neon-purple",
      iconColor: "text-purple-400 group-hover:text-purple-300 border-purple-900/30"
    },
    { 
      value: 100, 
      suffix: "+", 
      label: "Active Clients", 
      icon: Handshake,
      glowColor: "rgba(6,182,212,0.25)",
      textColor: "text-neon-cyan",
      iconColor: "text-cyan-400 group-hover:text-cyan-300 border-cyan-900/30"
    },
    { 
      value: 95, 
      suffix: "%", 
      label: "Client Retention", 
      icon: ShieldCheck,
      glowColor: "rgba(236,72,153,0.25)",
      textColor: "text-fuchsia-500",
      iconColor: "text-fuchsia-400 group-hover:text-fuchsia-300 border-fuchsia-900/30"
    },
    { 
      value: 12, 
      suffix: "+", 
      label: "Team Experts", 
      icon: Award,
      glowColor: "rgba(99,102,241,0.25)",
      textColor: "text-indigo-400",
      iconColor: "text-indigo-400 group-hover:text-indigo-300 border-indigo-900/30"
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto w-full">
      {stats.map((stat, i) => (
        <StatCounter key={i} {...stat} />
      ))}
    </div>
  );
}
