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
  title: "Agenius | Premium IT & Digital Marketing Agency",
  description: "Transform your business through premium technology & data-driven digital growth. We build high-performance websites, scalable custom applications, and campaigns that accelerate conversion.",
  keywords: ["Digital Marketing", "SEO Optimization", "Web Development", "UI/UX Design", "IT Agency", "E-commerce Development"],
  authors: [{ name: "Agenius Team" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} dark scroll-smooth`}
    >
      <body className="bg-[#030014] text-[#ededed] font-sans selection:bg-purple-600/30 selection:text-white overflow-x-hidden min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
