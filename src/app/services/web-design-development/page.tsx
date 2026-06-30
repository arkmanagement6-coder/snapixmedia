"use client";

import { Monitor, ArrowLeft, ArrowUpRight, ShieldCheck, Sparkles, Layout, Globe, Gauge } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MouseFollower from "@/components/MouseFollower";
import WhatsAppChat from "@/components/WhatsAppChat";
import GlassCard from "@/components/GlassCard";
import Link from "next/link";

const features = [
  {
    title: "Next.js & React Core Engineering",
    desc: "Lightning fast page loading speeds, static generation (SSG), server-side rendering (SSR), and Turbopack builds.",
    icon: Gauge,
  },
  {
    title: "Headless E-Commerce Solutions",
    desc: "Custom headless Shopify Hydrogen storefronts, WooCommerce backends, and customized cart management solutions.",
    icon: Globe,
  },
  {
    title: "Figma UI/UX & Responsive Kits",
    desc: "High-fidelity layouts wireframes, customized design systems, and responsive screen adaptability tests.",
    icon: Layout,
  },
];

export default function WebDesignDevelopment() {
  return (
    <div className="relative min-h-screen bg-transparent text-slate-655 overflow-x-hidden flex flex-col font-sans">
      <MouseFollower />
      <Navbar />

      {/* Back to services */}
      <main className="flex-1 pt-36 pb-20 px-6 max-w-6xl mx-auto w-full">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 hover:text-slate-900 transition-colors duration-300 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Services
        </Link>

        {/* Hero Title */}
        <section className="flex flex-col lg:flex-row gap-12 items-center mb-16">
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-neon-purple/20 bg-neon-purple/5 text-neon-purple text-xs font-bold tracking-wider w-fit uppercase">
              <Monitor className="w-3.5 h-3.5" />
              <span>Web Development Solutions</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight font-display">
              Website Design &{" "}
              <span className="text-gradient-purple-cyan">Development</span>
            </h1>
            <p className="text-slate-600 text-sm sm:text-base font-semibold leading-relaxed">
              We engineer custom web platforms that loading under 1.5 seconds, achieve perfect Core Web Vitals, and are designed to maximize retention.
            </p>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-lg shadow-slate-200/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-radial from-neon-purple/10 to-transparent blur-2xl pointer-events-none" />
              <div className="flex flex-col gap-4">
                <span className="text-xs font-bold text-neon-purple uppercase tracking-widest font-mono">Performance Audits</span>
                <h3 className="text-2xl font-extrabold text-slate-900 leading-tight">Speed is the Ultimate Feature</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-semibold">
                  A 100ms lag in mobile load time can drop your conversions by 7%. We guarantee high Google PageSpeed scores via serverless edge components and optimal asset encoding.
                </p>
                <div className="flex items-center gap-6 border-t border-slate-100 pt-4 mt-2">
                  <div>
                    <span className="block text-2xl font-extrabold text-slate-900">100/100</span>
                    <span className="text-[10px] text-slate-400 font-bold uppercase">Lighthouse Performance</span>
                  </div>
                  <div>
                    <span className="block text-2xl font-extrabold text-slate-900">&lt; 1.2s</span>
                    <span className="text-[10px] text-slate-400 font-bold uppercase">Avg Load Speed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features list */}
        <section className="py-12 border-t border-slate-200/50">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-bold text-neon-cyan uppercase tracking-widest">Capabilities</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2 font-display">Engineered Components</h2>
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
          <h2 className="text-2xl font-extrabold text-slate-900 mb-3 font-display">Ready to build your web storefront?</h2>
          <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed font-semibold mb-6">
            Get a high-performance, optimized design and code layout custom built by our team.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-neon-purple to-neon-cyan hover:opacity-90 shadow-md transition-all cursor-pointer"
          >
            Launch Web Project
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </section>
      </main>

      <Footer />
      <WhatsAppChat />
    </div>
  );
}
