"use client";

import { Monitor, ArrowLeft, ArrowUpRight, ShieldCheck, Sparkles, Layout, Globe, Cpu, ShoppingBag, CheckCircle, Search, Sliders, Mail, HardDrive, Smartphone, Gauge } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MouseFollower from "@/components/MouseFollower";
import WhatsAppChat from "@/components/WhatsAppChat";
import GlassCard from "@/components/GlassCard";
import Link from "next/link";

const capabilities = [
  {
    title: "Static Website",
    desc: "A static website is an excellent choice for businesses that need a fast, secure, and professional online presence. They load instantly, are easy to maintain, and offer reliable performance—making them ideal for small businesses, startups, portfolios, and informational websites. If your content doesn't require frequent changes, this is a cost-effective and highly efficient solution.",
    subDesc: "At SnapixMedia, we design modern, responsive, and visually appealing static websites built with clean code and optimized for speed to provide an exceptional user experience across all screen sizes.",
    seoDesc: "Our goal is to create websites that are not only attractive but also SEO-friendly, helping your business improve its online visibility and reach the right target audience.",
    icon: Globe,
    color: "from-blue-500/10 to-indigo-500/10 text-blue-600 border-blue-100",
  },
  {
    title: "Dynamic Website",
    desc: "Dynamic websites are the ideal solution for businesses that require interactive features, regular content updates, and a personalized user experience. They offer greater flexibility, scalability, and backend functionality, making them perfect for growing businesses, service providers, blogs, directories, and custom web applications.",
    subDesc: "At SnapixMedia, we design and develop dynamic websites that combine creativity, functionality, and outstanding user experience. Using modern development practices, our experienced team creates fully customized platforms.",
    seoDesc: "We focus on intuitive navigation, responsive design, fast performance, and seamless user interaction to ensure your dynamic website is optimized for speed, security, and search engines, converting visitors into loyal customers.",
    icon: Cpu,
    color: "from-indigo-500/10 to-purple-500/10 text-indigo-600 border-indigo-100",
  },
  {
    title: "E-Commerce Website",
    desc: "A user-friendly and visually appealing e-commerce website design is essential for attracting and keeping clients. At Snapix Media, we understand the need to create websites that not only have a pleasing appearance but also function flawlessly to increase checkout conversions.",
    subDesc: "Our skilled team of designers and developers will work with you to create a custom e-commerce website. We place a high priority on smooth navigation, a simple user interface, and responsive design so customers have a great purchasing experience.",
    seoDesc: "Whether you are starting new or scaling up, we implement optimized shopping flows, clear products taxonomy, and secure transaction setups tailored to your specific preferences.",
    icon: ShoppingBag,
    color: "from-purple-500/10 to-pink-500/10 text-purple-600 border-purple-100",
  },
  {
    title: "Custom Website Design",
    desc: "We understand every business is different, and every brand needs unique designs that reflect their values or specific services. We aim to give 100% satisfaction to our clients with our high-fidelity, customized web layouts and bespoke components.",
    subDesc: "Our team of professional, experienced, and highly skilled designers is pro at creating eye-catching and mesmerizing layouts that match your brand identity while keeping the target audience in mind.",
    seoDesc: "Custom website composition is essential for creating a successful online business presence, using techniques, user experience (UX) analysis, and marketing-optimized blueprints to maximize your ROI.",
    icon: Layout,
    color: "from-blue-500/10 to-pink-500/10 text-pink-600 border-pink-100",
  },
];

const whyEcommerce = [
  { title: "Increases Your Reach", desc: "Allows your brand to connect with customers without geographical limits." },
  { title: "Cost-Effective Solution", desc: "Reduces overhead costs compared to traditional physical brick-and-mortar storefronts." },
  { title: "Know Your Customers Well", desc: "Gather detailed analytics, shopping habits, and search preferences directly." },
  { title: "Scale and Expand Brand", desc: "Allows easy additions of product inventories and rapid brand expansion." },
  { title: "Enables Personalization", desc: "Deliver custom offers, product recommendations, and tailored messages to users." },
  { title: "Direct Contact Channel", desc: "Builds a direct line of communication for customer support and feedback loops." },
  { title: "Creative Marketing Strategies", desc: "Integrate retargeting ads, email newsletters, and custom discount codes smoothly." },
];

