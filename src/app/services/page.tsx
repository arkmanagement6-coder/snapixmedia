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
    color: "from-amber-400/20 to-orange-500/20 text-amber-400 border-amber-400/20",
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
    color: "from-cyan-400/20 to-blue-500/20 text-cyan-400 border-cyan-400/20",
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
    color: "from-purple-400/20 to-indigo-500/20 text-purple-400 border-purple-400/20",
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
    color: "from-pink-400/20 to-neon-magenta/20 text-pink-400 border-pink-400/20",
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
    <div className="relative min-h-screen bg-[#030014] text-[#ededed] overflow-x-hidden flex flex-col font-sans">
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
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6 font-display">
            Innovative Digital Offerings{" "}
            <span className="text-gradient-purple-cyan">Built For Growth</span>
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
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
                      <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center bg-glass-card ${cat.color.split(" ")[2]}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-bold font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white uppercase tracking-wider">
                        {cat.metric}
                      </span>
                    </div>

                    <div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 font-display">{cat.title}</h2>
                      <p className="text-sm text-gray-400 leading-relaxed">{cat.desc}</p>
                    </div>

                    <Link
                      href="/contact"
                      className="mt-4 px-6 py-3 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-gray-200 transition-colors w-fit flex items-center gap-1.5"
                    >
                      Request Free Audit
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </GlassCard>
                </div>

                {/* Sub-services list */}
                <div className="w-full lg:w-1/2 flex flex-col gap-6 justify-center">
                  <h3 className="text-lg font-bold text-white uppercase tracking-wider border-b border-glass-border pb-3">
                    Sub-Domain Capabilities
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {cat.services.map((sub, j) => (
                      <div key={j} className="flex items-start gap-3 p-3 rounded-xl bg-glass-card/40 border border-glass-border hover:border-white/5 transition-colors duration-300">
                        <CheckCircle2 className="w-4 h-4 text-neon-cyan mt-0.5 shrink-0" />
                        <span className="text-sm text-gray-300 font-medium">{sub}</span>
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
