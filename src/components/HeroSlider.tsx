"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, ChevronLeft, ChevronRight, CheckCircle2, Cpu, BarChart2, ShieldCheck } from "lucide-react";

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
      <div className="w-full h-full flex flex-col justify-between p-6 bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl relative overflow-hidden font-mono text-left select-none">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-radial from-neon-purple/20 to-transparent blur-2xl" />
        
        {/* Browser Top bar */}
        <div className="flex items-center gap-2 border-b border-slate-805 pb-3 mb-4">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <div className="bg-slate-800/50 text-[10px] text-slate-500 px-3 py-1 rounded-md ml-4 w-48 text-center truncate">
            https://snapixmedia.com/dashboard
          </div>
        </div>

        {/* Dashboard Visual Content */}
        <div className="flex-1 flex flex-col gap-4 text-xs">
          <div className="flex items-center justify-between">
            <span className="text-slate-400 font-bold">API Gateway Status</span>
            <span className="text-emerald-400 flex items-center gap-1 font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              Online
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4 my-2">
            <div className="bg-slate-800/40 border border-slate-800 p-3 rounded-xl">
              <span className="block text-[10px] text-slate-500 uppercase font-bold">Response Speed</span>
              <span className="text-lg font-bold text-white font-sans">42ms</span>
            </div>
            <div className="bg-slate-800/40 border border-slate-800 p-3 rounded-xl">
              <span className="block text-[10px] text-slate-500 uppercase font-bold">Server Load</span>
              <span className="text-lg font-bold text-neon-cyan font-sans">12.4%</span>
            </div>
          </div>

          {/* Code lines */}
          <div className="flex-1 bg-slate-950/70 border border-slate-800/50 p-3 rounded-xl flex flex-col gap-1.5 text-[10px] text-slate-400 font-mono">
            <div className="text-neon-purple"><span className="text-slate-600">1</span> const server = await init();</div>
            <div className="text-neon-cyan"><span className="text-slate-600">2</span> await server.mount("/storefront");</div>
            <div className="text-emerald-400"><span className="text-slate-600">3</span> console.log("Lighthouse Score: 100");</div>
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
      <div className="w-full h-full flex flex-col justify-between p-6 bg-slate-900 border border-slate-850 rounded-3xl shadow-2xl relative overflow-hidden text-left select-none font-sans">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-radial from-neon-blue/20 to-transparent blur-2xl" />

        {/* Ad Metrics Top Strip */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
          <span className="text-xs font-extrabold text-white tracking-wider uppercase">Meta Ads Manager</span>
          <span className="text-[10px] px-2 py-0.5 rounded-full border border-red-500/20 bg-red-500/10 text-red-400 font-bold">Live Budget</span>
        </div>

        {/* Campaign Visual Content */}
        <div className="flex-1 flex flex-col gap-4">
          <div className="flex items-baseline justify-between">
            <div>
              <span className="block text-[10px] text-slate-500 uppercase font-bold tracking-wider">Total ROAS</span>
              <span className="text-3xl font-black text-white">4.85x</span>
            </div>
            <div className="text-right">
              <span className="block text-[10px] text-slate-500 uppercase font-bold tracking-wider">Conversions</span>
              <span className="text-lg font-bold text-emerald-400">+324.8%</span>
            </div>
          </div>

          {/* Custom Trend Grid */}
          <div className="flex-1 bg-slate-950/40 border border-slate-800 p-3 rounded-xl flex items-end justify-between gap-2 h-24 mt-2">
            {[40, 25, 55, 35, 75, 50, 90].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1.5">
                <div 
                  className="w-full rounded-t bg-gradient-to-t from-red-600 to-orange-500 transition-all duration-500" 
                  style={{ height: `${h}%` }}
                />
                <span className="text-[8px] text-slate-600 font-bold">W{i+1}</span>
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
      <div className="w-full h-full flex flex-col justify-between p-6 bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl relative overflow-hidden text-left select-none font-sans">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-radial from-neon-purple/20 to-transparent blur-2xl" />

        {/* SEO Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
          <span className="text-xs font-extrabold text-white tracking-wider uppercase">Lighthouse Core Audit</span>
          <span className="text-[10px] px-2 py-0.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 font-bold">100% Passed</span>
        </div>

        {/* Metric Rings */}
        <div className="flex-1 flex flex-col gap-4 justify-center">
          <div className="flex items-center justify-around gap-4">
            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 rounded-full border-4 border-emerald-400 border-t-transparent flex items-center justify-center animate-spin-slow">
                <span className="text-sm font-black text-white">100</span>
              </div>
              <span className="text-[9px] text-slate-400 uppercase font-bold tracking-wider">Performance</span>
            </div>
            
            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 rounded-full border-4 border-neon-cyan flex items-center justify-center">
                <span className="text-sm font-black text-white">100</span>
              </div>
              <span className="text-[9px] text-slate-400 uppercase font-bold tracking-wider">SEO / AEO</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 rounded-full border-4 border-neon-purple flex items-center justify-center">
                <span className="text-sm font-black text-white">100</span>
              </div>
              <span className="text-[9px] text-slate-400 uppercase font-bold tracking-wider">Best Practices</span>
            </div>
          </div>

          <div className="mt-2 bg-slate-950/30 border border-slate-850 p-2.5 rounded-xl flex items-center gap-2 text-[10px] text-slate-400 font-medium">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
            <span>AI Entity coordinates registered inside indexers schema.</span>
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
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl font-semibold">
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
