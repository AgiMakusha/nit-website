import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { ArrowRight, CheckCircle2, Users, User, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Programs | Center for Neuro-Innovation & Performance",
  description: "Performance training programs for founders, teams, and individuals — built on the Neurointegration Framework and Polyvagal Theory.",
};

const programs = [
  {
    id: "founders",
    icon: Building2,
    eyebrow: "Startup Founders & Entrepreneurs",
    title: "Founders",
    headline: "Perform at your sharpest when stakes are highest",
    description:
      "The fundraising grind, investor pressure, and relentless uncertainty put your nervous system in a constant state of activation. We help founders move from reactive survival mode to regulated, strategic clarity — when it matters most.",
    benefits: [
      {
        title: "Better decisions under investor pressure",
        detail: "Regulate your arousal state before pitch meetings, board sessions, and high-stakes negotiations.",
      },
      {
        title: "Investment readiness & pitch clarity",
        detail: "Present with confidence and cognitive precision — not cortisol-driven anxiety.",
      },
      {
        title: "Break the hustle-burnout cycle",
        detail: "Sustainable high performance without the crash. Build recovery into your rhythm, not as an afterthought.",
      },
      {
        title: "Cognitive agility in uncertainty",
        detail: "Train your brain to hold complexity without panic. Navigate ambiguity from a regulated, adaptive state.",
      },
    ],
    bg: "bg-[#7ecfc0]",
    textDark: true,
    hex: "#7ecfc0",
    image: "/assets/logo-black.svg",
  },
  {
    id: "teams",
    icon: Users,
    eyebrow: "High-Performing Teams",
    title: "Teams",
    headline: "Resilience that scales with your organization",
    description:
      "Stress is contagious. One dysregulated team member can cascade into collective dysfunction. Our We-silience framework helps teams build shared regulation capacity — measurable resilience at the interpersonal and organizational level.",
    benefits: [
      {
        title: "Sustainable team performance",
        detail: "Move from performance sprints and crashes to steady, high-output rhythms across the entire team.",
      },
      {
        title: "Break stress loops before they spread",
        detail: "Detect early signs of collective burnout and intervene with precision before they compound.",
      },
      {
        title: "Collective resilience (We-silience)",
        detail: "Measure and improve interpersonal neuro-regulation between co-founders, leads, and team members.",
      },
      {
        title: "Lower turnover & sick leave",
        detail: "Build psychological safety and nervous system coherence that keeps top talent engaged long-term.",
      },
    ],
    bg: "bg-[#0a0a0a]",
    textDark: false,
    hex: "#0a0a0a",
    image: "/assets/logo-mint.svg",
  },
  {
    id: "individuals",
    icon: User,
    eyebrow: "High Performers & Executives",
    title: "Individuals",
    headline: "Stop managing symptoms — rewire the source",
    description:
      "High performers often excel at pushing through. But the stress patterns that feel adaptive become the very thing holding back peak performance. We work with the root: your nervous system&apos;s learned responses — and build new, sustainable ones.",
    benefits: [
      {
        title: "Stop repeating stress patterns",
        detail: "Understand the triggers and loops that pull you into reactivity — and interrupt them with precision.",
      },
      {
        title: "Learn to regulate your internal state",
        detail: "Practical daily tools grounded in neuroscience: breathwork, somatic anchors, and state-shift protocols.",
      },
      {
        title: "Improve decision quality under load",
        detail: "Access clear, strategic thinking even when the pressure is on. Operate from the Green Zone.",
      },
      {
        title: "Build long-term resilience",
        detail: "Create lasting neuroplastic change — not just temporary relief — through structured 4-week training cycles.",
      },
    ],
    bg: "bg-[#f4f4f4]",
    textDark: true,
    hex: "#f4f4f4",
    border: "#0a0a0a",
    image: "/assets/logo-black.svg",
  },
];