const keyFeatures = [
  {
    title: "Hosting & Domain",
    desc: "Our package includes professional domain, secure hosting, and business emails.",
    icon: HardDrive,
  },
  {
    title: "SEO Friendly",
    desc: "We deliver mobile-first, SEO-optimized sites to increase your search engine visibility.",
    icon: Search,
  },
  {
    title: "Easy Navigation",
    desc: "Seamless product menus and clear ordering steps to minimize user friction.",
    icon: Sliders,
  },
  {
    title: "Search Box",
    desc: "Integrated high-speed search box so customers can find products instantly.",
    icon: Search,
  },
  {
    title: "Responsive Design",
    desc: "Fully flexible designs optimized for flawless rendering on all layouts and screen sizes.",
    icon: Smartphone,
  },
  {
    title: "Maintenance of Privacy",
    desc: "Building trustworthy websites with SSL certificates, securing user confidence and transactions.",
    icon: ShieldCheck,
  },
  {
    title: "Creative Image Sliders",
    desc: "Stunning, touch-optimized banner sliders to highlight featured products.",
    icon: Layout,
  },
  {
    title: "Rich Product Details",
    desc: "Organized tables, bullet points, and high-quality specifications for clear information.",
    icon: Sparkles,
  },
  {
    title: "Creative Content",
    desc: "Engaging copywriting engineered to rank well on SEO search queries.",
    icon: Layout,
  },
  {
    title: "Email Marketing",
    desc: "Integrated email marketing captures and newsletters setups.",
    icon: Mail,
  },
  {
    title: "Faceted Filters",
    desc: "Allows shoppers to apply multiple filters to quickly isolate target products.",
    icon: Sliders,
  },
  {
    title: "Speed Optimization",
    desc: "Highly optimized codebase and asset compression for blazing-fast loading speeds.",
    icon: Gauge,
  },
  {
    title: "Checkout & Cart Suite",
    desc: "Features wishlists, view cart options, shipping estimators, and secure payment gateway integrations.",
    icon: CheckCircle,
  },
];

