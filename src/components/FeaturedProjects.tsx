"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import GlassCard from "./GlassCard";

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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {projects.map((project, i) => (
        <GlassCard
          key={i}
          className="h-[420px] flex flex-col justify-between group overflow-hidden border-glass-border hover:border-glass-border/30"
          hoverGlow
        >
          {/* Top text content */}
          <div className="flex flex-col gap-2 relative z-20">
            <div className="flex justify-between items-center">
              <span className="text-xs font-semibold uppercase text-neon-cyan tracking-wider">{project.industry}</span>
              <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded bg-neon-cyan/15 text-neon-cyan border border-neon-cyan/20">
                {project.metrics}
              </span>
            </div>
            <h3 className="text-xl font-bold text-white group-hover:text-neon-cyan transition-colors duration-300">
              {project.title}
            </h3>
            <div className="flex flex-wrap gap-1.5 mt-1">
              {project.tech.map((t) => (
                <span key={t} className="text-[9px] text-gray-400 font-medium px-2 py-0.5 rounded-full border border-glass-border bg-glass-card">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Interactive visual mockup */}
          <div className={`relative w-full h-[220px] rounded-xl overflow-hidden mt-6 bg-gradient-to-tr ${project.bgClass} border border-glass-border flex items-center justify-center`}>
            {project.visual}
          </div>

          {/* Bottom Card Footer with link */}
          <div className="flex justify-end mt-4 relative z-20">
            <Link
              href={`/portfolio/${project.slug}`}
              className="text-xs font-semibold uppercase tracking-wider text-gray-400 group-hover:text-white flex items-center gap-1 transition-colors duration-300"
            >
              View Case Study
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </GlassCard>
      ))}
    </div>
  );
}
