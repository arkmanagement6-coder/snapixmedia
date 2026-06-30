"use client";

import { Compass, Award, Users, Sparkles, Heart, CheckCircle2, TrendingUp, Megaphone, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MouseFollower from "@/components/MouseFollower";
import WhatsAppChat from "@/components/WhatsAppChat";
import GlassCard from "@/components/GlassCard";
import Link from "next/link";

const bulletPoints = [
  { title: "Actual Real Results", desc: "Data-driven return on investment tracking.", icon: TrendingUp },
  { title: "Organize Huge Campaigns", desc: "Scale campaigns across search and social networks.", icon: Megaphone },
  { title: "Awesome Support Team", desc: "Dedicated, highly responsive Millennial squad.", icon: Users },
];

export default function About() {
  return (
    <div className="relative min-h-screen bg-transparent text-slate-700 overflow-x-hidden flex flex-col font-sans">
      <MouseFollower />
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-36 pb-20 px-6 glow-grid">
        <div className="absolute top-1/3 left-1/2 w-[500px] h-[300px] bg-radial from-neon-purple/5 to-transparent blur-[100px] pointer-events-none -translate-x-1/2" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-neon-purple/20 bg-neon-purple/5 text-neon-purple text-xs font-bold tracking-wider mb-6 uppercase">
            <Users className="w-3.5 h-3.5" />
            <span>Digital Growth Partner</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6 font-display">
            Welcome to SnapixMedia – <span className="text-gradient-purple-cyan">Your Growth Partner!</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            Helping Businesses Build Powerful Brands, Generate Quality Leads, and Achieve Sustainable Growth.
          </p>
        </div>
      </section>

      {/* Team Description & Highlights */}
      <section className="py-16 px-6 relative border-t border-slate-200/50 mb-16">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <h2 className="text-3xl font-extrabold text-slate-900 font-display">Who We Are</h2>
            <p className="text-slate-650 text-sm sm:text-base font-semibold leading-relaxed">
              We are a team of highly energetic, passionate millennials for whom digital marketing is a living method. SnapixMedia, one of India's best digital marketing companies, believes in providing quality work to our Happy Clients that helps businesses transform their digital presence.
            </p>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            {bulletPoints.map((pt, i) => {
              const Icon = pt.icon;
              return (
                <div key={i} className="flex gap-4 p-5 rounded-2xl border border-slate-100 hover:border-neon-purple/20 bg-white hover:bg-slate-50/50 transition-all duration-300">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-purple-50/50 border border-purple-100 flex items-center justify-center text-neon-purple">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-slate-900 leading-snug">{pt.title}</span>
                    <span className="text-xs text-slate-500 mt-0.5 leading-normal">{pt.desc}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose SnapixMedia Details */}
      <section className="py-20 px-6 border-t border-slate-200/50 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <span className="text-xs font-bold text-neon-purple uppercase tracking-widest font-mono">Strategy & Innovation</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display">Why Choose SnapixMedia?</h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-semibold">
              At SnapixMedia, we believe successful digital marketing is built on strategy, creativity, and measurable results. We plan, create, and execute customized marketing solutions that strengthen your brand identity, increase online visibility, and generate high-quality leads.
            </p>
            <p className="text-slate-650 text-xs sm:text-sm leading-relaxed font-semibold">
              By staying ahead of the latest digital trends and evolving technologies, we help businesses connect with the right audience at the right time through data-driven marketing strategies.
            </p>
          </div>

          <div className="w-full lg:w-1/2">
            <GlassCard className="p-6 sm:p-8 flex flex-col gap-4 border-slate-150" hoverGlow>
              <h3 className="text-lg font-bold text-slate-900">Affordable, Result-Oriented Services</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-semibold">
                Our team of experienced professionals takes the time to understand your business goals and develops personalized solutions that deliver real value. Whether it's website development, branding, SEO, social media marketing, paid advertising, or content creation, we focus on driving sustainable growth and maximizing your return on investment.
              </p>
              <p className="text-xs text-slate-500 leading-relaxed">
                With a commitment to transparency, innovation, and client success, SnapixMedia provides result-oriented digital marketing services designed to help businesses of all sizes outperformed the competition.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Hinglish Creative Story Section */}
      <section className="py-20 px-6 border-t border-slate-200/50 relative overflow-hidden">
        <div className="absolute top-1/2 right-1/4 w-72 h-72 rounded-full bg-radial from-neon-purple/5 to-transparent blur-[80px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-neon-cyan uppercase tracking-widest font-mono">Agra Built</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 font-display">About Snapix Media</h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-3 font-semibold">
              Built in Agra. Made to Make Brands Go Viral (the right way) 🚀
            </p>
          </div>

          <div className="flex flex-col gap-10">
            {/* Main Hinglish intro card */}
            <GlassCard className="p-8 border-purple-100" hoverGlow>
              <p className="text-slate-700 text-sm sm:text-base font-semibold leading-relaxed font-sans mb-6">
                Snapix Media koi normal digital marketing agency nahi hai—we’re a squad of creators, strategists, and growth nerds jo ek hi cheez pe focus karte hain: <strong>tumhare brand ko itna strong banana ki log ignore hi na kar paayein.</strong>
              </p>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Agra se start hua Snapix Media ek simple belief ke saath bana tha: <strong>har business deserve karta hai premium branding aur powerful digital presence—chahe wo chhota ho ya bada.</strong> Startup ho ya scaling brand, hum sirf “achha dikhne wala” kaam nahi karte—hum results laate hain. Social media content jo scroll rok de, websites jo convert karein, performance marketing jo ROI de, branding jo yaad reh jaaye—hum creativity + strategy ka perfect combo use karke ideas ko growth mein convert karte hain.
              </p>
            </GlassCard>

            {/* Three Pillar Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <GlassCard className="p-6 flex flex-col gap-3" hoverGlow>
                <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-neon-purple">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900">What Makes Us Different?</h4>
                <p className="text-xs text-slate-605 leading-relaxed font-semibold">
                  Hum trends follow nahi karte—hum brands banate hain jo trend ban jaate hain. Hum har client ke saath close kaam karte hain, unka goal samajhte hain, market study karte hain, aur phir aise solutions banate hain jo actually kaam karein.
                </p>
              </GlassCard>

              <GlassCard className="p-6 flex flex-col gap-3" hoverGlow>
                <div className="w-10 h-10 rounded-xl bg-violet-50 border border-violet-200 flex items-center justify-center text-neon-purple">
                  <Compass className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900">Our Mission</h4>
                <p className="text-xs text-slate-605 leading-relaxed font-semibold">
                  Businesses ko aise digital solutions dena jo sirf dikhne mein premium na ho, balki real visibility, trust aur growth bhi laaye.
                </p>
              </GlassCard>

              <GlassCard className="p-6 flex flex-col gap-3" hoverGlow>
                <div className="w-10 h-10 rounded-xl bg-pink-50 border border-pink-200 flex items-center justify-center text-neon-purple">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900">Our Vision</h4>
                <p className="text-xs text-slate-605 leading-relaxed font-semibold">
                  India ki most trusted creative growth agencies mein se ek banna—aur hazaaron brands ko unforgettable banana.
                </p>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Let's Build Something Crazy Good */}
      <section className="py-12 px-6 border-t border-slate-200/50 mb-16">
        <div className="max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200 text-center relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-radial from-neon-purple/5 to-transparent blur-3xl pointer-events-none" />
          
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3 font-display">Let's Build Something Crazy Good</h2>
          <p className="text-slate-650 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed font-semibold mb-6">
            Tumhara business sirf likes aur followers ke liye nahi bana. Usse chahiye attention, trust, leads aur long-term growth. Aur wahi hum deliver karte hain.
          </p>
          <span className="block text-sm font-bold text-neon-purple uppercase tracking-wider mb-8">
            Snapix Media — Creativity bhi, Growth bhi.
          </span>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-neon-purple to-neon-cyan hover:opacity-90 shadow-md transition-all cursor-pointer"
          >
            Let's Collaborate
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppChat />
    </div>
  );
}
