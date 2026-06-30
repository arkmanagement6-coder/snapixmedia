"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Cpu, BarChart2, ShieldCheck } from "lucide-react";

const slides = [
  {
    tag: "Software Engineering",
    icon: Cpu,
    titleColor: "from-neon-purple to-neon-cyan",
    title: "Transform Business with Custom Web Systems",
    desc: "We engineer lightning-fast Next.js storefronts, custom APIs, and cloud SaaS dashboards designed for performance.",
    btnText: "Explore Services",
    btnLink: "/services",
    visual: (
      <div className="w-full h-full flex items-center justify-center p-1.5 bg-white/40 border border-slate-200/50 rounded-3xl shadow-xl relative backdrop-blur-xl animate-float-slow group">
        {/* Glow Orbs */}
        <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-radial from-neon-purple/20 to-transparent blur-2xl pointer-events-none" />
        <img
          src="/web_systems_3d.png"
          alt="Web Systems 3D Mockup"
          className="w-full h-full object-cover rounded-2xl shadow-sm group-hover:scale-102 transition-transform duration-700"
        />
        {/* Floating 3D Badge Overlay */}
        <div className="absolute -bottom-4 -left-4 bg-white border border-slate-200/60 shadow-xl rounded-2xl px-4 py-3 z-10 hidden sm:flex items-center gap-2.5 animate-float-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span className="text-[10px] font-black text-slate-800 tracking-wide uppercase font-mono">Speed latency: 38ms</span>
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
      <div className="w-full h-full flex items-center justify-center p-1.5 bg-white/40 border border-slate-200/50 rounded-3xl shadow-xl relative backdrop-blur-xl animate-float-medium group">
        {/* Glow Orbs */}
        <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-radial from-neon-blue/20 to-transparent blur-2xl pointer-events-none" />
        <img
          src="/digital_growth_3d.png"
          alt="Paid Ads 3D Mockup"
          className="w-full h-full object-cover rounded-2xl shadow-sm group-hover:scale-102 transition-transform duration-700"
        />
        {/* Floating 3D Badge Overlay */}
        <div className="absolute -top-4 -right-4 bg-gradient-to-r from-neon-purple to-neon-cyan border border-white/20 shadow-xl rounded-2xl px-4 py-3 z-10 hidden sm:flex items-center gap-2.5 text-white animate-float-slow">
          <span className="text-[10px] font-black tracking-wider uppercase font-mono">Meta ROAS: 5.2x</span>
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
      <div className="w-full h-full flex items-center justify-center p-1.5 bg-white/40 border border-slate-200/50 rounded-3xl shadow-xl relative backdrop-blur-xl animate-float-fast group">
        {/* Glow Orbs */}
        <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-radial from-neon-purple/20 to-transparent blur-2xl pointer-events-none" />
        <img
          src="/search_authority_3d.png"
          alt="SEO Audit 3D Mockup"
          className="w-full h-full object-cover rounded-2xl shadow-sm group-hover:scale-102 transition-transform duration-700"
        />
        {/* Floating 3D Badge Overlay */}
        <div className="absolute -bottom-4 -right-4 bg-white border border-slate-200/60 shadow-xl rounded-2xl px-4 py-3 z-10 hidden sm:flex items-center gap-2.5 animate-float-fast">
          <span className="text-[10px] font-black text-slate-800 tracking-wide uppercase font-mono">AI Citations: OK</span>
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
      x: dir > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 50 : -50,
      opacity: 0,
    }),
  };

  const ActiveIcon = slides[current].icon;

  return (
    <div className="w-full flex flex-col items-center relative group min-h-fit py-4">
      {/* Slide Content wrapper */}
      <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-16 items-center justify-between relative min-h-fit">
        
        {/* Left Column: Copywriting content */}
        <div className="w-full lg:w-[52%] flex flex-col gap-5 text-center lg:text-left items-center lg:items-start order-1 lg:order-1">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="flex flex-col gap-4 items-center lg:items-start"
            >
              {/* Badge Tag */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-neon-purple/20 bg-neon-purple/5 text-neon-purple text-xs font-bold tracking-wider uppercase">
                <ActiveIcon className="w-3.5 h-3.5 text-neon-purple" />
                <span>{slides[current].tag}</span>
              </div>

              {/* Slide Title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15] font-display">
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
              <div className="flex flex-col sm:flex-row gap-3 items-center justify-center lg:justify-start w-full sm:w-auto mt-4">
                <Link
                  href={slides[current].btnLink}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-neon-purple to-neon-cyan text-white text-xs font-bold uppercase tracking-wider hover:opacity-95 shadow-lg shadow-purple-500/10 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
                >
                  {slides[current].btnText}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  Consultation Call
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Column: 3D Illustration Graphic */}
        <div className="w-full lg:w-[45%] max-w-[480px] h-[220px] sm:h-[300px] lg:h-[340px] relative flex items-center justify-center order-2 lg:order-2 mt-6 lg:mt-0 px-4 sm:px-0">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: "easeInOut" }}
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
        className="absolute left-[-20px] lg:left-[-60px] top-[40%] lg:top-[50%] -translate-y-1/2 w-10 h-10 rounded-full border border-slate-200 bg-white/80 hover:bg-white text-slate-600 hover:text-slate-900 shadow-sm flex items-center justify-center transition-all duration-300 hover:scale-105 cursor-pointer z-20 opacity-0 group-hover:opacity-100 hidden sm:flex"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-[-20px] lg:right-[-60px] top-[40%] lg:top-[50%] -translate-y-1/2 w-10 h-10 rounded-full border border-slate-200 bg-white/80 hover:bg-white text-slate-600 hover:text-slate-900 shadow-sm flex items-center justify-center transition-all duration-300 hover:scale-105 cursor-pointer z-20 opacity-0 group-hover:opacity-100 hidden sm:flex"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Active Dot Indicators */}
      <div className="flex gap-2.5 mt-8 lg:mt-10 z-20">
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
