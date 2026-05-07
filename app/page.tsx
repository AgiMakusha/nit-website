import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import {
  Brain,
  Zap,
  Activity,
  BookOpen,
  Users,
  FlaskConical,
  ArrowRight,
  TrendingDown,
  TrendingUp,
  Timer,
  Layers,
} from "lucide-react";

// ─── What We Do feature data ─────────────────────────────────────────────────
const features = [
  {
    icon: Activity,
    title: "Diagnostics",
    desc: "Individual and team assessments using the NeuroBalance Index — mapping your stress zones, cognitive patterns, and behavioral triggers.",
  },
  {
    icon: Brain,
    title: "Neuroplasticity Training",
    desc: "4-week programs built on neuroscience principles — NeuroSprints, state regulation, cognitive flexibility, and reflection systems.",
  },
  {
    icon: Zap,
    title: "Real-Time Regulation",
    desc: "Practical tools to reduce stress intensity in the moment — breathing protocols, somatic grounding, and daily micro-practices.",
  },
  {
    icon: BookOpen,
    title: "Reflection & Tracking",
    desc: "Systems for daily state check-ins, weekly reviews, and longitudinal progress tracking tied to business KPIs.",
  },
  {
    icon: Users,
    title: "Team Resilience",
    desc: "We-silience programs for co-founder dyads and teams — measuring and improving interpersonal neuro-regulation.",
  },
  {
    icon: FlaskConical,
    title: "Research Partnership",
    desc: "Academic and EU network collaboration for evidence-based development — partner details to be announced.",
  },
];

