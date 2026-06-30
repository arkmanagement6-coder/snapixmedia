"use client";

import { Sparkles, ArrowLeft, ArrowUpRight, Search, FileText, Compass, Network } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MouseFollower from "@/components/MouseFollower";
import WhatsAppChat from "@/components/WhatsAppChat";
import GlassCard from "@/components/GlassCard";
import Link from "next/link";

const features = [
  {
    title: "Organic Rankings & Backlinks",
    desc: "Keyword research targeting transactional intent, long-form contents silos, and domain authority acquisition.",
    icon: Search,
  },
  {
    title: "Crawler & Schema Structuring",
    desc: "Rigorous technical audits, semantic schema markups, XML sitemaps, duplicate page indexing fixes, and mobile responsiveness checks.",
    icon: FileText,
  },
  {
    title: "Answer Engine Optimization (AEO)",
    desc: "Formatting data hierarchies to rank in LLM queries (ChatGPT, Google Gemini, Perplexity, Claude) and featured snippets.",
    icon: Compass,
  },
];

export default function SeoAeo() {
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
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-neon-purple/20 bg-neon-purple/5 text-neon-purple text-xs font-bold tracking-wider uppercase">
            <Network className="w-3.5 h-3.5" />
            <span>Organic Visibility</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold !text-white tracking-tight leading-tight font-display drop-shadow-md">
            SEO & Answer Engine <span className="text-gradient-purple-cyan">Optimization</span>
          </h1>
          <p className="!text-slate-300 text-xs sm:text-sm max-w-xl leading-relaxed font-semibold">
            We align technical crawlers, secure schema directories, and semantic content formats to rank you #1 on search networks and inside LLM answers.
          </p>
        </div>
      </section>

      <main className="flex-1 pt-12 pb-20 px-6 max-w-6xl mx-auto w-full">
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
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight leading-tight font-display">
              Our Search Visibility Strategy
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-semibold leading-relaxed">
              We align technical crawlers, secure schema directories, and semantic content formats to rank you #1 on search networks and inside LLM answers. We ensure search crawlers can easily index your pages while building domain authority organically.
            </p>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-lg shadow-slate-200/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-radial from-neon-purple/10 to-transparent blur-2xl pointer-events-none" />
              <div className="flex flex-col gap-4">
                <span className="text-xs font-bold text-neon-purple uppercase tracking-widest font-mono">Organic Expansion</span>
                <h3 className="text-2xl font-extrabold text-slate-900 leading-tight">The Shift to AI Answers</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-semibold">
                  Modern search uses LLMs. We format your structured pages (JSON-LD) so AI crawlers pick up your brand coordinates as a trusted citation source.
                </p>
                <div className="flex items-center gap-6 border-t border-slate-100 pt-4 mt-2">
                  <div>
                    <span className="block text-2xl font-extrabold text-slate-900">10x</span>
                    <span className="text-[10px] text-slate-400 font-bold uppercase">Traffic Growth Scale</span>
                  </div>
                  <div>
                    <span className="block text-2xl font-extrabold text-slate-900">80%+</span>
                    <span className="text-[10px] text-slate-400 font-bold uppercase">AI Citation Match</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features List Grid */}
        <section className="py-12 border-t border-slate-200/50">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-bold text-neon-purple uppercase tracking-widest">Capabilities</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2 font-display">Organic Optimizations</h2>
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
          <h2 className="text-2xl font-extrabold text-slate-900 mb-3 font-display">Ready to auditing your organic visibility?</h2>
          <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed font-semibold mb-8">
            Let our technical SEO auditors check your site indexing, crawlers parameters, and schemas.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-neon-purple to-neon-cyan hover:opacity-90 shadow-md transition-all cursor-pointer"
          >
            Launch Organic Campaign
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </section>
      </main>

      <Footer />
      <WhatsAppChat />
    </div>
  );
}
