"use client";

import { Share2, ArrowLeft, ArrowUpRight, ShieldCheck, Sparkles, Layout, Globe, FileText, CheckCircle, Search, TrendingUp, BarChart2, MessageSquare, Megaphone, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MouseFollower from "@/components/MouseFollower";
import WhatsAppChat from "@/components/WhatsAppChat";
import GlassCard from "@/components/GlassCard";
import Link from "next/link";

const smmServices = [
  {
    title: "SMM Platforms Management",
    desc: "Facebook Marketing, Twitter Marketing, Pinterest Marketing, Instagram Marketing, and YouTube Marketing. We design optimized profiles and run visual branding campaigns across these high-reach networks.",
    icon: Globe,
    color: "from-blue-500/10 to-indigo-500/10 text-blue-600 border-blue-100",
  },
  {
    title: "Lead Generation Campaigns",
    desc: "We focus on creating the best organic lead pipelines and conversion models for your business. We engineer content structures that attract high-intent prospects and encourage direct inquiries.",
    icon: TrendingUp,
    color: "from-indigo-500/10 to-purple-500/10 text-indigo-600 border-indigo-100",
  },
  {
    title: "Maintain Social Reputation",
    desc: "We track reviews, comments, and user feedback across networks. It helps us get in direct touch with your audience, establish rapid communication, and continuously enhance your brand's social image.",
    icon: ShieldCheck,
    color: "from-purple-500/10 to-pink-500/10 text-purple-600 border-purple-100",
  },
  {
    title: "Competitor Analysis",
    desc: "We conduct detailed audits of your primary competitors, analyze their content patterns, tracking their ad campaigns, and figure out how they directly influence or hamper your industry performance.",
    icon: Search,
    color: "from-pink-500/10 to-rose-500/10 text-pink-600 border-pink-100",
  },
  {
    title: "Research & Analysis",
    desc: "Our valuable expert team offers clear insights into your business through research, search trend reports, and data. We help you identify key visual opportunities and design solutions that scale.",
    icon: BarChart2,
    color: "from-blue-500/10 to-pink-500/10 text-blue-500 border-blue-100",
  },
  {
    title: "Campaign Management",
    desc: "An end-to-end management service that helps your business grab the major portion of traffic, user attention, and conversion assets that modern social media marketing comes up with.",
    icon: Layout,
    color: "from-purple-500/10 to-blue-500/10 text-purple-500 border-purple-100",
  },
];

const contentWritingServices = [
  {
    title: "Blog Posts",
    desc: "Our services focus on clear, well-written blog posts that appeal to a wider audience or people looking for your targeted products or services.",
    icon: FileText,
  },
  {
    title: "Guest Posts",
    desc: "We prioritize generating high-quality guest posts to reach a larger audience, enhance search engine rankings, and establish your business as an authority.",
    icon: ExternalLink,
  },
  {
    title: "SEO Content",
    desc: "Our SEO content writing services offer the best search optimization practices and use innovative copywriting strategies designed to increase online visibility.",
    icon: Search,
  },
  {
    title: "Press Releases",
    desc: "By highlighting the distinct qualities and advantages of your product and services, we focus on building your brand's public reputation with professional press releases.",
    icon: Megaphone,
  },
  {
    title: "Website Content",
    desc: "We focus on producing excellent, SEO-friendly, and precise content that provides honest data, helping customers make informed decisions about your products.",
    icon: Layout,
  },
  {
    title: "Social Media Content",
    desc: "Content is a crucial element of SMM. With the help of our content writers, we focus on maintaining your internet presence and keeping your profiles consistently active.",
    icon: Share2,
  },
];

const contentObjectives = [
  { title: "Maximum Conversion Rate", desc: "Convert digital visitors into loyal, repeat customers through persuasive copywriting." },
  { title: "Seeking Out New Opportunities", desc: "Identify untapped content niches and keywords to scale organic reach." },
  { title: "Building a Trusting Bond", desc: "Nurture trust through clear, transparent, and authoritative writing styles." },
  { title: "Addressing Current Clients Needs", desc: "Deliver helpful documentation and value-added resources for client retention." },
];

export default function SocialMediaMarketing() {
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
            <Share2 className="w-3.5 h-3.5" />
            <span>Social Campaigns & Reach</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold !text-white tracking-tight leading-tight font-display drop-shadow-md">
            Social Media <span className="text-gradient-purple-cyan">Marketing</span>
          </h1>
          <p className="!text-slate-300 text-xs sm:text-sm max-w-2xl leading-relaxed font-semibold">
            Social Media Marketing (SMM) is one of the most effective ways to build a strong online presence, engage with your target audience, and grow your business.
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
              Social Media Marketing Agency in Agra
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-semibold leading-relaxed">
              At SnapixMedia, we help businesses leverage the power of social media to increase brand awareness, generate quality leads, and drive meaningful customer engagement. We create customized strategies for platforms such as Facebook, Instagram, LinkedIn, X (formerly Twitter), YouTube, and Pinterest.
            </p>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              With billions of active users across these platforms, social media offers businesses an incredible opportunity to connect with potential customers, promote their products and services, and build lasting relationships. Our team develops creative content, manages campaigns, runs targeted advertisements, and tracks performance to ensure maximum return on investment.
            </p>
          </div>

          {/* Social Mockup Card */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-3xl border border-slate-200 bg-white p-2 shadow-xl shadow-slate-200/30 overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-radial from-neon-purple/10 to-transparent blur-2xl pointer-events-none" />
              
              {/* Instagram Feed Mockup Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-50 border-b border-slate-100 rounded-t-2xl">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-500 p-[1.5px]">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-[7px] font-extrabold text-slate-900">S</div>
                  </div>
                  <span className="text-[10px] font-bold text-slate-900">snapixmedia_agency</span>
                </div>
                <div className="flex gap-1">
                  <div className="w-1 h-1 rounded-full bg-slate-400" />
                  <div className="w-1 h-1 rounded-full bg-slate-400" />
                  <div className="w-1 h-1 rounded-full bg-slate-400" />
                </div>
              </div>
              
              {/* Instagram Post Content */}
              <div className="p-4 flex flex-col gap-4">
                <div className="h-44 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4 flex flex-col justify-between text-white relative overflow-hidden">
                  <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-white/20 backdrop-blur px-2.5 py-1 rounded-full w-fit">Campaign Active</span>
                  <div className="flex flex-col gap-1.5 relative z-10">
                    <span className="text-xl font-extrabold leading-tight">Grow Your Audience 10x Faster</span>
                    <span className="text-[9px] text-white/80 font-medium">Original Creatives & Structured Scheduling</span>
                  </div>
                </div>
                <div className="flex items-center justify-between border-t border-slate-100 pt-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-slate-900 flex items-center gap-1">❤️ 1,240 <span className="text-slate-450 text-[10px] font-medium">Likes</span></span>
                    <span className="text-xs font-bold text-slate-900 flex items-center gap-1">💬 89 <span className="text-slate-450 text-[10px] font-medium">Comments</span></span>
                  </div>
                  <span className="text-[9px] font-bold text-neon-purple uppercase tracking-widest">Sponsored</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Offer List */}
        <section className="py-12 border-t border-slate-200/50 mb-24">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-xs font-bold text-neon-purple uppercase tracking-widest">Offerings</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 font-display">Social Marketing Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {smmServices.map((service, i) => {
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

        {/* Content Creation & Strategy Banner */}
        <section className="py-16 border-t border-slate-200/50 mb-24">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-neon-purple/20 bg-neon-purple/5 text-neon-purple text-xs font-bold tracking-wider w-fit uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Content Strategy</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
                Creating Value-Driven Content
              </h2>
              <p className="text-slate-600 text-sm sm:text-base font-semibold leading-relaxed">
                The success of any social media marketing strategy depends on creating and sharing valuable content that resonates with your target audience. At SnapixMedia, we help businesses attract, engage, and convert potential customers through high-quality, strategic content.
              </p>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <GlassCard className="flex flex-col gap-3 p-6 sm:p-8" hoverGlow>
                <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-neon-purple" />
                  Content Creation
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-semibold">
                  Our creative team develops original, engaging, and brand-focused content tailored to your business goals. From eye-catching graphics and compelling captions to promotional posts and videos, we create content that strengthens your brand identity, increases audience engagement, and helps your business stand out.
                </p>
              </GlassCard>

              <GlassCard className="flex flex-col gap-3 p-6 sm:p-8" hoverGlow>
                <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-neon-cyan" />
                  Content Publishing
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-semibold">
                  Consistency is key to social media success. SnapixMedia plans, schedules, and publishes relevant, engaging, and shareable content at the right time to maximize reach and audience interaction. We ensure every post aligns with your marketing objectives while helping you build a loyal online community.
                </p>
              </GlassCard>
            </div>
          </div>
        </section>

        {/* Content Writing Services */}
        <section className="py-16 border-t border-slate-200/50 mb-24">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-neon-cyan/20 bg-neon-cyan/5 text-neon-cyan text-xs font-bold tracking-wider w-fit uppercase">
                <FileText className="w-3.5 h-3.5" />
                <span>Copywriting Services</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
                Professional Content Writing Services
              </h2>
              <p className="text-slate-600 text-sm sm:text-base font-semibold leading-relaxed">
                At SnapixMedia, we provide professional content writing services that add value. Our team of experienced writers creates original, engaging, and SEO-friendly copy tailored to your brand goals.
              </p>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                From website content and blogs to product descriptions and marketing copy, we deliver content that informs, engages, and converts visitors into customers.
              </p>

              {/* Objectives List */}
              <div className="mt-4">
                <h4 className="text-base font-bold text-slate-900 mb-4">Our Core Objectives:</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {contentObjectives.map((obj, i) => (
                    <li key={i} className="flex gap-2 items-start">
                      <CheckCircle className="w-4 h-4 text-neon-purple mt-0.5 flex-shrink-0" />
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-slate-900">{obj.title}</span>
                        <span className="text-[10px] text-slate-455 leading-normal">{obj.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sub-services Grid */}
            <div className="w-full lg:w-1/2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contentWritingServices.map((feat, i) => {
                  const Icon = feat.icon;
                  return (
                    <div key={i} className="p-5 rounded-2xl border border-slate-100 bg-white hover:border-neon-purple/20 transition-all duration-300">
                      <div className="w-8 h-8 rounded-lg bg-purple-50 border border-purple-100 flex items-center justify-center text-neon-purple mb-3">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 mb-1.5">{feat.title}</h4>
                      <p className="text-[11px] text-slate-500 leading-relaxed font-semibold">{feat.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <section className="p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200 text-center relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-radial from-neon-purple/5 to-transparent blur-3xl pointer-events-none" />
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3 font-display">Ready to scale your organic social reach?</h2>
          <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed font-semibold mb-8">
            Connect with our copywriters and SMM campaign strategists for tailored solutions.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-neon-purple to-neon-cyan hover:opacity-90 shadow-md transition-all cursor-pointer"
          >
            Launch SMM Project
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </section>
      </main>

      <Footer />
      <WhatsAppChat />
    </div>
  );
}
