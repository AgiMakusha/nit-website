import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Contact | Center for Neuro-Innovation & Performance",
  description: "Get in touch for program inquiries, research partnerships, pilot programs, or general questions.",
};
import { Mail, ArrowRight, MessageCircle, FlaskConical, Users, User } from "lucide-react";

const inquiryTypes = [
  { icon: User, label: "Individual Program", desc: "Personal performance & resilience training" },
  { icon: Users, label: "Team Program", desc: "We-silience & team resilience programs" },
  { icon: FlaskConical, label: "Research Partnership", desc: "Academic & innovation collaboration" },
  { icon: MessageCircle, label: "General Inquiry", desc: "Questions, media, or other topics" },
];

export default function ContactsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-obsidian-900 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(#7ecfc0 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#7ecfc0]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container-site relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll direction="up">
              <p className="eyebrow mb-5" style={{ color: "#7ecfc0" }}>
                Contacts
              </p>
              <h1 className="heading-lg text-white mb-5 text-balance">
                Let&apos;s start the conversation
              </h1>
              <p className="text-white/60 text-base leading-relaxed">
                Whether you&apos;re curious about our programs, interested in research collaboration, or exploring a pilot — we&apos;d love to hear from you.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll direction="right" delay={100}>
              <div className="grid grid-cols-2 gap-3">
                {inquiryTypes.map((type) => (
                  <div
                    key={type.label}
                    className="bg-white/5 border border-white/10 rounded-2xl p-4 hover:border-[#7ecfc0]/40 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#7ecfc0]/10 flex items-center justify-center mb-3">
                      <type.icon size={16} className="text-[#7ecfc0]" strokeWidth={1.75} />
                    </div>
                    <p className="text-white text-sm font-semibold mb-1">{type.label}</p>
                    <p className="text-white/40 text-xs">{type.desc}</p>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* The Team */}
      <section className="py-8 md:py-10 bg-[#7ecfc0]">
        <div className="container-site">
          <AnimateOnScroll direction="up">
            <p className="text-[#235a54] text-xs font-semibold uppercase tracking-widest mb-3">Meet the team</p>
            <h2 className="heading-md text-obsidian-900 mb-6">The people behind NIT</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-24 h-24 rounded-full overflow-hidden relative ring-4 ring-white/40 shadow-lg">
                  <Image src="/assets/marina-berzina.png" alt="Marina Berzina" fill className="object-cover" />
                </div>
                <div>
                  <p className="font-semibold text-obsidian-900 text-base">Marina Berzina</p>
                  <p className="text-[#235a54] font-medium text-sm mt-0.5">Founder & CEO</p>
                  <p className="text-obsidian-700 text-xs mt-2 leading-relaxed max-w-[200px] mx-auto">
                    Certified ICF CCE · Member of the Neurointegration Trainers Association
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-24 h-24 rounded-full overflow-hidden relative ring-4 ring-white/40 shadow-lg">
                  <Image src="/assets/anesmida-basha.png" alt="Anesmida Basha" fill className="object-cover" />
                </div>
                <div>
                  <p className="font-semibold text-obsidian-900 text-base">Anesmida Basha</p>
                  <p className="text-[#235a54] font-medium text-sm mt-0.5">Co-Founder & COO</p>
                </div>
              </div>
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-24 h-24 rounded-full overflow-hidden relative ring-4 ring-white/40 shadow-lg">
                  <Image src="/assets/mariia-makushina.png" alt="Mariia Makushina" fill className="object-cover" />
                </div>
                <div>
                  <p className="font-semibold text-obsidian-900 text-base">Mariia Makushina</p>
                  <p className="text-[#235a54] font-medium text-sm mt-0.5">CTO</p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Main content */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact form — takes 3 cols */}
            <div className="lg:col-span-3">
              <AnimateOnScroll direction="up">
                <h2 className="heading-md text-obsidian-900 mb-2">Send us a message</h2>
                <p className="body-md mb-8">
                  Tell us a bit about what you&apos;re looking for and we&apos;ll get back to you within 1–2 business days.
                </p>

                <form className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-obsidian-700 uppercase tracking-wider mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        placeholder="Anna"
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-sm text-obsidian-900 placeholder:text-obsidian-300 focus:outline-none focus:border-[#7ecfc0] focus:ring-2 focus:ring-[#7ecfc0]/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-obsidian-700 uppercase tracking-wider mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        placeholder="Korhonen"
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-sm text-obsidian-900 placeholder:text-obsidian-300 focus:outline-none focus:border-[#7ecfc0] focus:ring-2 focus:ring-[#7ecfc0]/20 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-obsidian-700 uppercase tracking-wider mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="anna@company.com"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-sm text-obsidian-900 placeholder:text-obsidian-300 focus:outline-none focus:border-[#7ecfc0] focus:ring-2 focus:ring-[#7ecfc0]/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-obsidian-700 uppercase tracking-wider mb-2">
                      Organization (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="Company or institution"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-sm text-obsidian-900 placeholder:text-obsidian-300 focus:outline-none focus:border-[#7ecfc0] focus:ring-2 focus:ring-[#7ecfc0]/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-obsidian-700 uppercase tracking-wider mb-2">
                      What are you interested in?
                    </label>
                    <select className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-sm text-obsidian-900 focus:outline-none focus:border-[#7ecfc0] focus:ring-2 focus:ring-[#7ecfc0]/20 transition-all appearance-none bg-white">
                      <option value="">Select an option</option>
                      <option value="individual">Individual Program</option>
                      <option value="team">Team Program</option>
                      <option value="research">Research Partnership</option>
                      <option value="pilot">Pilot Program</option>
                      <option value="eu">EU Project Collaboration</option>
                      <option value="diagnostic">Diagnostic Assessment</option>
                      <option value="other">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-obsidian-700 uppercase tracking-wider mb-2">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Tell us about your situation and what you're looking for..."
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-sm text-obsidian-900 placeholder:text-obsidian-300 focus:outline-none focus:border-[#7ecfc0] focus:ring-2 focus:ring-[#7ecfc0]/20 transition-all resize-none"
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full justify-center">
                    Send Message <ArrowRight size={16} />
                  </button>
                </form>
              </AnimateOnScroll>
            </div>

            {/* Sidebar — takes 2 cols */}
            <div className="lg:col-span-2">
              <AnimateOnScroll direction="right" delay={100}>
              <div className="space-y-10">
                {/* Direct contact */}
                <div className="card">
                  <h3 className="heading-sm text-obsidian-900 mb-4">Direct contact</h3>
                  <div className="space-y-4">
                    <a
                      href="mailto:maru.berzina@gmail.com"
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-neutral-50 transition-colors group"
                    >
                      <div className="w-9 h-9 rounded-lg bg-[#7ecfc0]/10 flex items-center justify-center group-hover:bg-[#7ecfc0]/20 transition-colors">
                        <Mail size={16} className="text-[#338b7d]" strokeWidth={1.75} />
                      </div>
                      <div>
                        <p className="text-xs text-obsidian-400 font-medium mb-0.5">Marina Berzina</p>
                        <p className="text-sm font-semibold text-obsidian-900">maru.berzina@gmail.com</p>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="card">
                  <h3 className="heading-sm text-obsidian-900 mb-3">Location</h3>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#7ecfc0] mt-1.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-obsidian-900">Helsinki, Finland</p>
                      <p className="text-xs text-obsidian-400 mt-0.5">
                        Occupational Neuroscience · Nordic Region
                      </p>
                    </div>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="card">
                  <h3 className="heading-sm text-obsidian-900 mb-4">Follow us</h3>
                  <a
                    href="https://www.linkedin.com/company/center-for-neuro-innovation-performance"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-neutral-50 transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#0077b5]/10 flex items-center justify-center group-hover:bg-[#0077b5]/20 transition-colors flex-shrink-0">
                      <svg
                        viewBox="0 0 24 24"
                        width="16"
                        height="16"
                        fill="#0077b5"
                        aria-hidden="true"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-obsidian-400 font-medium mb-0.5">LinkedIn</p>
                      <p className="text-sm font-semibold text-obsidian-900">Center for Neuro-Innovation & Performance</p>
                    </div>
                  </a>
                  <p className="text-xs text-obsidian-300 mt-3 px-3">
                    Stay updated on research insights, events, and program news.
                  </p>
                </div>
              </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Pilot / partnership CTA */}
      <section className="py-16 bg-[#fafafa] border-t border-neutral-100">
        <div className="container-site">
          <AnimateOnScroll direction="up">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  tag: "For Founders",
                  title: "Join a pilot program",
                  desc: "Be among the first cohort. Get access to the full NeuroSprint program and contribute to our impact data.",
                  cta: "Apply for Pilot",
                },
                {
                  tag: "For Partners",
                  title: "Research & ecosystem partnership",
                  desc: "Co-design studies, host programs, or collaborate on EU project applications.",
                  cta: "Discuss Partnership",
                },
                {
                  tag: "For Teams",
                  title: "Team resilience assessment",
                  desc: "Start with a free team diagnostic to map your collective regulation capacity and identify risk areas.",
                  cta: "Book Team Assessment",
                },
              ].map((item) => (
                <div key={item.tag} className="card text-center">
                  <span className="tag mb-3 mx-auto">{item.tag}</span>
                  <h3 className="heading-sm text-obsidian-900 mb-2">{item.title}</h3>
                  <p className="body-md text-sm mb-5">{item.desc}</p>
                  <Link href="/contacts" className="btn-outline text-sm py-2.5 px-5 w-full justify-center">
                    {item.cta} <ArrowRight size={14} />
                  </Link>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
