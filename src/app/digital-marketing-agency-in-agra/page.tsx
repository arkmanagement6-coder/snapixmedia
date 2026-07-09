"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Send,
  MessageCircle,
  CheckCircle2,
  User,
  Phone,
  Globe,
  ArrowRight,
  TrendingUp,
  MapPin,
  FileText,
  Star,
  Check,
  ChevronDown,
  Building,
  Target
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MouseFollower from "@/components/MouseFollower";
import WhatsAppChat from "@/components/WhatsAppChat";
import GlassCard from "@/components/GlassCard";
import confetti from "canvas-confetti";

export default function AgraSEOPage() {
  // Enquiry/Audit Form State
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    website: "",
    service: "Full-Funnel Digital Growth",
    message: ""
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formLoading, setFormLoading] = useState(false);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Modal State for Packages
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSubmitted, setModalSubmitted] = useState(false);
  const [selectedPkgName, setSelectedPkgName] = useState("");

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleEnquireClick = (packageName: string) => {
    setSelectedPkgName(packageName);
    setFormData((prev) => ({ ...prev, service: packageName }));
    setModalOpen(true);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.contact) return;

    setFormLoading(true);
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "e982077c-4012-40d8-aca4-10217e4768e1";

    if (accessKey) {
      try {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            access_key: accessKey,
            subject: "Agra Page - New Free Audit Request",
            from_name: "Snapix Media Website",
            Name: formData.name,
            Contact: formData.contact,
            Website: formData.website || "Not Provided",
            Service: formData.service,
            Message: formData.message || "Not Provided"
          })
        });

        if (!res.ok) {
          throw new Error(`Web3Forms returned status ${res.status}`);
        }
      } catch (err) {
        console.error("Web3Forms error, falling back to WhatsApp:", err);
        // Fallback to WhatsApp
        const phoneNumber = "919675818088";
        const messageText = `Hi Snapix Media! I requested a Free Audit from the Agra page:\n\n*Name:* ${formData.name}\n*Contact/Email:* ${formData.contact}\n*Website:* ${formData.website || "Not Provided"}\n*Interest Area:* ${formData.service}\n*Message:* ${formData.message || "Not Provided"}`;
        window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(messageText)}`, "_blank");
      }
    } else {
      // Fallback: Open WhatsApp directly in new window
      const phoneNumber = "919675818088";
      const messageText = `Hi Snapix Media! I requested a Free Audit from the Agra page:\n\n*Name:* ${formData.name}\n*Contact/Email:* ${formData.contact}\n*Website:* ${formData.website || "Not Provided"}\n*Interest Area:* ${formData.service}\n*Message:* ${formData.message || "Not Provided"}`;
      window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(messageText)}`, "_blank");
    }

    setFormLoading(false);
    setFormSubmitted(true);

    // Reset Form
    setFormData({
      name: "",
      contact: "",
      website: "",
      service: "Full-Funnel Digital Growth",
      message: ""
    });

    // Confetti celebration
    confetti({
      particleCount: 100,
      spread: 60,
      origin: { y: 0.6 },
      colors: ["#1A50F1", "#3b82f6", "#60a5fa"]
    });
  };

  const handleModalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.contact) return;

    setFormLoading(true);
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "e982077c-4012-40d8-aca4-10217e4768e1";

    if (accessKey) {
      try {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            access_key: accessKey,
            subject: `Agra Page - Package Enquiry: ${selectedPkgName}`,
            from_name: "Snapix Media Website",
            Name: formData.name,
            Contact: formData.contact,
            Website: formData.website || "Not Provided",
            PackageInterest: selectedPkgName
          })
        });

        if (!res.ok) {
          throw new Error(`Web3Forms returned status ${res.status}`);
        }
      } catch (err) {
        console.error("Web3Forms error, falling back to WhatsApp:", err);
        // Fallback to WhatsApp
        const phoneNumber = "919675818088";
        const messageText = `Hi Snapix Media! I requested a package enquiry from the Agra page:\n\n*Name:* ${formData.name}\n*Contact:* ${formData.contact}\n*Website:* ${formData.website || "Not Provided"}\n*Package Interest:* ${selectedPkgName}`;
        window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(messageText)}`, "_blank");
      }
    } else {
      // Fallback: Open WhatsApp directly in new window
      const phoneNumber = "919675818088";
      const messageText = `Hi Snapix Media! I requested a package enquiry from the Agra page:\n\n*Name:* ${formData.name}\n*Contact:* ${formData.contact}\n*Website:* ${formData.website || "Not Provided"}\n*Package Interest:* ${selectedPkgName}`;
      window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(messageText)}`, "_blank");
    }

    setFormLoading(false);
    setModalSubmitted(true);

    // Confetti celebration
    confetti({
      particleCount: 100,
      spread: 60,
      origin: { y: 0.6 },
      colors: ["#1A50F1", "#3b82f6", "#60a5fa"]
    });

    // Reset & close modal after a delay
    setTimeout(() => {
      setModalSubmitted(false);
      setModalOpen(false);
      setFormData({
        name: "",
        contact: "",
        website: "",
        service: "Full-Funnel Digital Growth",
        message: ""
      });
    }, 4000);
  };

  // Pricing Data
  const pricingPackages = [
    {
      name: "Local SEO Starter",
      bestFor: "Small businesses, single-location shops, clinics, salons",
      deliverables: [
        "Google Business Profile optimization",
        "Local citations & directories",
        "On-page SEO for 5–10 local keywords",
        "Basic performance reporting"
      ],
      timeline: "4–8 weeks"
    },
    {
      name: "Growth SEO + PPC",
      bestFor: "Growing businesses wanting both organic and paid visibility",
      deliverables: [
        "Full-site SEO architecture audit",
        "On-page + off-page keyword optimization",
        "Google Ads & Meta Ads setup & management",
        "Dedicated monthly reporting & analysis"
      ],
      timeline: "Paid: 2–4 weeks | Organic: 8–12 weeks",
      featured: true
    },
    {
      name: "Full-Funnel Digital Growth",
      bestFor: "Established businesses, multi-location brands, e-commerce",
      deliverables: [
        "Comprehensive organic SEO campaign",
        "Multichannel Paid Ads & Retargeting funnels",
        "Social Media Marketing (SMM) planning",
        "Content marketing & landing page copywriting"
      ],
      timeline: "Ongoing, compounding ROI"
    },
    {
      name: "Website Design + SEO Launch",
      bestFor: "New businesses needing a website built from scratch",
      deliverables: [
        "Custom high-speed Next.js/Vite website",
        "SEO-ready, mobile-first design structure",
        "Google Search Console & Analytics tracking setup",
        "Google Business Profile registration"
      ],
      timeline: "3–5 weeks for launch"
    }
  ];

  // FAQ Data
  const faqData = [
    {
      q: "What does a digital marketing agency in Agra actually do?",
      a: "A digital marketing agency in Agra helps local businesses grow their online presence through services like SEO, Google Ads, social media marketing, website design, and content marketing — all aimed at generating more visibility, leads, and sales from the internet."
    },
    {
      q: "How much does it cost to hire a digital marketing agency in Agra?",
      a: "Costs vary depending on your business size, industry, and goals. A local SEO starter package typically costs less than a full-funnel package involving SEO, PPC, and social media together. Snapix Media offers custom quotes after a free audit so you only pay for what your business actually needs."
    },
    {
      q: "How long does it take to see results from SEO in Agra?",
      a: "Organic SEO results typically start showing within 8 to 12 weeks, depending on competition levels for your keywords. Paid advertising (PPC) can generate leads much faster, often within days of launching a campaign."
    },
    {
      q: "What makes Snapix Media the best digital marketing agency in Agra for small businesses?",
      a: "Snapix Media combines affordable, flexible packages with transparent reporting and a genuine understanding of Agra's local market — making us a strong fit for small and growing businesses that need real results without enterprise-level budgets."
    },
    {
      q: "Do I need both SEO and paid ads, or just one?",
      a: "It depends on your timeline and goals. SEO builds long-term, sustainable visibility, while paid ads generate faster, short-term leads. Most businesses see the best results from combining both, which is why our Growth and Full-Funnel packages include both services together."
    },
    {
      q: "Can Snapix Media help with Google Business Profile and local map rankings?",
      a: "Yes. Local SEO and Google Business Profile optimization are core parts of our service, especially important for Agra businesses that depend on nearby customers finding them through Google Maps and local search results."
    },
    {
      q: "How do I get started with Snapix Media?",
      a: "Simply reach out for a free digital marketing audit. We will review your current website, search rankings, and online presence, then recommend a clear, custom strategy based on your business goals and budget."
    },
    {
      q: "Is digital marketing worth it for small, local businesses in Agra, or only for large companies?",
      a: "Digital marketing is arguably more valuable for small, local businesses than large ones, since it lets you compete for local customers without needing a massive advertising budget. A well-optimized Google Business Profile and targeted local SEO can outperform a much bigger competitor that has neglected its online presence."
    },
    {
      q: "What industries does Snapix Media specialize in?",
      a: "We work across a wide range of industries in Agra, including tourism and hospitality, healthcare, real estate, education, manufacturing and exports, restaurants, e-commerce, and beauty and wellness — tailoring strategy to each industry's specific customer behaviour."
    },
    {
      q: "How is Snapix Media different from freelancers or in-house social media managers?",
      a: "Freelancers and in-house managers are often limited to one skill — like posting on Instagram or running basic ads — while Snapix Media brings an integrated team covering SEO, PPC, content, design, and analytics together. This means your website, ads, and content all reinforce each other instead of working in isolation, which typically produces faster and more consistent results."
    }
  ];

  return (
    <div className="relative min-h-screen bg-transparent text-slate-600 overflow-x-hidden flex flex-col font-sans">
      <MouseFollower />
      <Navbar isDarkHero={true} />

      {/* 1. HERO SECTION WITH INTEGRATED AUDIT/ENQUIRY FORM */}
      <section className="relative w-full min-h-screen flex items-center justify-center bg-slate-950 overflow-hidden pt-32 pb-16 page-hero-banner">
        {/* Background Grids */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60" />
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#1A50F1]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Text Column */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-slate-800 bg-slate-900/50 text-slate-300 text-xs font-bold tracking-wider uppercase backdrop-blur-sm self-start">
              <Sparkles className="w-3.5 h-3.5 text-[#1A50F1]" />
              <span>Agra's Growth Partner</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] font-display text-white">
              Digital Marketing Agency <br />
              <span className="bg-gradient-to-r from-blue-400 to-[#1A50F1] bg-clip-text text-transparent">in Agra</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg max-w-xl leading-relaxed font-semibold mt-2">
              How Snapix Media helps local businesses grow online. We combine local market knowledge with data-driven strategies to help businesses get found, chosen, and scale revenue.
            </p>

            <div className="flex flex-col gap-3 mt-4 text-slate-300 text-xs sm:text-sm font-semibold max-w-lg">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#1A50F1]" />
                <span>Dominate Google Search pack in Sanjay Place & Sadar Bazaar</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#1A50F1]" />
                <span>High-performance PPC Ads for tourism & export sectors</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#1A50F1]" />
                <span>Full transparency and live ROI lead tracking metrics</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full sm:w-auto">
              <a
                href={`https://wa.me/919675818088?text=${encodeURIComponent("Hi Snapix Media! I would like to connect on WhatsApp from the Agra Digital Marketing page.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 shadow-md shadow-emerald-500/20 w-full sm:w-auto text-center"
              >
                <MessageCircle className="w-4.5 h-4.5" />
                Connect on WhatsApp
              </a>
              <a
                href="#pricing"
                className="px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center transition-all duration-300 w-full sm:w-auto text-center"
              >
                View Packages
              </a>
            </div>

            <div className="flex items-center gap-4 mt-6">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full border-2 border-slate-950 bg-gradient-to-tr from-blue-500 to-indigo-600 flex items-center justify-center text-[9px] text-white font-extrabold" title="Agra Properties (Real Estate)">
                  AP
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-slate-950 bg-gradient-to-tr from-emerald-500 to-teal-600 flex items-center justify-center text-[9px] text-white font-extrabold" title="Taj Hotels (Hospitality)">
                  TH
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-slate-950 bg-gradient-to-tr from-purple-500 to-pink-600 flex items-center justify-center text-[9px] text-white font-extrabold" title="Leather Exporters (Manufacturing)">
                  LE
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-slate-950 bg-slate-800 flex items-center justify-center text-[9px] text-white font-bold">
                  +50
                </div>
              </div>
              <div className="text-xs text-slate-400 font-medium">
                Trusted by <span className="text-white font-bold">50+ local brands</span> across Uttar Pradesh
              </div>
            </div>
          </div>

          {/* Right Hero Form Column */}
          <div className="lg:col-span-5 w-full">
            <GlassCard className="p-6 sm:p-8" hoverGlow>
              {formSubmitted ? (
                <div className="flex flex-col items-center justify-center text-center py-12 gap-4">
                  <div className="w-16 h-16 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-[#1A50F1] mb-2">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Request Received!</h3>
                  <p className="text-xs text-slate-600 leading-relaxed max-w-xs font-semibold">
                    Thank you. Our SEO lead is assembling your website audit checklist. We will follow up shortly via WhatsApp or email.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="flex flex-col gap-4 text-left">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-black text-slate-900 font-display">
                      Request a Free Audit
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">
                      Fill out your details to get a free strategy call.
                    </p>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] text-slate-500 font-bold uppercase">Name</label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Your Name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-9 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#1A50F1]"
                      />
                      <User className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] text-slate-500 font-bold uppercase">Email or Phone</label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="john@example.com or +91 9999..."
                        required
                        value={formData.contact}
                        onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                        className="w-full pl-9 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#1A50F1]"
                      />
                      <Phone className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] text-slate-500 font-bold uppercase">Website Link (Optional)</label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="yourbusiness.com"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        className="w-full pl-9 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#1A50F1]"
                      />
                      <Globe className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] text-slate-500 font-bold uppercase">Interest Domain</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3 py-2.5 bg-white border border-slate-200 text-slate-800 rounded-xl text-xs focus:outline-none focus:border-[#1A50F1]"
                    >
                      <option value="Full-Funnel Digital Growth">Full-Funnel Growth Package</option>
                      <option value="SEO & Search Rankings">Local SEO & Google Maps</option>
                      <option value="Paid Advertising (Google/Meta)">PPC & Paid Ads Campaigns</option>
                      <option value="Website Design & Speed">Custom Web Systems</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={formLoading}
                    className="w-full py-3.5 px-6 rounded-xl bg-[#1A50F1] hover:bg-[#103ec6] text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-blue-500/10 mt-2"
                  >
                    {formLoading ? "Sending..." : "Submit Intake & Request Call"}
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </GlassCard>
          </div>
        </div>
      </section>

      {/* 2. WHY AGRA BUSINESSES NEED A DIGITAL AGENCY RIGHT NOW */}
      <section className="py-16 md:py-24 px-6 bg-slate-50 relative border-y border-slate-200/80">
        <div className="max-w-6xl mx-auto flex flex-col gap-16">
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-3">
            <span className="text-xs font-bold text-[#1A50F1] uppercase tracking-widest">Market Shift</span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight font-display">
              Why Agra Businesses Need Digital Marketing Right Now
            </h2>
            <div className="w-16 h-[3px] bg-[#1A50F1] mx-auto mt-2 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Local Search Rules",
                desc: "Customers now search Google for 'best service near me' before asking neighbors or relatives.",
                icon: MapPin,
                iconColor: "text-blue-600 bg-blue-50 border-blue-100"
              },
              {
                title: "Year-Round Bookings",
                desc: "Tourism-driven businesses need consistent digital visibility, not just seasonal walk-ins.",
                icon: Target,
                iconColor: "text-emerald-600 bg-emerald-50 border-emerald-100"
              },
              {
                title: "Social Discovery First",
                desc: "Younger, digital-first customers discover local Agra brands via Instagram Reels & Google Reviews.",
                icon: TrendingUp,
                iconColor: "text-purple-600 bg-purple-50 border-purple-100"
              },
              {
                title: "Competitor Pressure",
                desc: "Competitors in Sanjay Place and Fatehabad Road are actively investing in local SEO. Dominate first.",
                icon: Building,
                iconColor: "text-amber-600 bg-amber-50 border-amber-100"
              }
            ].map((item, i) => (
              <GlassCard key={i} className="p-6 flex flex-col gap-4 text-left" hoverGlow>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${item.iconColor}`}>
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-black text-slate-900 font-display">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-semibold">{item.desc}</p>
              </GlassCard>
            ))}
          </div>

          <div className="max-w-4xl mx-auto bg-white border border-slate-200/80 p-6 sm:p-8 rounded-3xl text-left flex flex-col gap-4 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 font-display">The Everyday Reality of Running a Business in Agra</h3>
            <p className="text-sm text-slate-600 leading-relaxed font-semibold">
              A tour operator near Fatehabad Road loses bookings every day to competitors who simply show up higher on Google. A dental clinic in Sanjay Place spends lakhs on a signboard but gets fewer enquiries than a competitor with strong Google reviews. A handicraft exporter with beautiful products struggles to reach global buyers because their website isn't built to convert international visitors.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed font-semibold font-sans italic border-l-2 border-[#1A50F1] pl-4">
              In every one of these cases, the product or service isn't the problem — visibility is. That is precisely the gap Snapix Media is built to close.
            </p>
          </div>
        </div>
      </section>

      {/* 3. DIGITAL MARKETING TRENDS SHAPING AGRA IN 2026 */}
      <section className="py-16 md:py-24 px-6 bg-white relative">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 text-left flex flex-col gap-6">
            <span className="text-xs font-bold text-[#1A50F1] uppercase tracking-widest">Stay Ahead</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-display">
              Digital Marketing Trends Shaping Agra Businesses
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed font-semibold">
              Digital marketing changes rapidly. What worked two years ago isn't enough to survive in Agra's competitive local landscape today. We focus on modern search behaviors and consumer actions to build your campaigns.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1A50F1] hover:bg-[#103ec6] text-white font-bold text-xs uppercase tracking-wider self-start transition-all"
            >
              Get Free Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-4 text-left">
            {[
              {
                title: "AI-Powered Search Optimization",
                desc: "People increasingly ask AI tools and voice assistants like ChatGPT and Gemini for local recommendations, meaning content must be structured cleanly for both search engines and AI databases."
              },
              {
                title: "Mobile-First Dominance",
                desc: "Over 80% of local searches in Agra happen on smartphones. A slow or clunky mobile website directly turns customers away to your competitors."
              },
              {
                title: "Video Content Authority",
                desc: "Short-form video content like Instagram Reels and explainer clips is driving significantly higher conversion rates than static image posts across Agra brand pages."
              },
              {
                title: "Reputation Management",
                desc: "Customers compare Google star ratings and read recent reviews before buying. Solid, ongoing reputation management is critical for local trust."
              }
            ].map((trend, idx) => (
              <div key={idx} className="p-5 rounded-2xl border border-slate-100 bg-slate-50/50 flex flex-col gap-2">
                <h4 className="text-base font-bold text-slate-900 font-display flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1A50F1] flex items-center justify-center text-xs font-bold font-mono">
                    {idx + 1}
                  </span>
                  {trend.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-semibold pl-8">{trend.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHAT MAKES SNAPIX MEDIA THE BEST DIGITAL MARKETING AGENCY IN AGRA */}
      <section className="py-16 md:py-24 px-6 bg-slate-50 relative border-t border-slate-200/80">
        <div className="max-w-6xl mx-auto flex flex-col gap-16">
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-3">
            <span className="text-xs font-bold text-[#1A50F1] uppercase tracking-widest">Our Edge</span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight font-display">
              Why serious Agra brands choose Snapix Media
            </h2>
            <div className="w-16 h-[3px] bg-[#1A50F1] mx-auto mt-2 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {[
              {
                title: "Local Market Knowledge + National Level Expertise",
                desc: "Snapix Media applies enterprise-grade digital marketing systems (used by national and global brands) and tailors them with a deep understanding of Agra's local buying habits, language nuances, and target audience segments."
              },
              {
                title: "Data-First Strategy, No Guesswork",
                desc: "Every campaign — whether SEO, Google Ads, or social media — starts with strict keyword mapping, competitor gap analysis, and conversion rate optimization. We build strategies on facts, not assumptions."
              },
              {
                title: "Transparent & Real-Time Reporting",
                desc: "You will always know exactly where your budget is going, what your cost-per-lead looks like, and what conversions you are securing. No vague PDFs; we use real dashboards with live metrics."
              },
              {
                title: "Full-Funnel Digital Marketing",
                desc: "Instead of dealing with multiple freelancers or agencies for code, copy, and ads, Snapix Media manages your entire digital system as one unified engine so all components reinforce each other."
              }
            ].map((edge, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-white border border-slate-200/80 flex gap-4 items-start shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1A50F1] flex-shrink-0">
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-bold text-slate-900 font-display">{edge.title}</h3>
                  <p className="text-xs text-slate-650 leading-relaxed font-semibold">{edge.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SERVICES GRID WITH 3D IMAGE ASSETS */}
      <section className="py-16 md:py-24 px-6 bg-white relative">
        <div className="max-w-6xl mx-auto flex flex-col gap-16">
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-3">
            <span className="text-xs font-bold text-[#1A50F1] uppercase tracking-widest">Our Services</span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight font-display">
              Grow Your Reach & Dominate Agra's Markets
            </h2>
            <div className="w-16 h-[3px] bg-[#1A50F1] mx-auto mt-2 rounded-full" />
          </div>

          <div className="flex flex-col gap-16">
            {/* Service 1: SEO */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 order-2 lg:order-1 text-left flex flex-col gap-5">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1A50F1]">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 font-display">Search Engine Optimization (SEO)</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-semibold">
                  SEO is the foundation of long-term digital growth. Snapix Media's SEO blueprint covers technical speed audits, schema markup structure, high-intent keyword copywriting, and local citation authority building. We research the exact words and queries typed by buyers in Agra to capture their interest.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600 font-semibold">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#1A50F1]" />
                    <span>Technical SEO & Speed Fixes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#1A50F1]" />
                    <span>High-Intent Copywriting</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#1A50F1]" />
                    <span>Schema Markup Integrations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#1A50F1]" />
                    <span>Monthly Ranking Audits</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-6 order-1 lg:order-2 flex justify-center">
                <div className="relative w-full max-w-[360px] aspect-square rounded-3xl overflow-hidden bg-white border border-slate-200/60 flex items-center justify-center shadow-md">
                  <Image
                    src="/seo_services_new.jpg"
                    alt="SEO Search Engine Optimization representing Snapix Media"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Service 2: Local SEO & Google Maps */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 flex justify-center">
                <div className="relative w-full max-w-[360px] aspect-square rounded-3xl overflow-hidden bg-white border border-slate-200/60 flex items-center justify-center shadow-md">
                  <Image
                    src="/local_seo_services_new.jpg"
                    alt="Local SEO and Google Maps optimization representing Snapix Media"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="lg:col-span-6 text-left flex flex-col gap-5">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1A50F1]">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 font-display">Local SEO & Google Maps Rank</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-semibold">
                  For clinics, restaurants, salons, property dealers, and hotels in Agra, appearing on Google Maps local pack is the ultimate visibility driver. We claim, verify, structure, and optimize your Google Business Profile to attract nearby footfall.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600 font-semibold">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#1A50F1]" />
                    <span>Business Profile Claim & Setup</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#1A50F1]" />
                    <span>Local Citation Directories</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#1A50F1]" />
                    <span>Reviews & Reputations Audit</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#1A50F1]" />
                    <span>Local Map Pack Tracking</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 3: PPC & Web Design */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 order-2 lg:order-1 text-left flex flex-col gap-5">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1A50F1]">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 font-display">PPC Ads & Web Engineering</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-semibold">
                  We deploy targeted Google Ads and Meta Ads campaigns designed to fit your budget. To ensure ad spend converts, we optimize your website speed, layout elements, and call-to-actions.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600 font-semibold">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#1A50F1]" />
                    <span>Google Search & Display PPC</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#1A50F1]" />
                    <span>High-converting Landing Pages</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#1A50F1]" />
                    <span>Meta Lead Generation Ads</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#1A50F1]" />
                    <span>Fast Mobile-first Next.js Dev</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-6 order-1 lg:order-2 flex justify-center">
                <div className="relative w-full max-w-[360px] aspect-square rounded-3xl overflow-hidden bg-white border border-slate-200/60 flex items-center justify-center shadow-md">
                  <Image
                    src="/ppc_services_new.jpg"
                    alt="PPC Advertising and Web Engineering representing Snapix Media"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PRICING AND PACKAGES TABLES */}
      <section className="py-16 md:py-24 px-6 bg-slate-50 relative border-t border-slate-200/80" id="pricing">
        <div className="max-w-6xl mx-auto flex flex-col gap-16">
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-3">
            <span className="text-xs font-bold text-[#1A50F1] uppercase tracking-widest font-mono">Our Pricing</span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight font-display">
              Transparent Digital Marketing Packages
            </h2>
            <div className="w-16 h-[3px] bg-[#1A50F1] mx-auto mt-2 rounded-full" />
            <p className="text-xs text-slate-500 font-semibold mt-2">
              (Final pricing depends on your industry, competition level, and goals — reach out for a custom quote.)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingPackages.map((pkg, idx) => (
              <GlassCard
                key={idx}
                className={`flex flex-col justify-between text-left relative ${
                  pkg.featured ? "border-2 border-[#1A50F1] shadow-lg shadow-blue-500/10" : ""
                }`}
                hoverGlow
              >
                {pkg.featured ? (
                  <div className="flex justify-start mb-3">
                    <span className="px-3 py-1 bg-[#1A50F1] text-white text-[9px] font-bold uppercase tracking-widest rounded-full">
                      Most Popular
                    </span>
                  </div>
                ) : (
                  <div className="h-[22px] mb-3" />
                )}
                
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-black text-slate-900 font-display">{pkg.name}</h3>
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wide leading-relaxed">
                      {pkg.bestFor}
                    </span>
                  </div>

                  <hr className="border-slate-200/80" />

                  <ul className="flex flex-col gap-2.5 text-xs text-slate-600 font-semibold">
                    {pkg.deliverables.map((item, id) => (
                      <li key={id} className="flex gap-2 items-start">
                        <Check className="w-3.5 h-3.5 text-[#1A50F1] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 flex flex-col gap-4">
                  <div>
                    <div className="text-[10px] text-slate-500 font-bold uppercase">Initial Results Timeline</div>
                    <div className="text-sm font-bold text-slate-800">{pkg.timeline}</div>
                  </div>
                  <button
                    onClick={() => handleEnquireClick(pkg.name)}
                    className={`w-full py-2.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 text-center cursor-pointer ${
                      pkg.featured
                        ? "bg-[#1A50F1] hover:bg-[#103ec6] text-white shadow-md shadow-blue-500/10"
                        : "border border-slate-200 hover:bg-slate-50 text-slate-700"
                    }`}
                  >
                    Enquire Now
                  </button>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* 7. PROVEN PROCESS STEPS */}
      <section className="py-16 md:py-24 px-6 bg-white relative">
        <div className="max-w-6xl mx-auto flex flex-col gap-16">
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-3">
            <span className="text-xs font-bold text-[#1A50F1] uppercase tracking-widest font-mono">Our Blueprint</span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight font-display">
              Our Proven Digital Strategy Process
            </h2>
            <div className="w-16 h-[3px] bg-[#1A50F1] mx-auto mt-2 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { step: "1", title: "Discovery & Audit", desc: "We audit your site speed, rankings, ads copy, and competitors.", output: "Site Health Report" },
              { step: "2", title: "Strategy Design", desc: "We construct a localized keyword map and paid ads strategy.", output: "Tailored Growth Map" },
              { step: "3", title: "Execution", desc: "Our developers, SEOs, and copywriters launch the live elements.", output: "Optimized Live Campaigns" },
              { step: "4", title: "Tracking & Optimize", desc: "We monitor lead tracking, keyword movements, and CPCs weekly.", output: "Continuous Enhancements" },
              { step: "5", title: "Transparent Reports", desc: "Get simplified, metric-based monthly lead reports.", output: "Monthly ROI Review" }
            ].map((step, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-slate-100 bg-slate-50/50 flex flex-col justify-between text-left relative">
                <span className="absolute -top-3 left-6 w-7 h-7 rounded-full bg-[#1A50F1] text-white flex items-center justify-center text-xs font-black font-display shadow-sm shadow-blue-500/30">
                  {step.step}
                </span>
                <div className="flex flex-col gap-3 mt-2">
                  <h3 className="text-base font-black text-slate-900 font-display mt-2">{step.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-semibold">{step.desc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200/80 text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                  Deliverable: <span className="text-[#1A50F1] font-extrabold">{step.output}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. INDUSTRIES WE SERVE & FAQS */}
      <section className="py-16 md:py-24 px-6 bg-slate-50 relative border-t border-slate-200/80">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: FAQ Accordion */}
          <div className="lg:col-span-7 text-left flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold text-[#1A50F1] uppercase tracking-widest font-mono">Answers</span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight font-display">
                Frequently Asked Questions
              </h2>
              <div className="w-16 h-[3px] bg-[#1A50F1] mt-2 rounded-full" />
            </div>

            <div className="flex flex-col gap-3 mt-4">
              {faqData.map((faq, i) => (
                <div key={i} className="border border-slate-200/80 rounded-2xl bg-white overflow-hidden shadow-xs transition-all duration-300">
                  <button
                    onClick={() => toggleFaq(i)}
                    className="w-full py-4 px-5 flex items-center justify-between text-left font-bold text-sm text-slate-900 hover:text-[#1A50F1] transition-colors gap-4 cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openFaq === i ? "rotate-180 text-[#1A50F1]" : "text-slate-400"}`} />
                  </button>
                  <AnimatePresence initial={false}>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 text-xs text-slate-600 leading-relaxed font-semibold border-t border-slate-100 pt-3">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Industries We Serve */}
          <div className="lg:col-span-5 text-left flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold text-[#1A50F1] uppercase tracking-widest font-mono">Our Segments</span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight font-display">
                Industries We Serve Across Agra
              </h2>
              <div className="w-16 h-[3px] bg-[#1A50F1] mt-2 rounded-full" />
            </div>

            <p className="text-sm text-slate-600 leading-relaxed font-semibold">
              Our marketing blueprint is custom tailored to each sector's consumer behavior. We drive sales and enquiries for the following industries across Agra:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-semibold text-xs text-slate-700 mt-4">
              {[
                "Hotels, homestays, and tour operators",
                "Real estate developers & property dealers",
                "Healthcare clinics, dentists & doctors",
                "Educational institutes & coaching centers",
                "Leather and handicraft exporters",
                "Restaurants, cafes, and cloud kitchens",
                "E-commerce brands & D2C startups",
                "Salons, spas, and wellness clinics"
              ].map((industry, id) => (
                <div key={id} className="flex gap-2.5 items-start p-3 bg-white border border-slate-200/60 rounded-xl shadow-xs">
                  <Check className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>{industry}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 p-5 rounded-2xl bg-blue-50/50 border border-blue-100/50 flex flex-col gap-3">
              <h4 className="text-sm font-bold text-slate-900">Need a custom localized strategy?</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Connect with our local digital marketing lead for a free audit report of your domain.
              </p>
              <button
                onClick={() => {
                  const phoneNumber = "919675818088";
                  const text = encodeURIComponent("Hi Snapix Media! I want to request a free audit report and consultation for my Agra-based business.");
                  window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
                }}
                className="w-full py-3 px-4 rounded-xl bg-[#1A50F1] hover:bg-[#103ec6] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4" />
                Discuss on WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 9. CALL TO ACTION SECTION */}
      <section className="relative py-16 md:py-24 px-6 bg-slate-950 text-white overflow-hidden text-center">
        {/* Background grid line overrides */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto flex flex-col items-center gap-6 relative z-10">
          <span className="text-xs font-extrabold text-[#3b82f6] uppercase tracking-widest">Get Started Today</span>
          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white leading-tight">
            Ready to Grow Your Business Online?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl leading-relaxed font-semibold">
            If you are searching for a digital marketing agency in Agra that treats your business like a genuine growth partner — not just another retainer client — Snapix Media is ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full sm:w-auto">
            <button
              onClick={() => {
                const phoneNumber = "919675818088";
                const text = encodeURIComponent("Hi Snapix Media! I'm ready to audit my business and start digital marketing. Let's schedule a call.");
                window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
              }}
              className="px-8 py-4 rounded-xl bg-[#1A50F1] hover:bg-[#103ec6] text-white font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 shadow-md shadow-blue-500/15"
            >
              <MessageCircle className="w-5 h-5" />
              Book Audit & Strategy Call
            </button>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-xl border border-white/20 hover:bg-white/10 text-white font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center transition-all duration-300"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppChat />

      {/* 10. ENQUIRY MODAL POPUP */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalOpen(false)}
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              className="relative w-full max-w-md bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 z-[101] shadow-2xl text-left"
            >
              <button
                onClick={() => {
                  setModalOpen(false);
                  setModalSubmitted(false);
                }}
                className="absolute top-4 right-4 w-8 h-8 rounded-full border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-400 hover:text-slate-600 transition-colors cursor-pointer text-sm font-bold"
                aria-label="Close modal"
              >
                ✕
              </button>

              {modalSubmitted ? (
                <div className="flex flex-col items-center justify-center text-center py-12 gap-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-2">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 font-display">Thank You!</h3>
                  <p className="text-sm text-slate-600 font-semibold leading-relaxed max-w-xs">
                    Your enquiry for <span className="text-[#1A50F1]">{selectedPkgName}</span> has been received. Our team will contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleModalSubmit} className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1 pr-6">
                    <h3 className="text-lg font-black text-slate-900 font-display">
                      Enquire: {selectedPkgName}
                    </h3>
                    <p className="text-xs text-slate-500 font-semibold">
                      Let's scale your brand presence. Enter details for a quick quote.
                    </p>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] text-slate-500 font-bold uppercase">Name</label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Your Name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-9 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#1A50F1]"
                      />
                      <User className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] text-slate-500 font-bold uppercase">Email or Phone</label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="john@example.com or +91 9999..."
                        required
                        value={formData.contact}
                        onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                        className="w-full pl-9 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#1A50F1]"
                      />
                      <Phone className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] text-slate-500 font-bold uppercase">Website Link (Optional)</label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="yourbusiness.com"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        className="w-full pl-9 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#1A50F1]"
                      />
                      <Globe className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] text-slate-500 font-bold uppercase">Package Interest</label>
                    <input
                      type="text"
                      readOnly
                      value={formData.service}
                      className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 text-slate-500 rounded-xl text-xs font-semibold focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formLoading}
                    className="w-full py-3.5 px-6 rounded-xl bg-[#1A50F1] hover:bg-[#103ec6] text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-blue-500/10 mt-2"
                  >
                    {formLoading ? "Sending..." : "Submit Enquiry & Connect"}
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
