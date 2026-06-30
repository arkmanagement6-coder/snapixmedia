"use client";

import { Paintbrush, ArrowLeft, ArrowUpRight, ShieldCheck, Sparkles, Layout, Globe, FileText, CreditCard, Package, Share2, Award, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MouseFollower from "@/components/MouseFollower";
import WhatsAppChat from "@/components/WhatsAppChat";
import GlassCard from "@/components/GlassCard";
import Link from "next/link";

const designServices = [
  {
    title: "Logo Designing",
    desc: "Logo is of prime importance when associated with any product or service. It gives your brand an instant identity and market popularity. We design highly creative and unique logos for any purpose. We make sure that the design suits your requirements, is identified quickly with your products, and is delivered in vector files that are easily printed and edited for bulk usage in any format.",
    icon: Paintbrush,
    color: "from-blue-500/10 to-indigo-500/10 text-blue-600 border-blue-100",
  },
  {
    title: "Business Card Designing",
    desc: "Collaborate with us for beautiful, creative, and professional business card designs. We excel in making attractive cards equipped with your logo, printable in any format. We provide both digital business cards and printed cards. Our printed cards are equipped with a QR Scanner, making your networking connections easier and faster.",
    icon: CreditCard,
    color: "from-indigo-500/10 to-purple-500/10 text-indigo-600 border-indigo-100",
  },
  {
    title: "Packaging & Labeling Design",
    desc: "We leave no stone unturned to keep your brand in the memory of your customers and popularize your products. Packaging and labeling are crafted by our creative team to ensure your merchandise looks catchy, stunning, stylish, and stands out on retail shelves or e-commerce storefronts.",
    icon: Package,
    color: "from-purple-500/10 to-pink-500/10 text-purple-600 border-purple-100",
  },
  {
    title: "Social Media Posts & Banners",
    desc: "Our dedicated design team has deep expertise in producing high-engagement social assets. We design posts and banners specifically catering to your brand requirements. We highlight your services, products, and key accomplishments so that more people interact with your profiles.",
    icon: Share2,
    color: "from-pink-500/10 to-rose-500/10 text-pink-600 border-pink-100",
  },
  {
    title: "Letterhead Design",
    desc: "In any company, professional letterhead is of prime importance. It is the easiest way to handle official correspondence using a readymade, elegant template. Simply add your details, print, and your job is done—easy, simple, and consistent. We design a variety of templates suiting your exact corporate needs.",
    icon: FileText,
    color: "from-blue-500/10 to-pink-500/10 text-blue-500 border-blue-100",
  },
  {
    title: "Favicon Icon Design",
    desc: "Located in bookmarks, URL address bars, and browser tabs, a favicon is an essential feature for cohesive digital branding. It makes it easier for users to locate, recognize, and visit your site in no time. Our team of design professionals works to give you the perfect icon you would love.",
    icon: Globe,
    color: "from-purple-500/10 to-blue-500/10 text-purple-500 border-purple-100",
  },
];

const keyFeatures = [
  {
    title: "Seamless Flow & Satisfaction",
    desc: "We provide a seamless flow of design services with guaranteed customer satisfaction at every step.",
    icon: Award,
  },
  {
    title: "High-Resolution Formats",
    desc: "We provide high-resolution logos and graphic assets in several formats (SVG, PNG, PDF) for bulk usage.",
    icon: ShieldCheck,
  },
  {
    title: "Market Stature & Reach",
    desc: "Our social media reach enhances our stature, and we apply these visual design trends to boost your brand's growth.",
    icon: Sparkles,
  },
];

export default function GraphicDesignVideoAds() {
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
            <Sparkles className="w-3.5 h-3.5" />
            <span>Creative Design & Branding</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold !text-white tracking-tight leading-tight font-display drop-shadow-md">
            Graphic Design <span className="text-gradient-purple-cyan">Services</span>
          </h1>
          <p className="!text-slate-300 text-xs sm:text-sm max-w-2xl leading-relaxed font-semibold">
            SnapixMedia – Your Trusted Partner for Professional Graphic Design Services ⭐
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
              Build a Powerful Brand Identity
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-semibold leading-relaxed">
              At SnapixMedia, we provide creative and professional graphic design services that help businesses build a strong brand identity. From logos and social media creatives to brochures, banners, and marketing materials, our team designs visually appealing content that grabs attention and communicates your message effectively.
            </p>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              We combine creativity with strategy to deliver designs that enhance your brand and support business growth. Every visual asset we create is custom-tailored to communicate your values clearly and hook potential customers at first glance.
            </p>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="relative rounded-3xl border border-slate-200 bg-white p-2 shadow-xl shadow-slate-200/30 overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-radial from-neon-purple/10 to-transparent blur-2xl pointer-events-none" />
              
              {/* Decorative design board mockup */}
              <div className="flex items-center gap-1.5 px-4 py-3 bg-slate-50 border-b border-slate-100 rounded-t-2xl">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                <div className="ml-4 flex-1 max-w-[220px] h-5 bg-slate-200/60 rounded text-[9px] text-slate-400 flex items-center justify-center font-mono">
                  snapixmedia.com/brand-design
                </div>
              </div>
              
              <div className="p-6 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="w-28 h-4 bg-neon-purple/20 rounded-full" />
                  <div className="w-12 h-3 bg-slate-150 rounded" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-24 rounded-2xl border border-dashed border-slate-200 p-3 flex flex-col justify-between hover:border-neon-purple/40 transition-colors duration-300">
                    <span className="text-[10px] font-bold text-slate-450 uppercase font-mono">Vector Logo</span>
                    <div className="w-8 h-8 rounded bg-gradient-to-br from-blue-500/10 to-indigo-500/10 flex items-center justify-center text-blue-600 font-extrabold text-[13px] border border-blue-100">S</div>
                  </div>
                  <div className="h-24 rounded-2xl border border-dashed border-slate-200 p-3 flex flex-col justify-between hover:border-neon-purple/40 transition-colors duration-300">
                    <span className="text-[10px] font-bold text-slate-450 uppercase font-mono">Business Card</span>
                    <div className="w-12 h-8 rounded bg-gradient-to-r from-indigo-500/10 to-purple-500/10 flex flex-col gap-1 p-1 border border-indigo-100">
                      <div className="w-4 h-1 bg-indigo-500/30 rounded" />
                      <div className="w-6 h-1 bg-indigo-500/20 rounded" />
                    </div>
                  </div>
                </div>
                <div className="w-full h-3 bg-slate-100 rounded-full" />
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities Services Section */}
        <section className="py-12 border-t border-slate-200/50 mb-24">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-xs font-bold text-neon-purple uppercase tracking-widest">Capabilities</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 font-display">Our Design Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designServices.map((service, i) => {
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

        {/* Features & Benefits Grid */}
        <section className="py-16 border-t border-slate-200/50 mb-16">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-xs font-bold text-neon-cyan uppercase tracking-widest">Why SnapixMedia?</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 font-display">Key Program Features</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {keyFeatures.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <div key={i} className="flex gap-4 p-5 rounded-2xl border border-slate-100 hover:border-neon-purple/20 bg-white hover:bg-slate-50/50 transition-all duration-300">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-neon-purple">
                    <Icon className="w-5 h-5" />
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
          <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-radial from-neon-purple/5 to-transparent blur-3xl pointer-events-none" />
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3 font-display">Ready to elevate your brand identity?</h2>
          <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed font-semibold mb-8">
            Request a design catalog audit or consult with our creative team for custom graphics assets pricing.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-neon-purple to-neon-cyan hover:opacity-90 shadow-md transition-all cursor-pointer"
          >
            Launch Creative Project
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </section>
      </main>

      <Footer />
      <WhatsAppChat />
    </div>
  );
}
