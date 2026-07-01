"use client";

import { ShoppingBag, ArrowLeft, ArrowUpRight, ShieldCheck, Sparkles, Layout, Database, BarChart3, Package, Users, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MouseFollower from "@/components/MouseFollower";
import WhatsAppChat from "@/components/WhatsAppChat";
import GlassCard from "@/components/GlassCard";
import Link from "next/link";

const flipkartServices = [
  {
    title: "Cataloging & Listing Creation",
    desc: "Launch your products with SEO-optimized listings. We handle bulk upload templates, create compelling product descriptions, optimize titles for Flipkart's search algorithms, and map product attributes accurately to avoid listing rejections.",
    icon: Layout,
    color: "from-blue-500/10 to-sky-600/10 text-blue-500 border-blue-100",
  },
  {
    title: "Flipkart Ads (PLA) Management",
    desc: "Drive targeted traffic and scale sales. Our experts set up, manage, and audit Product Listing Ads (PLA) and PCA campaigns, target high-performing keywords, and structure bidding to lower cost-per-click while maximizing visibility.",
    icon: BarChart3,
    color: "from-amber-500/10 to-yellow-600/10 text-amber-500 border-amber-100",
  },
  {
    title: "Flipkart Assured Certification",
    desc: "Boost buyer trust instantly. We help you qualify for the coveted Flipkart Assured (F-Assured) badge by auditing warehouse standards, packaging quality guidelines, and fulfillment speeds to double your listing conversion rates.",
    icon: Sparkles,
    color: "from-purple-500/10 to-indigo-600/10 text-purple-500 border-purple-100",
  },
  {
    title: "Account Health & Performance",
    desc: "Maintain clean seller metrics. We monitor and manage your seller performance rating, audit customer returns, handle buyer queries, and resolve listing suppressions or brand policy violations to keep your account safe.",
    icon: ShieldCheck,
    color: "from-emerald-500/10 to-teal-600/10 text-emerald-500 border-emerald-100",
  },
  {
    title: "Smart Fulfillment Setup",
    desc: "Minimize shipping times. We guide you through setting up Flipkart Smart Fulfillment or LFH (Lite Fulfillment Hub) strategies, optimizing pick-and-pack operations, and scheduling courier pickups.",
    icon: Package,
    color: "from-sky-500/10 to-blue-600/10 text-sky-500 border-sky-100",
  },
  {
    title: "Promotion & Deal Participation",
    desc: "Maximize Big Billion Days sales. We plan and manage your participation in Flipkart's major shopping festivals, configure deal-of-the-day discounts, and optimize coupon campaigns to accelerate transaction volume.",
    icon: Users,
    color: "from-rose-500/10 to-pink-600/10 text-rose-500 border-rose-100",
  },
];

const keyFeatures = [
  {
    title: "Flipkart Search SEO",
    desc: "Optimizing search tags and backend terms to rank higher on Flipkart search results.",
    icon: Database,
  },
  {
    title: "Assured Operational Support",
    desc: "Our operations experts handle case logs and seller support updates continuously.",
    icon: Award,
  },
  {
    title: "ACoS Optimization Focus",
    desc: "Continuous PLA budget audits to ensure high return on ad spend (ROAS).",
    icon: BarChart3,
  },
];

export default function FlipkartMarketplace() {
  return (
    <div className="relative min-h-screen bg-transparent text-slate-700 overflow-x-hidden flex flex-col font-sans">
      <MouseFollower />
      <Navbar isDarkHero />

      {/* Full-width Hero Banner */}
      <section className="relative w-full min-h-[320px] sm:min-h-[400px] flex items-center justify-center bg-slate-950 overflow-hidden pt-28 page-hero-banner">
        {/* Background grids */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:30px_30px]" />
        <div className="absolute inset-0 bg-radial from-blue-500/15 via-transparent to-transparent blur-[120px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 w-full text-center relative z-10 py-12 flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-xs font-bold tracking-widest uppercase">
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Flipkart Services</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight font-display drop-shadow-md" style={{ color: "#ffffff" }}>
            Flipkart Account & <span className="text-gradient-purple-cyan">PLA Management</span>
          </h1>
          <p className="!text-slate-300 text-xs sm:text-sm max-w-2xl leading-relaxed font-semibold">
            Boost your sales on Flipkart India with optimized product cataloging, F-Assured audits, and high-ROAS advertising.
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
              Scale Your Brand on Flipkart
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-semibold leading-relaxed">
              At SnapixMedia, we deliver complete operational and marketing support for Flipkart Sellers. We configure your backend portal, draft keyword-optimized product descriptors, upload product catalog variations, and optimize campaign budgets to maximize your store's performance.
            </p>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              Our marketing leads are highly experienced in optimizing Flipkart's PLA bidding architecture, helping you gain peak organic search exposure while keeping target cost-per-acquisition low. Let us help you unlock the Flipkart Assured tag and accelerate your sales growth.
            </p>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="relative rounded-3xl border border-slate-200 bg-white p-2 shadow-xl shadow-slate-200/30 overflow-hidden group h-[320px]">
              <img
                src="https://images.unsplash.com/photo-1581539250439-c96689b516dd?auto=format&fit=crop&w=800&q=80"
                alt="Flipkart Logistics and Management"
                className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </section>

        {/* Capabilities Grid */}
        <section className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-blue-500 uppercase tracking-widest font-sans">Flipkart Expertise</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-3 mb-2 font-display">Comprehensive Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {flipkartServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <GlassCard key={idx} className="p-6 flex flex-col gap-4 border-slate-200/50 hover:border-blue-500/20" hoverGlow>
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
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-blue-500" />
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
          <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-radial from-blue-500/5 to-transparent blur-3xl pointer-events-none" />
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3 font-display">Ready to scale your Flipkart store?</h2>
          <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed font-semibold mb-8">
            Consult with our marketplace operations leads for a listing audit and custom growth proposal.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-blue-500 to-sky-500 hover:opacity-90 shadow-md transition-all cursor-pointer"
          >
            Launch Flipkart Campaign
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </section>
      </main>

      <Footer />
      <WhatsAppChat />
    </div>
  );
}