export default function WebDesignDevelopment() {
  return (
    <div className="relative min-h-screen bg-transparent text-slate-700 overflow-x-hidden flex flex-col font-sans">
      <MouseFollower />
      <Navbar isDarkHero />

      {/* Full-width Hero Banner */}
      <section className="relative w-full min-h-[300px] sm:min-h-[380px] flex items-center justify-center bg-slate-950 overflow-hidden pt-28">
        {/* Background grids & patterns */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:30px_30px]" />
        <div className="absolute inset-0 bg-radial from-neon-purple/20 via-transparent to-transparent blur-[120px] pointer-events-none" />
        
        {/* Abstract decorative floating elements */}
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-neon-purple/10 blur-[80px] animate-pulse-slow pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-neon-cyan/10 blur-[90px] animate-pulse-slow pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 w-full text-center relative z-10 py-12 flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-neon-cyan/20 bg-neon-cyan/5 text-neon-cyan text-xs font-bold tracking-wider uppercase">
            <Monitor className="w-3.5 h-3.5" />
            <span>Premium Web Systems</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold !text-white tracking-tight leading-tight font-display drop-shadow-md">
            Website Design & <span className="text-gradient-purple-cyan">Development</span>
          </h1>
          <p className="!text-slate-300 text-xs sm:text-sm max-w-xl leading-relaxed font-semibold">
            Engineering lightning-fast, highly optimized storefronts and custom web architectures designed to hook users and double conversions.
          </p>
        </div>
      </section>

      <main className="flex-1 pt-12 pb-20 px-6 max-w-6xl mx-auto w-full">
        {/* Back to services */}
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 hover:text-slate-900 transition-colors duration-300 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Services
        </Link>

        {/* Hero Section */}
        <section className="flex flex-col lg:flex-row gap-12 items-center mb-24">
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight leading-tight font-display">
              Our Design & Conversion Approach
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-semibold leading-relaxed">
              Your website is often the first interaction potential customers have with your brand. A professionally designed website not only creates a strong first impression but also builds trust, communicates your brand identity, and delivers a seamless user experience. At Snapix Media, we create modern, responsive, and visually appealing websites that help businesses establish a powerful online presence.
            </p>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              Snapix Media specializes in designing and developing websites that are fast, user-friendly, and optimized for performance across all devices. We combine creativity with the latest technologies to build websites that not only look impressive but also support your business goals by improving engagement, generating leads, and increasing conversions.
            </p>
          </div>

          {/* Interactive Browser Mockup */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-3xl border border-slate-200 bg-white p-2 shadow-xl shadow-slate-200/30 overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-radial from-neon-purple/10 to-transparent blur-2xl pointer-events-none" />
              
              {/* Browser bar */}
              <div className="flex items-center gap-1.5 px-4 py-3 bg-slate-50 border-b border-slate-100 rounded-t-2xl">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                <div className="ml-4 flex-1 max-w-[220px] h-5 bg-slate-200/60 rounded text-[9px] text-slate-400 flex items-center justify-center font-mono">
                  snapixmedia.com/web-design
                </div>
              </div>
              
              {/* Browser Mockup Body */}
              <div className="p-6 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="w-24 h-4 bg-neon-purple/20 rounded-full" />
                  <div className="flex gap-2">
                    <div className="w-8 h-3.5 bg-slate-100 rounded-full" />
                    <div className="w-8 h-3.5 bg-slate-100 rounded-full" />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="h-20 rounded-2xl bg-gradient-to-br from-blue-500/5 to-indigo-500/5 border border-blue-500/10 p-3 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300">
                    <div className="w-5 h-5 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-600 font-bold text-[9px]">S</div>
                    <div className="w-12 h-2.5 bg-blue-500/20 rounded-full" />
                  </div>
                  <div className="h-20 rounded-2xl bg-gradient-to-br from-indigo-500/5 to-purple-500/5 border border-indigo-500/10 p-3 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300">
                    <div className="w-5 h-5 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-600 font-bold text-[9px]">D</div>
                    <div className="w-12 h-2.5 bg-indigo-500/20 rounded-full" />
                  </div>
                  <div className="h-20 rounded-2xl bg-gradient-to-br from-purple-500/5 to-pink-500/5 border border-purple-500/10 p-3 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300">
                    <div className="w-5 h-5 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-600 font-bold text-[9px]">E</div>
                    <div className="w-12 h-2.5 bg-purple-500/20 rounded-full" />
                  </div>
                </div>
                <div className="flex flex-col gap-2 border-t border-slate-100 pt-4">
                  <div className="w-full h-3 bg-slate-100 rounded-full" />
                  <div className="w-5/6 h-3 bg-slate-100 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro Paragraph 3 */}
        <section className="mb-24 p-8 rounded-3xl border border-slate-200/60 bg-slate-50/50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-48 h-48 rounded-full bg-radial from-neon-cyan/5 to-transparent blur-3xl pointer-events-none" />
          <p className="text-slate-600 text-sm sm:text-base font-semibold leading-relaxed relative z-10 text-center max-w-4xl mx-auto">
            Our experienced web designers and developers understand the importance of intuitive navigation, attractive layouts, and exceptional user experience. Every website we create is customized to reflect your brand, deliver outstanding performance, and provide visitors with a smooth browsing experience. Whether you need a business website, portfolio, landing page, or eCommerce store, Snapix Media delivers high-quality web solutions designed to help your business grow and succeed online.
          </p>
        </section>

        {/* Capabilities Section */}
        <section className="py-12 border-t border-slate-200/50 mb-24">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-xs font-bold text-neon-purple uppercase tracking-widest">Capabilities</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 font-display">Our Web Offerings</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <GlassCard key={i} className="flex flex-col justify-between h-full p-6 sm:p-8" hoverGlow>
                  <div className="flex flex-col gap-4">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${cap.color} border flex items-center justify-center`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">{cap.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-semibold">{cap.desc}</p>
                    <p className="text-xs text-slate-500 leading-relaxed">{cap.subDesc}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <p className="text-xs text-slate-400 italic leading-relaxed">{cap.seoDesc}</p>
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </section>

        {/* E-Commerce Deep-Dive Section */}
        <section className="py-16 border-t border-slate-200/50 mb-24">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-neon-purple/20 bg-neon-purple/5 text-neon-purple text-xs font-bold tracking-wider w-fit uppercase">
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>E-Commerce Deep-Dive</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
                E - Commerce Development
              </h2>
              <p className="text-slate-600 text-sm sm:text-base font-semibold leading-relaxed">
                An eCommerce website is essential for businesses looking to sell products or services online and reach customers without geographical limits. A well-designed online store not only increases sales but also enhances customer experience and strengthens your brand's digital presence.
              </p>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                At SnapixMedia, we specialize in developing secure, scalable, and user-friendly eCommerce websites tailored to your business needs. Our team combines creative design with modern development technologies to build high-performing online stores that are easy to manage and optimized for conversions.
              </p>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                From seamless navigation and secure payment integration to mobile responsiveness and performance optimization, we create feature-rich eCommerce websites that help you attract customers, boost sales, and grow your business online.
              </p>
            </div>

            {/* Why E-Commerce checklist */}
            <div className="w-full lg:w-1/2">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-lg shadow-slate-200/20 relative overflow-hidden">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 font-display">Why is E-Commerce Important?</h3>
                
                <div className="flex flex-col gap-5">
                  {whyEcommerce.map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-50 border border-purple-200 flex items-center justify-center text-neon-purple">
                        <CheckCircle className="w-4 h-4" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-slate-900">{item.title}</span>
                        <span className="text-xs text-slate-500 leading-normal">{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Grid */}
        <section className="py-16 border-t border-slate-200/50 mb-16">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-xs font-bold text-neon-cyan uppercase tracking-widest">Premium Features</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 font-display">Key Features of our Services</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyFeatures.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <div key={i} className="flex gap-4 p-5 rounded-2xl border border-slate-100 hover:border-neon-purple/20 bg-white hover:bg-slate-50/50 transition-all duration-300">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-neon-purple">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h4 className="text-base font-bold text-slate-900 leading-snug">{feat.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-medium">{feat.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <section className="p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200 text-center relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-radial from-neon-purple/5 to-transparent blur-3xl pointer-events-none" />
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3 font-display">Ready to build your web storefront?</h2>
          <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed font-semibold mb-8">
            Get a high-performance, optimized design and code layout custom built by our team.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-neon-purple to-neon-cyan hover:opacity-90 shadow-md transition-all cursor-pointer"
          >
            Launch Web Project
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </section>
      </main>

      <Footer />
      <WhatsAppChat />
    </div>
  );
}
