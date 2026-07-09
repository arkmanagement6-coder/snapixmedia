import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing Agency in Agra | Snapix Media",
  description: "Looking for the best digital marketing agency in Agra? Snapix Media delivers SEO, PPC, social media & web design that grow real revenue. Get a free audit today.",
  keywords: [
    "Digital Marketing Agency in Agra",
    "Best Digital Marketing Agency in Agra",
    "SEO Services in Agra",
    "PPC Ads Agency Agra",
    "Social Media Marketing Agra",
    "Website Design in Agra",
    "Agra Digital Marketing",
    "Snapix Media Agra"
  ],
};

export default function AgraLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
