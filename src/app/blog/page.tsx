"use client";

import { useState } from "react";
import { Search, Calendar, Clock, ArrowRight, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MouseFollower from "@/components/MouseFollower";
import WhatsAppChat from "@/components/WhatsAppChat";
import GlassCard from "@/components/GlassCard";

const categories = [
  { name: "All Articles", value: "all" },
  { name: "SEO & Search", value: "seo" },
  { name: "Growth Marketing", value: "marketing" },
  { name: "Web Engineering", value: "web" },
  { name: "Artificial Intelligence", value: "ai" },
];

const articles = [
  {
    title: "Maximizing Next.js Core Web Vitals",
    category: "web",
    categoryLabel: "Web Engineering",
    desc: "A technical guide to achieving perfect Lighthouse scores using Edge components, dynamic loading, and bundle audit structures.",
    date: "Jun 08, 2026",
    readTime: "6 min read",
    bgClass: "from-blue-600/10 to-indigo-600/10 border-blue-500/10",
  },
  {
    title: "SaaS SEO Blueprint: Zero to 100k Clicks",
    category: "seo",
    categoryLabel: "SEO & Search",
    desc: "How to deploy high-intent organic directories, audit duplicate content issues, and rank #1 for transactional keywords.",
    date: "Jun 04, 2026",
    readTime: "8 min read",
    bgClass: "from-cyan-600/10 to-blue-600/10 border-cyan-500/10",
  },
  {
    title: "AI Agents in Enterprise Workflows",
    category: "ai",
    categoryLabel: "Artificial Intelligence",
    desc: "Analyzing how autonomous LLM agents are redefining data pipelines, CRM entries, and accelerating software developer speeds.",
    date: "May 28, 2026",
    readTime: "5 min read",
    bgClass: "from-purple-600/10 to-pink-600/10 border-purple-500/10",
  },
  {
    title: "Paid Retargeting: Meta Ads vs Google PPC",
    category: "marketing",
    categoryLabel: "Growth Marketing",
    desc: "Optimizing audience exclusion rules and campaign bidding strategies to reduce acquisition costs by 30%.",
    date: "May 22, 2026",
    readTime: "7 min read",
    bgClass: "from-pink-600/10 to-orange-600/10 border-pink-500/10",
  },
];

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredArticles = articles.filter((post) => {
    const matchesCategory =
      activeCategory === "all" || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="relative min-h-screen bg-[#f8fafc] text-[#334155] overflow-x-hidden flex flex-col font-sans">
      <MouseFollower />
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-36 pb-16 px-6 glow-grid">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-radial from-neon-purple/5 to-transparent blur-[80px] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-neon-cyan/20 bg-neon-cyan/5 text-neon-cyan text-xs font-bold tracking-wider mb-6 uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Snapix Media Insights</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6 font-display">
            Engineering & Marketing{" "}
            <span className="text-gradient-purple-cyan">Insights</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            Technical tutorials, marketing breakdowns, and strategic industry findings curated by our core expert panel.
          </p>
        </div>
      </section>

      {/* Search & Categories Bar */}
      <section className="py-6 px-6 border-y border-glass-border bg-slate-50/50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6 items-center justify-between">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2.5 justify-center md:justify-start">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase border transition-all duration-300 cursor-pointer ${
                  activeCategory === cat.value
                    ? "bg-gradient-to-r from-neon-blue to-neon-purple text-white border-transparent shadow-sm"
                    : "bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-full text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple/30 transition-all"
            />
            <Search className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
          </div>
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="py-16 px-6 flex-1">
        <div className="max-w-6xl mx-auto">
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredArticles.map((post, idx) => (
                <GlassCard
                  key={idx}
                  className={`flex flex-col justify-between h-[280px] border-slate-200/80 hover:border-neon-purple/45 bg-gradient-to-br ${post.bgClass} relative group`}
                  hoverGlow
                >
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between text-[10px] font-bold text-neon-purple uppercase tracking-wider">
                      <span>{post.categoryLabel}</span>
                      <div className="flex items-center gap-2 text-slate-450">
                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-neon-purple transition-colors duration-300 leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-xs text-slate-650 leading-relaxed line-clamp-3 font-medium">{post.desc}</p>
                  </div>

                  <div className="flex justify-end mt-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 group-hover:text-slate-900 flex items-center gap-1 cursor-pointer">
                      Read Article
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </GlassCard>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 border border-dashed border-slate-250 rounded-3xl bg-white max-w-xl mx-auto">
              <p className="text-slate-500 text-sm font-semibold">No articles found matching search query.</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("all");
                }}
                className="mt-4 text-xs font-semibold text-neon-purple hover:underline cursor-pointer"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
      <WhatsAppChat />
    </div>
  );
}
