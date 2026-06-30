"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, CheckCircle2, Cpu, BarChart2, ShieldCheck, Mail } from "lucide-react";

const slides = [
  {
    tag: "Software Engineering",
    icon: Cpu,
    titleColor: "from-neon-purple to-neon-cyan",
    title: "Transform Business with Custom Web Systems",
    desc: "We engineer lightning-fast Next.js portals, headless Shopify storefronts, and cloud SaaS dashboards designed for performance.",
    btnText: "Explore Services",
    btnLink: "/services",
    visual: (
      <div className="w-full h-full flex flex-col justify-between p-6 bg-slate-900/90 border border-white/10 rounded-3xl shadow-2xl relative overflow-hidden backdrop-blur-xl text-left select-none animate-float-slow">
        {/* Floating Background Glow Orbs */}
        <div className="absolute -top-12 -left-12 w-32 h-32 rounded-full bg-neon-purple/20 blur-2xl pointer-events-none" />
        <div className="absolute -bottom-12 -right-12 w-32 h-32 rounded-full bg-neon-cyan/20 blur-2xl pointer-events-none" />

        {/* Browser Header */}
        <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80 shadow-sm" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 shadow-sm" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 shadow-sm" />
          </div>
          <div className="bg-white/5 text-[9px] text-slate-400 px-3 py-0.5 rounded border border-white/5 w-40 text-center truncate font-mono">
            snapix.app/terminal
          </div>
          <div className="w-10" />
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Cloud Engine</span>
            <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              v2.8 Active
            </span>
          </div>

          {/* Metric Blocks */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white/5 border border-white/5 p-3 rounded-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-8 h-8 rounded-full bg-neon-purple/10 blur-md" />
              <span className="block text-[9px] text-slate-500 uppercase font-bold tracking-wider">Speed latency</span>
              <span className="text-xl font-black text-white font-sans tracking-tight">38.2ms</span>
            </div>
            <div className="bg-white/5 border border-white/5 p-3 rounded-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-8 h-8 rounded-full bg-neon-cyan/10 blur-md" />
              <span className="block text-[9px] text-slate-500 uppercase font-bold tracking-wider">Throughput</span>
              <span className="text-xl font-black text-neon-cyan font-sans tracking-tight">99.98%</span>
            </div>
          </div>

          {/* Custom Mini SVG Graph */}
          <div className="h-16 bg-white/5 border border-white/5 rounded-2xl p-2 relative overflow-hidden flex items-end">
            <div className="absolute top-2 left-3 flex flex-col">
              <span className="text-[8px] text-slate-500 uppercase font-bold">Real-time load</span>
            </div>
            <svg className="w-full h-10 overflow-visible" viewBox="0 0 100 40">
              <defs>
                <linearGradient id="purpleGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0,35 Q10,15 20,25 T40,10 T60,30 T80,5 T100,20"
                fill="none"
                stroke="#7c3aed"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M0,35 Q10,15 20,25 T40,10 T60,30 T80,5 T100,20 L100,40 L0,40 Z"
                fill="url(#purpleGradient)"
              />
            </svg>
          </div>
        </div>
      </div>
    ),
  },
  {
    tag: "Paid Advertising",
    icon: BarChart2,
    titleColor: "from-neon-blue to-neon-magenta",
    title: "Scale Profitable Paid Ads Campaigns",
    desc: "Deploy performance-driven bidding arrays across Google PPC and Meta CAPI to lower your Customer Acquisition Cost.",
    btnText: "Launch Campaigns",
    btnLink: "/services/paid-ads",
    visual: (
      <div className="w-full h-full flex flex-col justify-between p-6 bg-slate-900/90 border border-white/10 rounded-3xl shadow-2xl relative overflow-hidden backdrop-blur-xl text-left select-none font-sans animate-float-medium">
        {/* Floating Background Glow Orbs */}
        <div className="absolute -top-12 -left-12 w-32 h-32 rounded-full bg-neon-blue/20 blur-2xl pointer-events-none" />
        <div className="absolute -bottom-12 -right-12 w-32 h-32 rounded-full bg-neon-magenta/20 blur-2xl pointer-events-none" />

        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-neon-blue animate-pulse" />
            <span className="text-[10px] font-bold text-white tracking-widest uppercase">META ADVANCED CAPI</span>
          </div>
          <span className="text-[9px] px-2 py-0.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 font-bold uppercase tracking-wider">
            98% attribution
          </span>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col gap-4">
          <div className="flex items-baseline justify-between">
            <div>
              <span className="block text-[9px] text-slate-500 uppercase font-bold tracking-wider">Total Sales ROAS</span>
              <span className="text-3xl font-black text-white tracking-tight">5.24x</span>
            </div>
            <div className="bg-emerald-500/10 border border-emerald-500/20 px-2 py-1 rounded-xl text-right">
              <span className="block text-[8px] text-slate-400 uppercase font-bold tracking-wider">Cost per Lead</span>
              <span className="text-sm font-black text-emerald-400 font-mono">$1.45</span>
            </div>
          </div>

          {/* Custom Bar Graphs with glowing tags */}
          <div className="flex-1 bg-white/5 border border-white/5 rounded-2xl p-3 relative overflow-hidden flex items-end justify-between gap-2.5 h-20">
            <div className="absolute top-2 left-3">
              <span className="text-[8px] text-slate-500 uppercase font-bold tracking-wider">Monthly scaling</span>
            </div>
            {[35, 45, 30, 65, 55, 85, 95].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                <div 
                  className="w-full rounded-t bg-gradient-to-t from-red-600 via-orange-500 to-amber-500 transition-all duration-700" 
                  style={{ height: `${h}%` }}
                />
                <span className="text-[7px] text-slate-655 font-black">M{i+1}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    tag: "Search Authority",
    icon: ShieldCheck,
    titleColor: "from-neon-purple to-neon-magenta",
    title: "Rank #1 on Search & AI Engines",
    desc: "Format structured schemas and optimize Core Web Vitals to command authority inside ChatGPT, Gemini, and Google indexers.",
    btnText: "Request SEO Audit",
    btnLink: "/services/seo-aeo",
    visual: (
      <div className="w-full h-full flex flex-col justify-between p-6 bg-slate-900/90 border border-white/10 rounded-3xl shadow-2xl relative overflow-hidden backdrop-blur-xl text-left select-none font-sans animate-float-fast">
        {/* Floating Background Glow Orbs */}
        <div className="absolute -top-12 -left-12 w-32 h-32 rounded-full bg-neon-purple/20 blur-2xl pointer-events-none" />
        <div className="absolute -bottom-12 -right-12 w-32 h-32 rounded-full bg-neon-cyan/20 blur-2xl pointer-events-none" />

        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-neon-purple animate-pulse" />
            <span className="text-[10px] font-bold text-white tracking-widest uppercase">Lighthouse Core Audit</span>
          </div>
          <span className="text-[9px] px-2 py-0.5 rounded-full border border-neon-purple/25 bg-neon-purple/10 text-neon-purple font-bold uppercase tracking-wider">
            AEO schemas verified
          </span>
        </div>

        {/* Circular progress indicators */}
        <div className="flex-1 flex flex-col gap-4 justify-center">
          <div className="flex items-center justify-around gap-4">
            {/* Circle 1 */}
            <div className="flex flex-col items-center gap-2">
              <div className="relative w-16 h-16 flex items-center justify-center">
                <svg className="absolute w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-white/5"
                    strokeWidth="3.5"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="text-emerald-400"
                    strokeWidth="3.5"
                    strokeDasharray="100, 100"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <span className="text-xs font-black text-white font-mono">100</span>
              </div>
              <span className="text-[8px] text-slate-500 uppercase font-black tracking-wider">Performance</span>
            </div>

            {/* Circle 2 */}
            <div className="flex flex-col items-center gap-2">
              <div className="relative w-16 h-16 flex items-center justify-center">
                <svg className="absolute w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-white/5"
                    strokeWidth="3.5"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="text-neon-cyan"
                    strokeWidth="3.5"
                    strokeDasharray="100, 100"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <span className="text-xs font-black text-white font-mono">100</span>
              </div>
              <span className="text-[8px] text-slate-500 uppercase font-black tracking-wider">SEO / AEO</span>
            </div>

            {/* Circle 3 */}
            <div className="flex flex-col items-center gap-2">
              <div className="relative w-16 h-16 flex items-center justify-center">
                <svg className="absolute w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-white/5"
                    strokeWidth="3.5"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="text-neon-purple"
                    strokeWidth="3.5"
                    strokeDasharray="100, 100"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <span className="text-xs font-black text-white font-mono">100</span>
              </div>
              <span className="text-[8px] text-slate-500 uppercase font-black tracking-wider">Best Pract.</span>
            </div>
          </div>

          <div className="mt-2 bg-white/5 border border-white/5 p-2 rounded-xl flex items-center gap-2 text-[9px] text-slate-400 font-medium">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
            <span>AI indexers schemas structured & indexed.</span>
          </div>
        </div>
      </div>
    ),
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0); // -1: prev, 1: next

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 7000);
    return () => clearInterval(timer);
  }, [current]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const setSlide = (idx: number) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  const ActiveIcon = slides[current].icon;

  return (
    <div className="w-full flex flex-col items-center relative group min-h-[500px]">
      {/* Slide Content wrapper */}
      <div className="w-full flex flex-col lg:flex-row gap-12 items-center justify-between relative min-h-[420px]">
        {/* Left Column: Copywriting content */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6 text-center lg:text-left items-center lg:items-start">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="flex flex-col gap-5 items-center lg:items-start"
            >
              {/* Badge Tag */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-neon-purple/20 bg-neon-purple/5 text-neon-purple text-xs font-bold tracking-wider uppercase">
                <ActiveIcon className="w-3.5 h-3.5 text-neon-purple" />
                <span>{slides[current].tag}</span>
              </div>

              {/* Slide Title */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] font-display">
                {current === 0 ? (
                  <>
                    Transform Business with <span className="text-gradient-purple-cyan block sm:inline">Custom Web Systems</span>
                  </>
                ) : current === 1 ? (
                  <>
                    Scale Profitable <span className="text-gradient-blue-magenta block sm:inline">Paid Ads Campaigns</span>
                  </>
                ) : (
                  <>
                    Rank #1 on <span className="text-gradient-purple-cyan block sm:inline">Search & AI Engines</span>
                  </>
                )}
              </h1>

              {/* Description */}
              <p className="text-slate-655 text-sm sm:text-base leading-relaxed max-w-xl font-semibold">
                {slides[current].desc}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start w-full sm:w-auto mt-2">
                <Link
                  href={slides[current].btnLink}
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-neon-purple to-neon-cyan text-white text-xs font-bold uppercase tracking-wider hover:opacity-95 shadow-lg shadow-purple-500/10 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
                >
                  {slides[current].btnText}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-8 py-4 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  Consultation Call
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Column: Interactive CSS Graphic Visualizer */}
        <div className="w-full lg:w-1/2 max-w-[500px] h-[340px] relative flex items-center justify-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="w-full h-full"
            >
              {slides[current].visual}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Manual Slide Navigation Toggles */}
      <button
        onClick={handlePrev}
        className="absolute left-[-20px] lg:left-[-60px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-slate-200 bg-white/80 hover:bg-white text-slate-600 hover:text-slate-900 shadow-sm flex items-center justify-center transition-all duration-300 hover:scale-105 cursor-pointer z-20 opacity-0 group-hover:opacity-100 hidden sm:flex"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-[-20px] lg:right-[-60px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-slate-200 bg-white/80 hover:bg-white text-slate-600 hover:text-slate-900 shadow-sm flex items-center justify-center transition-all duration-300 hover:scale-105 cursor-pointer z-20 opacity-0 group-hover:opacity-100 hidden sm:flex"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Active Dot Indicators */}
      <div className="flex gap-2.5 mt-8 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setSlide(idx)}
            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
              current === idx ? "w-8 bg-neon-purple" : "w-2.5 bg-slate-200 hover:bg-slate-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