// ─── Stats data ───────────────────────────────────────────────────────────────
const stats = [
  {
    icon: TrendingDown,
    value: "↓ 40%",
    label: "Reduced burnout risk",
    sub: "After a 4-week program",
    color: "text-[#7ecfc0]",
  },
  {
    icon: Timer,
    value: "2–3×",
    label: "Faster stress recovery",
    sub: "Recovery from acute stress episodes",
    color: "text-[#7ecfc0]",
  },
  {
    icon: TrendingUp,
    value: "↑ 60%",
    label: "Amygdala reactivity",
    sub: "Why sleep & foundations matter",
    color: "text-amber-400",
  },
  {
    icon: Layers,
    value: "13%",
    label: "Collective intelligence boost",
    sub: "Mindfulness training (BCG/Awaris)",
    color: "text-[#7ecfc0]",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ───────────────────────────────────────────────────── */}
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
            src="/assets/Gemini_Generated_Image_4ocozs4ocozs4oco-8f1aa79d-a5e9-491f-bc7d-3175d734db70.png"
            alt="Neural network visualization"
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
                Occupational Neuroscience · Finland
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll direction="up" delay={80}>
              <h1 className="heading-lg text-white text-balance mb-6">
                Train your brain to perform under pressure —{" "}
                <span className="relative inline-block">
                  not burn out
                  <span className="absolute bottom-1 left-0 right-0 h-[3px] bg-[#7ecfc0] rounded-full" />
                </span>{" "}
                from it.
              </h1>
            </AnimateOnScroll>
            <AnimateOnScroll direction="up" delay={160}>
              <p className="text-white/60 text-base leading-relaxed mb-3">
                We translate neuroscience into practical tools for performance, stress regulation, and decision-making.
              </p>
              <p className="text-white/35 text-sm font-medium mb-8">
                Based on the Neurointegration Framework & Polyvagal Theory
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll direction="up" delay={240}>
              <div className="flex flex-wrap gap-3">
                <Link href="/programs" className="btn-mint">
                  Explore Programs
                  <ArrowRight size={16} />
                </Link>
                <Link href="/contacts" className="btn-outline-white">
                  Get Diagnostics
                </Link>
              </div>
            </AnimateOnScroll>

            {/* Trust indicators */}
            <AnimateOnScroll direction="up" delay={320}>
              <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:flex-nowrap gap-y-2 sm:gap-y-0 sm:gap-x-6">
                {["Evidence-based programs", "Pilot-tested with founders", "Rooted in Polyvagal Theory"].map(
                  (item) => (
                    <div key={item} className="flex items-center gap-2 whitespace-nowrap">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#7ecfc0]" />
                      <span className="text-xs font-medium text-white/40">{item}</span>
                    </div>
                  )
                )}
              </div>
            </AnimateOnScroll>

            {/* Mobile image */}
            <div className="lg:hidden mt-10 relative h-[280px] rounded-2xl overflow-hidden">
              <Image
                src="/assets/Gemini_Generated_Image_4ocozs4ocozs4oco-8f1aa79d-a5e9-491f-bc7d-3175d734db70.png"
                alt="Neural network visualization"
                fill
                className="object-cover object-center"
                sizes="100vw"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #0a0a0a 0%, transparent 40%)" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHO WE ARE — white ─────────────────────────────────────── */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image side */}
            <AnimateOnScroll direction="left" className="order-2 lg:order-1">
              <div className="relative">
                <div className="rounded-3xl overflow-hidden bg-[#7ecfc0] aspect-[4/3]">
                  <Image
                    src="/assets/Asset_4_3x-8-357d2ba7-7e43-4579-98a1-b2caf5a88871.png"
                    alt="NIT Brand Mark"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                {/* Stats pill */}
                <div className="absolute -bottom-5 -right-3 md:right-6 bg-obsidian-900 text-white rounded-2xl px-5 py-4 shadow-2xl">
                  <p className="text-2xl font-extrabold text-[#7ecfc0]">Finland&apos;s #1</p>
                  <p className="text-xs text-white/60 mt-1 max-w-[160px]">
                    Neuro-optimization for early-stage founders
                  </p>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Text side */}
            <div className="order-1 lg:order-2">
              <AnimateOnScroll direction="up">
                <p className="eyebrow mb-4 !text-base !font-bold">Who We Are</p>
                <h2 className="heading-lg text-obsidian-900 mb-6 text-balance">
                  Center for Neuro-Innovation & Performance
                </h2>
                <p className="body-lg mb-5">
                  We apply neuroscience, cognitive psychology, and behavioral science to help founders, teams, and high-performing individuals master their internal states.
                </p>
                <p className="body-lg mb-8">
                  Finland&apos;s first organization dedicated to the neuro-optimization of early-stage founders using dynamic state-regulation methods.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/programs" className="btn-primary">
                    Our Programs <ArrowRight size={16} />
                  </Link>
                  <Link href="/research" className="btn-outline">
                    Our Research
                  </Link>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHAT WE DO — light grey ────────────────────────────────── */}
      <section className="section-pad bg-[#fafafa]">
        <div className="container-site">
          <AnimateOnScroll direction="up">
            <div className="text-center mb-14">
              <p className="eyebrow mb-3 !text-base !font-bold">What We Do</p>
              <h2 className="heading-lg text-obsidian-900 mb-4">Neuroscience, made practical</h2>
              <p className="body-lg max-w-xl mx-auto">
                We turn complex brain science into simple daily tools, practical training, and measurable results.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <AnimateOnScroll key={f.title} direction="up" delay={i * 60}>
                <div className="card h-full group">
                  <div className="w-10 h-10 rounded-xl bg-[#7ecfc0]/10 flex items-center justify-center mb-4 group-hover:bg-[#7ecfc0]/20 transition-colors">
                    <f.icon size={20} className="text-[#338b7d]" strokeWidth={1.75} />
                  </div>
                  <h3 className="heading-sm text-obsidian-900 mb-2">{f.title}</h3>
                  <p className="body-md">{f.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─── RESULTS & IMPACT — dark ────────────────────────────────── */}
      <section className="section-pad bg-obsidian-900 relative overflow-hidden">
        {/* Background texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(#7ecfc0 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#7ecfc0]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container-site relative z-10">
          <AnimateOnScroll direction="up">
            <div className="text-center mb-14">
              <p className="eyebrow mb-3" style={{ color: "#7ecfc0" }}>
                Results & Impact
              </p>
              <h2 className="heading-lg text-white mb-4">
                What changes when founders regulate their state
              </h2>
              <p className="text-white/50 max-w-xl mx-auto text-base leading-relaxed">
                The ROI of regulation — measurable outcomes for people and businesses.
              </p>
            </div>
          </AnimateOnScroll>

          {/* Stats grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
            {stats.map((s, i) => (
              <AnimateOnScroll key={s.value} direction="up" delay={i * 70}>
                <div className="card-dark text-center h-full">
                  <div className={`text-4xl font-extrabold mb-2 ${s.color} tracking-tight`}>
                    {s.value}
                  </div>
                  <div className="text-white text-sm font-semibold mb-1.5">{s.label}</div>
                  <div className="text-white/40 text-xs leading-relaxed">{s.sub}</div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll direction="up">
            <div className="divider-dark mb-12" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="heading-md text-white mb-5">
                  The business case for neurological regulation
                </h3>
                <p className="text-white/50 text-base leading-relaxed">
                  The ↑60% amygdala reactivity stat reflects what happens to unregulated founders who are sleep-deprived — this is why we start with sleep and foundational regulation. When founders operate from a regulated state, the downstream effects compound rapidly.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Fewer strategic errors", detail: "Regulated minds see the bigger picture" },
                  { label: "Lower sick leave", detail: "Sustained capacity without burnout" },
                  { label: "Reduced turnover", detail: "Resilient teams stay longer" },
                  { label: "Better capital decisions", detail: "Green Zone = sharper judgment" },
                ].map((item) => (
                  <div key={item.label} className="bg-white/5 rounded-2xl p-4 border border-white/10">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#7ecfc0] mb-3" />
                    <p className="text-white text-sm font-semibold mb-1">{item.label}</p>
                    <p className="text-white/40 text-xs">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ─── PROGRAMS PREVIEW — white ───────────────────────────────── */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <AnimateOnScroll direction="up">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
              <div>
                <p className="eyebrow mb-3 !text-base !font-bold">Our Programs</p>
                <h2 className="heading-lg text-obsidian-900">
                  Built for high-pressure environments
                </h2>
              </div>
              <Link href="/programs" className="btn-outline flex-shrink-0">
                All Programs <ArrowRight size={16} />
              </Link>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                tag: "Startup Founders",
                title: "Founders",
                color: "bg-[#7ecfc0]",
                dark: false,
                items: [
                  "Better decisions under investor pressure",
                  "Investment readiness & pitch clarity",
                  "Break the hustle-burnout cycle",
                  "Cognitive agility in uncertainty",
                ],
              },
              {
                tag: "High-Performing Teams",
                title: "Teams",
                color: "bg-obsidian-900",
                dark: true,
                items: [
                  "Sustainable team performance",
                  "Break stress loops before they spread",
                  "Collective resilience (We-silience)",
                  "Lower turnover & sick leave",
                ],
              },
              {
                tag: "High Performers & Executives",
                title: "Individuals",
                color: "bg-[#f4f4f4]",
                dark: false,
                items: [
                  "Stop repeating stress patterns",
                  "Learn to regulate internal state",
                  "Improve decision quality under load",
                  "Build long-term resilience",
                ],
              },
            ].map((prog, i) => (
              <AnimateOnScroll key={prog.title} direction="up" delay={i * 80}>
                <div
                  className={`rounded-3xl p-7 h-full flex flex-col ${prog.color} ${
                    prog.dark ? "border border-white/10" : "border border-transparent"
                  }`}
                >
                  <span
                    className={`text-[0.65rem] font-semibold uppercase tracking-widest mb-4 ${
                      prog.dark ? "text-[#7ecfc0]" : "text-obsidian-500"
                    }`}
                  >
                    {prog.tag}
                  </span>
                  <h3
                    className={`text-2xl font-extrabold mb-5 ${
                      prog.dark ? "text-white" : "text-obsidian-900"
                    }`}
                  >
                    {prog.title}
                  </h3>
                  <ul className="space-y-2.5 flex-1">
                    {prog.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <div
                          className={`w-1 h-1 rounded-full mt-2 flex-shrink-0 ${
                            prog.dark ? "bg-[#7ecfc0]" : "bg-obsidian-400"
                          }`}
                        />
                        <span
                          className={`text-sm ${
                            prog.dark ? "text-white/70" : "text-obsidian-600"
                          }`}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Link
                      href="/programs"
                      className={
                        prog.dark
                          ? "btn-mint text-sm py-2.5 px-5"
                          : "btn-primary text-sm py-2.5 px-5"
                      }
                    >
                      Learn more <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER — mint ──────────────────────────────────────── */}
      <section className="py-20 bg-[#7ecfc0] relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(#0a0a0a 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="absolute right-0 top-0 bottom-0 w-1/3 pointer-events-none opacity-20">
          <Image
            src="/assets/Asset_4_3x-8-357d2ba7-7e43-4579-98a1-b2caf5a88871.png"
            alt=""
            fill
            className="object-cover object-left"
          />
        </div>

        <div className="container-site relative z-10 text-center">
          <AnimateOnScroll direction="up">
            <p className="text-obsidian-600 text-xs font-semibold uppercase tracking-widest mb-4">
              Ready to start?
            </p>
            <h2 className="heading-lg text-obsidian-900 mb-6 text-balance">
              Start with a diagnostic assessment
            </h2>
            <p className="text-obsidian-600 text-base max-w-lg mx-auto mb-8 leading-relaxed">
              Understand your current stress zones, cognitive patterns, and behavioral triggers — then build from there.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/contacts" className="btn-primary">
                Get Diagnostics <ArrowRight size={16} />
              </Link>
              <Link href="/programs" className="btn-outline">
                Explore Programs
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
