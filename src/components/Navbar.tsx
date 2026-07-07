"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, ChevronDown, Home, Laptop, Rocket, ShoppingBag, Info, ArrowRight } from "lucide-react";

interface SubLink {
  name: string;
  href: string;
  desc: string;
}

interface NavLink {
  name: string;
  href?: string;
  subLinks?: SubLink[];
}

const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "Web Development", href: "/services/web-design-development" },
  {
    name: "Digital Marketing",
    subLinks: [
      { name: "Graphic Design & Video Editing", href: "/services/graphic-design-video-ads", desc: "Stunning brand graphics, social creatives, and video ads." },
      { name: "Social Media Marketing", href: "/services/social-media-marketing", desc: "Organic campaigns, branding, and graphics." },
      { name: "Google & Meta Paid Ads", href: "/services/paid-ads", desc: "Audience targeting, PPC, and campaign audits." },
      { name: "SEO/AEO", href: "/services/seo-aeo", desc: "Organic page search optimization & LLM visibility." },
    ],
  },
  {
    name: "Marketplace",
    subLinks: [
      { name: "Amazon", href: "/marketplace/amazon", desc: "Account launch, listing optimization, and advertising campaigns." },
      { name: "Flipkart", href: "/marketplace/flipkart", desc: "Boost organic visibility and manage shop listings." },
      { name: "Myntra", href: "/marketplace/myntra", desc: "Fashion catalog optimization and apparel account growth." },
      { name: "Meesho", href: "/marketplace/meesho", desc: "Cataloging and management for social commerce scaling." },
      { name: "Ajio", href: "/marketplace/ajio", desc: "Sourcing audits, cataloging, and store performance." },
      { name: "Jio Mart", href: "/marketplace/jiomart", desc: "Grocery and retail listing and operations." },
    ],
  },
  {
    name: "About",
    subLinks: [
      { name: "About us", href: "/about", desc: "Our identity, values, and company mission." },
      { name: "Our Team", href: "/about/team", desc: "Meet the engineers, designers, and growth experts." },
      { name: "Our Partner", href: "/about/partners", desc: "Platform integrations and alliances." },
      { name: "Portfolio", href: "/portfolio", desc: "Review real metrics, web audits, and leads generated." },
      { name: "Blog", href: "/blog", desc: "Technical breakdowns and digital insights." },
    ],
  },
  { name: "Contact", href: "/contact" },
];

