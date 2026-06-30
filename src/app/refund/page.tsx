import Link from "next/link";
import { ArrowLeft, ShieldCheck, Mail, Phone, MapPin, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MouseFollower from "@/components/MouseFollower";
import WhatsAppChat from "@/components/WhatsAppChat";

export default function RefundPolicy() {
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
            <span>Billing Document</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight font-display">
            Refund & Cancellation Policy
          </h1>
          <p className="text-slate-550 text-xs sm:text-sm flex items-center gap-1.5 font-semibold mt-1">
            <Calendar className="w-4 h-4" /> Last Updated: June 21, 2026
          </p>
        </div>

        {/* Policy Content */}
        <div className="flex flex-col gap-8 text-sm leading-relaxed text-slate-650 font-medium">
          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-bold text-slate-900 font-display">1. Overview</h2>
            <p>
              At <strong>Snapix Media</strong>, we aim to deliver high-quality, custom-tailored software engineering, website development, SEO optimization, and digital marketing services. Because our services are structured as customized intellectual solutions, our refund and cancellation practices are outlined below.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-bold text-slate-900 font-display">2. Service Cancellation</h2>
            <p>
              Clients can request service cancellations under the following terms:
            </p>
            <ul className="list-disc pl-5 flex flex-col gap-2">
              <li><strong>Web Development & Custom Applications:</strong> You may cancel a project during its discovery or wireframing phase (prior to core code generation). Once coding has commenced, cancellation is subject to payments for milestones completed.</li>
              <li><strong>Digital Marketing & Retainers:</strong> Monthly retainer marketing services can be cancelled by providing a 30-day written notice. Any ad budgets pre-allocated in advertising networks (Meta, Google, etc.) are managed directly on client ad accounts and cannot be refunded by Snapix Media.</li>
            </ul>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-bold text-slate-900 font-display">3. Refund Policy</h2>
            <p>
              Due to the customized nature of human resource allocation and code deployment, refunds are subject to:
            </p>
            <ul className="list-disc pl-5 flex flex-col gap-2">
              <li><strong>Initial Deposits:</strong> Initial booking deposits or setup fees are non-refundable as they cover direct architectural research and project setup parameters.</li>
              <li><strong>Completed Milestones:</strong> Once a project milestone is delivered and approved by the client, the corresponding billing segment is final and non-refundable.</li>
              <li><strong>Technical Failures:</strong> In the rare event of a complete service failure where deliverables cannot be supplied as outlined in the Statement of Work, a partial refund matching the unfinished scope will be processed.</li>
            </ul>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-bold text-slate-900 font-display">4. Dispute Resolution</h2>
            <p>
              We believe in client satisfaction. If you are dissatisfied with any phase of website development or campaign performance, please contact our account supervisors immediately to seek revisions or setup an adjustment meeting.
            </p>
          </section>

          {/* Contact Details Card */}
          <section className="mt-8 p-6 rounded-3xl bg-white border border-slate-200/80 flex flex-col gap-4 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 font-display border-b border-slate-200/50 pb-2">
              5. Billing & Refund Support
            </h3>
            <p className="text-xs text-slate-555 leading-relaxed font-semibold">
              For any refund requests or contract cancellations, please contact our finance and billing department:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-neon-purple shadow-sm">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[9px] text-slate-505 uppercase font-semibold">Email us</span>
                  <a href="mailto:info@snapixmedia.com" className="block text-xs font-bold text-slate-700 hover:text-slate-900 transition-colors">
                    info@snapixmedia.com
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
                    Second Floor, Plat No - , Sector 6, Transport Nagar, Agra, Uttar Pradesh, India - 282002
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
