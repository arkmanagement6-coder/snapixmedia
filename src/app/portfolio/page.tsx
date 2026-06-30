"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, BarChart3, TrendingUp, Users2, Sparkles, Filter } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MouseFollower from "@/components/MouseFollower";
import WhatsAppChat from "@/components/WhatsAppChat";
import GlassCard from "@/components/GlassCard";

const filters = [
  { name: "All Work", value: "all" },
  { name: "Websites", value: "web" },
  { name: "SEO Campaigns", value: "seo" },
  { name: "Marketing", value: "marketing" },
  { name: "E-Commerce", value: "ecommerce" },
];

const caseStudies = [
  {
    title: "Apex Analytics Dashboard",
    category: "web",
    categoryLabel: "Web Dev & SaaS",
    desc: "Re-engineering a legacy B2B platform into a high-performance Next.js application.",
    metrics: "250% Speedup",
    roi: "+320% Revenue",
    slug: "apex-analytics",
    bgGradient: "from-blue-600/20 to-purple-600/20 border-blue-500/20",
  },
  {
    title: "Velo Headless Commerce",
    category: "ecommerce",
    categoryLabel: "Headless Shopify",
    desc: "A custom API-driven storefront engineered for ultra-fast page speed and smooth checkouts.",
    metrics: "4.8% Conv. Rate",
    roi: "+45% Avg Order",
    slug: "velo-headless",
    bgGradient: "from-cyan-600/20 to-blue-600/20 border-cyan-500/20",
  },
  {
    title: "Aura Global Campaign",
    category: "seo",
    categoryLabel: "SEO & Growth",
    desc: "Deploying high-intent organic technical audits and paid social search funnels.",
    metrics: "+420% Leads",
    roi: "10x Clicks",
    slug: "aura-seo",
    bgGradient: "from-purple-600/20 to-pink-600/20 border-purple-500/20",
  },
  {
    title: "Novus Mobile App Portal",
    category: "web",
    categoryLabel: "App Design / React Native",
    desc: "Developing a hybrid subscription platform connecting mobile endpoints with real-time sync.",
    metrics: "4.9 App Rating",
    roi: "150k Downloads",
    slug: "novus-app",
    bgGradient: "from-pink-600/20 to-orange-600/20 border-pink-500/20",
  },
  {
    title: "EcoBrand Social Strategy",
    category: "marketing",
    categoryLabel: "Growth Marketing",
    desc: "Multi-channel influencer strategy and precision ad retargeting loops.",
    metrics: "12% Engagement",
    roi: "-35% CPA",
    slug: "ecobrand-social",
    bgGradient: "from-emerald-600/20 to-teal-600/20 border-emerald-500/20",
  },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredStudies =
    activeFilter === "all"
      ? caseStudies
      : caseStudies.filter((item) => item.category === activeFilter);

  return (
    <div className="relative min-h-screen bg-transparent text-slate-300 overflow-x-hidden flex flex-col font-sans">
      <MouseFollower />
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-36 pb-16 px-6 glow-grid">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-radial from-neon-purple/10 to-transparent blur-[80px] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-neon-cyan/20 bg-neon-cyan/5 text-neon-cyan text-xs font-bold tracking-wider mb-6 uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Proven Case Studies</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6 font-display">
            Premium Work,{" "}
            <span className="text-gradient-purple-cyan">Measurable Results</span>
          </h1>
          <p className="text-slate-350 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            Review how we align technical web systems engineering with targeted digital acquisition funnels to deliver enterprise scaling.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-6 px-6 border-y border-white/5 bg-slate-950/20">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-3 items-center justify-center">
          <Filter className="w-4 h-4 text-slate-405 mr-2 hidden sm:block" />
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase border transition-all duration-300 cursor-pointer ${
                activeFilter === filter.value
                  ? "bg-gradient-to-r from-neon-blue to-neon-purple text-white border-transparent shadow-sm"
                  : "bg-slate-900/60 border-white/10 text-slate-300 hover:text-neon-purple hover:border-neon-purple/40"
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStudies.map((study) => (
              <GlassCard
                key={study.slug}
                className={`h-[320px] flex flex-col justify-between border-white/5 hover:border-neon-purple/45 bg-gradient-to-br ${study.bgGradient} relative group`}
                hoverGlow
              >
                <div className="flex flex-col gap-3">
                  <span className="text-[10px] font-bold text-neon-purple uppercase tracking-wider">
                    {study.categoryLabel}
                  </span>
                  <h3 className="text-xl font-extrabold text-white group-hover:text-neon-purple transition-colors duration-300">
                    {study.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-medium">{study.desc}</p>
                </div>

                {/* Key Metrics Highlight Block */}
                <div className="grid grid-cols-2 gap-4 border-y border-white/5 py-4 my-2">
                  <div>
                    <span className="text-[9px] text-slate-400 uppercase font-semibold">Primary Stat</span>
                    <p className="text-sm font-bold text-white mt-0.5">{study.metrics}</p>
                  </div>
                  <div>
                    <span className="text-[9px] text-slate-400 uppercase font-semibold">Value Delivered</span>
                    <p className="text-sm font-bold text-neon-purple mt-0.5">{study.roi}</p>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Link
                    href={`/portfolio/${study.slug}`}
                    className="text-xs font-semibold uppercase tracking-wider text-slate-400 group-hover:text-white flex items-center gap-1 transition-colors duration-300"
                  >
                    View Details
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Traffic & Lead Growth Metric Dashboard (Before vs After) */}
      <section className="py-20 px-6 border-t border-white/5 bg-slate-950/20">
        <div className="max-w-5xl mx-auto flex flex-col gap-12">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-xs font-bold text-neon-purple uppercase tracking-widest font-sans">Growth Metrics</span>
            <h2 className="text-3xl font-extrabold text-white mt-3 mb-2 font-display">Average Campaign Impact</h2>
            <p className="text-xs text-slate-400 font-medium">Historical performance data aggregated across active retainers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Traffic Growth Card */}
            <GlassCard className="flex flex-col gap-6" hoverGlow>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-400 uppercase">Traffic Growth (MoM)</span>
                <BarChart3 className="w-5 h-5 text-neon-purple" />
              </div>
              <div className="flex items-end justify-between h-28 pt-4">
                {[30, 42, 38, 55, 70, 95, 120].map((val, idx) => (
                  <div key={idx} className="w-[10%] flex flex-col items-center gap-2">
                    <span className="text-[8px] text-slate-400">{val}%</span>
                    <div
                      className="w-full bg-gradient-to-t from-neon-blue to-neon-purple rounded-t"
                      style={{ height: `${val / 1.3}px` }}
                    />
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-400 leading-relaxed font-medium">
                Aggregated statistics demonstrate an average <strong className="text-white">3.2x increase</strong> in organic page traffic within 6 months.
              </p>
            </GlassCard>

            {/* Lead Growth Card */}
            <GlassCard className="flex flex-col gap-6" hoverGlow>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-400 uppercase">Lead Growth Ratio</span>
                <TrendingUp className="w-5 h-5 text-neon-purple" />
              </div>
              <div className="flex flex-col gap-4 py-2">
                <div>
                  <div className="flex justify-between text-xs text-slate-400 mb-1">
                    <span>Legacy Conversion</span>
                    <span>1.2%</span>
                  </div>
                  <div className="w-full h-2 rounded bg-slate-950 border border-white/5 overflow-hidden">
                    <div className="h-full bg-slate-500 rounded" style={{ width: "25%" }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs text-neon-blue font-bold mb-1">
                    <span>Snapix Media Core Optimizations</span>
                    <span>4.6%</span>
                  </div>
                  <div className="w-full h-2 rounded bg-slate-950 border border-white/5 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-neon-blue to-neon-purple rounded" style={{ width: "85%" }} />
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed font-medium">
                By rewriting visual funnels, speeding page loads, and refining copy, average leads scale <strong className="text-white">+280%</strong>.
              </p>
            </GlassCard>

            {/* ROI Metrics Card */}
            <GlassCard className="flex flex-col gap-6" hoverGlow>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-400 uppercase">Ad Capital Efficiency</span>
                <Users2 className="w-5 h-5 text-neon-magenta" />
              </div>
              <div className="grid grid-cols-2 gap-4 py-4">
                <div className="p-3 bg-slate-950/50 border border-white/5 rounded-xl">
                  <span className="text-[9px] text-slate-400 uppercase">Cost Per Lead</span>
                  <p className="text-lg font-bold text-white mt-1">-34%</p>
                </div>
                <div className="p-3 bg-slate-950/50 border border-white/5 rounded-xl">
                  <span className="text-[9px] text-slate-400 uppercase">Sales Closing</span>
                  <p className="text-lg font-bold text-neon-purple mt-1">+18%</p>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed font-medium">
                Paid strategy integration lowers acquisition cost while accelerating pipeline quality.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppChat />
    </div>
  );
}
