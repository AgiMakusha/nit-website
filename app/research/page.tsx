import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Research | Center for Neuro-Innovation & Performance",
  description: "Our programs are built on the latest neuroscience and behavioral psychology research. Pilot trainings are ongoing with high-performing startup teams.",
};
import { ArrowRight, FlaskConical, BookOpen, Microscope, LineChart } from "lucide-react";

const foundations = [
  {
    icon: FlaskConical,
    title: "Polyvagal Theory",
    author: "Stephen Porges",
    desc: "The science of how the autonomic nervous system regulates our capacity for safety, connection, and performance. At the core of every regulation protocol we use.",
  },
  {
    icon: BookOpen,
    title: "Neurointegration Framework",
    author: "Proprietary Method",
    desc: "Our applied framework combining neuroscience, somatic psychology, and behavioral science into structured, measurable training protocols.",
  },
  {
    icon: Microscope,
    title: "Neuroplasticity Research",
    author: "Applied Neuroscience",
    desc: "The brain's capacity to reorganize itself through targeted practice forms the basis of our 4-week NeuroSprint methodology.",
  },
  {
    icon: LineChart,
    title: "Occupational Neuroscience",
    author: "Emerging Field",
    desc: "The application of neuroscience findings to workplace performance, decision-making, and cognitive optimization in high-demand professional contexts.",
  },
];

