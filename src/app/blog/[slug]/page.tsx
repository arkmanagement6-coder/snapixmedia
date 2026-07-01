"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { ArrowLeft, Calendar, Clock, Share2, Sparkles, BookOpen } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MouseFollower from "@/components/MouseFollower";
import WhatsAppChat from "@/components/WhatsAppChat";
import GlassCard from "@/components/GlassCard";
import Link from "next/link";

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  categoryLabel: string;
  desc: string;
  content: string;
  date: string;
  readTime: string;
  bgClass: string;
  images: string[];
}

const defaultArticles: BlogPost[] = [
  {
    id: "1",
    slug: "maximizing-nextjs-core-web-vitals",
    title: "Maximizing Next.js Core Web Vitals",
    category: "web",
    categoryLabel: "Web Engineering",
    desc: "A technical guide to achieving perfect Lighthouse scores using Edge components, dynamic loading, and bundle audit structures.",
    content: `<h2>Mastering Core Web Vitals in Next.js</h2><p>In modern web architectures, performance is directly linked to conversion rates and search rankings. Next.js offers elite, out-of-the-box optimization primitives, but building a fully optimized storefront requires custom configurations.</p><strong>1. Next-Gen Image Loading</strong><p>Always utilize the Next.js Image component to enable automatic WebP generation, size constraints, and priority loading for Above-the-Fold banners.</p><blockquote>Using placeholder blur effects reduces perceived load times significantly, satisfying Cumulative Layout Shift (CLS) scores.</blockquote><h2>Bundle Audits & Code Splitting</h2><p>Large JS bundles are the primary culprit behind poor Interaction to Next Paint (INP) scores. We recommend implementing dynamic imports (using React lazy or Next dynamic) for heavy third-party components like widgets and chat portals.</p>`,
    date: "Jun 08, 2026",
    readTime: "6 min read",
    bgClass: "from-blue-600/10 to-indigo-600/10 border-blue-500/10",
    images: ["https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80"],
  },
  {
    id: "2",
    slug: "saas-seo-blueprint-zero-to-100k-clicks",
    title: "SaaS SEO Blueprint: Zero to 100k Clicks",
    category: "seo",
    categoryLabel: "SEO & Search",
    desc: "How to deploy high-intent organic directories, audit duplicate content issues, and rank #1 for transactional keywords.",
    content: `<h2>Structuring a Scalable SEO Engine</h2><p>Organic visibility requires a hybrid mix of technical speed, authoritative backlinks, and structured semantic site maps. For SaaS startups, capturing high-intent search terms is the most cost-efficient route.</p><strong>1. Keyword Clustering</strong><p>Focus on clustering long-tail keywords that solve specific problems. Avoid targeting generic high-volume words early on.</p><h2>On-Page Schema Formatting</h2><p>Implement rich Schema markup (FAQ, Product, and Article schemas) to help search crawlers parse details instantly. This increases your chances of ranking in AI-generated search snapshots (AEO).</p>`,
    date: "Jun 04, 2026",
    readTime: "8 min read",
    bgClass: "from-cyan-600/10 to-blue-600/10 border-cyan-500/10",
    images: ["https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"],
  },
];

export default function BlogDetails() {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("snapixmedia_blogs");
    let blogsList: BlogPost[] = defaultArticles;
    
    if (saved) {
      blogsList = JSON.parse(saved);
    } else {
      localStorage.setItem("snapixmedia_blogs", JSON.stringify(defaultArticles));
    }

    const matched = blogsList.find((b) => b.slug === slug);
    if (matched) {
      setPost(matched);
    }
    setLoading(false);
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-4 border-neon-purple border-t-transparent rounded-full animate-spin" />
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Loading Article Details...</span>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-white p-6 text-center">
        <h2 className="text-2xl font-extrabold mb-2 font-display">Article Not Found</h2>
        <p className="text-slate-400 text-sm max-w-sm mb-8 leading-relaxed font-semibold">
          The insights article you are looking for has been deleted or has a modified URL slug.
        </p>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-neon-purple to-neon-cyan px-6 py-3 rounded-full hover:opacity-90 transition-all cursor-pointer shadow-lg"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog List
        </Link>
      </div>
    );
  }

  const primaryImage = post.images && post.images.length > 0 ? post.images[0] : "https://images.unsplash.com/photo-1542744095-291d1f67b221?auto=format&fit=crop&w=800&q=80";

  return (
    <div className="relative min-h-screen bg-transparent text-slate-700 overflow-x-hidden flex flex-col font-sans">
      <MouseFollower />
      <Navbar isDarkHero />

      {/* Hero Banner Area */}
      <section className="relative w-full min-h-[340px] sm:min-h-[420px] flex items-center justify-center bg-slate-950 overflow-hidden pt-28 page-hero-banner">
        {/* Background grids */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:30px_30px] z-10" />
        
        {/* Blur gradients */}
        <div className="absolute inset-0 bg-radial from-neon-purple/20 via-transparent to-transparent blur-[120px] pointer-events-none z-10" />

        {/* Banner image with dark overlay */}
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src={primaryImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-4xl mx-auto px-6 w-full text-center relative z-20 py-12 flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-neon-purple/20 bg-neon-purple/5 text-neon-purple text-xs font-bold tracking-widest uppercase">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{post.categoryLabel}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight font-display drop-shadow-md" style={{ color: "#ffffff" }}>
            {post.title}
          </h1>
          
          {/* Metadata */}
          <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-wider text-slate-300 mt-2">
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4 text-neon-purple" /> {post.date}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
            <span className="flex items-center gap-1"><Clock className="w-4 h-4 text-neon-cyan" /> {post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <main className="flex-1 py-12 px-6 max-w-4xl mx-auto w-full">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 hover:text-slate-900 transition-colors duration-300 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Insights
        </Link>

        {/* Article Summary Quote */}
        <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 mb-10 flex gap-4 items-start relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-radial from-neon-purple/5 to-transparent blur-2xl pointer-events-none" />
          <Sparkles className="w-5 h-5 text-neon-purple shrink-0 mt-0.5" />
          <p className="text-slate-650 text-sm sm:text-base font-semibold leading-relaxed">
            {post.desc}
          </p>
        </div>

        {/* Dynamic HTML Content Body */}
        <article 
          className="prose prose-slate max-w-none text-slate-700 text-sm sm:text-base font-semibold leading-relaxed flex flex-col gap-6 blog-html-body border-b border-slate-200/50 pb-12 mb-12"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Multiple Images Gallery Grid */}
        {post.images && post.images.length > 1 && (
          <section className="mb-12">
            <h3 className="text-lg font-bold text-slate-950 mb-6 font-display flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-neon-cyan" />
              Featured Media Gallery
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {post.images.slice(1).map((imgUrl, i) => (
                <div key={i} className="relative rounded-3xl border border-slate-200 bg-white p-2 shadow-xl shadow-slate-100/50 overflow-hidden group h-[260px]">
                  <img
                    src={imgUrl}
                    alt={`Gallery asset ${i + 1}`}
                    className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Share & Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 py-6 border-t border-slate-200/50">
          <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">
            Share this technical insight with your team.
          </span>
          <button
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              alert("Article link copied to clipboard!");
            }}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-slate-650 border border-slate-200 bg-white hover:bg-slate-50 transition-all cursor-pointer"
          >
            <Share2 className="w-4 h-4 text-neon-purple" />
            Copy Article URL
          </button>
        </div>
      </main>

      <Footer />
      <WhatsAppChat />
    </div>
  );
}
