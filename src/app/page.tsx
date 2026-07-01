import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2, ShieldCheck, Zap, Sparkles, Paintbrush, Share2 } from "lucide-react";
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
import HeroSlider from "@/components/HeroSlider";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-transparent text-slate-600 overflow-x-hidden flex flex-col font-sans">
      <MouseFollower />
      <Navbar isDarkHero={true} />

      {/* 1. HERO SECTION (Dark Hero Banner) */}
      <section className="relative min-h-screen flex items-center bg-slate-950 homepage-dark-hero overflow-hidden pt-28 pb-12">
        {/* Background grids & patterns */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60" />
        {/* Glow ambient background assets */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-neon-purple/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[100px] pointer-events-none" />

        <ParticleCanvas />

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <HeroSlider />
        </div>
      </section>


      {/* 3. SERVICES SECTION */}
      <section className="relative py-24 px-6 overflow-hidden" id="services">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-neon-cyan uppercase tracking-widest">Our Expertise</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mt-3 mb-4 font-display">Services That Drive Velocity</h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-medium">
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
                color: "text-purple-600 bg-purple-50 border-purple-200",
                href: "/services/paid-ads",
                image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&w=800&q=80",
              },
              {
                title: "SEO Optimization",
                desc: "Increase organic visibility, audit core web vitals, and rank #1 for high-value search queries.",
                icon: ShieldCheck,
                color: "text-violet-600 bg-violet-50 border-violet-200",
                href: "/services/seo-aeo",
                image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=800&q=80",
              },
              {
                title: "Web Development",
                desc: "High-performance websites built using React, Next.js, and modern jamstack structures.",
                icon: Sparkles,
                color: "text-indigo-600 bg-indigo-50 border-indigo-200",
                href: "/services/web-design-development",
                image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
              },
              {
                title: "Performance Marketing",
                desc: "Deploy conversion-optimized paid ad campaigns across search and social channels.",
                icon: ArrowUpRight,
                color: "text-fuchsia-600 bg-fuchsia-50 border-fuchsia-200",
                href: "/services/paid-ads",
                image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
              },
              {
                title: "Social Media Marketing",
                desc: "Deploy consistent grids, reels, video scripts, and custom brand narratives built for virality.",
                icon: Share2,
                color: "text-purple-600 bg-purple-50 border-purple-200",
                href: "/services/social-media-marketing",
                image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&w=800&q=80",
              },
              {
                title: "Graphic Design & Video Ads",
                desc: "Stunning brand designs, social media graphics, custom logo kits, and high-converting video advertisements.",
                icon: Paintbrush,
                color: "text-indigo-600 bg-indigo-50 border-indigo-200",
                href: "/services/graphic-design-video-ads",
                image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80",
              },
            ].map((service, i) => {
              return (
                <GlassCard key={i} className="hover:border-neon-purple/40 flex flex-col justify-between min-h-[380px]" hoverGlow>
                  <div className="flex flex-col gap-4">
                    <div className="relative w-full h-44 rounded-xl overflow-hidden mb-2">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">
                      <Link href={service.href} className="hover:text-neon-purple transition-colors duration-300">
                        {service.title}
                      </Link>
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed font-medium">{service.desc}</p>
                  </div>
                  <Link
                    href={service.href}
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
      <section className="relative py-20 px-6 bg-[#f8fafc] border-y border-slate-200/50">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-xs font-bold text-neon-purple uppercase tracking-widest font-sans">Why Partner With Us</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-3 mb-2 font-display">Proven Growth In Numbers</h2>
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
              <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mt-3 mb-2 font-display">Engineered Case Studies</h2>
              <p className="text-slate-500 text-sm font-medium">Review real metrics, web audits, and leads generated for our creative partners.</p>
            </div>
            <Link
              href="/portfolio"
              className="px-6 py-3 rounded-full border border-slate-200 bg-white hover:bg-slate-50 hover:text-slate-900 font-semibold text-xs uppercase tracking-wider transition-all duration-300 w-fit cursor-pointer shadow-sm text-slate-700"
            >
              See All Case Studies
            </Link>
          </div>
          <FeaturedProjects />
        </div>
      </section>

      {/* 6. PROCESS TIMELINE */}
      <section className="relative py-24 px-6 bg-[#f8fafc] border-t border-slate-200/50" id="process">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-neon-purple uppercase tracking-widest font-sans">Our Roadmap</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mt-3 mb-4 font-display">How We Scale Your Product</h2>
            <p className="text-slate-500 text-sm sm:text-base font-medium">
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
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mt-3 mb-4 font-display">Client Feedback</h2>
          </div>
          <TestimonialsCarousel />
        </div>
      </section>

      {/* 8. TECHNOLOGY STACK GRID */}
      <section className="relative py-24 px-6 border-t border-slate-200/50 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-neon-blue uppercase tracking-widest font-sans">Modern Stack</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mt-3 mb-4 font-display">Our Core Technology Grid</h2>
            <p className="text-slate-500 text-sm font-medium">We build using performant frameworks and cloud systems to guarantee server scalability.</p>
          </div>
          <TechStackGrid />
        </div>
      </section>

      {/* 9. CALL-TO-ACTION (CTA) */}
      <section className="relative py-32 px-6 overflow-hidden border-t border-slate-200/50 bg-gradient-to-br from-[#f8fafc] via-[#ffffff] to-[#f8fafc]">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        {/* Glow light */}
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[300px] rounded-full bg-radial from-neon-purple/5 to-transparent blur-[140px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />

        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center gap-8">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight font-display">
            Ready To Scale Your Business?
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl font-semibold">
            Book a free, comprehensive consultation with our engineering and growth marketing lead today. Let's design a custom roadmap to double your conversions.
          </p>
          <Link
            href="/contact"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-neon-purple to-neon-cyan text-white text-sm font-bold uppercase tracking-wider hover:opacity-90 transition-all duration-300 flex items-center gap-2 group cursor-pointer shadow-lg hover:shadow-neon-purple/20"
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
