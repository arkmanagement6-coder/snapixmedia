import { CheckCircle2, TrendingUp, Monitor, Search, Sparkles, Target, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MouseFollower from "@/components/MouseFollower";
import WhatsAppChat from "@/components/WhatsAppChat";
import GlassCard from "@/components/GlassCard";
import Link from "next/link";

const serviceCategories = [
  {
    id: "marketing",
    title: "Digital Marketing",
    desc: "Scale your customer acquisition and build brand equity with precise multi-channel campaigns.",
    metric: "+320% Average ROI",
    icon: Target,
    color: "from-purple-500/10 to-indigo-600/10 text-purple-700 border-purple-500/20",
    services: [
      "Social Media Marketing",
      "Meta Ads Management",
      "Google Ads (PPC) campaigns",
      "YouTube Marketing",
      "Content Strategy",
      "Influencer Partnerships",
    ],
  },
  {
    id: "seo",
    title: "SEO Optimization",
    desc: "Boost your search engine keyword visibility and accelerate high-intent organic user visits.",
    metric: "10x Traffic Growth",
    icon: Search,
    color: "from-violet-500/10 to-fuchsia-600/10 text-violet-750 border-violet-500/20",
    services: [
      "Local Search Optimization",
      "Technical Page Audits",
      "E-commerce SEO blueprints",
      "On-Page Content Architecture",
      "Off-Page Domain Authority",
      "High-Quality Link Acquisition",
    ],
  },
  {
    id: "web",
    title: "Web Development",
    desc: "Deploy lightning-fast, production-ready systems and web applications engineered to scale.",
    metric: "100/100 Lighthouse Speed",
    icon: Monitor,
    color: "from-indigo-500/10 to-purple-600/10 text-indigo-700 border-indigo-500/20",
    services: [
      "Headless E-commerce Stores",
      "Enterprise Custom Web Apps",
      "B2B SaaS Portals",
      "Corporate Landing Pages",
      "Tailored CRM Integrations",
      "Custom ERP Systems",
    ],
  },
  {
    id: "design",
    title: "UI/UX Architecture",
    desc: "Craft visual designs that communicate premium brand values and optimize conversions.",
    metric: "+35% Conversion Jump",
    icon: Sparkles,
    color: "from-fuchsia-500/10 to-pink-600/10 text-fuchsia-700 border-fuchsia-500/20",
    services: [
      "Interactive Wireframing",
      "High-Fidelity Prototyping",
      "User Behavior Research",
      "Complex Dashboard Interfaces",
      "Responsive Mobile Layouts",
      "Interactive Graphic Kits",
    ],
  },
];

export default function Services() {
  return (
    <div className="relative min-h-screen bg-[#f8fafc] text-[#334155] overflow-x-hidden flex flex-col font-sans">
      <MouseFollower />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-20 px-6 glow-grid">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-radial from-neon-cyan/5 to-transparent blur-[80px] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-neon-cyan/20 bg-neon-cyan/5 text-neon-cyan text-xs font-bold tracking-wider mb-6 uppercase">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Scale Velocity</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6 font-display">
            Innovative Digital Offerings{" "}
            <span className="text-gradient-purple-cyan">Built For Growth</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            We deliver enterprise-level web engineering, pixel-perfect user experiences, and strategic growth campaigns that maximize customer lifecycle value.
          </p>
        </div>
      </section>

      {/* Detailed Services Grid */}
      <section className="py-16 px-6 border-t border-glass-border">
        <div className="max-w-6xl mx-auto flex flex-col gap-24">
          {serviceCategories.map((cat, i) => {
            const Icon = cat.icon;
            const isEven = i % 2 === 0;

            return (
              <div
                key={cat.id}
                id={cat.id}
                className={`flex flex-col lg:flex-row gap-12 items-start ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Visual Card detailing category */}
                <div className="w-full lg:w-1/2">
                  <GlassCard
                    className="p-8 md:p-10 flex flex-col gap-6 h-full min-h-[320px] bg-gradient-to-br border-glass-border/40 hover:border-glass-border/80"
                    hoverGlow
                  >
                    <div className="flex justify-between items-start">
                      <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center bg-slate-50 ${cat.color.split(" ")[2]}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-bold font-mono px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 uppercase tracking-wider">
                        {cat.metric}
                      </span>
                    </div>

                    <div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3 font-display">{cat.title}</h2>
                      <p className="text-sm text-slate-600 leading-relaxed font-medium">{cat.desc}</p>
                    </div>

                    <Link
                      href="/contact"
                      className="mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple text-white font-semibold text-xs uppercase tracking-wider hover:opacity-90 shadow-sm transition-all duration-300 w-fit flex items-center gap-1.5 cursor-pointer"
                    >
                      Request Free Audit
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </GlassCard>
                </div>

                {/* Sub-services list */}
                <div className="w-full lg:w-1/2 flex flex-col gap-6 justify-center">
                  <h3 className="text-lg font-bold text-slate-900 uppercase tracking-wider border-b border-glass-border pb-3 font-display">
                    Sub-Domain Capabilities
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {cat.services.map((sub, j) => (
                      <div key={j} className="flex items-start gap-3 p-3 rounded-xl bg-white border border-slate-200/60 hover:border-neon-purple/35 transition-colors duration-300">
                        <CheckCircle2 className="w-4 h-4 text-neon-purple mt-0.5 shrink-0" />
                        <span className="text-sm text-slate-700 font-semibold">{sub}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
      <WhatsAppChat />
    </div>
  );
}