export default function ResearchPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-obsidian-900 relative overflow-hidden min-h-[720px]">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(#7ecfc0 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#7ecfc0]/5 rounded-full blur-3xl pointer-events-none" />

        {/* Image: absolutely fills the right half, full section height */}
        <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-1/2 z-0">
          <AnimateOnScroll direction="right" delay={0}>
            <div className="absolute inset-0">
              <Image
                src="/assets/Gemini_Generated_Image_gpyfdcgpyfdcgpyf__1___1_-7d75e54f-c152-46dd-84a5-877f370d417c.png"
                alt="Neural network"
                fill
                className="object-cover object-center"
                sizes="50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-900/60 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-obsidian-900/50 via-obsidian-900/10 to-transparent" />
            </div>
          </AnimateOnScroll>
        </div>

        {/* Text content */}
        <div className="relative z-10 container-site">
          <div className="lg:w-1/2 py-40 md:py-52">
            <AnimateOnScroll direction="up">
              <p className="eyebrow mb-5" style={{ color: "#7ecfc0" }}>
                Research
              </p>
              <h1 className="heading-lg text-white mb-6 text-balance">
                Science-first. Evidence always.
              </h1>
              <p className="text-white/60 text-base leading-relaxed mb-8">
                Our programs are built on the latest research in neuroscience and behavioral psychology. Every tool, every protocol, every metric is traceable to a scientific foundation.
              </p>
              <Link href="/contacts" className="btn-mint">
                Partner on Research <ArrowRight size={16} />
              </Link>
            </AnimateOnScroll>

            {/* Mobile image */}
            <div className="lg:hidden mt-10 relative h-[280px] rounded-2xl overflow-hidden">
              <Image
                src="/assets/Gemini_Generated_Image_gpyfdcgpyfdcgpyf__1___1_-7d75e54f-c152-46dd-84a5-877f370d417c.png"
                alt="Neural network"
                fill
                className="object-cover object-center"
                sizes="100vw"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #0a0a0a 0%, transparent 40%)" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Research Foundation */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <AnimateOnScroll direction="up">
            <div className="mb-12">
              <p className="eyebrow mb-3 !text-base !font-bold">Research Foundation</p>
              <h2 className="heading-md text-obsidian-900 mb-4">
                The science behind our methods
              </h2>
              <p className="body-lg max-w-2xl">
                We don&apos;t invent techniques — we apply what decades of research have already validated, and build structured training protocols on top of that foundation.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {foundations.map((f, i) => (
              <AnimateOnScroll key={f.title} direction="up" delay={i * 70}>
                <div className="card h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#7ecfc0]/10 flex items-center justify-center flex-shrink-0">
                      <f.icon size={20} className="text-[#338b7d]" strokeWidth={1.75} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="heading-sm text-obsidian-900">{f.title}</h3>
                      </div>
                      <p className="text-[#7ecfc0] text-xs font-semibold mb-2 uppercase tracking-wider">
                        {f.author}
                      </p>
                      <p className="body-md text-sm">{f.desc}</p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Current Pilots */}
      <section className="section-pad bg-[#fafafa]">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimateOnScroll direction="up">
              <p className="eyebrow mb-4 !text-base !font-bold">Current Pilots</p>
              <h2 className="heading-md text-obsidian-900 mb-5">
                Testing our methods with real teams
              </h2>
              <p className="body-lg mb-6">
                Right now, we are testing our methods with high-performing startup teams. Pilot trainings are ongoing, and we will soon share real data on the impact.
              </p>
              <p className="body-lg mb-8">
                Our pilot programs are designed with full measurement integrity — pre/post assessments using the NeuroBalance Index, stress biomarker tracking, and business outcome correlation.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contacts" className="btn-primary">
                  Join a Pilot Program <ArrowRight size={16} />
                </Link>
                <Link href="/partners" className="btn-outline">
                  Research Partners
                </Link>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll direction="right" delay={100}>
              <div className="space-y-4">
                {[
                  { label: "Measurement Protocol", value: "NeuroBalance Index pre/post assessment", status: "Active" },
                  { label: "Participant Profile", value: "Early-stage startup founders & teams", status: "Ongoing" },
                  { label: "Training Method", value: "4-week NeuroSprint program", status: "Piloting" },
                  { label: "Data Publication", value: "Impact data & findings — coming soon", status: "Upcoming" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-white rounded-2xl border border-neutral-100 px-5 py-4 flex items-center justify-between gap-4"
                  >
                    <div>
                      <p className="text-xs text-obsidian-400 font-medium uppercase tracking-wider mb-1">
                        {item.label}
                      </p>
                      <p className="text-sm font-semibold text-obsidian-800">{item.value}</p>
                    </div>
                    <span className="tag flex-shrink-0">{item.status}</span>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Future Evidence */}
      <section className="section-pad bg-obsidian-900 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(#7ecfc0 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="container-site relative z-10">
          <AnimateOnScroll direction="up">
            <div className="max-w-3xl mx-auto text-center">
              <p className="eyebrow mb-4" style={{ color: "#7ecfc0" }}>
                Future Evidence
              </p>
              <h2 className="heading-md text-white mb-6">
                The roadmap to published evidence
              </h2>
              <p className="text-white/50 text-base leading-relaxed mb-12">
                We are committed to publishing rigorous outcome data from our pilot programs. Academic and EU innovation network collaborations are in development, supporting a clear path toward peer-reviewed evidence.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                phase: "Phase 1",
                title: "Pilot Data Collection",
                desc: "Ongoing collection of pre/post NeuroBalance Index data from founder and team pilot programs.",
                timeline: "2024–2025",
              },
              {
                phase: "Phase 2",
                title: "Analysis & Validation",
                desc: "Statistical analysis of outcomes, correlation with business KPIs, and independent validation with research partners.",
                timeline: "2025–2026",
              },
              {
                phase: "Phase 3",
                title: "Publication & Dissemination",
                desc: "Peer-reviewed publication, conference presentation, and open dissemination of methodology and findings.",
                timeline: "2026+",
              },
            ].map((phase, i) => (
              <AnimateOnScroll key={phase.phase} direction="up" delay={i * 80}>
                <div className="card-dark h-full">
                  <span className="eyebrow text-[#7ecfc0] mb-3 block">{phase.phase}</span>
                  <h3 className="text-white font-bold text-lg mb-3">{phase.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-4">{phase.desc}</p>
                  <p className="text-[#7ecfc0] text-xs font-semibold">{phase.timeline}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Academic CTA */}
      <section className="section-pad bg-[#7ecfc0] relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-10 pointer-events-none">
          <Image
            src="/assets/Asset_7_3x-8-b43a430c-2719-4dea-8fc5-03b9e5e80196.png"
            alt=""
            fill
            className="object-cover object-left"
          />
        </div>
        <div className="container-site relative z-10">
          <AnimateOnScroll direction="up">
            <div className="max-w-2xl">
              <p className="text-obsidian-600 text-xs font-semibold uppercase tracking-widest mb-4">
                Academic & Research Collaboration
              </p>
              <h2 className="heading-md text-obsidian-900 mb-5">
                Interested in research partnership?
              </h2>
              <p className="text-obsidian-600 text-base leading-relaxed mb-8">
                We are actively seeking academic, clinical, and innovation partners to co-design studies, validate methodology, and develop next-generation occupational neuroscience tools.
              </p>
              <Link href="/contacts" className="btn-primary">
                Discuss Partnership <ArrowRight size={16} />
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
