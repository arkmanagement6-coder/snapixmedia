"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import GlassCard from "./GlassCard";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Zenith Ads Campaign",
    industry: "Digital Marketing",
    tech: ["Google Ads", "Meta Ads", "A/B Testing", "Audience Modeling"],
    slug: "zenith-ads",
    metrics: "+350% Leads",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    desc: "We engineered a data-driven PPC and social retargeting funnel for Zenith, slashing customer acquisition cost (CAC) by 45% while accelerating monthly quality leads by 3.5x.",
  },
  {
    title: "Aura Social Branding",
    industry: "Social Media Marketing",
    tech: ["Instagram & Reels", "Influencer Marketing", "Grid Branding", "Community Growth"],
    slug: "aura-social",
    metrics: "+5.8M Views",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80",
    desc: "Deployed a viral reels strategy combined with curated creator collaborations to establish Aura as a category leader, gaining 5.8M organic views and 22% social engagement boost.",
  },
  {
    title: "Stellar Search Growth",
    industry: "SEO & Organic Growth",
    tech: ["Semantic Search (AEO)", "Technical Audits", "Schema Markup", "Content Architecture"],
    slug: "stellar-seo",
    metrics: "10x Traffic",
    image: "https://images.unsplash.com/photo-1542744095-291d1f67b221?auto=format&fit=crop&w=800&q=80",
    desc: "Re-architected Stellar's index optimization, structured schemas for LLM search agents (AEO), and published localized content hubs to secure 10x organic growth and forty-five #1 rankings.",
  },
];

export default function FeaturedProjects() {
  return (
    <div className="flex flex-col gap-12 max-w-7xl mx-auto w-full px-4">
      {projects.map((project, i) => {
        const isEven = i % 2 === 0;
        return (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 rounded-3xl border border-slate-200 bg-white/70 backdrop-blur-md p-6 sm:p-8 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 group ${
              isEven ? "" : "lg:flex-row-reverse"
            }`}
          >
            {/* Visual Real Image on one side */}
            <div className="w-full lg:w-1/2 h-[280px] rounded-2xl border border-slate-200/30 relative overflow-hidden shadow-inner bg-slate-100">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Content details on the other side */}
            <div className="w-full lg:w-1/2 flex flex-col gap-4 justify-center">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-wider text-neon-purple bg-purple-50 px-3 py-1 rounded-full border border-purple-100">{project.industry}</span>
                <span className="text-xs font-bold font-mono px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100">
                  {project.metrics}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 group-hover:text-neon-purple transition-colors duration-300 font-display tracking-tight">
                {project.title}
              </h3>

              <p className="text-sm text-slate-500 leading-relaxed font-semibold">
                {project.desc}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mt-1">
                {project.tech.map((t) => (
                  <span key={t} className="text-[10px] text-slate-655 font-extrabold px-3 py-1 rounded-lg border border-slate-200 bg-slate-50 shadow-xs">
                    {t}
                  </span>
                ))}
              </div>

              {/* CTA link */}
              <div className="pt-4 border-t border-slate-100 mt-2">
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-neon-purple group-hover:text-purple-800 transition-colors duration-300 w-fit"
                >
                  Explore Case Study
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
