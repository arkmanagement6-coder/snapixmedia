"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import GlassCard from "./GlassCard";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Apex Analytics",
    industry: "SaaS Enterprise",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Prisma"],
    slug: "apex-analytics",
    metrics: "250% Speedup",
    bgClass: "from-blue-600/20 to-purple-600/20",
    visual: (
      <div className="absolute inset-x-4 bottom-0 top-12 rounded-t-xl bg-slate-900 border-t border-x border-glass-border p-4 flex flex-col gap-2 overflow-hidden group-hover:translate-y-[-4px] transition-transform duration-500">
        <div className="flex items-center justify-between border-b border-glass-border pb-2">
          <div className="flex gap-1">
            <span className="w-2 h-2 rounded-full bg-red-500/60" />
            <span className="w-2 h-2 rounded-full bg-yellow-500/60" />
            <span className="w-2 h-2 rounded-full bg-green-500/60" />
          </div>
          <span className="text-[10px] text-gray-500 font-mono">dashboard.apex.io</span>
        </div>
        <div className="grid grid-cols-3 gap-2 mt-1">
          <div className="h-16 rounded-lg bg-glass-card border border-glass-border p-2 flex flex-col justify-between">
            <span className="text-[9px] text-gray-500 uppercase">MAU</span>
            <span className="text-sm font-bold text-white">45.2k</span>
          </div>
          <div className="h-16 rounded-lg bg-glass-card border border-glass-border p-2 flex flex-col justify-between">
            <span className="text-[9px] text-gray-500 uppercase">Speed</span>
            <span className="text-sm font-bold text-neon-cyan">99%</span>
          </div>
          <div className="h-16 rounded-lg bg-glass-card border border-glass-border p-2 flex flex-col justify-between">
            <span className="text-[9px] text-gray-500 uppercase">ROI</span>
            <span className="text-sm font-bold text-neon-magenta">+320%</span>
          </div>
        </div>
        <div className="h-12 w-full bg-neon-purple/5 border border-neon-purple/10 rounded-lg p-2 flex items-center justify-between mt-1">
          <div className="flex flex-col">
            <span className="text-[8px] text-gray-400">Total Revenue</span>
            <span className="text-xs font-semibold text-white">$142,500.00</span>
          </div>
          <div className="w-12 h-6 rounded bg-neon-purple/20 animate-pulse" />
        </div>
      </div>
    ),
  },
  {
    title: "Velo Headless Commerce",
    industry: "E-Commerce",
    tech: ["React", "Shopify Headless", "Node.js", "TailwindCSS"],
    slug: "velo-headless",
    metrics: "4.8% Conv. Rate",
    bgClass: "from-neon-cyan/10 to-neon-blue/20",
    visual: (
      <div className="absolute inset-x-4 bottom-0 top-12 rounded-t-xl bg-slate-900 border-t border-x border-glass-border p-4 flex flex-col gap-3 overflow-hidden group-hover:translate-y-[-4px] transition-transform duration-500">
        <div className="flex items-center justify-between border-b border-glass-border pb-2">
          <div className="flex gap-1.5 items-center">
            <span className="w-3 h-3 rounded-full bg-emerald-500/20 flex items-center justify-center"><span className="w-1 h-1 rounded-full bg-emerald-500" /></span>
            <span className="text-[10px] text-gray-400 font-semibold font-display">Velo Store</span>
          </div>
          <span className="text-[9px] text-emerald-400 font-semibold uppercase bg-emerald-400/10 px-2 py-0.5 rounded">Store Online</span>
        </div>
        <div className="flex justify-between items-center gap-4 mt-2">
          <div className="flex-1 flex flex-col gap-1.5">
            <div className="w-full h-3 rounded bg-glass-card" />
            <div className="w-4/5 h-2.5 rounded bg-glass-card" />
            <div className="w-3/5 h-2 rounded bg-glass-card" />
          </div>
          <div className="w-16 h-16 rounded-xl bg-gradient-to-tr from-neon-blue/20 to-neon-cyan/20 border border-glass-border flex items-center justify-center text-white font-bold text-xs">
            Product
          </div>
        </div>
        <div className="flex justify-between items-center mt-2">
          <span className="text-xs font-bold text-white">$129.99</span>
          <div className="px-3 py-1.5 rounded-lg bg-white text-black font-bold text-[9px] uppercase tracking-wider">Buy Now</div>
        </div>
      </div>
    ),
  },
  {
    title: "Aura Global Campaign",
    industry: "Marketing / SEO",
    tech: ["Google Ads", "Meta Ads", "Technical SEO", "Copywriting"],
    slug: "aura-seo",
    metrics: "+420% Leads",
    bgClass: "from-neon-magenta/15 to-neon-purple/20",
    visual: (
      <div className="absolute inset-x-4 bottom-0 top-12 rounded-t-xl bg-slate-900 border-t border-x border-glass-border p-4 flex flex-col gap-2 overflow-hidden group-hover:translate-y-[-4px] transition-transform duration-500">
        <div className="flex items-center justify-between border-b border-glass-border pb-2">
          <span className="text-[9px] text-gray-400 font-semibold uppercase">Organic Impressions</span>
          <span className="text-[10px] text-emerald-400 font-mono">+12.5% vs LW</span>
        </div>
        <div className="mt-2 flex items-end justify-between h-16 px-2">
          {[40, 25, 55, 75, 45, 80, 95, 60, 110].map((h, i) => (
            <div key={i} className="w-[8%] rounded-t bg-gradient-to-t from-neon-purple to-neon-magenta transition-all duration-500" style={{ height: `${h}%` }} />
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div className="p-1.5 rounded bg-glass-card border border-glass-border flex items-center justify-between">
            <span className="text-[8px] text-gray-500">CTR</span>
            <span className="text-[10px] font-bold text-white">8.4%</span>
          </div>
          <div className="p-1.5 rounded bg-glass-card border border-glass-border flex items-center justify-between">
            <span className="text-[8px] text-gray-500">CPC</span>
            <span className="text-[10px] font-bold text-white">$0.34</span>
          </div>
        </div>
      </div>
    ),
  },
];

export default function FeaturedProjects() {
  return (
    <div className="flex flex-col gap-12 max-w-7xl mx-auto w-full px-4">
      {projects.map((project, i) => {
        const isEven = i % 2 === 0;
        return (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 rounded-3xl border border-slate-200 bg-white/70 backdrop-blur-md p-6 sm:p-8 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 group ${
              isEven ? "" : "lg:flex-row-reverse"
            }`}
          >
            {/* Visual Dashboard Mockup on one side */}
            <div className={`w-full lg:w-1/2 h-[280px] rounded-2xl bg-gradient-to-tr ${project.bgClass} border border-slate-200/30 relative overflow-hidden shadow-inner`}>
              {project.visual}
            </div>

            {/* Content details on the other side */}
            <div className="w-full lg:w-1/2 flex flex-col gap-4 justify-center">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-wider text-neon-purple bg-purple-50 px-3 py-1 rounded-full border border-purple-100">{project.industry}</span>
                <span className="text-xs font-bold font-mono px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100">
                  {project.metrics}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 group-hover:text-neon-purple transition-colors duration-300 font-display tracking-tight">
                {project.title}
              </h3>

              <p className="text-sm text-slate-500 leading-relaxed font-semibold">
                {project.title === "Apex Analytics" && "We re-engineered the entire data pipeline of Apex, accelerating load performance by 2.5x and optimizing core vitals to achieve perfect Lighthouse scores."}
                {project.title === "Velo Headless Commerce" && "Created a lightning-fast headless e-commerce store with seamless Shopify syncing, resulting in a dramatic conversion rate lift and instant page load speeds."}
                {project.title === "Aura Global Campaign" && "Engineered and executed an omni-channel search and advertising strategy to lower customer acquisition costs and drive highly targeted organic lead signups."}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mt-1">
                {project.tech.map((t) => (
                  <span key={t} className="text-[10px] text-slate-655 font-extrabold px-3 py-1 rounded-lg border border-slate-200 bg-slate-50 shadow-xs">
                    {t}
                  </span>
                ))}
              </div>

              {/* CTA link */}
              <div className="pt-4 border-t border-slate-100 mt-2">
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-neon-purple group-hover:text-purple-800 transition-colors duration-300 w-fit"
                >
                  Explore Case Study
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
