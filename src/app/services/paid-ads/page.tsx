"use client";

import { Sparkles, ArrowLeft, ArrowUpRight, Target, BarChart2, Zap, Settings } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MouseFollower from "@/components/MouseFollower";
import WhatsAppChat from "@/components/WhatsAppChat";
import GlassCard from "@/components/GlassCard";
import Link from "next/link";

const categories = [
  {
    title: "Meta Ads Optimization",
    desc: "Facebook, Instagram pixel tracking configuration, custom conversion setups, detailed demographic exclusions, and dynamic catalog ads.",
    icon: Target,
  },
  {
    title: "Google Ads PPC Bidding",
    desc: "Keyword research, negative keyword pruning, Smart Bidding optimization, YouTube bumper ads, and local store search listings.",
    icon: BarChart2,
  },
  {
    title: "Audience Exclusions & Pixels",
    desc: "Custom audience retargeting arrays, email list hashing, server-to-server Conversions APIs, and multi-touch landing page split tests.",
    icon: Settings,
  },
];

export default function PaidAds() {
  return (
    <div className="relative min-h-screen bg-transparent text-slate-700 overflow-x-hidden flex flex-col font-sans">
      <MouseFollower />
      <Navbar isDarkHero />

      {/* Full-width Hero Banner */}
      <section className="relative w-full min-h-[300px] sm:min-h-[380px] flex items-center justify-center bg-slate-950 overflow-hidden pt-28">
        {/* Background grids & patterns */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:30px_30px]" />
        <div className="absolute inset-0 bg-radial from-neon-purple/20 via-transparent to-transparent blur-[120px] pointer-events-none" />
        
        {/* Abstract decorative floating elements */}
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-neon-purple/10 blur-[80px] animate-pulse-slow pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-neon-cyan/10 blur-[90px] animate-pulse-slow pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 w-full text-center relative z-10 py-12 flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-neon-cyan/20 bg-neon-cyan/5 text-neon-cyan text-xs font-bold tracking-wider uppercase">
            <Zap className="w-3.5 h-3.5" />
            <span>Paid Growth Campaigns</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold !text-white tracking-tight leading-tight font-display drop-shadow-md">
            Google & Meta <span className="text-gradient-purple-cyan">Paid Ads</span>
          </h1>
          <p className="!text-slate-300 text-xs sm:text-sm max-w-xl leading-relaxed font-semibold">
            We deploy paid social campaigns and search PPC bids that are rigorously tracked, audited, and optimized to decrease acquisition costs.
          </p>
        </div>
      </section>

      <main className="flex-1 pt-12 pb-20 px-6 max-w-6xl mx-auto w-full">
        {/* Back navigation */}
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 hover:text-slate-900 transition-colors duration-300 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Services
        </Link>

        {/* Hero Header */}
        <section className="flex flex-col lg:flex-row gap-12 items-center mb-16">
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight leading-tight font-display">
              Ad Budget Strategy
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-semibold leading-relaxed">
              We deploy paid social campaigns and search PPC bids that are rigorously tracked, audited, and optimized to decrease acquisition costs. We focus on direct customer return on ad spend (ROAS) and long-term user retention.
            </p>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-lg shadow-slate-200/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-radial from-neon-cyan/10 to-transparent blur-2xl pointer-events-none" />
              <div className="flex flex-col gap-4">
                <span className="text-xs font-bold text-neon-cyan uppercase tracking-widest font-mono">Paid Scaling ROI</span>
                <h3 className="text-2xl font-extrabold text-slate-900 leading-tight">Scale Budgets Profitably</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-semibold">
                  By applying custom tracking pixels and server conversions (CAPI), we identify exactly which creatives yield high retention rates to save budget.
                </p>
                <div className="flex items-center gap-6 border-t border-slate-100 pt-4 mt-2">
                  <div>
                    <span className="block text-2xl font-extrabold text-slate-900">+320%</span>
                    <span className="text-[10px] text-slate-400 font-bold uppercase">Avg ROI Jump</span>
                  </div>
                  <div>
                    <span className="block text-2xl font-extrabold text-slate-900">-30%</span>
                    <span className="text-[10px] text-slate-400 font-bold uppercase">Reduction in CAC</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-12 border-t border-slate-200/50">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-bold text-neon-purple uppercase tracking-widest">Capabilities</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2 font-display">Ad Channel Optimization</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <GlassCard key={i} className="flex flex-col gap-4" hoverGlow>
                  <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-neon-purple">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{cat.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-semibold">{cat.desc}</p>
                </GlassCard>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16 p-8 rounded-3xl bg-slate-50 border border-slate-200 text-center">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-3 font-display">Ready to auditing your active campaigns?</h2>
          <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed font-semibold mb-8">
            Let our marketing strategist review your bidding structures and exclusion lists to optimize performance.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-neon-purple to-neon-cyan hover:opacity-90 shadow-md transition-all cursor-pointer"
          >
            Request Free Ad Audit
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </section>
      </main>

      <Footer />
      <WhatsAppChat />
    </div>
  );
}
