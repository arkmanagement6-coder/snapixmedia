"use client";

import { Search, Share2, Image, Smartphone, ArrowLeft, ArrowUpRight, ShieldCheck, Sparkles, Layout, Globe, FileText, CheckCircle2, TrendingUp, BarChart2, MessageSquare } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MouseFollower from "@/components/MouseFollower";
import WhatsAppChat from "@/components/WhatsAppChat";
import GlassCard from "@/components/GlassCard";
import Link from "next/link";

const ppcCapabilities = [
  {
    title: "Search Ads Advertising",
    desc: "The most known form of PPC. As a part of our SMM/PPC Advertising campaign, we target highly relevant audiences searching for your exact keywords. Our team bids on and monitors campaigns constantly to maintain peak position.",
    icon: Search,
    color: "from-blue-500/10 to-indigo-500/10 text-blue-600 border-blue-100",
  },
  {
    title: "Social Advertising",
    desc: "With the increased avenue of social media platforms, we provide extensive opportunities to reach your targeted audiences. We build precise buyer personas and refine demographic relevance to boost conversions.",
    icon: Share2,
    color: "from-indigo-500/10 to-purple-500/10 text-indigo-600 border-indigo-100",
  },
  {
    title: "Display & Banner Ads",
    desc: "Online paid advertising using images and graphical assets. SnapixMedia understands that professional graphics act as a magnet, driving targeted audiences to click on your banners and scale CTR.",
    icon: Image,
    color: "from-purple-500/10 to-pink-500/10 text-purple-600 border-purple-100",
  },
  {
    title: "Mobile Advertising",
    desc: "Modern consumer life spins around mobile screens all the time. As a leading PPC Agency, we design and launch mobile-first landing pages and ads optimized to capture users on their smartphones efficiently.",
    icon: Smartphone,
    color: "from-pink-500/10 to-rose-500/10 text-pink-600 border-pink-100",
  },
];

const marketingAdvantages = [
  {
    title: "Huge Market Coverage",
    desc: "Providing you with qualified leads requires widespread market coverage, which we sure shot have across diverse advertising networks.",
  },
  {
    title: "Social Media Leads",
    desc: "We leverage several high-engagement social media platforms to capture, qualify, and deliver the best leads.",
  },
  {
    title: "SEO-Powered Campaigns",
    desc: "With Search Engine Optimization, we increase your ranking. Our team targets keywords to fetch maximum organic leads.",
  },
  {
    title: "Expert Vigilant Team",
    desc: "We offer a dedicated team of vigilant, certified PPC and marketing professionals working to secure more leads.",
  },
  {
    title: "Database Marketing",
    desc: "We align campaigns with high-integrity database insights to ensure your marketing budgets yield outstanding results.",
  },
  {
    title: "High Traffic Expansion",
    desc: "Our vast expansion in market outreach helps you attract significantly more traffic and active buyers for your services.",
  },
  {
    title: "Crystal-Clear Transparency",
    desc: "We offer complete transparency with clean analytics, daily reports, and updates on your ad performance.",
  },
  {
    title: "Quality Over Quantity",
    desc: "We provide lead nurturing, prioritizing high-intent, qualified leads over raw, low-value click counts.",
  },
  {
    title: "Humanitarian Lead Nurturing",
    desc: "We nurture relationships built on trust with buyers, ensuring smooth, friendly follow-ups that close deals.",
  },
];

const ppcLayeredProcess = [
  "Keyword search and selection",
  "Competitive analysis and benchmarking",
  "Real-time bid management and budget scaling",
  "Engaging creative Ad Creation",
  "Strategic Ad Placement on search engine result pages"
];

