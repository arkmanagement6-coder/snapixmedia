"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle, Calendar, Clock, CheckCircle2, User, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MouseFollower from "@/components/MouseFollower";
import WhatsAppChat from "@/components/WhatsAppChat";
import GlassCard from "@/components/GlassCard";
import confetti from "canvas-confetti";

const timeSlots = ["10:00 AM", "11:30 AM", "2:00 PM", "3:30 PM", "5:00 PM"];
const days = [
  { label: "Mon", date: "15" },
  { label: "Tue", date: "16" },
  { label: "Wed", date: "17" },
  { label: "Thu", date: "18" },
  { label: "Fri", date: "19" },
];

export default function Contact() {
  // Contact Form State
  const [formData, setFormData] = useState({ name: "", email: "", service: "web", budget: "$10k-$25k", message: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formLoading, setFormLoading] = useState(false);

  // Scheduler State
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [schedulerSubmitted, setSchedulerSubmitted] = useState(false);
  const [schedulerLoading, setSchedulerLoading] = useState(false);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setFormLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setFormLoading(false);
    setFormSubmitted(true);
    setFormData({ name: "", email: "", service: "web", budget: "$10k-$25k", message: "" });

    // Trigger celebration confetti
    confetti({
      particleCount: 100,
      spread: 60,
      origin: { y: 0.6 },
      colors: ["#4f46e5", "#0891b2", "#db2777"],
    });

    // Reset status after a few seconds
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDay || !selectedSlot) return;

    setSchedulerLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setSchedulerLoading(false);
    setSchedulerSubmitted(true);

    confetti({
      particleCount: 70,
      spread: 50,
      origin: { y: 0.8 },
      colors: ["#0891b2", "#2563eb", "#4f46e5"],
    });

    setTimeout(() => {
      setSchedulerSubmitted(false);
      setSelectedDay(null);
      setSelectedSlot(null);
    }, 5000);
  };

  const handleWhatsAppRedirect = () => {
    const phoneNumber = "919675818088";
    const text = encodeURIComponent("Hi! I'd like to book a quick consultation call to talk about my project requirements.");
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
  };

  return (
    <div className="relative min-h-screen bg-[#f8fafc] text-[#334155] overflow-x-hidden flex flex-col font-sans">
      <MouseFollower />
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-36 pb-12 px-6 glow-grid">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[300px] bg-radial from-neon-purple/5 to-transparent blur-[80px] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-neon-cyan/20 bg-neon-cyan/5 text-neon-cyan text-xs font-bold tracking-wider mb-6 uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6 font-display">
            Let's Engineer Your{" "}
            <span className="text-gradient-purple-cyan">Growth Pipeline</span>
          </h1>
          <p className="text-slate-650 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            Have a project or campaign requirements? Connect directly with our leads via our booking scheduler, submit the contact form, or text us on WhatsApp.
          </p>
        </div>
      </section>

      {/* Grid Layout containing Contact Form + Scheduler */}
      <section className="py-12 px-6 border-t border-glass-border">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact info & map */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              <h2 className="text-2xl font-extrabold text-slate-900 font-display">Contact Information</h2>
              <p className="text-sm text-slate-600 leading-relaxed font-medium">
                Connect using our channels or check our global offices coordinate markers.
              </p>
            </div>

            {/* Info grid */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-neon-cyan/5 border border-neon-cyan/15 flex items-center justify-center text-neon-cyan">
                  <Mail className="w-4.5 h-4.5" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-semibold">Write to us</span>
                  <a href="mailto:snapixmediaofficial@gmail.com" className="block text-sm text-slate-700 hover:text-slate-900 font-bold mt-0.5">
                    snapixmediaofficial@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-neon-blue/5 border border-neon-blue/15 flex items-center justify-center text-neon-blue">
                  <Phone className="w-4.5 h-4.5" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-semibold">Call support</span>
                  <a href="tel:+919675818088" className="block text-sm text-slate-700 hover:text-slate-900 font-bold mt-0.5">
                    +91 9675818088
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-neon-purple/5 border border-neon-purple/15 flex items-center justify-center text-neon-purple">
                  <MapPin className="w-4.5 h-4.5" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-semibold">Our Office</span>
                  <p className="text-sm text-slate-750 font-bold leading-relaxed mt-0.5">
                    17 Kamla Kunj Kamla Nagar Tej Nagar Agra 282005
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA Call */}
            <GlassCard className="flex flex-col gap-4 border-emerald-500/10 hover:border-emerald-500/20 bg-white" hoverGlow>
              <div className="flex items-center gap-3">
                <MessageCircle className="w-6 h-6 text-emerald-600" />
                <h3 className="text-base font-bold text-slate-900">Direct WhatsApp Text</h3>
              </div>
              <p className="text-xs text-slate-650 leading-relaxed font-medium">
                Prefer real-time messaging? Skip the email queue and connect directly with our engineering triage representative on WhatsApp.
              </p>
              <button
                onClick={handleWhatsAppRedirect}
                className="w-full py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                Send WhatsApp Message
              </button>
            </GlassCard>

            {/* Elegant Mock Map Vector Card */}
            <div className="rounded-3xl border border-slate-200 bg-slate-50 h-44 overflow-hidden relative group">
              <div className="absolute inset-0 bg-slate-100 opacity-90" />
              <div className="absolute inset-0 glow-grid opacity-30 group-hover:scale-105 transition-transform duration-500" />
              {/* Radial gradient representing a mock radar glow */}
              <div className="absolute top-1/2 left-1/3 w-32 h-32 rounded-full bg-radial from-neon-purple/20 to-transparent blur-[25px] animate-pulse" />
              {/* Marker pin */}
              <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <span className="w-3.5 h-3.5 bg-neon-purple border-2 border-white rounded-full animate-ping absolute" />
                <span className="w-3 h-3 bg-neon-purple border-2 border-white rounded-full relative z-10" />
                <span className="text-[9px] font-bold font-mono px-2 py-0.5 rounded bg-slate-900 text-white mt-1 border border-slate-800 shadow-sm">Snapix Media Agra</span>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Form & Scheduler Tabs */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {/* Contact Lead Form */}
            <GlassCard className="p-6 sm:p-8" hoverGlow>
              {formSubmitted ? (
                <div className="flex flex-col items-center justify-center text-center py-12 gap-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 mb-2">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Message Transmitted!</h3>
                  <p className="text-xs text-slate-600 leading-relaxed max-w-xs font-semibold">
                    Thank you for writing. Our digital lead has received your project parameters and will follow up within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="flex flex-col gap-5">
                  <h3 className="text-lg font-extrabold text-slate-900 font-display border-b border-slate-200 pb-3">
                    Project Requirements Intake
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs text-slate-600 font-bold uppercase">Your Name</label>
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
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs text-slate-600 font-bold uppercase">Interest Domain</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple/30 transition-all"
                      >
                        <option value="web">Web Engineering</option>
                        <option value="seo">SEO Optimization</option>
                        <option value="marketing">Digital Marketing</option>
                        <option value="design">UI/UX Architecture</option>
                        <option value="other">Multiple / Full Retainer</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs text-slate-600 font-bold uppercase">Budget Range</label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple/30 transition-all"
                      >
                        <option value="$5k-$10k">$5k - $10k</option>
                        <option value="$10k-$25k">$10k - $25k</option>
                        <option value="$25k-$50k">$25k - $50k</option>
                        <option value="$50k+">$50k+ Enterprise</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-slate-600 font-bold uppercase">Brief Message</label>
                    <textarea
                      placeholder="Outline your systems or campaigns constraints..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple/30 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formLoading}
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-neon-blue to-neon-purple text-white text-xs font-bold uppercase tracking-wider hover:opacity-95 transition-opacity flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                  >
                    {formLoading ? "Sending Intake..." : "Send Project Intake"}
                  </button>
                </form>
              )}
            </GlassCard>

            {/* Calendar Meeting Scheduler */}
            <GlassCard className="p-6 sm:p-8" hoverGlow>
              {schedulerSubmitted ? (
                <div className="flex flex-col items-center justify-center text-center py-12 gap-4">
                  <div className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-neon-cyan mb-2">
                    <Calendar className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Consultation Booked!</h3>
                  <p className="text-xs text-slate-650 leading-relaxed max-w-xs font-semibold">
                    Your session is locked! A calendar invite containing a Zoom join link has been dispatched to your email address.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleBookingSubmit} className="flex flex-col gap-6">
                  <div>
                    <h3 className="text-lg font-extrabold text-slate-900 font-display border-b border-slate-200 pb-3">
                      Book Free Consultation Call
                    </h3>
                    <p className="text-xs text-slate-500 mt-2 font-semibold">Pick a day and time slot to sync with our strategic advisor.</p>
                  </div>

                  {/* Day picker */}
                  <div className="flex flex-col gap-2">
                    <span className="text-xs text-slate-600 font-bold uppercase flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" /> Select Day (June)
                    </span>
                    <div className="grid grid-cols-5 gap-1.5 sm:gap-2.5">
                      {days.map((day) => (
                        <button
                          key={day.date}
                          type="button"
                          onClick={() => setSelectedDay(day.date)}
                          className={`p-1.5 sm:p-3 rounded-lg sm:rounded-xl border flex flex-col items-center justify-center gap-1 cursor-pointer transition-all duration-300 ${
                            selectedDay === day.date
                              ? "bg-gradient-to-r from-neon-blue to-neon-purple text-white border-transparent shadow-sm"
                              : "bg-white border-slate-200 text-slate-600 hover:text-neon-purple hover:border-neon-purple/40"
                          }`}
                        >
                          <span className="text-[10px] uppercase font-bold tracking-wider font-mono">{day.label}</span>
                          <span className="text-sm font-extrabold">{day.date}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Time slot picker */}
                  <div className="flex flex-col gap-2">
                    <span className="text-xs text-slate-600 font-bold uppercase flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" /> Select Time Slot (EST)
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setSelectedSlot(slot)}
                          className={`px-4 py-2.5 rounded-xl border text-[11px] font-bold cursor-pointer transition-all duration-300 ${
                            selectedSlot === slot
                              ? "bg-gradient-to-r from-neon-blue to-neon-purple text-white border-transparent shadow-sm"
                              : "bg-white border-slate-200 text-slate-600 hover:text-neon-purple hover:border-neon-purple/40"
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={schedulerLoading || !selectedDay || !selectedSlot}
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-neon-blue to-neon-purple text-white font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity flex items-center justify-center gap-1.5 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer shadow-sm"
                  >
                    {schedulerLoading ? "Booking Consultation..." : "Lock Consultation Call"}
                  </button>
                </form>
              )}
            </GlassCard>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppChat />
    </div>
  );
}
