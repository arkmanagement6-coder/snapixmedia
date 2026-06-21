import { Compass, Award, Users, ShieldAlert, Sparkles, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MouseFollower from "@/components/MouseFollower";
import WhatsAppChat from "@/components/WhatsAppChat";
import GlassCard from "@/components/GlassCard";

const teamMembers = [
  {
    name: "Harsh Khubchandani",
    role: "Founder & Owner",
    initials: "HK",
    gradient: "from-purple-500 to-indigo-600",
    bio: "Founder & Owner of Snapix Media, leading strategy, web engineering deployments, and result-oriented growth marketing campaigns.",
  },
  {
    name: "Diana Chen",
    role: "Head of Digital Strategy",
    initials: "DC",
    gradient: "from-purple-400 to-pink-500",
    bio: "Growth expert specializing in data-driven user acquisition, technical SEO, and paid campaign scalability.",
  },
  {
    name: "Vikram Mehta",
    role: "Lead Full-Stack Developer",
    initials: "VM",
    gradient: "from-emerald-400 to-cyan-500",
    bio: "Next.js enthusiast dedicated to code organization, headless storefronts, and serverless API speedups.",
  },
  {
    name: "Sonia Kelly",
    role: "Principal UI/UX Architect",
    initials: "SK",
    gradient: "from-amber-400 to-orange-500",
    bio: "Visual designer crafting dark-theme layouts, responsive design wireframes, and fluid user flows.",
  },
];

const milestones = [
  {
    year: "2024",
    title: "Global Agency Expansion",
    desc: "Scaled operations to 12 core experts and reached a milestones of 250+ projects completed worldwide.",
  },
  {
    year: "2023",
    title: "Best Headless Commerce App",
    desc: "Awarded top design honors for launching a custom high-performance React Native & Next.js storefront.",
  },
  {
    year: "2022",
    title: "Agency Foundation",
    desc: "Established with the vision of bridging high-end web software engineering with growth marketing precision.",
  },
];

export default function About() {
  return (
    <div className="relative min-h-screen bg-[#f8fafc] text-[#334155] overflow-x-hidden flex flex-col font-sans">
      <MouseFollower />
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-36 pb-20 px-6 glow-grid">
        <div className="absolute top-1/3 left-1/2 w-[500px] h-[300px] bg-radial from-neon-purple/5 to-transparent blur-[100px] pointer-events-none -translate-x-1/2" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-neon-purple/20 bg-neon-purple/5 text-neon-purple text-xs font-bold tracking-wider mb-6 uppercase">
            <Users className="w-3.5 h-3.5" />
            <span>Our Identity</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6 font-display">
            Building Digital Experiences That{" "}
            <span className="text-gradient-purple-cyan">Drive Results</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            We are a hybrid IT Company and Growth Marketing Agency. We believe design should be breathtaking, code should be clean, and strategies should be data-proven.
          </p>
        </div>
      </section>

      {/* Story (Mission & Vision) */}
      <section className="py-20 px-6 relative border-t border-glass-border">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <GlassCard className="flex flex-col gap-4" hoverGlow>
            <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-neon-purple">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Our Mission</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              To engineer premium software solutions and deploy data-backed campaigns that enable fast-scaling brands to convert users and accelerate organic sales.
            </p>
          </GlassCard>
 
          <GlassCard className="flex flex-col gap-4" hoverGlow>
            <div className="w-10 h-10 rounded-xl bg-violet-50 border border-violet-200 flex items-center justify-center text-neon-purple">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Our Vision</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              To be the premier engineering and growth partner globally, recognized for high speedups, design aesthetic integrity, and transparent conversion reporting.
            </p>
          </GlassCard>
 
          <GlassCard className="flex flex-col gap-4" hoverGlow>
            <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-neon-blue">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Our Values</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              We operate on absolute transparency, relentless code validation, extreme design detail, and a user-first philosophy that guarantees high retention.
            </p>
          </GlassCard>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 border-t border-glass-border bg-slate-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-xs font-bold text-neon-cyan uppercase tracking-widest">The Innovators</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mt-3 mb-4 font-display">Meet Our Core Team</h2>
            <p className="text-slate-600 text-sm">A collective of developers, visual designers, and growth hackers.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, i) => (
              <GlassCard key={i} className="flex flex-col justify-between text-center items-center h-[340px]" hoverGlow>
                <div className="flex flex-col items-center gap-4">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-tr ${member.gradient} flex items-center justify-center font-bold text-white text-2xl shadow-lg`}>
                    {member.initials}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{member.name}</h3>
                    <p className="text-xs text-neon-purple uppercase tracking-wider mt-1">{member.role}</p>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mt-2">{member.bio}</p>
                </div>
                
                <div className="flex gap-4 mt-6">
                  {["LN", "GH"].map((social) => (
                    <span key={social} className="text-[10px] font-mono text-slate-400 hover:text-slate-900 cursor-pointer transition-colors duration-300">
                      {social}
                    </span>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Timeline */}
      <section className="py-20 px-6 border-t border-glass-border">
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-xs font-bold text-neon-purple uppercase tracking-widest">History</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 mb-2 font-display">Awards & Milestones</h2>
          </div>

          <div className="relative border-l border-glass-border/40 pl-8 ml-4 flex flex-col gap-12">
            {milestones.map((item, i) => (
              <div key={i} className="relative">
                {/* Timeline node */}
                <span className="absolute -left-[41px] top-1.5 w-[18px] h-[18px] rounded-full bg-slate-50 border-2 border-neon-purple flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-neon-purple" />
                </span>

                <span className="text-xs font-bold font-mono text-neon-purple uppercase tracking-widest">{item.year}</span>
                <h3 className="text-lg font-bold text-slate-900 mt-1 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed max-w-2xl">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppChat />
    </div>
  );
}
