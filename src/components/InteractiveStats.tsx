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
    const duration = 2000;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
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
      className="relative flex flex-col items-center justify-center p-6 sm:p-8 rounded-3xl bg-white/90 border border-slate-200/80 group hover:border-amber-500/40 hover:bg-white transition-all duration-300 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.08)] hover:shadow-2xl hover:shadow-amber-500/10"
    >
      {/* Decorative vertical gradient bar on hover */}
      <span className="absolute left-0 top-1/4 bottom-1/4 w-[3px] rounded-r bg-gradient-to-b from-neon-purple to-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Floating brand icon */}
      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 border border-slate-100 bg-slate-50 group-hover:scale-110 transition-transform duration-300 ${iconColor}`}>
        <Icon className="w-5 h-5" />
      </div>

      <span className="text-4xl sm:text-5xl font-black font-display text-slate-900 tracking-tight mb-2">
        {count}
        <span className={textColor}>{suffix}</span>
      </span>
      <span className="text-[11px] text-slate-500 font-extrabold tracking-widest uppercase text-center group-hover:text-slate-800 transition-colors duration-300">{label}</span>
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
      glowColor: "rgba(202,138,4,0.15)",
      textColor: "text-neon-purple",
      iconColor: "text-amber-600 border-amber-200/50"
    },
    { 
      value: 100, 
      suffix: "+", 
      label: "Active Clients", 
      icon: Handshake,
      glowColor: "rgba(250,204,21,0.15)",
      textColor: "text-amber-500",
      iconColor: "text-amber-500 border-amber-200/50"
    },
    { 
      value: 95, 
      suffix: "%", 
      label: "Client Retention", 
      icon: ShieldCheck,
      glowColor: "rgba(217,119,6,0.15)",
      textColor: "text-amber-600",
      iconColor: "text-amber-600 border-amber-200/50"
    },
    { 
      value: 12, 
      suffix: "+", 
      label: "Team Experts", 
      icon: Award,
      glowColor: "rgba(202,138,4,0.15)",
      textColor: "text-neon-purple",
      iconColor: "text-amber-600 border-amber-200/50"
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
