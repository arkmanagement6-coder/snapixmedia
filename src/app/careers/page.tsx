"use client";

import { useState } from "react";
import { Briefcase, MapPin, DollarSign, Calendar, Sparkles, ShieldCheck, Heart, User, Send, CheckCircle2, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MouseFollower from "@/components/MouseFollower";
import WhatsAppChat from "@/components/WhatsAppChat";
import GlassCard from "@/components/GlassCard";
import confetti from "canvas-confetti";

const openings = [
  {
    title: "Senior React / Next.js Engineer",
    dept: "Engineering",
    location: "Remote (Global)",
    salary: "$110k - $140k",
    type: "Full-Time",
  },
  {
    title: "Growth Marketing Manager",
    dept: "Marketing",
    location: "Remote (US/EU)",
    salary: "$90k - $120k",
    type: "Full-Time",
  },
  {
    title: "Principal UI/UX Designer",
    dept: "Design",
    location: "Remote (Global)",
    salary: "$100k - $130k",
    type: "Contract or FT",
  },
  {
    title: "Technical SEO Strategist",
    dept: "SEO & Search",
    location: "Remote (Global)",
    salary: "$85k - $110k",
    type: "Full-Time",
  },
];

const benefits = [
  {
    title: "100% Remote Flexibility",
    desc: "Work from anywhere in the world. We operate asynchronously to respect focused scheduling.",
    icon: MapPin,
    color: "text-purple-400 bg-purple-950/40 border border-purple-500/10",
  },
  {
    title: "Learning Stipend",
    desc: "$2,000 yearly allocation for textbooks, conferences, cloud certifications, and hardware upgrades.",
    icon: Sparkles,
    color: "text-violet-400 bg-violet-950/40 border border-violet-500/10",
  },
  {
    title: "Health & Wellness",
    desc: "Premium medical coverage, global dental insurance, and monthly gym memberships.",
    icon: Heart,
    color: "text-indigo-400 bg-indigo-950/40 border border-indigo-500/10",
  },
  {
    title: "Equity & Shared Profit",
    desc: "Competitive employee stock options and quarterly performance profits allocations.",
    icon: ShieldCheck,
    color: "text-fuchsia-400 bg-fuchsia-950/40 border border-fuchsia-500/10",
  },
];

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", resume: "", note: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleApply = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", resume: "", note: "" });

    // Trigger celebration confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#7c3aed", "#0891b2", "#db2777"],
    });

    // Close modal after a delay
    setTimeout(() => {
      setSubmitted(false);
      setSelectedJob(null);
    }, 4000);
  };

  return (
    <div className="relative min-h-screen bg-transparent text-slate-650 overflow-x-hidden flex flex-col font-sans">
      <MouseFollower />
      <Navbar isDarkHero={true} />

      {/* Dark Hero Banner */}
      <section className="relative w-full min-h-[300px] sm:min-h-[380px] flex items-center justify-center bg-slate-950 overflow-hidden pt-28 page-hero-banner">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60" />
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-neon-purple/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 w-full text-center relative z-10 py-12 flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-slate-800 bg-slate-900/50 text-slate-300 text-xs font-bold tracking-wider uppercase backdrop-blur-sm">
            <Briefcase className="w-3.5 h-3.5 text-neon-cyan" />
            <span>Join Snapix Media</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1] max-w-4xl font-display text-white">
            Build the Future of <span className="text-gradient-purple-cyan">Web Systems</span>
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed font-medium">
            We are expanding our distributed remote panel. Look through our open roles below and help us design, build, and optimize code for scaling brands.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 border-y border-slate-200/50 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-xs font-bold text-neon-purple uppercase tracking-widest font-sans">Perks</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-3 mb-2 font-display">Why Work With Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((perk, idx) => {
              const Icon = perk.icon;
              return (
                <GlassCard key={idx} className="flex flex-col gap-4" hoverGlow>
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center border-slate-100 ${perk.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{perk.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">{perk.desc}</p>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Openings Section */}
      <section className="py-20 px-6 flex-1">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-xs font-bold text-neon-cyan uppercase tracking-widest font-sans">Active Roles</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 mb-2 font-display">Current Opportunities</h2>
          </div>

          <div className="flex flex-col gap-6">
            {openings.map((job, idx) => (
              <div
                key={idx}
                className="group p-6 rounded-2xl bg-white border border-slate-200 hover:border-neon-purple/45 hover:bg-slate-50/50 hover:shadow-[0_10px_25px_-5px_rgba(124,58,237,0.06)] transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm"
              >
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] font-bold text-neon-purple uppercase tracking-wider font-mono">
                    {job.dept}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-neon-purple transition-colors duration-300">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-xs text-slate-600 font-semibold mt-1">
                    <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-slate-400" /> {job.location}</span>
                    <span className="flex items-center gap-1"><DollarSign className="w-3.5 h-3.5 text-slate-400" /> {job.salary}</span>
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-slate-400" /> {job.type}</span>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedJob(job.title)}
                  className="px-5 py-2.5 rounded-full bg-gradient-to-r from-neon-purple to-neon-cyan text-white font-bold text-xs uppercase tracking-wider hover:opacity-90 shadow-sm transition-all cursor-pointer"
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Modal Overlay */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-fade-in font-sans">
          <div className="w-full max-w-lg rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 relative shadow-2xl">
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-4 right-4 p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-12 gap-4">
                <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-2">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Application Received!</h3>
                <p className="text-xs text-slate-655 leading-relaxed max-w-xs font-semibold">
                  Thanks for applying for the <strong className="text-slate-900">{selectedJob}</strong> position. Our engineering and recruitment panel will contact you soon.
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-6">
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900 font-display">Job Application</h3>
                  <p className="text-xs text-slate-550 mt-1 font-semibold">Applying for: <strong className="text-neon-purple">{selectedJob}</strong></p>
                </div>

                <form onSubmit={handleApply} className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-slate-500 font-bold uppercase">Full Name</label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="John Doe"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple/30 transition-all"
                      />
                      <User className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-slate-500 font-bold uppercase">Email Address</label>
                    <div className="relative">
                      <input
                        type="email"
                        placeholder="john@example.com"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple/30 transition-all"
                      />
                      <Send className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-slate-550 font-bold uppercase">Resume Link / URL</label>
                    <input
                      type="url"
                      placeholder="https://dropbox.com/my-resume.pdf"
                      required
                      value={formData.resume}
                      onChange={(e) => setFormData({ ...formData, resume: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple/30 transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-slate-550 font-bold uppercase">Cover Letter / Notes (Optional)</label>
                    <textarea
                      placeholder="Tell us about your architectural experiences or growth wins..."
                      rows={3}
                      value={formData.note}
                      onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple/30 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full mt-4 py-3 px-6 rounded-xl bg-gradient-to-r from-neon-purple to-neon-cyan text-white text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                  >
                    {loading ? "Submitting Application..." : "Submit Application"}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      <Footer />
      <WhatsAppChat />
    </div>
  );
}
