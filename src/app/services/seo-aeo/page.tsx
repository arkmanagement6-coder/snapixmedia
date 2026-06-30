"use client";

import { Search, Share2, Smartphone, ArrowLeft, ArrowUpRight, ShieldCheck, Sparkles, Layout, Globe, FileText, CheckCircle2, TrendingUp, BarChart2, Compass, Network, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MouseFollower from "@/components/MouseFollower";
import WhatsAppChat from "@/components/WhatsAppChat";
import GlassCard from "@/components/GlassCard";
import Link from "next/link";

const seoBenefits = [
  {
    title: "Increased Online Visibility",
    desc: "SEO makes your business more discoverable on search engines, helping you get in front of users who are actively searching for your services.",
    icon: Globe,
  },
  {
    title: "Higher Website Traffic",
    desc: "Better rankings mean more clicks and traffic. With SEO, you can drive consistent, high-quality traffic to your website without relying only on paid ads.",
    icon: TrendingUp,
  },
  {
    title: "Improved Brand Credibility",
    desc: "Higher Ranked Websites on Google are often seen as more trustworthy. SEO builds credibility and positions your business as an authority in your industry.",
    icon: Award,
  },
  {
    title: "Better ROI than Ads",
    desc: "Unlike paid campaigns that stop delivering once the budget is over, SEO brings long-term results and a higher return on investment.",
    icon: BarChart2,
  },
  {
    title: "Targeted Leads & Sales",
    desc: "SEO helps attract users who are already interested in what you offer, leading to higher conversion rates and more qualified leads.",
    icon: ShieldCheck,
  },
  {
    title: "Long-Term Growth",
    desc: "SEO is not just a short-term fix. With ongoing optimization efforts, it ensures steady growth, helping you stay ahead of your competition.",
    icon: Sparkles,
  },
];

const seoCapabilities = [
  {
    title: "Detailed Keyword Research",
    desc: "Every successful SEO campaign starts with the right keywords. Our team conducts in-depth keyword research to identify the terms your target audience is actually searching for, ensuring you rank higher for the most relevant queries.",
    icon: Search,
    color: "from-blue-500/10 to-indigo-500/10 text-blue-600 border-blue-100",
  },
  {
    title: "On-Page Optimization",
    desc: "On-page SEO is the backbone of better rankings. We optimize your content, meta tags, headers, internal links, and overall structure to make your site both user-friendly and search-engine friendly.",
    icon: FileText,
    color: "from-indigo-500/10 to-purple-500/10 text-indigo-600 border-indigo-100",
  },
  {
    title: "Complete SEO Management",
    desc: "We provide end-to-end SEO services covering everything from keyword research and on-page optimization to technical SEO and link-building strategies, ensuring every aspect of your site is fully optimized.",
    icon: Layout,
    color: "from-purple-500/10 to-pink-500/10 text-purple-600 border-purple-100",
  },
  {
    title: "Targeted Local SEO",
    desc: "Our targeted local SEO services help your business appear in the top results when potential customers search nearby or on Google Maps, optimizing your listings right where your audience is looking.",
    icon: Compass,
    color: "from-pink-500/10 to-rose-500/10 text-pink-600 border-pink-100",
  },
  {
    title: "Landing Page Optimization",
    desc: "Your website shouldn't just attract visitors—it should turn them into paying customers. Our service focuses on creating user-friendly, engaging, and conversion-driven web pages that give you a clear edge.",
    icon: CheckCircle2,
    color: "from-blue-500/10 to-pink-500/10 text-blue-500 border-blue-100",
  },
  {
    title: "Mobile-First Optimization",
    desc: "With most online searches happening on mobile, having a mobile-friendly website is crucial. We ensure your website loads fast, functions smoothly, and ranks higher across all mobile devices.",
    icon: Smartphone,
    color: "from-purple-500/10 to-blue-500/10 text-purple-500 border-purple-100",
  },
];

const seoStats = [
  { value: "93%", label: "Online Experiences Start Here", desc: "93% of all online user experiences begin with a search engine query." },
  { value: "60%", label: "Page One Dominance", desc: "60% of search engine users never go beyond the first page of search results." },
  { value: "14.6%", label: "SEO Lead Close Rate", desc: "SEO leads yield an average 14.6% close rate, vs. only 1.7% for traditional outbound methods." },
];

export default function SeoAeo() {
  return (
    <div className="relative min-h-screen bg-transparent text-slate-700 overflow-x-hidden flex flex-col font-sans">
      <MouseFollower />
      <Navbar isDarkHero />

      {/* Full-width Hero Banner */}
      <section className="relative w-full min-h-[320px] sm:min-h-[400px] flex items-center justify-center bg-slate-950 overflow-hidden pt-28">
        {/* Background grids & patterns */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:30px_30px]" />
        <div className="absolute inset-0 bg-radial from-neon-purple/20 via-transparent to-transparent blur-[120px] pointer-events-none" />
        
        {/* Abstract decorative floating elements */}
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-neon-purple/10 blur-[80px] animate-pulse-slow pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-neon-cyan/10 blur-[90px] animate-pulse-slow pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 w-full text-center relative z-10 py-12 flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-neon-purple/20 bg-neon-purple/5 text-neon-purple text-xs font-bold tracking-widest uppercase">
            <Network className="w-3.5 h-3.5" />
            <span>Organic Search & Rankings</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold !text-white tracking-tight leading-tight font-display drop-shadow-md">
            SEO & AEO <span className="text-gradient-purple-cyan">Optimization</span>
          </h1>
          <p className="!text-slate-300 text-xs sm:text-sm max-w-2xl leading-relaxed font-semibold">
            SnapixMedia – Your Trusted SEO Company for Organic Growth
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

        {/* Overview Section */}
        <section className="flex flex-col lg:flex-row gap-12 items-center mb-24">
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight leading-tight font-display">
              Why Does Your Business Need SEO?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-semibold leading-relaxed">
              Having a business website is only the first step—it doesn't automatically bring visitors, leads, or sales. Most people rely on search engines to find information, products, and services. If you want your business to stand out online, your website needs to appear at the top of relevant search results.
            </p>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              Your customers are searching online every day, and strong search visibility is essential to capturing their attention, increasing website traffic, and growing your business. At SnapixMedia, we provide customized, result-driven SEO solutions tailored to your business goals. We continuously monitor search engine algorithm updates and user behavior to keep your website competitive.
            </p>
          </div>

          {/* Search Console Graph Mockup */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/30 overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-radial from-neon-purple/10 to-transparent blur-2xl pointer-events-none" />
              
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                <span className="text-[10px] font-bold text-slate-450 uppercase font-mono">Organic Traffic Scale</span>
                <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">+140% Weekly</span>
              </div>
              {/* Graphic ranking bars */}
              <div className="flex flex-col gap-3">
                <div className="flex items-end gap-2 h-20 pt-4">
                  <div className="w-full h-8 bg-purple-100 hover:bg-neon-purple/40 rounded transition-colors duration-300" />
                  <div className="w-full h-12 bg-purple-200 hover:bg-neon-purple/40 rounded transition-colors duration-300" />
                  <div className="w-full h-10 bg-purple-300 hover:bg-neon-purple/40 rounded transition-colors duration-300" />
                  <div className="w-full h-14 bg-purple-400 hover:bg-neon-purple/40 rounded transition-colors duration-300" />
                  <div className="w-full h-20 bg-neon-purple rounded transition-colors duration-300 animate-pulse-slow" />
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full" />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Panel */}
        <section className="py-12 border-t border-slate-200/50 mb-24">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-xs font-bold text-neon-purple uppercase tracking-widest">Why SEO Matters</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 font-display">Performance Metrics</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {seoStats.map((stat, i) => (
              <GlassCard key={i} className="flex flex-col gap-3 p-6 sm:p-8" hoverGlow>
                <span className="block text-4xl sm:text-5xl font-extrabold text-slate-900 font-mono tracking-tight text-gradient-purple-cyan">{stat.value}</span>
                <h4 className="text-base font-bold text-slate-900 leading-snug">{stat.label}</h4>
                <p className="text-xs text-slate-500 leading-relaxed font-semibold">{stat.desc}</p>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* Business Benefits Grid */}
        <section className="py-12 border-t border-slate-200/50 mb-24">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-xs font-bold text-neon-cyan uppercase tracking-widest font-mono">Value Proposition</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 font-display">Business Benefits of SEO</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {seoBenefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <div key={i} className="flex gap-4 p-5 rounded-2xl border border-slate-100 hover:border-neon-purple/20 bg-white hover:bg-slate-50/50 transition-all duration-300">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-neon-purple">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h4 className="text-base font-bold text-slate-900 leading-snug">{benefit.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-medium">{benefit.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Capabilities Grid */}
        <section className="py-12 border-t border-slate-200/50 mb-16">
          <div className="text-center max-w-xl mx-auto mb-6">
            <span className="text-xs font-bold text-neon-purple uppercase tracking-widest font-mono">Affordable SEO Services</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 font-display">Attract Customers Online</h2>
          </div>
          <p className="text-slate-600 text-xs sm:text-sm text-center max-w-2xl mx-auto leading-relaxed font-semibold mb-16">
            Our SEO services are the best fit for businesses struggling with declining traffic and dipping revenue. Every service we offer is crafted to boost your search presence, strengthen brand visibility, and generate high-quality organic leads.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {seoCapabilities.map((service, i) => {
              const Icon = service.icon;
              return (
                <GlassCard key={i} className="flex flex-col justify-between h-full p-6 sm:p-8" hoverGlow>
                  <div className="flex flex-col gap-4">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${service.color} border flex items-center justify-center`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-semibold">{service.desc}</p>
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <section className="p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200 text-center relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-radial from-neon-purple/5 to-transparent blur-3xl pointer-events-none" />
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3 font-display">Ready to scale your organic visibility?</h2>
          <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed font-semibold mb-8">
            Request an audit checklist or consult with our technical SEO leads for custom strategy plans.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-neon-purple to-neon-cyan hover:opacity-90 shadow-md transition-all cursor-pointer"
          >
            Launch SEO Campaign
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </section>
      </main>

      <Footer />
      <WhatsAppChat />
    </div>
  );
}
