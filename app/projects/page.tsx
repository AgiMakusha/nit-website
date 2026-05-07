import type { Metadata } from "next";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Projects | Center for Neuro-Innovation & Performance",
  description: "EU-funded projects and applied innovation initiatives from the Center for Neuro-Innovation & Performance.",
};
import { ArrowRight, ExternalLink, Clock, CheckCircle2, CircleDot } from "lucide-react";

const projects = [
  {
    id: "01",
    title: "NeuroSprint Pilot Program",
    funding: "Internal R&D · Academic Research Collaboration",
    description:
      "A structured 4-week neuroplasticity training program for early-stage startup founders. Measuring the effect of state-regulation training on decision quality, burnout risk, and stress recovery speed.",
    status: "Ongoing",
    statusColor: "text-[#338b7d]",
    statusBg: "bg-[#7ecfc0]/10",
    tags: ["Founders", "Neuroplasticity", "Pilot"],
    year: "2024–2025",
  },
  {
    id: "02",
    title: "We-silience Team Resilience Study",
    funding: "Innovation Collaboration · EU Funding Exploration",
    description:
      "Research into collective regulation capacity within co-founder dyads and early-stage teams. Developing the We-silience Index as a measurement tool for interpersonal neuro-regulation.",
    status: "In Development",
    statusColor: "text-amber-600",
    statusBg: "bg-amber-50",
    tags: ["Teams", "Resilience", "Measurement"],
    year: "2025",
  },
  {
    id: "03",
    title: "NeuroBalance Index Validation",
    funding: "Academic Partnership · Pending EU Project Grant",
    description:
      "Development and validation of the NeuroBalance Index as a standardized assessment tool for mapping individual stress zones, cognitive patterns, and behavioral triggers in occupational contexts.",
    status: "Planning",
    statusColor: "text-obsidian-400",
    statusBg: "bg-neutral-100",
    tags: ["Diagnostics", "Methodology", "Validation"],
    year: "2025–2026",
  },
  {
    id: "04",
    title: "EU Innovation Funding Initiative",
    funding: "EU Horizon / Business Finland · Application Stage",
    description:
      "Applied innovation project exploring scalable neuroscience-based performance tools for the Nordic startup ecosystem. Final scope and partners being confirmed.",
    status: "Upcoming",
    statusColor: "text-obsidian-400",
    statusBg: "bg-neutral-100",
    tags: ["EU Project", "Ecosystem", "Innovation"],
    year: "2026+",
  },
];

const statusIcon = (status: string) => {
  switch (status) {
    case "Ongoing": return <CircleDot size={14} className="text-[#338b7d]" />;
    case "In Development": return <Clock size={14} className="text-amber-600" />;
    default: return <CheckCircle2 size={14} className="text-obsidian-300" />;
  }
};

export default function ProjectsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden" style={{ backgroundColor: "#7ecfc0" }}>
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(#0a0a0a 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="container-site relative z-10">
          <AnimateOnScroll direction="up">
            <p className="eyebrow mb-4" style={{ color: "#0a0a0a", opacity: 0.6 }}>Projects</p>
            <h1 className="heading-lg text-balance mb-5 max-w-3xl" style={{ color: "#0a0a0a" }}>
              EU-funded projects & applied innovation
            </h1>
            <p className="body-lg max-w-2xl" style={{ color: "#0a0a0a", opacity: 0.75 }}>
              This page presents our ongoing and upcoming research projects, EU-funded initiatives, and applied innovation work. Projects are added as they launch and progress.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Status legend */}
      <section className="py-6 bg-[#fafafa] border-y border-neutral-100">
        <div className="container-site">
          <div className="flex flex-wrap gap-6 items-center">
            <span className="text-xs text-obsidian-400 font-medium uppercase tracking-wider">Status:</span>
            {[
              { label: "Ongoing", color: "text-[#338b7d]", bg: "bg-[#7ecfc0]/10" },
              { label: "In Development", color: "text-amber-600", bg: "bg-amber-50" },
              { label: "Planning", color: "text-obsidian-400", bg: "bg-neutral-100" },
              { label: "Upcoming", color: "text-obsidian-300", bg: "bg-neutral-50" },
            ].map((s) => (
              <div key={s.label} className={`flex items-center gap-1.5 px-3 py-1 rounded-full ${s.bg}`}>
                <div className={`w-1.5 h-1.5 rounded-full bg-current ${s.color}`} />
                <span className={`text-xs font-semibold ${s.color}`}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-pad bg-[#fafafa]">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <AnimateOnScroll key={project.id} direction="up" delay={i * 70}>
                <div className="card h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <span className="text-3xl font-extrabold text-[#7ecfc0]/40 tracking-tight leading-none">
                      {project.id}
                    </span>
                    <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full ${project.statusBg}`}>
                      {statusIcon(project.status)}
                      <span className={`text-xs font-semibold ${project.statusColor}`}>
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="heading-sm text-obsidian-900 mb-2">{project.title}</h3>
                  <p className="text-xs text-[#338b7d] font-semibold uppercase tracking-wider mb-3">
                    {project.funding}
                  </p>
                  <p className="body-md text-sm flex-1 mb-5">{project.description}</p>

                  {/* Tags + Year */}
                  <div className="flex items-center justify-between gap-4 pt-4 border-t border-neutral-100">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[0.65rem] font-semibold uppercase tracking-wider px-2.5 py-1 bg-neutral-100 text-obsidian-500 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-xs text-obsidian-300 font-medium flex-shrink-0">
                      {project.year}
                    </span>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* EU Funding Context */}
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
                EU Innovation Work
              </p>
              <h2 className="heading-md text-white mb-6">
                Building with public investment
              </h2>
              <p className="text-white/50 text-base leading-relaxed mb-10">
                We are actively pursuing EU Horizon and Business Finland funding to develop scalable, evidence-based neuroscience tools for the Nordic innovation ecosystem. If you represent a research institution, accelerator, or corporate partner interested in co-applying for EU projects, we welcome conversations.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link href="/contacts" className="btn-mint">
                  Discuss EU Project Collaboration <ArrowRight size={16} />
                </Link>
                <Link href="/partners" className="btn-outline-white">
                  View Partners <ExternalLink size={14} />
                </Link>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
