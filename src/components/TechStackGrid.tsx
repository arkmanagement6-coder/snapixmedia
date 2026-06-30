"use client";

import { motion } from "framer-motion";

const technologies = [
  {
    name: "React",
    desc: "Frontend SPA",
    glow: "group-hover:shadow-[0_0_20px_rgba(34,211,238,0.25)] group-hover:border-cyan-400/30",
    iconColor: "text-cyan-400",
    icon: (
      <svg className="w-8 h-8 current-color" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(30 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(90 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(150 12 12)" />
        <circle cx="12" cy="12" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "NextJS",
    desc: "React SSR Framework",
    glow: "group-hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] group-hover:border-white/20",
    iconColor: "text-white",
    icon: (
      <svg className="w-8 h-8 current-color" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" />
        <path d="M16 16L9.5 8M9 7.5V16.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "NodeJS",
    desc: "Backend Engine",
    glow: "group-hover:shadow-[0_0_20px_rgba(74,222,128,0.2)] group-hover:border-emerald-400/30",
    iconColor: "text-emerald-500",
    icon: (
      <svg className="w-8 h-8 current-color" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 3-1.912 5.886L3.82 8.358 8.41 13 6.498 18.886 12 15.258l5.502 3.628L15.59 13l4.59-4.642-6.268-.472L12 3Z" />
      </svg>
    ),
  },
  {
    name: "MongoDB",
    desc: "Flexible Document Store",
    glow: "group-hover:shadow-[0_0_20px_rgba(52,211,153,0.2)] group-hover:border-green-400/30",
    iconColor: "text-green-400",
    icon: (
      <svg className="w-8 h-8 current-color" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M5 12h14M12 2c4 4 4 16 0 20M12 2c-4 4-4 16 0 20" />
      </svg>
    ),
  },
  {
    name: "AWS",
    desc: "Cloud Infrastructures",
    glow: "group-hover:shadow-[0_0_20px_rgba(251,191,36,0.2)] group-hover:border-amber-400/30",
    iconColor: "text-amber-500",
    icon: (
      <svg className="w-8 h-8 current-color" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 18H18M12 6V18" />
        <path d="m18 12-6-6-6 6" />
      </svg>
    ),
  },
  {
    name: "Python",
    desc: "AI & Data Scripts",
    glow: "group-hover:shadow-[0_0_20px_rgba(96,165,250,0.2)] group-hover:border-blue-400/30",
    iconColor: "text-blue-500",
    icon: (
      <svg className="w-8 h-8 current-color" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2C9 2 8 3 8 5V7H12V8H6C4 8 3 9 3 11V14C3 16 4 17 6 17H8V15C8 13 9 12 11 12H17C19 12 20 11 20 9V6C20 4 19 3 17 3H15V5C15 7 14 8 12 8C10 8 9 7 9 5V2H12Z" fill="currentColor" fillRule="evenodd" />
        <path d="M12 22C15 22 16 21 16 19V17H12V16H18C20 16 21 15 21 13V10C21 8 20 7 18 7H16V9C16 11 15 12 13 12H7C5 12 4 13 4 15V18C4 20 5 21 7 21H9V19C9 17 10 16 12 16C14 16 15 17 15 19V22H12Z" fill="currentColor" fillRule="evenodd" />
      </svg>
    ),
  },
  {
    name: "WordPress",
    desc: "Headless CMS Solutions",
    glow: "group-hover:shadow-[0_0_20px_rgba(147,197,253,0.2)] group-hover:border-sky-300/30",
    iconColor: "text-sky-400",
    icon: (
      <svg className="w-8 h-8 current-color" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 22c-3.2 0-6.1-1.5-8-3.8l4.4-12 2.6 7.7 2.2-6.5 2.1 6.1L20 6.2c-1.9-2.3-4.8-3.8-8-3.8zm0-18.8c-2 0-3.8.7-5.3 1.8l2.9 8.2L12 6.5l2.4 6.7 2.9-8.2C15.8 3.9 14 3.2 12 3.2z" />
      </svg>
    ),
  },
  {
    name: "Shopify Headless",
    desc: "GraphQL Commerce APIs",
    glow: "group-hover:shadow-[0_0_20px_rgba(167,243,125,0.2)] group-hover:border-lime-400/30",
    iconColor: "text-lime-400",
    icon: (
      <svg className="w-8 h-8 current-color" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M19 11v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9" />
        <path d="M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2M21 7H3M21 7l-2.5 4M3 7l2.5 4" />
      </svg>
    ),
  },
];

export default function TechStackGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto py-8">
      {technologies.map((tech, i) => (
        <motion.div
          key={tech.name}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
          className="group flex items-center gap-4 p-5 rounded-2xl bg-slate-900/60 border border-white/10 hover:bg-slate-900 hover:border-white/15 transition-all duration-300 shadow-md group-hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] group-hover:border-neon-purple/45"
        >
          <div className={`${tech.iconColor} p-3 rounded-xl bg-slate-950/60 border border-white/5 group-hover:scale-110 transition-transform duration-300`}>
            {tech.icon}
          </div>
          <div>
            <h4 className="text-sm font-bold text-white group-hover:text-neon-purple transition-colors duration-300">
              {tech.name}
            </h4>
            <p className="text-[10px] text-slate-400 font-semibold tracking-wide uppercase mt-0.5">
              {tech.desc}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
