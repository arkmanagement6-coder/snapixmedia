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
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5C59GFHH');`,
          }}
        />
      </head>
      <body className="bg-[#f8fafc] text-[#334155] font-sans selection:bg-indigo-600/10 selection:text-indigo-900 overflow-x-hidden min-h-screen flex flex-col">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5C59GFHH"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        
        {children}
      </body>
    </html>
  );
}