const socialIcons: Record<string, React.ReactNode> = {
  twitter: (
    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  linkedin: (
    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
    </svg>
  ),
  facebook: (
    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1V12h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z" />
    </svg>
  ),
  instagram: (
    <svg className="w-3.5 h-3.5 fill-none stroke-current" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  ),
};

export default function Navbar({ isDarkHero = false }: { isDarkHero?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpandedMenu, setMobileExpandedMenu] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
    setMobileExpandedMenu(null);
  }, [pathname]);

  const isTransparentDark = isDarkHero && !isScrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "py-4 bg-white/90 backdrop-blur-md border-b border-slate-200/50 shadow-lg shadow-slate-200/10"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative flex items-center gap-2 group cursor-pointer select-none">
          <span className={`text-2xl sm:text-3xl font-extrabold font-display tracking-tight transition-colors duration-300 ${
            isTransparentDark ? "text-white" : "text-slate-900"
          }`}>
            Snapix<span className="text-[#1fb37a] group-hover:text-[#169a67] transition-colors duration-300"> Media</span>
          </span>
          <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#1fb37a] group-hover:w-full transition-all duration-300" />
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-5">
          {navLinks.map((link) => {
            const hasSubLinks = !!link.subLinks;

            if (hasSubLinks) {
              const isDropdownActive = activeDropdown === link.name;
              const isPathInSublinks = link.subLinks?.some(sub => pathname === sub.href);

              return (
                <div
                  key={link.name}
                  className="relative py-2 group"
                  onMouseEnter={() => setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className={`flex items-center gap-1 text-sm font-semibold tracking-wide transition-colors duration-300 cursor-pointer ${
                      isDropdownActive || isPathInSublinks
                        ? (isTransparentDark ? "text-white font-bold" : "text-slate-900 font-bold")
                        : (isTransparentDark ? "text-slate-300 hover:text-white" : "text-slate-600 hover:text-slate-900")
                    }`}
                  >
                    {link.name}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isDropdownActive
                          ? (isTransparentDark ? "rotate-180 text-white" : "rotate-180 text-slate-900")
                          : (isTransparentDark ? "text-slate-300/80" : "text-slate-400")
                      }`}
                    />
                  </button>

                  {/* Dropdown Menu Box */}
                  <AnimatePresence>
                    {isDropdownActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 15 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-80 rounded-2xl border border-slate-200/60 bg-white/95 backdrop-blur-md p-4 shadow-xl shadow-slate-200/30 z-50 overflow-hidden"
                      >
                        {/* Decorative background orb */}
                        <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-radial from-neon-purple/5 to-transparent blur-xl pointer-events-none" />

                        <div className="flex flex-col gap-1 relative z-10">
                          {link.subLinks?.map((sub) => {
                            const isSubActive = pathname === sub.href;
                            return (
                              <Link
                                key={sub.name}
                                href={sub.href}
                                className={`group/item flex flex-col p-2.5 rounded-xl transition-all duration-300 ${
                                  isSubActive
                                    ? "bg-slate-50 border border-slate-200/50"
                                    : "hover:bg-slate-50 border border-transparent"
                                }`}
                              >
                                <span
                                  className={`text-xs font-bold transition-colors duration-300 flex items-center gap-1 ${
                                    isSubActive ? "text-neon-purple" : "text-slate-800 group-hover/item:text-neon-purple"
                                  }`}
                                >
                                  {sub.name}
                                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover/item:opacity-100 transition-opacity translate-y-0.5" />
                                </span>
                                <span className="text-[10px] text-slate-505 mt-0.5 leading-normal">
                                  {sub.desc}
                                </span>
                              </Link>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href || "/"}
                className={`relative text-sm font-semibold tracking-wide transition-colors duration-300 py-1 ${
                  isActive
                    ? (isTransparentDark ? "text-white font-bold" : "text-slate-900 font-bold")
                    : (isTransparentDark ? "text-slate-300 hover:text-white" : "text-slate-600 hover:text-slate-900")
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[3px] bg-neon-purple"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Social Icons */}
        <div className="hidden md:flex items-center gap-2.5">
          {["twitter", "linkedin", "facebook", "instagram"].map((social) => {
            let hoverStyle = "";
            if (social === "twitter") {
              hoverStyle = isTransparentDark
                ? "hover:bg-white hover:text-black hover:border-white hover:shadow-[0_0_10px_rgba(255,255,255,0.25)]"
                : "hover:bg-slate-950 hover:text-white hover:border-slate-950 hover:shadow-[0_0_10px_rgba(15,23,42,0.15)]";
            } else if (social === "linkedin") {
              hoverStyle = "hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] hover:shadow-[0_0_10px_rgba(0,119,181,0.25)]";
            } else if (social === "facebook") {
              hoverStyle = "hover:bg-[#1877f2] hover:text-white hover:border-[#1877f2] hover:shadow-[0_0_10px_rgba(24,119,242,0.25)]";
            } else if (social === "instagram") {
              hoverStyle = "hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:text-white hover:border-transparent hover:shadow-[0_0_10px_rgba(238,42,123,0.25)]";
            }

            return (
              <a
                key={social}
                href={social === "facebook" ? "https://facebook.com/snapixmedia" : `https://${social}.com`}
                target="_blank"
                rel="noreferrer"
                className={`w-9 h-9 flex items-center justify-center rounded-full border transition-all duration-300 hover:scale-110 ${
                  isTransparentDark
                    ? "border-white/15 bg-white/5 text-slate-200"
                    : "border-slate-200 bg-slate-50 text-slate-655"
                } ${hoverStyle}`}
                aria-label={social}
              >
                {socialIcons[social]}
              </a>
            );
          })}
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden p-2 transition-colors ${
            isTransparentDark ? "text-white hover:text-slate-200" : "text-slate-600 hover:text-slate-900"
          }`}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden fixed inset-x-0 bottom-0 top-[72px] sm:top-[88px] bg-slate-950/95 backdrop-blur-xl border-t border-white/5 z-40 overflow-y-auto flex flex-col justify-between"
          >
            {/* Neon Gradient glow orbs */}
            <div className="absolute top-1/4 left-10 w-48 h-48 rounded-full bg-radial from-neon-purple/10 to-transparent blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 right-10 w-48 h-48 rounded-full bg-radial from-neon-cyan/10 to-transparent blur-3xl pointer-events-none" />

            <div className="flex flex-col gap-4 px-6 py-8 relative z-10">
              {navLinks.map((link) => {
                const hasSubLinks = !!link.subLinks;
                const isExpanded = mobileExpandedMenu === link.name;
                const IconComponent =
                  link.name === "Home" ? Home :
                  link.name === "Web Development" ? Laptop :
                  link.name === "Digital Marketing" ? Rocket :
                  link.name === "Marketplace" ? ShoppingBag : Info;

                if (hasSubLinks) {
                  return (
                    <div key={link.name} className="flex flex-col border-b border-white/5 pb-3">
                      <button
                        onClick={() => setMobileExpandedMenu(isExpanded ? null : link.name)}
                        className="flex items-center justify-between py-2.5 cursor-pointer w-full text-left group"
                      >
                        <span className="flex items-center gap-3">
                          <div className={`p-2 rounded-xl border transition-all duration-300 ${
                            isExpanded 
                              ? "bg-neon-purple/20 border-neon-purple/30 text-neon-purple" 
                              : "bg-white/5 border-white/10 text-slate-400 group-hover:text-white"
                          }`}>
                            <IconComponent className="w-5 h-5" />
                          </div>
                          <span className={`text-lg font-bold tracking-tight transition-colors duration-300 ${
                            isExpanded ? "text-neon-purple" : "text-slate-200 group-hover:text-white"
                          }`}>
                            {link.name}
                          </span>
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${
                            isExpanded ? "rotate-180 text-neon-purple" : ""
                          }`}
                        />
                      </button>

                      {/* Expanded Accordion Links */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="flex flex-col gap-2 pl-3 py-2 mt-1 overflow-hidden"
                          >
                            {link.subLinks?.map((sub) => {
                              const isSubActive = pathname === sub.href;
                              return (
                                <Link
                                  key={sub.name}
                                  href={sub.href}
                                  className={`text-sm py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-between border ${
                                    isSubActive
                                      ? "text-neon-cyan bg-neon-cyan/5 border-neon-cyan/25 font-bold"
                                      : "text-slate-300 bg-white/3 border-white/5 hover:bg-white/5 hover:text-white"
                                  }`}
                                >
                                  <span>{sub.name}</span>
                                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                                </Link>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href || "/"}
                    className="flex items-center gap-3 border-b border-white/5 pb-3 py-2.5 group"
                  >
                    <div className={`p-2 rounded-xl border transition-all duration-300 ${
                      isActive 
                        ? "bg-neon-purple/20 border-neon-purple/30 text-neon-purple" 
                        : "bg-white/5 border-white/10 text-slate-400 group-hover:text-white"
                    }`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className={`text-lg font-bold tracking-tight transition-colors duration-300 ${
                      isActive ? "text-neon-purple" : "text-slate-200 group-hover:text-white"
                    }`}>
                      {link.name}
                    </span>
                  </Link>
                );
              })}
            </div>

            {/* Footer Area with Book Audit Button & Social Links */}
            <div className="p-6 border-t border-white/5 bg-slate-900/40 backdrop-blur-md relative z-10 flex flex-col gap-6">
              <Link
                href="/contact"
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-neon-purple to-neon-cyan text-slate-950 text-center font-bold text-sm tracking-wide shadow-lg shadow-neon-purple/10 hover:shadow-neon-purple/20 transition-all cursor-pointer"
              >
                Book Free Consultation
              </Link>
              <div className="flex items-center justify-center gap-4">
                {["twitter", "linkedin", "facebook", "instagram"].map((social) => {
                  let hoverStyle = "hover:border-neon-purple hover:bg-neon-purple/10 hover:text-white";
                  return (
                    <a
                      key={social}
                      href={social === "facebook" ? "https://facebook.com/snapixmedia" : `https://${social}.com`}
                      target="_blank"
                      rel="noreferrer"
                      className={`w-11 h-11 flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-300 hover:scale-115 transition-all duration-300 ${hoverStyle}`}
                      aria-label={social}
                    >
                      {socialIcons[social]}
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