export default function PaidAds() {
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
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-neon-cyan/20 bg-neon-cyan/5 text-neon-cyan text-xs font-bold tracking-widest uppercase">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>PPC & Lead Generation</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold !text-white tracking-tight leading-tight font-display drop-shadow-md">
            Google & Meta <span className="text-gradient-purple-cyan">Paid Ads</span>
          </h1>
          <p className="!text-slate-300 text-xs sm:text-sm max-w-2xl leading-relaxed font-semibold">
            PPC (Pay Per Click) is one of the most effective digital marketing strategies for driving targeted traffic, quality leads, and sales to your website.
          </p>
        </div>
      </section>

      <main className="flex-1 pt-12 pb-20 px-6 max-w-6xl mx-auto w-full">
        {/* Back navigation */}
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
              Maximize ROI with Targeted PPC Campaigns
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-semibold leading-relaxed">
              Snapix Media offers professional PPC Services to help businesses generate high-quality leads, increase website traffic, and maximize return on investment (ROI). Our experienced PPC specialists create, manage, and optimize campaigns across Google Ads and other leading advertising platforms.
            </p>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              In today's highly competitive digital landscape, a well-planned PPC strategy is essential for business growth. Our dedicated team works closely with clients to develop customized campaigns that target the right audience, improve conversions, and achieve long-term success.
            </p>
          </div>

          {/* Search Result Ad Mockup */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/30 overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-radial from-neon-purple/10 to-transparent blur-2xl pointer-events-none" />
              
              {/* Mock Google Search Ad Card */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-[10px] text-slate-400 font-semibold uppercase">
                  <span>Sponsored</span>
                  <span>•</span>
                  <span className="text-blue-600 font-bold lowercase">https://www.snapixmedia.com/services</span>
                </div>
                <h4 className="text-lg font-bold text-blue-600 hover:underline cursor-pointer leading-tight">
                  Google & Meta Paid Ads Agra | Generate Qualified Leads & Sales
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  SnapixMedia's PPC experts manage & optimize your Google Ads campaigns. Over 10 years of experience. Maximize your ROI with data-driven PPC solutions. Request a audit!
                </p>
                <div className="flex items-center gap-6 mt-2 pt-2 border-t border-slate-100 text-[10px] text-slate-450 font-bold uppercase font-mono">
                  <span>CPC: Highly Optimized</span>
                  <span>Avg CTR: +3.2%</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Claims & Process Segment */}
        <section className="py-12 border-t border-slate-200/50 mb-24">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-neon-purple/20 bg-neon-purple/5 text-neon-purple text-xs font-bold tracking-wider w-fit uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>SnapixMedia Claims to Be the BEST!</span>
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight font-display">
                A Layered Process Built for Conversion
              </h2>
              <p className="text-slate-600 text-sm sm:text-base font-semibold leading-relaxed">
                Our team has over 10 Years of industry experience. We leverage data analytics to constantly refine and improve every step. We keep a close tab on which campaigns drive the highest ROI.
              </p>
            </div>

            <div className="w-full lg:w-1/2">
              <GlassCard className="p-6 sm:p-8" hoverGlow>
                <h4 className="text-base font-bold text-slate-900 mb-4">Our Layered PPC Process Includes:</h4>
                <ul className="flex flex-col gap-3">
                  {ppcLayeredProcess.map((step, i) => (
                    <li key={i} className="flex gap-2 items-center text-xs text-slate-600 font-semibold">
                      <CheckCircle2 className="w-4.5 h-4.5 text-neon-purple flex-shrink-0" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </div>
          </div>
        </section>

        {/* Capabilities Services Grid */}
        <section className="py-12 border-t border-slate-200/50 mb-24">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-xs font-bold text-neon-purple uppercase tracking-widest">Offerings</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 font-display">PPC Advertising Channels</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ppcCapabilities.map((service, i) => {
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

        {/* Lead Generation Company Segment */}
        <section className="py-16 border-t border-slate-200/50 mb-24">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-neon-cyan/20 bg-neon-cyan/5 text-neon-cyan text-xs font-bold tracking-wider w-fit uppercase">
                <Globe className="w-3.5 h-3.5" />
                <span>Lead Generation Company</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
                Connect with the Right Target Audience
              </h2>
              <p className="text-slate-600 text-sm sm:text-base font-semibold leading-relaxed">
                SnapixMedia is the digital marketing partner you've been looking for. We specialize in delivering result-driven marketing solutions that help businesses grow their online presence, generate high-quality leads, and increase conversions.
              </p>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                We use proven strategies to connect your business with the right audience through multiple channels: SEO, social media marketing, Google Ads, content marketing, and performance marketing.
              </p>
            </div>

            <div className="w-full lg:w-1/2">
              <GlassCard className="p-6 sm:p-8 flex flex-col gap-4" hoverGlow>
                <h4 className="text-base font-bold text-slate-900">Why Lead Generation is Crucial for Growth:</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-semibold">
                  Be it a startup or a multi-million dollar corporation, Lead Generation is the fuel on which a business runs. When these leads turn into potential consumers, the business gains huge profit.
                </p>
                <ul className="grid grid-cols-2 gap-3 mt-2 border-t border-slate-100 pt-4">
                  {[
                    "Increase Traffic",
                    "Increase Sales",
                    "Expands Business",
                    "Filters Interested Parties"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2 items-center text-xs font-bold text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-neon-purple flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </div>
          </div>
        </section>

        {/* Why Choose SnapixMedia Partner */}
        <section className="py-16 border-t border-slate-200/50 mb-16">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-xs font-bold text-neon-purple uppercase tracking-widest font-mono">Partner Program</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 font-display">Why Choose SnapixMedia?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketingAdvantages.map((adv, i) => (
              <div key={i} className="p-6 rounded-2xl border border-slate-100 hover:border-neon-purple/20 bg-white hover:bg-slate-50/50 transition-all duration-300 flex flex-col gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-neon-purple" />
                <h4 className="text-base font-bold text-slate-900 leading-snug">{adv.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">{adv.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <section className="p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200 text-center relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-radial from-neon-purple/5 to-transparent blur-3xl pointer-events-none" />
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3 font-display">Ready to scale your PPC performance?</h2>
          <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed font-semibold mb-8">
            Consult with our certified PPC campaign leads and request a free audit report.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-neon-purple to-neon-cyan hover:opacity-90 shadow-md transition-all cursor-pointer"
          >
            Launch PPC Campaign
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </section>
      </main>

      <Footer />
      <WhatsAppChat />
    </div>
  );
}
