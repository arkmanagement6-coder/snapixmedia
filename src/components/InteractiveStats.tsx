"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
}

function StatCounter({ value, suffix, label }: StatItemProps) {
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
    <div ref={ref} className="flex flex-col items-center justify-center p-8 rounded-2xl bg-white border border-slate-200/80 backdrop-blur-xs relative group hover:border-neon-purple/40 transition-colors duration-300 shadow-xs">
      {/* Decorative vertical gradient bar */}
      <span className="absolute left-0 top-1/4 bottom-1/4 w-[2px] bg-gradient-to-b from-neon-blue to-neon-purple opacity-40 group-hover:opacity-100 transition-opacity duration-300" />
      
      <span className="text-4xl sm:text-5xl font-bold font-display text-slate-900 tracking-tight mb-2">
        {count}
        <span className="text-neon-purple">{suffix}</span>
      </span>
      <span className="text-xs text-slate-500 font-semibold tracking-wider uppercase text-center">{label}</span>
    </div>
  );
}

export default function InteractiveStats() {
  const stats = [
    { value: 250, suffix: "+", label: "Projects Launched" },
    { value: 100, suffix: "+", label: "Active Clients" },
    { value: 95, suffix: "%", label: "Client Retention" },
    { value: 12, suffix: "+", label: "Team Experts" },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
      {stats.map((stat, i) => (
        <StatCounter key={i} {...stat} />
      ))}
    </div>
  );
}
