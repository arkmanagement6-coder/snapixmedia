"use client";

import { ShoppingBag, ArrowLeft, ArrowUpRight, ShieldCheck, Sparkles, Layout, Database, BarChart3, Package, Users, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MouseFollower from "@/components/MouseFollower";
import WhatsAppChat from "@/components/WhatsAppChat";
import GlassCard from "@/components/GlassCard";
import Link from "next/link";

const jiomartServices = [
  {
    title: "Grocery & Retail Cataloging",
    desc: "Achieve compliant brand listings. We write clear, optimized descriptions, select precise categories (FMCG, staples, home essentials), and structure product attributes according to JioMart standards.",
    icon: Layout,
    color: "from-emerald-500/10 to-teal-600/10 text-emerald-500 border-emerald-100",
  },
  {
    title: "JioMart Partner Onboarding",
    desc: "Complete registration without hassle. We handle your GST verification, business details onboarding, product approval gate unlocks, and seller profile activation on the JioMart Partner portal.",
    icon: ShieldCheck,
    color: "from-teal-500/10 to-cyan-600/10 text-teal-500 border-teal-100",
  },
  {
    title: "Inventory & Dispatch Operations",
    desc: "Ensure seamless order fulfillment. We manage catalog stock syncing, pick-up scheduling, shipping labels generation, and dispatch SLA tracking to maintain excellent merchant ratings.",
    icon: Package,
    color: "from-blue-500/10 to-indigo-600/10 text-blue-500 border-blue-100",
  },
  {
    title: "Advertising & Promo Banners",
    desc: "Drive targeted sales volume. We coordinate featured ads placements, category banner marketing, and deal configuration on the JioMart merchant panel to capture peak shopper traffic.",
    icon: BarChart3,
    color: "from-amber-500/10 to-yellow-600/10 text-amber-500 border-amber-100",
  },
  {
    title: "Price Strategy Optimization",
    desc: "Maximize buyer clicks. We monitor JioMart's price competition indexes and structure bundle deals and flash discounts to increase volume while protecting retail profit margins.",
    icon: Sparkles,
    color: "from-purple-500/10 to-indigo-600/10 text-purple-500 border-purple-100",
  },
  {
    title: "Merchant Account Health",
    desc: "Maintain excellent seller status. We monitor customer feedback ratings, audit shipping return claims, file reimbursement claims for missing items, and resolve portal listing blocks.",
    icon: Users,
    color: "from-rose-500/10 to-pink-600/10 text-rose-500 border-rose-100",
  },
];

const keyFeatures = [
  {
    title: "JioMart Catalog Compliance",
    desc: "Standardizing retail listings to ensure instant index approvals by category managers.",
    icon: Database,
  },
  {
    title: "Dispatched Order SLA Auditing",
    desc: "Minimizing courier handoff delays to maintain high ratings and merchant visibility.",
    icon: Award,
  },
  {
    title: "Promotion Campaign Focus",
    desc: "Configuring seasonal retail deals to scale sales during major festival weeks.",
    icon: BarChart3,
  },
];

export default function JioMartMarketplace() {
  return (
    <div className="relative min-h-screen bg-transparent text-slate-700 overflow-x-hidden flex flex-col font-sans">
      <MouseFollower />
      <Navbar isDarkHero />

      {/* Full-width Hero Banner */}
      <section className="relative w-full min-h-[320px] sm:min-h-[400px] flex items-center justify-center bg-slate-950 overflow-hidden pt-28 page-hero-banner">
        {/* Background grids */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:30px_30px]" />
        <div className="absolute inset-0 bg-radial from-emerald-500/15 via-transparent to-transparent blur-[120px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 w-full text-center relative z-10 py-12 flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-xs font-bold tracking-widest uppercase">
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>JioMart Services</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight font-display drop-shadow-md" style={{ color: "#ffffff" }}>
            JioMart Cataloging & <span className="text-gradient-purple-cyan">Merchant Operations</span>
          </h1>
          <p className="!text-slate-300 text-xs sm:text-sm max-w-2xl leading-relaxed font-semibold">
            Scale your retail and grocery brand on JioMart India with expert partner onboarding, catalog setups, and SLA management.
          </p>
        </div>
      </section>

      <main className="flex-1 pt-12 pb-20 px-6 max-w-6xl mx-auto w-full">
        {/* Back navigation */}
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 hover:text-slate-900 transition-colors duration-300 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Marketplace
        </Link>

        {/* Overview Section */}
        <section className="flex flex-col lg:flex-row gap-12 items-center mb-24">
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight leading-tight font-display">
              Dominate Retail on JioMart
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-semibold leading-relaxed">
              At SnapixMedia, we provide end-to-end JioMart Merchant operations support designed to grow your FMCG, grocery, and home retail brand. From initial registration and category gates onboarding to product listing cataloging, inventory synchronization, and ad campaigns, our team coordinates the logistics.
            </p>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              We leverage analytical keyword metrics and competitive pricing intelligence to improve listing ranks, boost click-through rates (CTR), and maximize sales velocity. Let us optimize your listing elements to capture organic shopper intent instantly.
            </p>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="relative rounded-3xl border border-slate-200 bg-white p-2 shadow-xl shadow-slate-200/30 overflow-hidden group h-[320px]">
              <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80"
                alt="JioMart Grocery Retail Store"
                className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </section>

        {/* Capabilities Grid */}
        <section className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-emerald-500 uppercase tracking-widest font-sans">JioMart Expertise</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-3 mb-2 font-display">Comprehensive Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jiomartServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <GlassCard key={idx} className="p-6 flex flex-col gap-4 border-slate-200/50 hover:border-emerald-500/20" hoverGlow>
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center bg-gradient-to-tr ${service.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 font-display">{service.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-semibold">{service.desc}</p>
                </GlassCard>
              );
            })}
          </div>
        </section>

        {/* Features / Benefits */}
        <section className="mb-24 py-16 border-y border-slate-200/50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {keyFeatures.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-emerald-500" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h4 className="text-base font-bold text-slate-900 leading-snug">{feat.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-medium">{feat.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <section className="p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200 text-center relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-radial from-emerald-500/5 to-transparent blur-3xl pointer-events-none" />
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3 font-display">Ready to scale your JioMart store?</h2>
          <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed font-semibold mb-8">
            Consult with our marketplace operations leads for a listing audit and custom growth proposal.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-emerald-500 to-teal-500 hover:opacity-90 shadow-md transition-all cursor-pointer"
          >
            Launch JioMart Campaign
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </section>
      </main>

      <Footer />
      <WhatsAppChat />
    </div>
  );
}
