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
  github: (
    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
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

        {/* Desktop Social Icons */}
        <div className="hidden md:flex items-center gap-2.5">
          {["twitter", "linkedin", "github", "instagram"].map((social) => {
            let hoverStyle = "";
            if (social === "twitter") {
              hoverStyle = isTransparentDark
                ? "hover:bg-white hover:text-black hover:border-white hover:shadow-[0_0_10px_rgba(255,255,255,0.25)]"
                : "hover:bg-slate-950 hover:text-white hover:border-slate-950 hover:shadow-[0_0_10px_rgba(15,23,42,0.15)]";
            } else if (social === "linkedin") {
              hoverStyle = "hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] hover:shadow-[0_0_10px_rgba(0,119,181,0.25)]";
            } else if (social === "github") {
              hoverStyle = isTransparentDark
                ? "hover:bg-slate-800 hover:text-white hover:border-slate-700 hover:shadow-[0_0_10px_rgba(255,255,255,0.1)]"
                : "hover:bg-slate-900 hover:text-white hover:border-slate-900 hover:shadow-[0_0_10px_rgba(15,23,42,0.15)]";
            } else if (social === "instagram") {
              hoverStyle = "hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:text-white hover:border-transparent hover:shadow-[0_0_10px_rgba(238,42,123,0.25)]";
            }

            return (
              <a
                key={social}
                href={`https://${social}.com`}
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

              {/* Mobile Social Icons */}
              <div className="mt-6 flex items-center justify-center gap-4 border-t border-slate-100 pt-6">
                {["twitter", "linkedin", "github", "instagram"].map((social) => {
                  let hoverStyle = "";
                  if (social === "twitter") {
                    hoverStyle = "hover:bg-slate-950 hover:text-white hover:border-slate-950 hover:shadow-[0_0_10px_rgba(15,23,42,0.15)]";
                  } else if (social === "linkedin") {
                    hoverStyle = "hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] hover:shadow-[0_0_10px_rgba(0,119,181,0.25)]";
                  } else if (social === "github") {
                    hoverStyle = "hover:bg-slate-900 hover:text-white hover:border-slate-900 hover:shadow-[0_0_10px_rgba(15,23,42,0.15)]";
                  } else if (social === "instagram") {
                    hoverStyle = "hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:text-white hover:border-transparent hover:shadow-[0_0_10px_rgba(238,42,123,0.25)]";
                  }

                  return (
                    <a
                      key={social}
                      href={`https://${social}.com`}
                      target="_blank"
                      rel="noreferrer"
                      className={`w-10 h-10 flex items-center justify-center rounded-full border transition-all duration-300 hover:scale-110 border-slate-200 bg-slate-50 text-slate-600 ${hoverStyle}`}
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
