"use client";

import { Sparkles, Network, ArrowUpRight, Zap, CheckCircle2, ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MouseFollower from "@/components/MouseFollower";
import WhatsAppChat from "@/components/WhatsAppChat";
import GlassCard from "@/components/GlassCard";
import Link from "next/link";

const integrationPartners = [
  {
    name: "Shopify Partner Directory",
    type: "E-Commerce",
    desc: "Custom Shopify Liquid sections, hydrogen server components, headless storefront expansions, and custom apps configurations.",
    badge: "Certified Expert",
  },
  {
    name: "Next.js & Vercel Alliance",
    type: "Web Infrastructure",
    desc: "Deploying production applications at the edge with dynamic loading, Turbopack systems, serverless functions, and Lighthouse speed optimization.",
    badge: "Enterprise Partner",
  },
  {
    name: "Google Partners Academy",
    type: "Marketing & Search",
    desc: "Verified Google Ads Academy certifications for paid search bidding, YouTube retargeting campaigns, and Google Analytics tracking audits.",
    badge: "Ad Certified",
  },
  {
    name: "Meta Ads Agency Network",
    type: "Paid Advertising",
    desc: "Deploying high-converting paid social ads across Instagram and Facebook with advanced pixel tracking exclusions rules.",
    badge: "Direct Agency Partner",
  },
  {
    name: "Amazon Web Services (AWS)",
    type: "Cloud Computing",
    desc: "Secure cloud database deployments, AWS Cognito authentication pipelines, S3 assets buckets, and scalable hosting node structures.",
    badge: "Cloud Partner",
  },
  {
    name: "HubSpot Certified Experts",
    type: "CRM & Marketing Hub",
    desc: "Complex automation pipelines, database contact flows sync, customized sales pipelines integrations, and email triggers.",
    badge: "Certified Partner",
  },
];

export default function OurPartners() {
  return (
    <div className="relative min-h-screen bg-transparent text-slate-655 overflow-x-hidden flex flex-col font-sans">
      <MouseFollower />
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-36 pb-20 px-6 glow-grid">
        <div className="absolute top-1/3 left-1/2 w-[500px] h-[300px] bg-radial from-neon-cyan/5 to-transparent blur-[100px] pointer-events-none -translate-x-1/2" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-neon-cyan/20 bg-neon-cyan/5 text-neon-cyan text-xs font-bold tracking-wider mb-6 uppercase">
            <Network className="w-3.5 h-3.5" />
            <span>Our Alliance Network</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6 font-display">
            Strategic Platform Integrations{" "}
            <span className="text-gradient-purple-cyan">& Certifications</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            We collaborate with industry leaders to deploy modern technology stacks and scale high-yielding campaigns.
          </p>
        </div>
      </section>

      {/* Partners List */}
      <section className="py-12 px-6 relative border-t border-slate-200/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrationPartners.map((partner, i) => (
              <GlassCard key={i} className="flex flex-col justify-between h-[300px]" hoverGlow>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-neon-purple uppercase tracking-wider font-mono bg-purple-50 px-2.5 py-1 rounded-full border border-purple-100">
                      {partner.type}
                    </span>
                    <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">
                      {partner.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mt-2">{partner.name}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium mt-1">
                    {partner.desc}
                  </p>
                </div>

                <div className="flex items-center gap-1 text-[11px] font-bold text-neon-purple hover:underline cursor-pointer group mt-4">
                  Learn Integration Details
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Alliance Value Add CTA */}
      <section className="py-20 px-6 border-t border-slate-200/50 bg-[#f8fafc]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-neon-purple/5 border border-neon-purple/15 text-neon-purple mb-6 shadow-sm">
            <Zap className="w-6 h-6 animate-pulse" />
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 font-display mb-4">Are you a platform looking to integrate?</h2>
          <p className="text-slate-600 text-sm max-w-xl mx-auto leading-relaxed font-semibold mb-8">
            Our web software engineering and marketing panels are constantly auditing new tools, edge hosting providers, headless engines, and marketing automation APIs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-neon-purple to-neon-cyan hover:opacity-90 shadow-md transition-all cursor-pointer"
          >
            Become a Partner
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppChat />
    </div>
  );
}
