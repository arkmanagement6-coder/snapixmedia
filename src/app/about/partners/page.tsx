"use client";

// Force redeploy trigger for partners page
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
      <Navbar isDarkHero={true} />

      {/* Dark Hero Banner */}
      <section className="relative w-full min-h-[300px] sm:min-h-[380px] flex items-center justify-center bg-slate-950 overflow-hidden pt-28">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60" />
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-neon-purple/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 w-full text-center relative z-10 py-12 flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-slate-800 bg-slate-900/50 text-slate-300 text-xs font-bold tracking-wider uppercase backdrop-blur-sm">
            <Network className="w-3.5 h-3.5 text-neon-cyan" />
            <span>Our Alliance Network</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1] max-w-4xl font-display" style={{ color: "#ffffff" }}>
            Strategic Platform Integrations <span className="text-gradient-purple-cyan">& Certifications</span>
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed font-medium">
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
