"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import GlassCard from "./GlassCard";

const reviews = [
  {
    quote: "Snapix Media transformed our legacy systems into a blazing-fast, modern App Router application. Their attention to software engineering standards is elite, and our client retention rate climbed by 22% within three months of deployment.",
    author: "Sarah Jenkins",
    role: "VP of Engineering, Apex Analytics",
    initials: "SJ",
    rating: 5,
    gradient: "from-blue-400 via-indigo-500 to-neon-purple",
  },
  {
    quote: "Their SEO implementation and Meta ads workflow exceeded our projections. We scaled organic clicks by 4.2x, landing top spots for high-intent search terms. Their ROI dashboard is exceptionally transparent.",
    author: "Marcus Vance",
    role: "Head of Growth, Aura Global",
    initials: "MV",
    rating: 5,
    gradient: "from-neon-purple via-neon-magenta to-pink-500",
  },
  {
    quote: "An incredibly fast, headless e-commerce store that has increased our checkout conversion rate by 34%. Their developers and UI designers behave like strategic co-founders rather than external agencies.",
    author: "Elena Rostova",
    role: "Founder, Velo Commerce",
    initials: "ER",
    rating: 5,
    gradient: "from-emerald-400 via-teal-500 to-neon-cyan",
  },
];

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1: left, 1: right

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const current = reviews[index];

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
      x: dir > 0 ? -100 : 100,
      opacity: 0,
    }),
  };

  return (
    <div className="relative max-w-3xl mx-auto px-4 py-8 font-sans">
      <Quote className="absolute top-0 left-0 w-24 h-24 text-slate-800 pointer-events-none -translate-x-6 -translate-y-8 opacity-20" />
      
      <GlassCard className="p-8 md:p-12 relative overflow-hidden bg-slate-900/60 border border-white/10 rounded-3xl min-h-[280px] flex flex-col justify-between shadow-md" hoverGlow>
        <div className="relative overflow-hidden flex-1">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="flex flex-col gap-6"
            >
              {/* Rating stars */}
              <div className="flex gap-1 text-yellow-550">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-4.5 h-4.5 fill-current" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-base sm:text-lg md:text-xl text-slate-200 leading-relaxed font-medium italic">
                "{current.quote}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 mt-2">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-tr ${current.gradient} flex items-center justify-center font-bold text-slate-950 text-sm tracking-wide shadow-md`}>
                  {current.initials}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{current.author}</h4>
                  <p className="text-xs text-slate-400">{current.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-end gap-3 mt-8 border-t border-white/5 pt-6">
          <button
            onClick={handlePrev}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 bg-slate-900 text-slate-300 hover:bg-slate-950 hover:text-white hover:border-neon-cyan transition-all duration-300 cursor-pointer shadow-md"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 bg-slate-900 text-slate-300 hover:bg-slate-950 hover:text-white hover:border-neon-cyan transition-all duration-300 cursor-pointer shadow-md"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </GlassCard>
    </div>
  );
}
