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
    color: "text-cyan-600 bg-cyan-50",
  },
  {
    title: "Learning Stipend",
    desc: "$2,000 yearly allocation for textbooks, conferences, cloud certifications, and hardware upgrades.",
    icon: Sparkles,
    color: "text-purple-600 bg-purple-50",
  },
  {
    title: "Health & Wellness",
    desc: "Premium medical coverage, global dental insurance, and monthly gym memberships.",
    icon: Heart,
    color: "text-pink-600 bg-pink-50",
  },
  {
    title: "Equity & Shared Profit",
    desc: "Competitive employee stock options and quarterly performance profits allocations.",
    icon: ShieldCheck,
    color: "text-emerald-600 bg-emerald-50",
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
      colors: ["#4f46e5", "#0891b2", "#db2777"],
    });

    // Close modal after a delay
    setTimeout(() => {
      setSubmitted(false);
      setSelectedJob(null);
    }, 4000);
  };

  return (
    <div className="relative min-h-screen bg-[#f8fafc] text-[#334155] overflow-x-hidden flex flex-col font-sans">
      <MouseFollower />
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-36 pb-16 px-6 glow-grid">
        <div className="absolute top-1/4 left-1/2 w-[400px] h-[300px] bg-radial from-neon-cyan/5 to-transparent blur-[80px] pointer-events-none -translate-x-1/2" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-neon-cyan/20 bg-neon-cyan/5 text-neon-cyan text-xs font-bold tracking-wider mb-6 uppercase">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Join Snapix Media</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6 font-display">
            Build the Future of{" "}
            <span className="text-gradient-purple-cyan">Web Systems</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            We are expanding our distributed remote panel. Look through our open roles below and help us design, build, and optimize code for scaling brands.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 border-y border-glass-border bg-slate-50/50">
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
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center border-slate-200 ${perk.color}`}>
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
                className="group p-6 rounded-2xl bg-white border border-slate-200 hover:border-neon-cyan/40 hover:bg-slate-50/50 transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs"
              >
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] font-bold text-neon-cyan uppercase tracking-wider font-mono">
                    {job.dept}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-neon-cyan transition-colors duration-300">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-xs text-slate-550 font-semibold mt-1">
                    <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-slate-400" /> {job.location}</span>
                    <span className="flex items-center gap-1"><DollarSign className="w-3.5 h-3.5 text-slate-400" /> {job.salary}</span>
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-slate-400" /> {job.type}</span>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedJob(job.title)}
                  className="px-5 py-2.5 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple text-white font-bold text-xs uppercase tracking-wider hover:opacity-90 shadow-sm transition-all cursor-pointer"
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fade-in font-sans">
          <div className="w-full max-w-lg rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 relative shadow-2xl">
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-12 gap-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 mb-2">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Application Received!</h3>
                <p className="text-xs text-slate-600 leading-relaxed max-w-xs font-semibold">
                  Thanks for applying for the <strong className="text-slate-800">{selectedJob}</strong> position. Our engineering and recruitment panel will contact you soon.
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-6">
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900 font-display">Job Application</h3>
                  <p className="text-xs text-slate-500 mt-1 font-semibold">Applying for: <strong className="text-neon-cyan">{selectedJob}</strong></p>
                </div>

                <form onSubmit={handleApply} className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-slate-600 font-bold uppercase">Full Name</label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="John Doe"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-neon-blue"
                      />
                      <User className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-450" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-slate-600 font-bold uppercase">Email Address</label>
                    <div className="relative">
                      <input
                        type="email"
                        placeholder="john@example.com"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-neon-blue"
                      />
                      <Send className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-450" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-slate-600 font-bold uppercase">Resume Link / URL</label>
                    <input
                      type="url"
                      placeholder="https://dropbox.com/my-resume.pdf"
                      required
                      value={formData.resume}
                      onChange={(e) => setFormData({ ...formData, resume: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-neon-blue"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-slate-600 font-bold uppercase">Cover Letter / Notes (Optional)</label>
                    <textarea
                      placeholder="Tell us about your architectural experiences or growth wins..."
                      rows={3}
                      value={formData.note}
                      onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-neon-blue resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full mt-4 py-3 px-6 rounded-xl bg-gradient-to-r from-neon-blue to-neon-purple text-white text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
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
