"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star, CheckCircle } from "lucide-react";
import GlassCard from "./GlassCard";

const reviews = [
  {
    quote: "Snapix Media transformed our legacy software systems into a blazing-fast, modern Next.js storefront. Their attention to design and software engineering standards is elite, and our customer retention climbed by 22% within three months of deployment.",
    author: "Devendra Sharma",
    role: "Founder, Aura Organic Foods",
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=400&h=400&q=80",
    rating: 5,
    gradient: "from-cyan-400 via-blue-500 to-neon-blue",
  },
  {
    quote: "Their search engine optimizations and Meta ad funnels exceeded our expectations. We scaled organic search clicks by 4.2x, landing top spots for high-intent search terms. Their real-time dashboard is exceptionally transparent.",
    author: "Anjali Mehta",
    role: "Marketing Director, Stellar Retail Group",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=400&q=80",
    rating: 5,
    gradient: "from-neon-purple via-neon-magenta to-pink-500",
  },
  {
    quote: "An incredibly fast, headless e-commerce store that has increased our checkout conversion rate by 34%. Their engineering team and UI designers behave like strategic co-founders rather than just an external IT agency.",
    author: "Rajesh Patel",
    role: "VP of Growth, Apex Fintech India",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&h=400&q=80",
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
      x: dir > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
    }),
  };

  return (
    <div className="relative max-w-3xl mx-auto px-4 py-8 font-sans">
      {/* Decorative quotes background mark */}
      <Quote className="absolute top-0 left-0 w-24 h-24 text-slate-200/40 pointer-events-none -translate-x-6 -translate-y-8 opacity-30 animate-pulse" />
      
      <GlassCard className="p-8 md:p-12 relative overflow-hidden rounded-3xl min-h-[300px] flex flex-col justify-between shadow-lg shadow-slate-200/20 border border-slate-200/60 bg-white/70" hoverGlow>
        <div className="relative overflow-hidden flex-1">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-5"
            >
              {/* Rating stars and Verified badge */}
              <div className="flex items-center justify-between">
                <div className="flex gap-1 text-amber-400">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-4.5 h-4.5 fill-current" />
                  ))}
                </div>
                <div className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 px-2.5 py-0.5 rounded-full select-none">
                  <CheckCircle className="w-3 h-3 text-emerald-500 fill-white" />
                  <span>Verified Client Partner</span>
                </div>
              </div>

              {/* Review Text */}
              <p className="text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed font-semibold italic">
                "{current.quote}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 mt-2">
                {/* Glowing Circular Image */}
                <div className="relative shrink-0 w-14 h-14">
                  <div className="w-full h-full rounded-full overflow-hidden border-2 border-white shadow-md relative z-10">
                    <img
                      src={current.image}
                      alt={current.author}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  {/* Neon Glow Ring behind image */}
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-tr ${current.gradient} blur-[6px] opacity-70 scale-105 z-0`} />
                </div>

                <div>
                  <h4 className="text-sm font-extrabold text-slate-900 tracking-tight font-display">{current.author}</h4>
                  <p className="text-xs text-slate-500 font-semibold">{current.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-end gap-3 mt-8 border-t border-slate-200/50 pt-6">
          <button
            onClick={handlePrev}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 hover:bg-gradient-to-r hover:from-neon-purple hover:to-neon-cyan hover:text-white hover:border-transparent hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 hover:bg-gradient-to-r hover:from-neon-purple hover:to-neon-cyan hover:text-white hover:border-transparent hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </GlassCard>
    </div>
  );
}
