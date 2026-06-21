"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, ArrowRight } from "lucide-react";
import confetti from "canvas-confetti";

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
    <footer className="relative border-t border-glass-border bg-slate-50 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-radial from-neon-purple/5 via-transparent to-transparent blur-[80px]" />
      <div className="absolute top-0 left-0 w-[300px] h-[300px] rounded-full bg-radial from-neon-cyan/5 via-transparent to-transparent blur-[60px]" />

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Brief */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="inline-block cursor-pointer">
              <img src="/logo.png" alt="Snapix Media Logo" className="h-10 w-auto object-contain" />
            </Link>
            <p className="text-sm text-slate-600 leading-relaxed">
              We design, build, and optimize premium digital experiences that accelerate growth for enterprise systems, fast-growing SaaS brands, and creative start-ups.
            </p>
            <div className="flex items-center gap-3 mt-2">
              {["twitter", "linkedin", "github", "instagram"].map((social) => (
                <a
                  key={social}
                  href={`https://${social}.com`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 hover:text-slate-900 hover:border-slate-900 transition-all duration-300 capitalize text-xs shadow-xs"
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-5">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900">Quick Links</h4>
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
                    className="text-sm text-slate-600 hover:text-slate-900 transition-colors duration-300 flex items-center gap-1.5 group"
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
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900">Services</h4>
            <ul className="flex flex-col gap-3">
              {[
                { name: "Web Development", href: "/services#web" },
                { name: "SEO Optimization", href: "/services#seo" },
                { name: "Digital Marketing", href: "/services#marketing" },
                { name: "UI/UX Architecture", href: "/services#design" },
                { name: "E-commerce Stores", href: "/services#web" },
                { name: "Custom App Dev", href: "/services#web" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 hover:text-slate-900 transition-colors duration-300 flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-neon-blue" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-5">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900">Stay Updated</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Subscribe to our monthly newsletter for engineering insights, digital trends, and strategies.
            </p>
            <form onSubmit={handleSubscribe} className="relative flex flex-col gap-2">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-neon-cyan transition-all duration-300 pr-12 shadow-xs"
                  required
                  disabled={loading || subscribed}
                />
                <button
                  type="submit"
                  disabled={loading || subscribed}
                  className="absolute right-2.5 top-2.5 w-8 h-8 flex items-center justify-center rounded-lg bg-neon-cyan/10 border border-neon-cyan/20 text-neon-cyan hover:bg-neon-cyan hover:text-white transition-all duration-300 disabled:opacity-50 cursor-pointer"
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
                    className="flex items-center gap-1.5 text-xs text-emerald-600 mt-1"
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
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-8 border-t border-glass-border mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-neon-cyan shadow-xs">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs text-slate-400">Email us</p>
              <a href="mailto:snapixmediaofficial@gmail.com" className="text-sm text-slate-700 hover:text-slate-900 transition-colors font-semibold">
                snapixmediaofficial@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-neon-blue shadow-xs">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs text-slate-400">Call us</p>
              <a href="tel:+919675818088" className="text-sm text-slate-700 hover:text-slate-900 transition-colors font-semibold">
                +91 9675818088
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-neon-purple shadow-xs">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs text-slate-400">Visit us</p>
              <span className="text-sm text-slate-700 font-semibold leading-relaxed">
                17 Kamla Kunj Kamla Nagar Tej Nagar Agra 282005
              </span>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-glass-border text-xs text-slate-400">
          <p>&copy; {new Date().getFullYear()} Snapix Media. All rights reserved.</p>
            <div className="flex gap-6 flex-wrap justify-center sm:justify-end">
              <Link href="/privacy" className="hover:text-slate-800 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-slate-800 transition-colors">Terms of Service</Link>
              <Link href="/refund" className="hover:text-slate-800 transition-colors">Refund & Cancellation Policy</Link>
            </div>
        </div>
      </div>
    </footer>
  );
}
