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
    <div className="w-full flex flex-col items-start relative group min-h-[460px] py-12 px-0 text-left">
      {/* Slide Content wrapper */}
      <div className="w-full flex flex-col items-start justify-center text-left relative min-h-[380px]">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="flex flex-col gap-6 items-start w-full md:max-w-[64%] lg:max-w-[62%] text-left"
          >
            {/* Badge Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 md:border-slate-200 bg-white/10 md:bg-white/80 text-white md:text-slate-800 text-xs sm:text-sm font-bold tracking-wider uppercase backdrop-blur-sm shadow-sm justify-start text-left">
              <ActiveIcon className="w-4 h-4 text-white md:text-[#1A50F1]" />
              <span>{slides[current].tag}</span>
            </div>

            {/* Slide Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[62px] font-black tracking-tight leading-[1.15] font-display w-full text-left text-white md:text-slate-900">
              {current === 0 ? (
                <>
                  Grow Your Brand <span className="text-white md:text-gradient-purple-cyan md:bg-clip-text md:text-transparent block">& Generate More Leads</span>
                </>
              ) : current === 1 ? (
                <>
                  Rank #1 on <span className="text-white md:text-gradient-purple-cyan md:bg-clip-text md:text-transparent block">Search & AI Engines</span>
                </>
              ) : current === 2 ? (
                <>
                  Scale Profitable <span className="text-white md:text-gradient-blue-magenta md:bg-clip-text md:text-transparent block">Paid Ads Campaigns</span>
                </>
              ) : (
                <>
                  Transform Business with <span className="text-white md:text-gradient-purple-cyan md:bg-clip-text md:text-transparent block">Custom Web Systems</span>
                </>
              )}
            </h1>

            {/* Description */}
            <p className="text-blue-100 md:text-slate-650 text-base sm:text-lg md:text-xl leading-relaxed w-full font-semibold mt-2 text-left">
              {slides[current].desc}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-start w-full mt-6 text-left">
              <a
                href={`https://wa.me/919675818088?text=${encodeURIComponent(slides[current].waText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-9 py-4 rounded-full bg-white text-[#1A50F1] hover:bg-slate-50 md:bg-[#1A50F1] md:text-white md:hover:bg-[#103ec6] text-xs sm:text-sm font-bold uppercase tracking-wider hover:opacity-95 shadow-lg shadow-white/10 md:shadow-blue-500/20 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer border border-white/10 md:border-[#103ec6]/30 text-center"
              >
                {slides[current].btnText}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                href="/contact"
                className="w-full sm:w-auto px-9 py-4 rounded-full border border-white/30 bg-transparent text-white hover:bg-white/10 md:border-slate-200 md:bg-white md:text-slate-800 md:hover:bg-slate-50 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-sm text-center"
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


    </div>
  );
}
