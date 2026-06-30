import Link from "next/link";
import { ArrowLeft, ShieldCheck, Mail, Phone, MapPin, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MouseFollower from "@/components/MouseFollower";
import WhatsAppChat from "@/components/WhatsAppChat";

export default function TermsOfService() {
  return (
    <div className="relative min-h-screen bg-transparent text-slate-655 overflow-x-hidden flex flex-col font-sans">
      <MouseFollower />
      <Navbar />

      <main className="flex-1 pt-32 pb-20 px-6 max-w-4xl mx-auto w-full">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 hover:text-slate-900 transition-colors duration-300 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Title Header */}
        <div className="flex flex-col gap-4 border-b border-slate-200/50 pb-8 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-neon-purple/20 bg-neon-purple/5 text-neon-purple text-xs font-bold tracking-wider w-fit uppercase">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Legal Agreement</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight font-display">
            Terms of Service
          </h1>
          <p className="text-slate-550 text-xs sm:text-sm flex items-center gap-1.5 font-semibold mt-1">
            <Calendar className="w-4 h-4" /> Last Updated: June 13, 2026
          </p>
        </div>

        {/* Terms Content */}
        <div className="flex flex-col gap-8 text-sm leading-relaxed text-slate-650 font-medium">
          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-bold text-slate-900 font-display">1. Acceptance of Terms</h2>
            <p>
              By accessing the website at <strong>Snapix Media</strong>, you agree to be bound by these Terms of Service, all applicable laws and regulations, and agree that you are responsible for compliance with any local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-bold text-slate-900 font-display">2. Service Scope</h2>
            <p>
              Snapix Media provides high-performance custom web development, Shopify e-commerce integrations, technical SEO campaigns, and digital marketing services. The timelines, deliverables, and budgets are agreed upon inside individual client statements of work (SOW) and are subject to these general terms.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-bold text-slate-900 font-display">3. Payment & Invoicing</h2>
            <p>
              Clients agree to make milestone payments as specified in their project contracts. All invoices sent by Snapix Media are subject to standard payment timelines (typically Net 15 days). Failure to make payments on time may result in project suspension or advertising campaign pauses.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-bold text-slate-900 font-display">4. Intellectual Property</h2>
            <p>
              Unless specified otherwise in an active contract, all source code, graphic designs, copy, and database schemas developed by Snapix Media are owned by the client upon full payment of the project balance. Prior to final payment, all preliminary layouts and codes remain the property of Snapix Media.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-bold text-slate-900 font-display">5. Limitations of Liability</h2>
            <p>
              In no event shall Snapix Media or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website or campaigns.
            </p>
          </section>

          {/* Contact Details Card */}
          <section className="mt-8 p-6 rounded-3xl bg-white border border-slate-200/80 flex flex-col gap-4 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 font-display border-b border-slate-200/50 pb-2">
              6. Contact Support & Inquiries
            </h3>
            <p className="text-xs text-slate-555 leading-relaxed font-semibold">
              If you have any questions or disputes regarding these Terms of Service, please reach out to our support channel:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-neon-purple shadow-sm">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[9px] text-slate-500 uppercase font-semibold">Email us</span>
                  <a href="mailto:snapixmediaofficial@gmail.com" className="block text-xs font-bold text-slate-700 hover:text-slate-900 transition-colors">
                    snapixmediaofficial@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-neon-blue shadow-sm">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[9px] text-slate-505 uppercase font-semibold">Call us</span>
                  <a href="tel:+919675818088" className="block text-xs font-bold text-slate-700 hover:text-slate-900 transition-colors">
                    +91 9675818088
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:col-span-2">
                <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-neon-purple shadow-sm shrink-0">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[9px] text-slate-555 uppercase font-semibold">Official Address</span>
                  <p className="text-xs font-bold text-slate-700 leading-relaxed">
                    17 Kamla Kunj Kamla Nagar Tej Nagar Agra 282005
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-200/50 pt-4 mt-2">
              <p className="text-xs text-slate-600 font-semibold">
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
