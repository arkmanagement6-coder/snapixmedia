import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2, ShieldCheck, Zap, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MouseFollower from "@/components/MouseFollower";
import WhatsAppChat from "@/components/WhatsAppChat";
import ParticleCanvas from "@/components/ParticleCanvas";
import InteractiveStats from "@/components/InteractiveStats";
import FeaturedProjects from "@/components/FeaturedProjects";
import ProcessTimeline from "@/components/ProcessTimeline";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import TechStackGrid from "@/components/TechStackGrid";
import GlassCard from "@/components/GlassCard";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-transparent text-slate-300 overflow-x-hidden flex flex-col font-sans">
      <MouseFollower />
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden glow-grid">
        {/* Glow ambient background assets */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-radial from-neon-purple/20 to-transparent blur-[140px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-radial from-neon-cyan/15 to-transparent blur-[120px] pointer-events-none translate-x-1/2 translate-y-1/2" />

        <ParticleCanvas />

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col items-center justify-center text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-neon-purple/20 bg-neon-purple/5 text-neon-purple text-xs font-bold tracking-wider mb-6 uppercase animate-pulse">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Digital Growth & Tech Agency</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.1] mb-6 font-display">
            Transform Your Business Through{" "}
            <span className="text-gradient-purple-cyan">Technology</span> &{" "}
            <span className="text-gradient-blue-magenta">Digital Growth</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-350 max-w-2xl leading-relaxed mb-10 font-semibold">
            We build high-performance websites, scalable applications, and data-driven marketing campaigns that accelerate growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple text-white text-sm font-semibold uppercase tracking-wider hover:opacity-90 shadow-lg hover:shadow-neon-purple/20 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
            >
              Start Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/portfolio"
              className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/10 bg-slate-900/60 hover:bg-slate-800 text-slate-200 text-sm font-semibold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-xs"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>


      {/* 3. SERVICES SECTION */}
      <section className="relative py-24 px-6 overflow-hidden" id="services">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-neon-cyan uppercase tracking-widest">Our Expertise</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-3 mb-4 font-display">Services That Drive Velocity</h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-medium">
              We deliver engineered applications and digital campaigns designed to maximize engagement, visibility, and enterprise value.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Digital Marketing",
                desc: "Grow your brand with strategic social, search, and content campaigns that drive leads.",
                icon: Zap,
                color: "text-purple-400 bg-purple-950/30 border-purple-500/20",
              },
              {
                title: "SEO Optimization",
                desc: "Increase organic visibility, audit core web vitals, and rank #1 for high-value search queries.",
                icon: ShieldCheck,
                color: "text-violet-400 bg-violet-950/30 border-violet-500/20",
              },
              {
                title: "Web Development",
                desc: "High-performance websites built using React, Next.js, and modern jamstack structures.",
                icon: Sparkles,
                color: "text-indigo-400 bg-indigo-950/30 border-indigo-500/20",
              },
              {
                title: "E-commerce Stores",
                desc: "Tailored Shopify Plus and Headless online stores engineered for high sales conversions.",
                icon: ArrowUpRight,
                color: "text-fuchsia-400 bg-fuchsia-950/30 border-fuchsia-500/20",
              },
              {
                title: "UI/UX Architecture",
                desc: "Stunning wireframes, user testing, and interactive user interfaces styled for elegance.",
                icon: CheckCircle2,
                color: "text-purple-400 bg-purple-950/30 border-purple-500/20",
              },
              {
                title: "Custom App Dev",
                desc: "Full-stack cloud-native applications for Android, iOS, and complex dashboard systems.",
                icon: ArrowRight,
                color: "text-indigo-400 bg-indigo-950/30 border-indigo-500/20",
              },
            ].map((service, i) => {
              const Icon = service.icon;
              return (
                <GlassCard key={i} className="hover:border-neon-purple/40 flex flex-col justify-between min-h-[200px]" hoverGlow>
                  <div className="flex flex-col gap-4">
                    <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${service.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed font-medium">{service.desc}</p>
                  </div>
                  <Link
                    href="/services"
                    className="mt-6 text-xs font-bold uppercase tracking-wider text-neon-purple flex items-center gap-1 hover:underline w-fit"
                  >
                    Learn More
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. STATISTICS COUNTERS SECTION (WHY CHOOSE US) */}
      <section className="relative py-20 px-6 bg-slate-950/40 border-y border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-xs font-bold text-neon-purple uppercase tracking-widest font-sans">Why Partner With Us</span>
            <h2 className="text-3xl font-extrabold text-white mt-3 mb-2 font-display">Proven Growth In Numbers</h2>
          </div>
          <InteractiveStats />
        </div>
      </section>

      {/* 5. FEATURED PORTFOLIO SECTION */}
      <section className="relative py-24 px-6" id="portfolio">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-xl">
              <span className="text-xs font-bold text-neon-cyan uppercase tracking-widest font-sans">Featured Work</span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-3 mb-2 font-display">Engineered Case Studies</h2>
              <p className="text-slate-450 text-sm font-medium">Review real metrics, web audits, and leads generated for our creative partners.</p>
            </div>
            <Link
              href="/portfolio"
              className="px-6 py-3 rounded-full border border-white/10 bg-slate-900/60 hover:bg-slate-950 hover:text-white font-semibold text-xs uppercase tracking-wider transition-all duration-300 w-fit cursor-pointer shadow-xs text-slate-200"
            >
              See All Case Studies
            </Link>
          </div>
          <FeaturedProjects />
        </div>
      </section>

      {/* 6. PROCESS TIMELINE */}
      <section className="relative py-24 px-6 bg-slate-950/20 border-t border-white/5" id="process">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-neon-purple uppercase tracking-widest font-sans">Our Roadmap</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-3 mb-4 font-display">How We Scale Your Product</h2>
            <p className="text-slate-450 text-sm sm:text-base font-medium">
              A structured lifecycle optimizing speed, visual precision, and digital campaign delivery.
            </p>
          </div>
          <ProcessTimeline />
        </div>
      </section>

      {/* 7. CLIENT TESTIMONIALS */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-neon-cyan uppercase tracking-widest font-sans">Reviews</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-3 mb-4 font-display">Client Feedback</h2>
          </div>
          <TestimonialsCarousel />
        </div>
      </section>

      {/* 8. TECHNOLOGY STACK GRID */}
      <section className="relative py-24 px-6 border-t border-white/5 bg-slate-950/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-neon-blue uppercase tracking-widest font-sans">Modern Stack</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-3 mb-4 font-display">Our Core Technology Grid</h2>
            <p className="text-slate-450 text-sm font-medium">We build using performant frameworks and cloud systems to guarantee server scalability.</p>
          </div>
          <TechStackGrid />
        </div>
      </section>

      {/* 9. CALL-TO-ACTION (CTA) */}
      <section className="relative py-32 px-6 overflow-hidden border-t border-white/5 bg-gradient-to-br from-[#090514] via-[#05020a] to-[#020105]">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        {/* Glow light */}
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[300px] rounded-full bg-radial from-neon-purple/20 to-transparent blur-[140px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />

        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center gap-8">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight font-display">
            Ready To Scale Your Business?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-semibold">
            Book a free, comprehensive consultation with our engineering and growth marketing lead today. Let's design a custom roadmap to double your conversions.
          </p>
          <Link
            href="/contact"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple text-white text-sm font-bold uppercase tracking-wider hover:opacity-90 transition-all duration-300 flex items-center gap-2 group cursor-pointer shadow-lg hover:shadow-neon-purple/20"
          >
            Book Free Consultation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppChat />
    </div>
  );
}