export default function ProgramsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-obsidian-900 relative overflow-hidden min-h-[720px]">
        {/* Dot grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(#7ecfc0 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* Mint glow top-left */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#7ecfc0]/5 rounded-full blur-3xl pointer-events-none" />

        {/* Image — absolutely fills the entire right half */}
        <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-1/2">
          <Image
            src="/assets/neuron-programs-hero.png"
            alt="Neuron visualization"
            fill
            className="object-cover object-center"
            priority
            sizes="50vw"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #0a0a0a 0%, transparent 35%)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #0a0a0a 0%, transparent 20%)" }} />
        </div>

        {/* Text — left half */}
        <div className="container-site relative z-10">
          <div className="lg:w-1/2 py-40 md:py-52">
            <AnimateOnScroll direction="up" delay={0}>
              <p className="eyebrow mb-5" style={{ color: "#7ecfc0" }}>
                Our Programs · Neurointegration Framework
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll direction="up" delay={80}>
              <h1 className="heading-lg text-white text-balance mb-6">
                Built for{" "}
                <span className="relative inline-block">
                  high-pressure
                  <span className="absolute bottom-1 left-0 right-0 h-[3px] bg-[#7ecfc0] rounded-full" />
                </span>{" "}
                environments.
              </h1>
            </AnimateOnScroll>
            <AnimateOnScroll direction="up" delay={160}>
              <p className="text-white/60 text-base leading-relaxed mb-8">
                Each program is grounded in the Neurointegration Framework and tailored to the specific demands of your role — whether you&apos;re building a company, leading a team, or optimizing your own performance.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll direction="up" delay={240}>
              <div className="flex flex-wrap gap-3">
                <Link href="/contacts" className="btn-mint">
                  Book a Diagnostic
                  <ArrowRight size={16} />
                </Link>
                <Link href="#founders" className="btn-outline-white">
                  Explore Programs
                </Link>
              </div>
            </AnimateOnScroll>

            {/* Trust indicators */}
            <AnimateOnScroll direction="up" delay={320}>
              <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap gap-x-8 gap-y-3">
                {["Founders", "Teams", "Individuals"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#7ecfc0]" />
                    <span className="text-xs font-medium text-white/40">{item}</span>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>

            {/* Mobile image */}
            <div className="lg:hidden mt-10 relative h-[280px] rounded-2xl overflow-hidden">
              <Image
                src="/assets/neuron-programs-hero.png"
                alt="Neuron visualization"
                fill
                className="object-cover object-center"
                sizes="100vw"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #0a0a0a 0%, transparent 40%)" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Program nav pills */}
      <section className="py-5 bg-[#fafafa] border-y border-neutral-100 sticky top-16 md:top-20 z-30">
        <div className="container-site">
          <div className="flex gap-2 overflow-x-auto pb-0.5 scrollbar-hide">
            {programs.map((prog) => (
              <a
                key={prog.id}
                href={`#${prog.id}`}
                className="flex-shrink-0 px-4 py-2 rounded-full text-xs font-semibold transition-all border"
                style={{
                  backgroundColor: prog.hex,
                  color: prog.textDark ? "#0a0a0a" : "#ffffff",
                  borderColor: prog.border ?? prog.hex,
                }}
              >
                {prog.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Program Sections */}
      {programs.map((prog, i) => (
        <section
          key={prog.id}
          id={prog.id}
          className={`section-pad ${prog.bg} relative overflow-hidden`}
        >
          <div className="container-site relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Text */}
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <AnimateOnScroll direction="up">
                  <div className="flex items-center gap-2 mb-5">
                    <prog.icon
                      size={15}
                      className={prog.textDark ? "text-[#585858]" : "text-[#7ecfc0]"}
                      strokeWidth={1.75}
                    />
                    <span
                      className={`text-xs font-semibold uppercase tracking-widest ${
                        prog.textDark ? "text-[#585858]" : "text-[#7ecfc0]"
                      }`}
                    >
                      {prog.eyebrow}
                    </span>
                  </div>
                  <h2
                    className={`heading-lg mb-4 ${prog.textDark ? "text-[#0a0a0a]" : "text-white"}`}
                  >
                    {prog.title}
                  </h2>
                  <p
                    className={`text-lg font-medium mb-4 leading-snug ${
                      prog.textDark ? "text-[#383838]" : "text-white/80"
                    }`}
                  >
                    {prog.headline}
                  </p>
                  <p
                    className={`text-sm leading-relaxed mb-8 ${
                      prog.textDark ? "text-[#585858]" : "text-white/55"
                    }`}
                  >
                    {prog.description}
                  </p>

                  <ul className="space-y-4 mb-8">
                    {prog.benefits.map((b) => (
                      <li key={b.title} className="flex gap-3">
                        <CheckCircle2
                          size={18}
                          className={`flex-shrink-0 mt-0.5 ${
                            prog.textDark ? "text-[#338b7d]" : "text-[#7ecfc0]"
                          }`}
                          strokeWidth={1.75}
                        />
                        <div>
                          <p
                            className={`text-sm font-semibold mb-0.5 ${
                              prog.textDark ? "text-[#0a0a0a]" : "text-white"
                            }`}
                          >
                            {b.title}
                          </p>
                          <p className={`text-sm ${prog.textDark ? "text-[#808080]" : "text-white/50"}`}>
                            {b.detail}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contacts"
                    className={prog.textDark ? "btn-primary" : "btn-mint"}
                  >
                    Inquire About This Program <ArrowRight size={16} />
                  </Link>
                </AnimateOnScroll>
              </div>

              {/* Image */}
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <AnimateOnScroll direction={i % 2 === 1 ? "left" : "right"} delay={100}>
                  <div className="rounded-3xl overflow-hidden aspect-square relative flex items-center justify-center p-12">
                    <Image
                      src={prog.image}
                      alt={prog.title}
                      fill
                      className="object-contain p-12"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </AnimateOnScroll>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Process section */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <AnimateOnScroll direction="up">
            <div className="text-center mb-12">
              <p className="eyebrow mb-3 !text-base !font-bold">Our Approach</p>
              <h2 className="heading-md text-[#0a0a0a] mb-4">How a program unfolds</h2>
              <p className="body-md max-w-lg mx-auto">
                Every program follows the same structured arc — from diagnosis to deep practice to sustained change.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                step: "01",
                title: "Diagnostic Assessment",
                desc: "NeuroBalance Index mapping of your stress zones, cognitive patterns, and behavioral triggers.",
              },
              {
                step: "02",
                title: "Foundation Building",
                desc: "Sleep, recovery, and baseline regulation — the non-negotiable platform for all performance work.",
              },
              {
                step: "03",
                title: "NeuroSprint Training",
                desc: "4-week intensive programs combining state regulation, cognitive flexibility, and reflection systems.",
              },
              {
                step: "04",
                title: "Integration & Tracking",
                desc: "Daily check-ins, weekly reviews, and KPI-linked progress tracking to sustain and compound gains.",
              },
            ].map((s, i) => (
              <AnimateOnScroll key={s.step} direction="up" delay={i * 70}>
                <div className="card h-full">
                  <div className="text-3xl font-extrabold text-[#7ecfc0] mb-4 tracking-tight">
                    {s.step}
                  </div>
                  <h3 className="heading-sm text-[#0a0a0a] mb-2">{s.title}</h3>
                  <p className="body-md text-sm">{s.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0a0a0a] relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(#7ecfc0 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="container-site relative z-10 text-center">
          <AnimateOnScroll direction="up">
            <h2 className="heading-md text-white mb-4">
              Not sure which program fits?
            </h2>
            <p className="text-white/50 text-base max-w-lg mx-auto mb-8 leading-relaxed">
              Start with a diagnostic session. We&apos;ll map your current state and recommend the right entry point.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/contacts" className="btn-mint">
                Book a Diagnostic <ArrowRight size={16} />
              </Link>
              <Link href="/research" className="btn-outline-white">
                See the Research
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
