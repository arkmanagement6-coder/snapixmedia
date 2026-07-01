"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, ArrowRight } from "lucide-react";
import confetti from "canvas-confetti";

const socialIcons: Record<string, React.ReactNode> = {
  twitter: (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  linkedin: (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
    </svg>
  ),
  facebook: (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1V12h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z" />
    </svg>
  ),
  instagram: (
    <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  ),
};

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubsubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    // Simulate API request
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setLoading(false);
    setSubsubscribed(true);
    setEmail("");

    // Trigger celebratory confetti
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.85 },
      colors: ["#8b5cf6", "#06b6d4", "#ec4899"],
    });

    // Reset status after a few seconds
    setTimeout(() => setSubsubscribed(false), 5000);
  };

  return (
    <footer className="relative border-t border-purple-950 bg-[#0c0418] overflow-hidden text-slate-300">
      {/* Texture Overlays */}
      {/* 1. Grid Line Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
      {/* 2. Dots Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#8b5cf60a_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
      
      {/* Background radial glow orbs */}
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-radial from-neon-purple/15 via-transparent to-transparent blur-[100px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[350px] h-[350px] rounded-full bg-radial from-neon-cyan/10 via-transparent to-transparent blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Brief */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="text-2xl sm:text-3xl font-extrabold font-display tracking-tight text-white inline-block cursor-pointer select-none">
              Snapix<span className="text-neon-cyan"> Media</span>
            </Link>
            <p className="text-sm text-slate-200 leading-relaxed font-semibold">
              We design, build, and optimize <span className="text-white font-extrabold">premium digital experiences</span> that <span className="text-neon-cyan font-extrabold">accelerate growth</span> for enterprise systems, fast-growing SaaS brands, and creative start-ups.
            </p>
            <div className="flex items-center gap-3 mt-2">
              {["twitter", "linkedin", "facebook", "instagram"].map((social) => (
                <a
                  key={social}
                  href={social === "facebook" ? "https://facebook.com/snapixmedia" : `https://${social}.com`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-200 hover:text-white hover:border-neon-cyan hover:bg-white/10 transition-all duration-300 capitalize text-xs shadow-sm"
                  aria-label={social}
                >
                  {socialIcons[social]}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-5">
            <h4 className="text-sm font-extrabold uppercase tracking-widest !text-white">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {[
                { name: "About Us", href: "/about" },
                { name: "Our Services", href: "/services" },
                { name: "Case Studies", href: "/portfolio" },
                { name: "Insights Blog", href: "/blog" },
                { name: "Work With Us", href: "/careers" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-200 hover:text-white transition-colors duration-300 flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-neon-cyan" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-5">
            <h4 className="text-sm font-extrabold uppercase tracking-widest !text-white">Services</h4>
            <ul className="flex flex-col gap-3">
              {[
                { name: "Web Development", href: "/services/web-design-development" },
                { name: "SEO Optimization", href: "/services/seo-aeo" },
                { name: "Digital Marketing", href: "/services/paid-ads" },
                { name: "UI/UX Architecture", href: "/services#design" },
                { name: "E-commerce Stores", href: "/services/web-design-development" },
                { name: "Graphic Design & Video Editing", href: "/services/graphic-design-video-ads" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-200 hover:text-white transition-colors duration-300 flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-neon-purple" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-5">
            <h4 className="text-sm font-extrabold uppercase tracking-widest !text-white">Stay Updated</h4>
            <p className="text-sm text-slate-200 leading-relaxed font-semibold">
              Subscribe to our monthly newsletter for <span className="text-white font-extrabold">engineering insights</span>, digital trends, and <span className="text-neon-cyan font-extrabold">strategies</span>.
            </p>
            <form onSubmit={handleSubscribe} className="relative flex flex-col gap-2">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-slate-400 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan/20 transition-all duration-300 pr-12"
                  required
                  disabled={loading || subscribed}
                />
                <button
                  type="submit"
                  disabled={loading || subscribed}
                  className="absolute right-2.5 top-2.5 w-8 h-8 flex items-center justify-center rounded-lg bg-neon-cyan/15 border border-neon-cyan/30 text-neon-cyan hover:bg-neon-cyan hover:text-white transition-all duration-300 disabled:opacity-50 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>

              <AnimatePresence>
                {subscribed && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-1.5 text-xs text-emerald-400 mt-1"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Thanks for subscribing! Check your inbox.</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>

        {/* Contact Info Footer Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-y border-white/5 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-neon-cyan shadow-sm">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[10px] text-neon-cyan uppercase font-extrabold tracking-wider">Email us</p>
              <a href="mailto:info@snapixmedia.com" className="text-sm text-white hover:text-neon-cyan transition-colors font-semibold">
                info@snapixmedia.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-neon-blue shadow-sm">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[10px] text-neon-blue uppercase font-extrabold tracking-wider">Call us</p>
              <a href="tel:+919675818088" className="text-sm text-white hover:text-neon-blue transition-colors font-semibold">
                +91 9675818088
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-neon-purple shadow-sm">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[10px] text-neon-purple uppercase font-extrabold tracking-wider">Visit us</p>
              <span className="text-sm text-white font-semibold leading-relaxed">
                Second Floor, Plat No - , Sector 6, Transport Nagar, Agra, Uttar Pradesh, India - 282002
              </span>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>&copy; {new Date().getFullYear()} Snapix Media. All rights reserved.</p>
          <div className="flex gap-6 flex-wrap justify-center sm:justify-end">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/refund" className="hover:text-white transition-colors">Refund & Cancellation Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
