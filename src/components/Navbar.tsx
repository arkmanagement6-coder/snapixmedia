"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";

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
  {
    name: "About",
    subLinks: [
      { name: "About us", href: "/about", desc: "Our identity, values, and company mission." },
      { name: "Our Team", href: "/about/team", desc: "Meet the engineers, designers, and growth experts." },
      { name: "Our Partner", href: "/about/partners", desc: "Platform integrations and alliances." },
    ],
  },
  {
    name: "Services",
    subLinks: [
      { name: "Website Design & Development", href: "/services/web-design-development", desc: "Next.js storefronts & responsive web systems." },
      { name: "Graphic Design & Video Ads", href: "/services/graphic-design-video-ads", desc: "Stunning brand graphics, social creatives, and video ads." },
      { name: "Social Media Marketing", href: "/services/social-media-marketing", desc: "Organic campaigns, branding, and graphics." },
      { name: "Google & Meta Paid Ads", href: "/services/paid-ads", desc: "Audience targeting, PPC, and campaign audits." },
      { name: "SEO/AEO", href: "/services/seo-aeo", desc: "Organic page search optimization & LLM visibility." },
    ],
  },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

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
            Snapix<span className="text-neon-purple group-hover:text-neon-cyan transition-colors duration-300"> Media</span>
          </span>
          <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-neon-purple to-neon-cyan group-hover:w-full transition-all duration-300" />
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
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
                    className={`flex items-center gap-1 text-[17px] font-extrabold tracking-wide transition-colors duration-300 cursor-pointer ${
                      isDropdownActive || isPathInSublinks
                        ? (isTransparentDark ? "text-white font-black" : "text-slate-900 font-black")
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
                className={`relative text-[17px] font-extrabold tracking-wide transition-colors duration-300 py-1 ${
                  isActive
                    ? (isTransparentDark ? "text-white font-black" : "text-slate-900 font-black")
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

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/contact"
            className="relative inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-neon-purple to-purple-800 hover:opacity-95 transition-all duration-300 overflow-hidden group shadow-md hover:shadow-neon-purple/20 cursor-pointer"
          >
            Enquiry Now
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </Link>
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
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden border-b border-slate-200/50 bg-white/95 backdrop-blur-lg overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col gap-3 px-6 py-6 max-h-[80vh] overflow-y-auto">
              {navLinks.map((link) => {
                const hasSubLinks = !!link.subLinks;

                if (hasSubLinks) {
                  const isExpanded = mobileExpandedMenu === link.name;
                  return (
                    <div key={link.name} className="flex flex-col border-b border-slate-100 pb-2">
                      <button
                        onClick={() => setMobileExpandedMenu(isExpanded ? null : link.name)}
                        className="flex items-center justify-between text-lg font-bold text-slate-800 py-2 cursor-pointer w-full text-left"
                      >
                        <span>{link.name}</span>
                        <ChevronDown
                          className={`w-5 h-5 text-slate-505 transition-transform duration-300 ${
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
                            transition={{ duration: 0.25 }}
                            className="flex flex-col gap-2 pl-3 py-1 bg-slate-50/50 rounded-xl mt-1 overflow-hidden"
                          >
                            {link.subLinks?.map((sub) => {
                              const isSubActive = pathname === sub.href;
                              return (
                                <Link
                                  key={sub.name}
                                  href={sub.href}
                                  className={`text-sm py-2 px-2 rounded-lg transition-colors font-semibold ${
                                    isSubActive ? "text-neon-purple bg-purple-50/40 font-bold" : "text-slate-600 hover:text-slate-900"
                                  }`}
                                >
                                  {sub.name}
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
                    className={`text-xl font-extrabold tracking-wide border-b border-slate-100 pb-2 transition-colors py-2 ${
                      isActive ? "text-slate-900 font-bold" : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              <Link
                href="/contact"
                className="mt-4 flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-neon-purple to-purple-800 hover:opacity-95 transition-all duration-300 cursor-pointer shadow-md hover:shadow-neon-purple/20"
              >
                Enquiry Now
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
