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
  { name: "Digital Marketing", value: "marketing" },
  { name: "SEO Campaigns", value: "seo" },
];

const caseStudies = [
  {
    title: "Zenith Ads Campaign",
    category: "marketing",
    categoryLabel: "Digital Marketing",
    desc: "Scaling high-intent lead generation and optimizing PPC return on ad spend (ROAS) across search and social channels.",
    metrics: "+350% Leads",
    roi: "5.4x ROAS",
    slug: "zenith-ads",
    bgGradient: "from-blue-600/20 to-purple-600/20 border-blue-500/20",
  },
  {
    title: "Aura Social Branding",
    category: "marketing",
    categoryLabel: "Social Media Marketing",
    desc: "Designing viral grid narratives, high-impact reels content, and strategic influencer collaborations to engage younger demographics.",
    metrics: "+5.8M Views",
    roi: "+22% Eng.",
    slug: "aura-social",
    bgGradient: "from-cyan-600/20 to-blue-600/20 border-cyan-500/20",
  },
  {
    title: "Stellar Search Growth",
    category: "seo",
    categoryLabel: "SEO & Growth",
    desc: "Structuring schema architectures for generative search visibility (AEO), repairing keyword ranks, and developing content hubs.",
    metrics: "10x Traffic",
    roi: "+38 DA",
    slug: "stellar-seo",
    bgGradient: "from-purple-600/20 to-pink-600/20 border-purple-500/20",
  },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredStudies =
    activeFilter === "all"
      ? caseStudies
      : caseStudies.filter((item) => item.category === activeFilter);

  return (
    <div className="relative min-h-screen bg-transparent text-slate-650 overflow-x-hidden flex flex-col font-sans">
      <MouseFollower />
      <Navbar isDarkHero={true} />

      {/* Dark Hero Banner */}
      <section className="relative w-full min-h-[300px] sm:min-h-[380px] flex items-center justify-center bg-slate-950 overflow-hidden pt-28 page-hero-banner">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60" />
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-neon-purple/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 w-full text-center relative z-10 py-12 flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-slate-800 bg-slate-900/50 text-slate-300 text-xs font-bold tracking-wider uppercase backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-neon-cyan" />
            <span>Proven Case Studies</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1] max-w-4xl font-display" style={{ color: "#ffffff" }}>
            Premium Work, <span className="text-gradient-purple-cyan">Measurable Results</span>
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed font-medium">
            Review how we align technical web systems engineering with targeted digital acquisition funnels to deliver enterprise scaling.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-6 px-6 border-y border-slate-200/50 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-3 items-center justify-center">
          <Filter className="w-4 h-4 text-slate-500 mr-2 hidden sm:block" />
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase border transition-all duration-300 cursor-pointer ${
                activeFilter === filter.value
                  ? "bg-gradient-to-r from-neon-purple to-neon-cyan text-white border-transparent shadow-sm"
                  : "bg-white border-slate-200 text-slate-600 hover:text-neon-purple hover:border-neon-purple/40"
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
                className={`h-[320px] flex flex-col justify-between border-slate-200/50 hover:border-neon-purple/45 bg-gradient-to-br ${study.bgGradient} relative group`}
                hoverGlow
              >
                <div className="flex flex-col gap-3">
                  <span className="text-[10px] font-bold text-neon-purple uppercase tracking-wider">
                    {study.categoryLabel}
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-neon-purple transition-colors duration-300">
                    {study.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">{study.desc}</p>
                </div>

                {/* Key Metrics Highlight Block */}
                <div className="grid grid-cols-2 gap-4 border-y border-slate-200/50 py-4 my-2">
                  <div>
                    <span className="text-[9px] text-slate-500 uppercase font-semibold">Primary Stat</span>
                    <p className="text-sm font-bold text-slate-900 mt-0.5">{study.metrics}</p>
                  </div>
                  <div>
                    <span className="text-[9px] text-slate-500 uppercase font-semibold">Value Delivered</span>
                    <p className="text-sm font-bold text-neon-purple mt-0.5">{study.roi}</p>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Link
                    href={`/portfolio/${study.slug}`}
                    className="text-xs font-semibold uppercase tracking-wider text-slate-600 group-hover:text-slate-900 flex items-center gap-1 transition-colors duration-300"
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
      <section className="py-20 px-6 border-t border-slate-200/50 bg-[#f8fafc]">
        <div className="max-w-5xl mx-auto flex flex-col gap-12">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-xs font-bold text-neon-purple uppercase tracking-widest font-sans">Growth Metrics</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-3 mb-2 font-display">Average Campaign Impact</h2>
            <p className="text-xs text-slate-600 font-medium">Historical performance data aggregated across active retainers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Traffic Growth Card */}
            <GlassCard className="flex flex-col gap-6" hoverGlow>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-600 uppercase">Traffic Growth (MoM)</span>
                <BarChart3 className="w-5 h-5 text-neon-purple" />
              </div>
              <div className="flex items-end justify-between h-28 pt-4">
                {[30, 42, 38, 55, 70, 95, 120].map((val, idx) => (
                  <div key={idx} className="w-[10%] flex flex-col items-center gap-2">
                    <span className="text-[8px] text-slate-500">{val}%</span>
                    <div
                      className="w-full bg-gradient-to-t from-neon-blue to-neon-purple rounded-t"
                      style={{ height: `${val / 1.3}px` }}
                    />
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Aggregated statistics demonstrate an average <strong className="text-slate-900">3.2x increase</strong> in organic page traffic within 6 months.
              </p>
            </GlassCard>

            {/* Lead Growth Card */}
            <GlassCard className="flex flex-col gap-6" hoverGlow>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-600 uppercase">Lead Growth Ratio</span>
                <TrendingUp className="w-5 h-5 text-neon-purple" />
              </div>
              <div className="flex flex-col gap-4 py-2">
                <div>
                  <div className="flex justify-between text-xs text-slate-550 mb-1">
                    <span>Legacy Conversion</span>
                    <span>1.2%</span>
                  </div>
                  <div className="w-full h-2 rounded bg-[#f1f5f9] border border-slate-200 overflow-hidden">
                    <div className="h-full bg-slate-400 rounded" style={{ width: "25%" }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs text-neon-purple font-bold mb-1">
                    <span>Snapix Media Core Optimizations</span>
                    <span>4.6%</span>
                  </div>
                  <div className="w-full h-2 rounded bg-[#f1f5f9] border border-slate-200 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-neon-purple to-neon-cyan rounded" style={{ width: "85%" }} />
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                By rewriting visual funnels, speeding page loads, and refining copy, average leads scale <strong className="text-slate-900">+280%</strong>.
              </p>
            </GlassCard>

            {/* ROI Metrics Card */}
            <GlassCard className="flex flex-col gap-6" hoverGlow>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-600 uppercase">Ad Capital Efficiency</span>
                <Users2 className="w-5 h-5 text-neon-magenta" />
              </div>
              <div className="grid grid-cols-2 gap-4 py-4">
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                  <span className="text-[9px] text-slate-500 uppercase font-semibold">Cost Per Lead</span>
                  <p className="text-lg font-bold text-slate-900 mt-1">-34%</p>
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                  <span className="text-[9px] text-slate-500 uppercase font-semibold">Sales Closing</span>
                  <p className="text-lg font-bold text-neon-purple mt-1">+18%</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
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
