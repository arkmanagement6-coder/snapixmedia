"use client";

import { ShoppingBag, ArrowLeft, ArrowUpRight, ShieldCheck, Sparkles, Layout, Database, BarChart3, Package, Users, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MouseFollower from "@/components/MouseFollower";
import WhatsAppChat from "@/components/WhatsAppChat";
import GlassCard from "@/components/GlassCard";
import Link from "next/link";

const meeshoServices = [
  {
    title: "Meesho Bulk Cataloging",
    desc: "Launch catalogs at scale. We design bulk product upload spreadsheets, map your category attributes accurately, write conversion-optimized description copy, and upload product catalog images to avoid listing rejections.",
    icon: Layout,
    color: "from-pink-500/10 to-purple-600/10 text-pink-500 border-pink-100",
  },
  {
    title: "Meesho Ads Setup",
    desc: "Scale order volume. We configure and manage Meesho advertising campaigns inside the seller panel, optimizing CPC bids, selecting high-intent search terms, and monitoring ad spend to double your organic sales velocity.",
    icon: BarChart3,
    color: "from-purple-500/10 to-indigo-600/10 text-purple-500 border-purple-100",
  },
  {
    title: "Price Recommendation Auditing",
    desc: "Earn the Meesho Trust Badge. We audit Meesho's smart price recommendation parameters to keep your prices competitive while protecting your margins and ensuring maximum visibility in feeds.",
    icon: Sparkles,
    color: "from-amber-500/10 to-orange-600/10 text-amber-500 border-amber-100",
  },
  {
    title: "Order Dispatch & Packing",
    desc: "Speed up dispatch cycles. We guide you through Meesho's packing slips generation, labels printing, order dispatch schedules, and SLA tracking to keep your seller shipping score at 99%.",
    icon: Package,
    color: "from-emerald-500/10 to-teal-600/10 text-emerald-500 border-emerald-100",
  },
  {
    title: "Customer Returns Management",
    desc: "Minimize RTO (Return to Origin). We analyze and audit returns data, isolate high-return product lines, optimize size guides, and file claims for damaged returns to secure your revenues.",
    icon: ShieldCheck,
    color: "from-indigo-500/10 to-blue-600/10 text-indigo-500 border-indigo-100",
  },
  {
    title: "Meesho Sale Participation",
    desc: "Maximize Maha Indian Shopping Festival volume. We coordinate deal discount pricing, bundle promotions, and coupon configurations on the Meesho seller dashboard to capture peak traffic.",
    icon: Users,
    color: "from-rose-500/10 to-pink-600/10 text-rose-500 border-rose-100",
  },
];

const keyFeatures = [
  {
    title: " Meesho Feed Visibility",
    desc: "Optimizing title tags and product images to maximize organic display in Meesho feeds.",
    icon: Database,
  },
  {
    title: "SLA Dispatch Auditing",
    desc: "Minimizing fulfillment delays to maintain high seller ratings and avoid late dispatch penalties.",
    icon: Award,
  },
  {
    title: "RTO Claim Audits",
    desc: "Systematic monitoring of returned parcels to file claims and protect seller margins.",
    icon: BarChart3,
  },
];

export default function MeeshoMarketplace() {
  return (
    <div className="relative min-h-screen bg-transparent text-slate-700 overflow-x-hidden flex flex-col font-sans">
      <MouseFollower />
      <Navbar isDarkHero />

      {/* Full-width Hero Banner */}
      <section className="relative w-full min-h-[320px] sm:min-h-[400px] flex items-center justify-center bg-slate-950 overflow-hidden pt-28 page-hero-banner">
        {/* Background grids */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:30px_30px]" />
        <div className="absolute inset-0 bg-radial from-pink-500/15 via-transparent to-transparent blur-[120px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 w-full text-center relative z-10 py-12 flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-pink-500/20 bg-pink-500/5 text-pink-400 text-xs font-bold tracking-widest uppercase">
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Meesho Services</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight font-display drop-shadow-md" style={{ color: "#ffffff" }}>
            Meesho Cataloging & <span className="text-gradient-purple-cyan">Order Management</span>
          </h1>
          <p className="!text-slate-300 text-xs sm:text-sm max-w-2xl leading-relaxed font-semibold">
            Scale your brand on Meesho India with bulk cataloging, price recommendation audits, and high-ROAS ads management.
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
              Dominate Social Commerce on Meesho
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-semibold leading-relaxed">
              At SnapixMedia, we deliver complete operational and marketing support for Meesho Sellers. We write keyword-optimized product descriptors, upload product catalog variations, and optimize campaign budgets to maximize your store's performance.
            </p>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              Our e-commerce experts help configure your seller dashboard, handle price recommendation audits to win search feeds, speed up dispatch cycles to satisfy strict SLAs, and systematically manage returns and RTO claims to protect your profits.
            </p>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="relative rounded-3xl border border-slate-200 bg-white p-2 shadow-xl shadow-slate-200/30 overflow-hidden group h-[320px]">
              <img
                src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=800&q=80"
                alt="Meesho Social Commerce"
                className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </section>

        {/* Capabilities Grid */}
        <section className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-pink-500 uppercase tracking-widest font-sans">Meesho Expertise</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-3 mb-2 font-display">Comprehensive Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {meeshoServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <GlassCard key={idx} className="p-6 flex flex-col gap-4 border-slate-200/50 hover:border-pink-500/20" hoverGlow>
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
                  <div className="w-10 h-10 rounded-xl bg-pink-50 border border-pink-100 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-pink-500" />
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
          <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-radial from-pink-500/5 to-transparent blur-3xl pointer-events-none" />
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3 font-display">Ready to scale your Meesho store?</h2>
          <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed font-semibold mb-8">
            Consult with our marketplace operations leads for a listing audit and custom growth proposal.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-pink-500 to-purple-500 hover:opacity-90 shadow-md transition-all cursor-pointer"
          >
            Launch Meesho Campaign
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </section>
      </main>

      <Footer />
      <WhatsAppChat />
    </div>
  );
}
