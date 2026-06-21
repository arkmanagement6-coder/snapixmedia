import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Cpu, BarChart3, HelpCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MouseFollower from "@/components/MouseFollower";
import WhatsAppChat from "@/components/WhatsAppChat";
import GlassCard from "@/components/GlassCard";

interface CaseStudyData {
  title: string;
  industry: string;
  desc: string;
  challenge: string;
  solution: string;
  tech: string[];
  metrics: { label: string; val: string }[];
  clientQuote: string;
  clientAuthor: string;
  clientRole: string;
}

const studies: Record<string, CaseStudyData> = {
  "apex-analytics": {
    title: "Apex Analytics Dashboard",
    industry: "SaaS Enterprise",
    desc: "Re-engineering a legacy B2B data monitoring tool into an ultra-fast Next.js dashboard.",
    challenge: "Apex Analytics struggled with low page speeds (average load of 8.4s), heavy client bundles, and SQL database bottlenecks during peaks. This caused a 15% user dropoff rate and negative feedback from enterprise teams.",
    solution: "We re-architected the app using Next.js Server Components, optimizing static layouts, and indexing their PostgreSQL database. We wrapped visual analytics in lightweight charts, cutting client bundles by 70%.",
    tech: ["Next.js", "React", "TypeScript", "PostgreSQL", "TailwindCSS", "Prisma"],
    metrics: [
      { label: "Page Load Speed", val: "1.4s (80% drop)" },
      { label: "User Retention", val: "+22% Growth" },
      { label: "System API Lag", val: "<50ms Average" },
      { label: "Revenue Accelerated", val: "+320% MoM" },
    ],
    clientQuote: "Snapix Media delivered a custom React layout that exceeds FAANG speed standards. The new system is clean, secure, and has completely halted our user churn issues.",
    clientAuthor: "Sarah Jenkins",
    clientRole: "VP of Engineering, Apex Analytics",
  },
  "velo-headless": {
    title: "Velo Headless Commerce",
    industry: "E-Commerce",
    desc: "Deploying a highly optimized, API-driven Shopify storefront that converts mobile visitors.",
    challenge: "Velo Commerce suffered from low checkout rates on mobile, a consequence of slow liquid page generation, high layout shift, and rigid CMS templates that restricted marketing experiments.",
    solution: "We engineered a Headless Shopify platform using Next.js App Router and Shopify's Storefront GraphQL API. By pre-rendering product catalogs, implementing global edge caching, and designing a unified cart checkout process, we eliminated layout latency.",
    tech: ["Shopify Headless", "GraphQL", "Next.js", "TailwindCSS", "Node.js"],
    metrics: [
      { label: "Conversion Rate", val: "4.8% (+34% jump)" },
      { label: "First Content Paint", val: "0.8s" },
      { label: "Average Order Value", val: "+45% Growth" },
      { label: "API Query Load", val: "100% Capped" },
    ],
    clientQuote: "Our headless catalog loads instantly. The checkout dropoff has plummeted, and our marketing team can spin up landing pages in minutes rather than weeks.",
    clientAuthor: "Elena Rostova",
    clientRole: "Founder, Velo Commerce",
  },
  "aura-seo": {
    title: "Aura Global Campaign",
    industry: "SEO & Growth",
    desc: "Deploying high-intent organic technical audits and paid search retargeting funnels.",
    challenge: "Aura was spending heavily on pay-per-click ads with high Cost Per Acquisition ($65) and zero organic search ranks for major industry search terms, restricting sustainable growth.",
    solution: "We audited and restructured their site indexing, repaired technical layout shifts, and deployed high-intent content hubs. We combined this with precision-targeted retargeting funnels on Meta & Google.",
    tech: ["Technical SEO", "Google Ads", "Meta Ads", "A/B Testing", "Content Hubs"],
    metrics: [
      { label: "Organic Clicks", val: "4.2x Scaled" },
      { label: "Acquisition Cost", val: "-35% Lower" },
      { label: "Monthly Leads", val: "+420% Growth" },
      { label: "First-Page Keywords", val: "45 Primary" },
    ],
    clientQuote: "Their SEO methodology and organic roadmap are unmatched. They are highly transparent, metric-driven, and helped us slash our advertising cost per acquisition.",
    clientAuthor: "Marcus Vance",
    clientRole: "Head of Growth, Aura Global",
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function CaseStudy({ params }: PageProps) {
  const resolvedParams = await params;
  const study = studies[resolvedParams.slug];

  if (!study) {
    notFound();
  }

  return (
    <div className="relative min-h-screen bg-[#f8fafc] text-[#334155] overflow-x-hidden flex flex-col font-sans">
      <MouseFollower />
      <Navbar />

      <main className="flex-1 pt-32 pb-20 px-6 max-w-5xl mx-auto w-full">
        {/* Back Link */}
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 hover:text-slate-900 transition-colors duration-300 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Link>

        {/* Title Header */}
        <div className="flex flex-col gap-4 border-b border-slate-200/60 pb-8 mb-10">
          <span className="text-xs font-bold text-neon-purple uppercase tracking-widest">{study.industry}</span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight font-display">
            {study.title}
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl font-medium">{study.desc}</p>
        </div>

        {/* Challenge & Solution Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <GlassCard className="flex flex-col gap-4 hover:border-neon-purple/30" hoverGlow>
            <div className="flex items-center gap-2 text-neon-purple">
              <HelpCircle className="w-5 h-5" />
              <h3 className="text-lg font-bold text-slate-900 uppercase tracking-wider font-display">The Challenge</h3>
            </div>
            <p className="text-sm text-slate-650 leading-relaxed font-medium">{study.challenge}</p>
          </GlassCard>

          <GlassCard className="flex flex-col gap-4 hover:border-neon-purple/30" hoverGlow>
            <div className="flex items-center gap-2 text-neon-blue">
              <CheckCircle2 className="w-5 h-5" />
              <h3 className="text-lg font-bold text-slate-900 uppercase tracking-wider font-display">The Solution</h3>
            </div>
            <p className="text-sm text-slate-650 leading-relaxed font-medium">{study.solution}</p>
          </GlassCard>
        </div>

        {/* Tech Used & Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Tech Stack List */}
          <GlassCard className="flex flex-col gap-5 md:col-span-1" hoverGlow>
            <div className="flex items-center gap-2 text-neon-purple">
              <Cpu className="w-5 h-5" />
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider font-display">Technology Stack</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {study.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs text-slate-750 font-bold px-3 py-1.5 rounded-lg border border-slate-200 bg-white"
                >
                  {t}
                </span>
              ))}
            </div>
          </GlassCard>

          {/* Results Grid */}
          <GlassCard className="flex flex-col gap-6 md:col-span-2" hoverGlow>
            <div className="flex items-center gap-2 text-neon-purple">
              <BarChart3 className="w-5 h-5" />
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider font-display">Key Metrics Delivered</h3>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {study.metrics.map((m, idx) => (
                <div key={idx} className="border-l border-neon-purple/30 pl-4 py-1">
                  <span className="text-[10px] text-slate-450 uppercase font-semibold">{m.label}</span>
                  <p className="text-lg sm:text-xl font-bold text-slate-900 mt-0.5">{m.val}</p>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* Client Testimonial Banner */}
        <GlassCard className="p-8 md:p-10 relative overflow-hidden bg-white rounded-3xl" hoverGlow>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-semibold italic mb-6">
            "{study.clientQuote}"
          </p>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-neon-purple flex items-center justify-center font-bold text-white text-xs shadow-md">
              {study.clientAuthor.split(" ").map(w => w[0]).join("")}
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">{study.clientAuthor}</h4>
              <p className="text-xs text-slate-500 font-medium">{study.clientRole}</p>
            </div>
          </div>
        </GlassCard>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple text-white font-bold text-xs uppercase tracking-widest hover:opacity-90 shadow-md transition-all duration-300 cursor-pointer"
          >
            Start Your Own Project
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </main>

      <Footer />
      <WhatsAppChat />
    </div>
  );
}
