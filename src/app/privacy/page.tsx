import Link from "next/link";
import { ArrowLeft, ShieldCheck, Mail, Phone, MapPin, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MouseFollower from "@/components/MouseFollower";
import WhatsAppChat from "@/components/WhatsAppChat";

export default function PrivacyPolicy() {
  return (
    <div className="relative min-h-screen bg-transparent text-slate-300 overflow-x-hidden flex flex-col font-sans">
      <MouseFollower />
      <Navbar />

      <main className="flex-1 pt-32 pb-20 px-6 max-w-4xl mx-auto w-full">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-white transition-colors duration-300 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Title Header */}
        <div className="flex flex-col gap-4 border-b border-white/5 pb-8 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-neon-purple/20 bg-neon-purple/5 text-neon-purple text-xs font-bold tracking-wider w-fit uppercase">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Legal Document</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight font-display">
            Privacy Policy
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm flex items-center gap-1.5 font-semibold mt-1">
            <Calendar className="w-4 h-4" /> Last Updated: June 13, 2026
          </p>
        </div>

        {/* Policy Content */}
        <div className="flex flex-col gap-8 text-sm leading-relaxed text-slate-400 font-medium">
          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-bold text-white font-display">1. Introduction</h2>
            <p>
              Welcome to <strong>Snapix Media</strong>. We respect your privacy and are committed to protecting your personal data. This Privacy Policy outlines how we collect, process, and safeguard your data when you visit our website or interact with our digital marketing and web development services.
            </p>
            <p>
              By accessing our website and using our systems, you agree to the practices described in this policy.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-bold text-white font-display">2. Data We Collect</h2>
            <p>
              We collect information that helps us personalize and improve your experience. This includes:
            </p>
            <ul className="list-disc pl-5 flex flex-col gap-2">
              <li><strong>Contact Parameters:</strong> Name, email address, phone number, and mailing address when you submit our project requirements intake form or schedule a consultation.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, operating system, pages visited, and loading speed statistics.</li>
              <li><strong>Communication Logs:</strong> Information you provide when messaging us directly via our integrated WhatsApp chat widgets or mail channels.</li>
            </ul>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-bold text-white font-display">3. How We Use Your Data</h2>
            <p>
              We use the parameters collected to deliver our core design, development, and marketing solutions, including:
            </p>
            <ul className="list-disc pl-5 flex flex-col gap-2">
              <li>Responding to project queries, scheduling discovery sessions, and deploying digital campaigns.</li>
              <li>Optimizing our user experience, monitoring Lighthouse speed scores, and implementing secure database interactions.</li>
              <li>Sending newsletters, updates, or strategic promotional audits (only if explicitly opted-in).</li>
            </ul>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-bold text-white font-display">4. Data Integrity and Security</h2>
            <p>
              We implement industry-standard security measures (SSL data encryption, secure edge pipelines, and server access tokens) to ensure your data is kept secure. We do not sell, rent, or distribute your personal details to third-party aggregators under any circumstances.
            </p>
          </section>

          {/* Contact Details Card */}
          <section className="mt-8 p-6 rounded-3xl bg-slate-900/40 border border-white/5 flex flex-col gap-4">
            <h3 className="text-lg font-bold text-white font-display border-b border-white/5 pb-2">
              5. Contact & Data Officer Details
            </h3>
            <p className="text-xs text-slate-450 leading-relaxed font-semibold">
              If you have any questions about this Privacy Policy or wish to request data erasure, please contact our administrative team:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-950 border border-white/5 flex items-center justify-center text-neon-purple shadow-md">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[9px] text-slate-400 uppercase font-semibold">Email us</span>
                  <a href="mailto:snapixmediaofficial@gmail.com" className="block text-xs font-bold text-slate-200 hover:text-white transition-colors">
                    snapixmediaofficial@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-950 border border-white/5 flex items-center justify-center text-neon-blue shadow-md">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[9px] text-slate-400 uppercase font-semibold">Call us</span>
                  <a href="tel:+919675818088" className="block text-xs font-bold text-slate-200 hover:text-white transition-colors">
                    +91 9675818088
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:col-span-2">
                <div className="w-8 h-8 rounded-lg bg-slate-950 border border-white/5 flex items-center justify-center text-neon-purple shadow-md shrink-0">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[9px] text-slate-400 uppercase font-semibold">Official Address</span>
                  <p className="text-xs font-bold text-slate-200 leading-relaxed">
                    17 Kamla Kunj Kamla Nagar Tej Nagar Agra 282005
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-white/5 pt-4 mt-2">
              <p className="text-xs text-slate-400 font-semibold">
                <strong>Founder & Data Supervisor:</strong> Harsh Khubchandani
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
      <WhatsAppChat />
    </div>
  );
}
