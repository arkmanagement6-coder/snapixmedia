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
  banner: string;
}

const studies: Record<string, CaseStudyData> = {
  "zenith-ads": {
    title: "Zenith Ads Campaign Optimization",
    industry: "Digital Marketing",
    desc: "Scaling high-intent lead generation and optimizing PPC return on ad spend (ROAS) across search and social channels.",
    challenge: "Zenith's advertising campaigns suffered from low conversion rates, misaligned target demographics, and a high Cost Per Acquisition ($78) that limited their marketing ROI.",
    solution: "We deployed target audience segmentation, restructured their Google search ad bidding strategies, and designed customized landing pages. Combined with Facebook/Meta retargeting ad funnels, we optimized budget distribution.",
    tech: ["Google Ads", "Meta Ads Manager", "A/B Testing", "Conversion API", "Lookalike Audiences"],
    metrics: [
      { label: "Lead Growth", val: "+350% Increase" },
      { label: "Acquisition Cost", val: "45% Reduction" },
      { label: "Return on Ad Spend", val: "5.4x Average ROAS" },
      { label: "Conversion Rate", val: "6.8% (Scale Jump)" },
    ],
    clientQuote: "Snapix Media completely changed how we do performance marketing. Their analytical approach and audience modeling tripled our leads while cutting our ad spend waste.",
    clientAuthor: "Rohan Khanna",
    clientRole: "Head of Marketing, Zenith Group",
    banner: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  },
  "aura-social": {
    title: "Aura Social Branding & Engagement",
    industry: "Social Media Marketing",
    desc: "Designing viral grid narratives, high-impact reels content, and strategic influencer collaborations to engage younger demographics.",
    challenge: "Aura had a static social media presence with low engagement metrics (<1%), minimal reel impressions, and lack of brand identity consistency across Instagram, TikTok, and YouTube.",
    solution: "We developed a 3-month viral content strategy, produced custom high-production Reels and YouTube Shorts scripts, and matched them with targeted nano-influencers. We also standardized their brand grid aesthetic.",
    tech: ["Content Production", "Reels & Shorts Strategy", "Influencer Campaign", "Social Brand Kit", "Community Auditing"],
    metrics: [
      { label: "Total Views", val: "5.8M+ Organic Views" },
      { label: "Engagement Boost", val: "+22% Social Lift" },
      { label: "Follower Base", val: "+85k Growth" },
      { label: "Direct Brand DM Leads", val: "+140% Increase" },
    ],
    clientQuote: "Their social strategy is incredibly creative. They didn't just post content; they built a community. Our brand is now highly recognized on Instagram and TikTok.",
    clientAuthor: "Priya Sharma",
    clientRole: "Creative Director, Aura Lifestyle",
    banner: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=1200&q=80",
  },
  "stellar-seo": {
    title: "Stellar Search Visibility & Rankings",
    industry: "SEO & Organic Growth",
    desc: "Structuring schema architectures for generative search visibility (AEO), repairing keyword ranks, and developing content hubs.",
    challenge: "Stellar lacked organic visibility, ranking on the 3rd or 4th page for their core services keywords, which made them entirely dependent on expensive paid advertising.",
    solution: "We optimized their page schema structures for search engine crawlers and LLM search agents, fixed technical SEO issues (Core Web Vitals, redirects), and launched high-authority content hubs.",
    tech: ["Semantic Search (AEO)", "Technical Audits", "Schema JSON-LD", "Content Architecture", "Link Acquisition"],
    metrics: [
      { label: "Organic Search Traffic", val: "10x Growth" },
      { label: "Keywords on Page 1", val: "45 Primary Terms" },
      { label: "Core Web Vitals Score", val: "98/100 Mobile" },
      { label: "Domain Authority", val: "From 12 to 38 DA" },
    ],
    clientQuote: "Our organic traffic has exploded. We are now ranking #1 for keywords we used to pay $10 a click for. Snapix Media has been an invaluable asset to our growth.",
    clientAuthor: "Alan Peterson",
    clientRole: "Founder & CEO, Stellar Corp",
    banner: "https://images.unsplash.com/photo-1542744095-291d1f67b221?auto=format&fit=crop&w=1200&q=80",
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

        {/* Banner image */}
        <div className="w-full h-[240px] sm:h-[380px] rounded-3xl overflow-hidden border border-slate-200 shadow-md mb-10 bg-slate-100 relative">
          <img
            src={study.banner}
            alt={study.title}
            className="w-full h-full object-cover"
          />
        </div>

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
