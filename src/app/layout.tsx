import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Snapix Media | Premium IT & Digital Marketing Agency",
  description: "Transform your business through premium technology & data-driven digital growth. We build high-performance websites, scalable custom applications, and campaigns that accelerate conversion.",
  keywords: ["Digital Marketing", "SEO Optimization", "Web Development", "UI/UX Design", "IT Agency", "E-commerce Development"],
  authors: [{ name: "Snapix Media Team" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} scroll-smooth`}
    >
      <body className="bg-[#f8fafc] text-[#334155] font-sans selection:bg-indigo-600/10 selection:text-indigo-900 overflow-x-hidden min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
