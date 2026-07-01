"use client";

import { ShoppingBag, ArrowLeft, ArrowUpRight, ShieldCheck, Sparkles, Layout, Database, BarChart3, Package, Users, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MouseFollower from "@/components/MouseFollower";
import WhatsAppChat from "@/components/WhatsAppChat";
import GlassCard from "@/components/GlassCard";
import Link from "next/link";

const myntraServices = [
  {
    title: "Fashion Cataloging & Attributes",
    desc: "Deploy premium fashion listings. We manage model photoshoot specifications, write creative product titles, descriptions, select accurate fabric tags, sizing charts, and color codes to optimize product discoverability.",
    icon: Layout,
    color: "from-pink-500/10 to-rose-600/10 text-pink-500 border-pink-100",
  },
  {
    title: "Brand Approval & Sourcing",
    desc: "Complete your store verification. We handle brand registry documentation, category authorizations, and invoice audits to verify your apparel brand qualifies for Myntra's premium catalog portal.",
    icon: ShieldCheck,
    color: "from-purple-500/10 to-indigo-600/10 text-purple-500 border-purple-100",
  },
  {
    title: "Myntra Advertising Management",
    desc: "Scale your fashion campaigns. We set up and optimize sponsored listings, banners, and collection ads inside the Myntra partner portal, driving high targeted organic traffic to your product pages.",
    icon: BarChart3,
    color: "from-rose-500/10 to-pink-600/10 text-rose-500 border-rose-100",
  },
  {
    title: "Myntra PPMP & Inventory Control",
    desc: "Manage fulfillment models. We guide you through Myntra's PPMP (Pure Play Marketplace Model) or Omni-channel setups, shipping logistics, and warehouse inventory mapping for active store health.",
    icon: Package,
    color: "from-indigo-500/10 to-purple-600/10 text-indigo-500 border-indigo-100",
  },
  {
    title: "Size Chart & Returns Auditing",
    desc: "Minimize order returns. We audit and standardize apparel size charts to guide shoppers accurately, lowering product size return rates (a major metric on fashion marketplaces) by up to 25%.",
    icon: Sparkles,
    color: "from-emerald-500/10 to-teal-600/10 text-emerald-500 border-emerald-100",
  },
  {
    title: "Trend & Season Pricing",
    desc: "Maximize festival sales volume. We analyze fashion sales metrics and seasonal trends to configure coupon discounts, bundle pricing, and promotional pricing during major Myntra shopping events.",
    icon: Users,
    color: "from-blue-500/10 to-sky-600/10 text-blue-500 border-blue-100",
  },
];

const keyFeatures = [
  {
    title: "Fashion Content Optimization",
    desc: "Optimizing descriptors and keywords to align with seasonal apparel search queries.",
    icon: Database,
  },
  {
    title: "Apparel Return Auditing",
    desc: "Standardizing size layout indicators to reduce sizing returns and protect margins.",
    icon: Award,
  },
  {
    title: "Campaign ROAS Maximizer",
    desc: "Optimizing bid strategies during fashion weeks to secure high conversion traffic.",
    icon: BarChart3,
  },
];

export default function MyntraMarketplace() {
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
            <span>Myntra Services</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight font-display drop-shadow-md" style={{ color: "#ffffff" }}>
            Myntra Cataloging & <span className="text-gradient-purple-cyan">Brand Growth</span>
          </h1>
          <p className="!text-slate-300 text-xs sm:text-sm max-w-2xl leading-relaxed font-semibold">
            Scale your fashion and apparel brand on Myntra India with compliant cataloging, sizing optimization, and targeted advertising.
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
              Elevate Your Fashion Brand
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-semibold leading-relaxed">
              At SnapixMedia, we provide specialized cataloging and brand management services for fashion, lifestyle, and apparel sellers on Myntra. We ensure your model image files, fabric descriptions, and size charts meet Myntra's high editorial standards to maximize organic product clicks.
            </p>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              Our fashion marketing team helps structure campaigns inside the Myntra portal, pushing collection pages to the top of searches, configuring discount coupons, and optimizing stock replenishment templates. We help you protect margins by tackling return rates actively.
            </p>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="relative rounded-3xl border border-slate-200 bg-white p-2 shadow-xl shadow-slate-200/30 overflow-hidden group h-[320px]">
              <img
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80"
                alt="Myntra Fashion Shopping"
                className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </section>

        {/* Capabilities Grid */}
        <section className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-pink-500 uppercase tracking-widest font-sans">Myntra Expertise</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-3 mb-2 font-display">Comprehensive Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {myntraServices.map((service, idx) => {
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
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3 font-display">Ready to scale your Myntra store?</h2>
          <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed font-semibold mb-8">
            Consult with our marketplace operations leads for a listing audit and custom growth proposal.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-pink-500 to-rose-500 hover:opacity-90 shadow-md transition-all cursor-pointer"
          >
            Launch Myntra Campaign
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </section>
      </main>

      <Footer />
      <WhatsAppChat />
    </div>
  );
}
