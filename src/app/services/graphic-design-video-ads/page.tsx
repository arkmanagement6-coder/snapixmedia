"use client";

import { ShieldCheck, ArrowLeft, ArrowUpRight, Layout, Globe, Monitor, Paintbrush, Sparkles, Video, Image } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MouseFollower from "@/components/MouseFollower";
import WhatsAppChat from "@/components/WhatsAppChat";
import GlassCard from "@/components/GlassCard";
import Link from "next/link";

const categories = [
  {
    title: "Brand Identity & Logo Design",
    desc: "Crafting iconic logos, custom typography, unified color palettes, and full corporate branding identity kits that build immediate consumer trust.",
    icon: Paintbrush,
  },
  {
    title: "Social Media Graphics & Creatives",
    desc: "Custom Instagram post grids, engaging carousel templates, story layouts, and promotional flyers optimized for organic reach and high shares.",
    icon: Layout,
  },
  {
    title: "High-Converting Video Ads",
    desc: "High-definition video commercials, short-form Reels & TikTok ads, animated explainers, and product showcase edits that scale paid social ROI.",
    icon: Video,
  },
];

export default function GraphicDesignVideoAds() {
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
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-neon-cyan/20 bg-neon-cyan/5 text-neon-cyan text-xs font-bold tracking-widest w-fit uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Creative & Visual Media</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold !text-white tracking-tight leading-tight font-display drop-shadow-md">
            Graphic Design & <span className="text-gradient-purple-cyan">Video Ads</span>
          </h1>
          <p className="!text-slate-300 text-xs sm:text-sm max-w-xl leading-relaxed font-semibold">
            Elevate your brand presence, attract customer attention, and double your ad Click-Through Rates (CTR) with high-fidelity graphic designs and video commercials custom-crafted by Snapix Media.
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
        <section className="flex flex-col lg:flex-row gap-12 items-center mb-24">
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight leading-tight font-display">
              Our Visual Media Strategy
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-semibold leading-relaxed">
              Visual elements are the cornerstone of digital communication. Our talented visual designers and video editors combine aesthetic brilliance with marketing strategy to produce assets that not only look spectacular but support direct commercial goals: boosting leads, conversions, and retention.
            </p>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-lg shadow-slate-200/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-radial from-neon-cyan/10 to-transparent blur-2xl pointer-events-none" />
              <div className="flex flex-col gap-4">
                <span className="text-xs font-bold text-neon-cyan uppercase tracking-widest font-mono">Creative Performance</span>
                <h3 className="text-2xl font-extrabold text-slate-900 leading-tight">Visuals Made to Convert</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-semibold">
                  A high-converting ad requires storyboards that immediately hook users in the first 3 seconds. We specialize in producing thumb-stopping visuals that reduce CPC and optimize acquisition.
                </p>
                <div className="flex items-center gap-6 border-t border-slate-100 pt-4 mt-2">
                  <div>
                    <span className="block text-2xl font-extrabold text-slate-900">2.4x</span>
                    <span className="text-[10px] text-slate-400 font-bold uppercase">Average CTR Boost</span>
                  </div>
                  <div>
                    <span className="block text-2xl font-extrabold text-slate-900">100%</span>
                    <span className="text-[10px] text-slate-400 font-bold uppercase">Custom Visual Layouts</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities Grid */}
        <section className="py-12 border-t border-slate-200/50">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-bold text-neon-purple uppercase tracking-widest">Capabilities</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2 font-display">Creative Visual Services</h2>
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

        {/* Action CTA */}
        <section className="mt-16 p-8 rounded-3xl bg-slate-50 border border-slate-200 text-center">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-3 font-display">Ready to launch your creative campaign?</h2>
          <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed font-semibold mb-8">
            Request a design catalog audit or consult with our creative design lead for custom pricing options.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-neon-purple to-neon-cyan hover:opacity-90 shadow-md transition-all cursor-pointer"
          >
            Get Creative Quote
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </section>
      </main>

      <Footer />
      <WhatsAppChat />
    </div>
  );
}
