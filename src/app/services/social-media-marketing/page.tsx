"use client";

import { Sparkles, ArrowLeft, ArrowUpRight, Share2, Users, Video, Edit3 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MouseFollower from "@/components/MouseFollower";
import WhatsAppChat from "@/components/WhatsAppChat";
import GlassCard from "@/components/GlassCard";
import Link from "next/link";

const features = [
  {
    title: "Organic Campaign Schedules",
    desc: "Deploying consistent post grids, reels, video scripts, and custom brand narratives built for virality and high likes ratios.",
    icon: Share2,
  },
  {
    title: "Influencer Partnerships",
    desc: "Reaching out to niche content creators, managing user-generated content (UGC), and setting up affiliate pipelines.",
    icon: Users,
  },
  {
    title: "Premium Graphic Styling Kits",
    desc: "Designing high-end brand books, social layouts kits, visual guidelines, and customized assets kits that wow audiences.",
    icon: Edit3,
  },
];

export default function SocialMediaMarketing() {
  return (
    <div className="relative min-h-screen bg-transparent text-slate-655 overflow-x-hidden flex flex-col font-sans">
      <MouseFollower />
      <Navbar />

      <main className="flex-1 pt-36 pb-20 px-6 max-w-6xl mx-auto w-full">
        {/* Back Link */}
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 hover:text-slate-900 transition-colors duration-300 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Services
        </Link>

        {/* Hero Header */}
        <section className="flex flex-col lg:flex-row gap-12 items-center mb-16">
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-neon-purple/20 bg-neon-purple/5 text-neon-purple text-xs font-bold tracking-wider w-fit uppercase">
              <Share2 className="w-3.5 h-3.5" />
              <span>Brand Social Engineering</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight font-display">
              Social Media{" "}
              <span className="text-gradient-purple-cyan">Marketing</span>
            </h1>
            <p className="text-slate-600 text-sm sm:text-base font-semibold leading-relaxed">
              We design premium social feeds, plan consistent content schedules, and deploy visual graphic kits to elevate brand equity and organic reach.
            </p>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-lg shadow-slate-200/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-radial from-neon-purple/10 to-transparent blur-2xl pointer-events-none" />
              <div className="flex flex-col gap-4">
                <span className="text-xs font-bold text-neon-purple uppercase tracking-widest font-mono">Organic Engagement</span>
                <h3 className="text-2xl font-extrabold text-slate-900 leading-tight">Elevate Aesthetic Brand Equity</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-semibold">
                  Feeds that are beautifully aligned, use harmonized typography, and tell cohesive stories establish trust with prospective buyers before they purchase.
                </p>
                <div className="flex items-center gap-6 border-t border-slate-100 pt-4 mt-2">
                  <div>
                    <span className="block text-2xl font-extrabold text-slate-900">3x</span>
                    <span className="text-[10px] text-slate-400 font-bold uppercase">Follower Acquisition</span>
                  </div>
                  <div>
                    <span className="block text-2xl font-extrabold text-slate-900">18.5%</span>
                    <span className="text-[10px] text-slate-400 font-bold uppercase">Avg Conversion Jump</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories grid */}
        <section className="py-12 border-t border-slate-200/50">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-bold text-neon-purple uppercase tracking-widest">Capabilities</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2 font-display">Social Strategy Ecosystems</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <GlassCard key={i} className="flex flex-col gap-4" hoverGlow>
                  <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-neon-purple">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{feat.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-semibold">{feat.desc}</p>
                </GlassCard>
              );
            })}
          </div>
        </section>

        {/* CTA Intake */}
        <section className="mt-16 p-8 rounded-3xl bg-slate-50 border border-slate-200 text-center">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-3 font-display">Ready to scale your organic presence?</h2>
          <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed font-semibold mb-8">
            Let our content planners and graphic architects build a high-performance visual feed outline.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-neon-purple to-neon-cyan hover:opacity-90 shadow-md transition-all cursor-pointer"
          >
            Launch Social Campaign
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </section>
      </main>

      <Footer />
      <WhatsAppChat />
    </div>
  );
}
