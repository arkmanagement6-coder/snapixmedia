"use client";

import { ShoppingBag, ArrowLeft, ArrowUpRight, ShieldCheck, Sparkles, Layout, Database, FileText, BarChart3, Package, Users, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MouseFollower from "@/components/MouseFollower";
import WhatsAppChat from "@/components/WhatsAppChat";
import GlassCard from "@/components/GlassCard";
import Link from "next/link";

const amazonServices = [
  {
    title: "Product Listing Optimization",
    desc: "Create high-converting, SEO-friendly product listings. We research high-intent search keywords, write compelling titles, bullet points, HTML descriptions, and optimize back-end search terms for maximum organic visibility.",
    icon: Layout,
    color: "from-amber-500/10 to-orange-600/10 text-orange-500 border-orange-100",
  },
  {
    title: "Amazon PPC Management",
    desc: "Maximize ROAS and lower ACoS. Our certified ads specialists design, launch, and manage Sponsored Products, Sponsored Brands, and Display campaigns, continuously auditing keyword bids for cost efficiency.",
    icon: BarChart3,
    color: "from-blue-500/10 to-indigo-600/10 text-blue-500 border-blue-100",
  },
  {
    title: "A+ Content & Storefront Design",
    desc: "Elevate your brand presence. We design custom Amazon Brand Storefronts and high-end A+ Content (formerly EBC) with rich comparison charts and custom graphics that drive customer trust and boost conversions by up to 20%.",
    icon: Sparkles,
    color: "from-purple-500/10 to-pink-600/10 text-purple-500 border-purple-100",
  },
  {
    title: "Account Launch & Onboarding",
    desc: "Get started the right way. We guide you through Amazon seller account registration, brand registry approval, category gate unlocks, and shipping templates setup to ensure a seamless storefront launch.",
    icon: ShieldCheck,
    color: "from-emerald-500/10 to-teal-600/10 text-emerald-500 border-emerald-100",
  },
  {
    title: "Inventory & FBA Management",
    desc: "Optimize supply chain workflows. We manage shipment creation, FBA replenishment alerts, catalog mapping, and listing suppressions to keep your inventory in stock and listings active 24/7.",
    icon: Package,
    color: "from-indigo-500/10 to-purple-600/10 text-indigo-500 border-indigo-100",
  },
  {
    title: "Review & Feedback Building",
    desc: "Improve seller ratings legally. We implement review solicitation strategies using Amazon's Request a Review button and Vine program setup to build initial reviews while maintaining full compliance.",
    icon: Users,
    color: "from-rose-500/10 to-pink-600/10 text-rose-500 border-rose-100",
  },
];

const keyFeatures = [
  {
    title: "Complete Listing Audits",
    desc: "We perform full keyword and competitor gap audits to identify listing opportunities.",
    icon: Database,
  },
  {
    title: "Amazon Policy Compliant",
    desc: "Every listing, graphic, and advertisement is tailored to Amazon's strict guidelines.",
    icon: Award,
  },
  {
    title: "ACoS/ROAS Centered Ads",
    desc: "We prioritize budget efficiency, driving maximum sales revenue with minimum ad spend.",
    icon: BarChart3,
  },
];

export default function AmazonMarketplace() {
  return (
    <div className="relative min-h-screen bg-transparent text-slate-700 overflow-x-hidden flex flex-col font-sans">
      <MouseFollower />
      <Navbar isDarkHero />

      {/* Full-width Hero Banner */}
      <section className="relative w-full min-h-[320px] sm:min-h-[400px] flex items-center justify-center bg-slate-950 overflow-hidden pt-28 page-hero-banner">
        {/* Background grids */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:30px_30px]" />
        <div className="absolute inset-0 bg-radial from-orange-500/15 via-transparent to-transparent blur-[120px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 w-full text-center relative z-10 py-12 flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-400 text-xs font-bold tracking-widest uppercase">
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Amazon Services</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight font-display drop-shadow-md" style={{ color: "#ffffff" }}>
            Amazon Listing & <span className="text-gradient-purple-cyan">Account Management</span>
          </h1>
          <p className="!text-slate-300 text-xs sm:text-sm max-w-2xl leading-relaxed font-semibold">
            Scale your brand on Amazon India & Global with listing optimization, inventory setup, and expert PPC management.
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
              Dominate the Amazon Marketplace
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-semibold leading-relaxed">
              At SnapixMedia, we provide end-to-end Amazon seller management services designed to scale your products. From initial brand onboarding and cataloging to professional search keyword optimizations and advanced PPC ad campaign structuring, our team manages your seller operations so you can focus on inventory and manufacturing.
            </p>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              We leverage analytical keyword metrics and competitive pricing intelligence to improve listing ranks, boost click-through rates (CTR), and maximize sales velocity. Let us optimize your listing elements to capture organic shopper intent instantly.
            </p>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="relative rounded-3xl border border-slate-200 bg-white p-2 shadow-xl shadow-slate-200/30 overflow-hidden group h-[320px]">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
                alt="Amazon Logistics and Management"
                className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </section>

        {/* Capabilities Grid */}
        <section className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-orange-500 uppercase tracking-widest font-sans">Amazon Expertise</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-3 mb-2 font-display">Comprehensive Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amazonServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <GlassCard key={idx} className="p-6 flex flex-col gap-4 border-slate-200/50 hover:border-orange-500/20" hoverGlow>
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
                  <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-orange-500" />
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
          <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-radial from-orange-500/5 to-transparent blur-3xl pointer-events-none" />
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3 font-display">Ready to scale your Amazon brand?</h2>
          <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed font-semibold mb-8">
            Consult with our marketplace operations leads for a listing audit and custom growth proposal.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:opacity-90 shadow-md transition-all cursor-pointer"
          >
            Launch Amazon Campaign
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </section>
      </main>

      <Footer />
      <WhatsAppChat />
    </div>
  );
}
