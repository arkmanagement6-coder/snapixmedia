"use client";

import { motion } from "framer-motion";

const clientLogos = [
  {
    name: "TechFlow",
    icon: (
      <svg className="w-28 h-6 text-slate-400 hover:text-neon-purple transition-colors duration-300 fill-current" viewBox="0 0 100 24">
        <path d="M10 4 L14 10 L18 4 H22 L16 12 L22 20 H18 L14 14 L10 20 H6 L12 12 L6 4 H10 Z M30 8 H38 V11 H30 V14 H38 V17 H30 V20 H26 V4 H38 V7 H30 V8 Z M45 4 Q49 4 51 6 Q53 8 53 12 Q53 16 51 18 Q49 20 45 20 H41 V4 H45 Z M45 7 H44 V17 H45 Q47 17 48.5 15.5 Q50 14 50 12 Q50 10 48.5 8.5 Q47 7 45 7 Z M65 4 H69 V16 H75 V20 H65 V4 Z M85 4 Q89 4 91 6 Q93 8 93 12 Q93 16 91 18 Q89 20 85 20 Q81 20 79 18 Q77 16 77 12 Q77 8 79 6 Q81 4 85 4 Z M85 7 Q83 7 81.5 8.5 Q80 10 80 12 Q80 14 81.5 15.5 Q83 17 85 17 Q87 17 88.5 15.5 Q90 14 90 12 Q90 10 88.5 8.5 Q87 7 85 7 Z" />
      </svg>
    ),
  },
  {
    name: "ShopifyPlus",
    icon: (
      <svg className="w-28 h-6 text-slate-400 hover:text-neon-purple transition-colors duration-300 fill-current" viewBox="0 0 100 24">
        <path d="M12 4 L8 20 H12 L16 4 H12 Z M24 6 Q22 6 20.5 7.5 Q19 9 19 11 Q19 13 20.5 14.5 Q22 16 24 16 Q26 16 27.5 14.5 Q29 13 29 11 Q29 9 27.5 7.5 Q26 6 24 6 Z M24 3 Q27.5 3 30 5.5 Q32.5 8 32.5 11 Q32.5 14.5 30 17 Q27.5 19.5 24 19.5 Q20.5 19.5 18 17 Q15.5 14.5 15.5 11 Q15.5 8 18 5.5 Q20.5 3 24 3 Z M45 4 H41 V20 H45 V13 H49 Q52 13 54 11 Q56 9 56 6.5 Q56 4 54 4 H45 Z M45 7 H49 Q50.5 7 51 8 Q51.5 9 51.5 10 Q51.5 11 51 12 Q50.5 13 49 13 H45 V7 Z M65 4 H61 V20 H65 V4 Z M75 4 H71 V20 H75 V4 Z M85 4 L81 12 L85 20 H89 L85.5 13 L93 4 H89 Z" />
      </svg>
    ),
  },
  {
    name: "CloudScale",
    icon: (
      <svg className="w-28 h-6 text-slate-400 hover:text-neon-purple transition-colors duration-300 fill-current" viewBox="0 0 100 24">
        <path d="M12 6 A 6 6 0 0 1 24 6 A 4 4 0 0 1 28 10 A 6 6 0 0 1 22 16 H 10 A 6 6 0 0 1 4 10 A 4 4 0 0 1 12 6 Z M35 4 H39 V20 H35 V4 Z M48 4 H44 V20 H48 V4 Z M60 4 H56 V20 H60 V4 Z M72 4 H68 V20 H72 V4 Z M84 4 H80 V20 H84 V4 Z" />
      </svg>
    ),
  },
  {
    name: "VentureCap",
    icon: (
      <svg className="w-28 h-6 text-slate-400 hover:text-neon-purple transition-colors duration-300 fill-current" viewBox="0 0 100 24">
        <path d="M6 4 L14 18 L22 4 H28 L18 20 H10 L2 4 H6 Z M38 4 H32 V20 H38 V4 Z M50 4 H44 V20 H50 V4 Z M62 4 H56 V20 H62 V4 Z M74 4 H68 V20 H74 V4 Z M86 4 H80 V20 H86 V4 Z" />
      </svg>
    ),
  },
  {
    name: "GrowthLoop",
    icon: (
      <svg className="w-28 h-6 text-slate-400 hover:text-neon-purple transition-colors duration-300 fill-current" viewBox="0 0 100 24">
        <path d="M12 4 Q6 4 6 10 Q6 16 12 16 Q18 16 18 10 Q18 4 12 4 Z M12 1.5 Q20.5 1.5 20.5 10 Q20.5 18.5 12 18.5 Q3.5 18.5 3.5 10 Q3.5 1.5 12 1.5 Z M35 4 H31 V20 H35 V4 Z M47 4 H43 V20 H47 V4 Z M59 4 H55 V20 H59 V4 Z M71 4 H67 V20 H71 V4 Z M83 4 H79 V20 H83 V4 Z" />
      </svg>
    ),
  },
];

export default function LogoSlider() {
  // Double the list to create a seamless infinite loop
  const logos = [...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <div className="relative w-full py-10 overflow-hidden border-y border-slate-200 bg-slate-50/50 select-none">
      {/* Edge gradient mask for smooth fade in/out */}
      <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[#f8fafc] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-[#f8fafc] to-transparent z-10 pointer-events-none" />

      <div className="flex w-max">
        <div className="animate-infinite-scroll flex gap-20 items-center whitespace-nowrap">
          {logos.map((logo, index) => (
            <div key={`${logo.name}-${index}`} className="flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity duration-300">
              {logo.icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
