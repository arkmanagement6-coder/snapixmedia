"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Cpu, BarChart2, ShieldCheck, Megaphone } from "lucide-react";

const slides = [
  {
    tag: "Digital Marketing",
    icon: Megaphone,
    title: "Grow Your Brand & Generate More Leads",
    desc: "Deploy premium copywriting grids, monthly post schedules, and creative graphic styling kits designed to maximize organic audience engagement.",
    btnText: "WhatsApp Enquiry",
    waText: "Hello Snapix Media, I want to enquire about Digital Marketing services.",
  },
  {
    tag: "SEO Optimization",
    icon: ShieldCheck,
    title: "Rank #1 on Search & AI Engines",
    desc: "Format structured schemas and optimize Core Web Vitals to command authority inside ChatGPT, Gemini, and Google indexers.",
    btnText: "WhatsApp Enquiry",
    waText: "Hello Snapix Media, I want to enquire about SEO and search engine optimization services.",
  },
  {
    tag: "Paid Advertising",
    icon: BarChart2,
    title: "Scale Profitable Paid Ads Campaigns",
    desc: "Deploy performance-driven bidding arrays across Google PPC and Meta CAPI to lower your Customer Acquisition Cost.",
    btnText: "WhatsApp Enquiry",
    waText: "Hello Snapix Media, I want to enquire about Google and Meta Paid Ads campaigns.",
  },
  {
    tag: "Website Design & Development",
    icon: Cpu,
    title: "Transform Business with Custom Web Systems",
    desc: "We engineer lightning-fast Next.js storefronts, custom APIs, and cloud SaaS dashboards designed for modern enterprises.",
    btnText: "WhatsApp Enquiry",
    waText: "Hello Snapix Media, I want to enquire about Website Design and Development services.",
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
    <div className="w-full flex flex-col items-center relative group min-h-[460px] py-12 px-4 sm:px-6">
      {/* Slide Content wrapper */}
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center text-center relative min-h-[380px]">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="flex flex-col gap-6 items-center w-full"
          >
            {/* Badge Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200 bg-white/80 text-slate-800 text-xs sm:text-sm font-bold tracking-wider uppercase backdrop-blur-sm shadow-sm">
              <ActiveIcon className="w-4 h-4 text-neon-purple" />
              <span>{slides[current].tag}</span>
            </div>

            {/* Slide Title */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-black tracking-tight leading-[1.1] font-display max-w-4xl" style={{ color: "#0f172a" }}>
              {current === 0 ? (
                <>
                  Grow Your Brand <span className="text-gradient-purple-cyan block sm:inline">& Generate More Leads</span>
                </>
              ) : current === 1 ? (
                <>
                  Rank #1 on <span className="text-gradient-purple-cyan block sm:inline">Search & AI Engines</span>
                </>
              ) : current === 2 ? (
                <>
                  Scale Profitable <span className="text-gradient-blue-magenta block sm:inline">Paid Ads Campaigns</span>
                </>
              ) : (
                <>
                  Transform Business with <span className="text-gradient-purple-cyan block sm:inline">Custom Web Systems</span>
                </>
              )}
            </h1>

            {/* Description */}
            <p className="text-slate-650 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl font-semibold mt-2">
              {slides[current].desc}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full mt-6">
              <a
                href={`https://wa.me/919675818088?text=${encodeURIComponent(slides[current].waText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-9 py-4 rounded-full bg-[#1fb37a] hover:bg-[#169a67] text-white text-xs sm:text-sm font-bold uppercase tracking-wider hover:opacity-95 shadow-lg shadow-emerald-500/20 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer border border-[#169a67]/30"
              >
                {slides[current].btnText}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                href="/contact"
                className="w-full sm:w-auto px-9 py-4 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                Consultation Call
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Manual Slide Navigation Toggles */}
      <button
        onClick={handlePrev}
        className="absolute left-[-20px] lg:left-[-40px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 hover:text-slate-900 shadow-sm flex items-center justify-center transition-all duration-300 hover:scale-105 cursor-pointer z-20 opacity-0 group-hover:opacity-100 hidden sm:flex"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-[-20px] lg:right-[-40px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 hover:text-slate-900 shadow-sm flex items-center justify-center transition-all duration-300 hover:scale-105 cursor-pointer z-20 opacity-0 group-hover:opacity-100 hidden sm:flex"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Active Dot Indicators */}
      <div className="flex gap-2.5 mt-10 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setSlide(idx)}
            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
              current === idx ? "w-8 bg-neon-purple" : "w-2.5 bg-slate-350 hover:bg-slate-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
