import type { Metadata } from "next";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Partners | Center for Neuro-Innovation & Performance",
  description: "We collaborate with academic institutions, innovation networks, startup ecosystems, and corporate partners across Finland and Europe.",
};
import { ArrowRight, GraduationCap, Globe, Rocket, Handshake, Building } from "lucide-react";

const partnerCategories = [
  { id: "university", label: "University", icon: GraduationCap, color: "text-[#338b7d]", bg: "bg-[#7ecfc0]/10" },
  { id: "research", label: "Research", icon: Globe, color: "text-blue-600", bg: "bg-blue-50" },
  { id: "startup", label: "Startup Ecosystem", icon: Rocket, color: "text-purple-600", bg: "bg-purple-50" },
  { id: "eu", label: "EU Project", icon: Globe, color: "text-amber-600", bg: "bg-amber-50" },
  { id: "corporate", label: "Corporate Partner", icon: Building, color: "text-obsidian-500", bg: "bg-neutral-100" },
  { id: "strategic", label: "Strategic Collaboration", icon: Handshake, color: "text-rose-600", bg: "bg-rose-50" },
];

const partners = [
  {
    name: "University Partner",
    category: "university",
    description:
      "Academic collaboration on neuroplasticity research and methodology validation. Partner details will be announced once the collaboration is confirmed.",
    placeholder: true,
  },
  {
    name: "EU Project Partner",
    category: "eu",
    description:
      "Innovation network collaboration to develop and scale neuroscience-based tools within the Nordic startup ecosystem. Details coming soon.",
    placeholder: true,
  },
  {
    name: "Startup Ecosystem Partner",
    category: "startup",
    description:
      "Accelerator or ecosystem partner bringing our programs to early-stage founders in structured environments. Details coming soon.",
    placeholder: true,
  },
  {
    name: "Research Institute Partner",
    category: "research",
    description:
      "Institutional research partner supporting pilot program design, evaluation, and evidence publication. Details coming soon.",
    placeholder: true,
  },
  {
    name: "Corporate Partner",
    category: "corporate",
    description:
      "Corporate partner deploying team resilience and We-silience programs within organizational health and performance frameworks. Details coming soon.",
    placeholder: true,
  },
  {
    name: "Strategic Collaboration Partner",
    category: "strategic",
    description:
      "Cross-sector partner supporting applied neuroscience infrastructure development in the Nordic region. Details coming soon.",
    placeholder: true,
  },
];

function getCategoryData(categoryId: string) {
  return partnerCategories.find((c) => c.id === categoryId)!;
}

export default function PartnersPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-white relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(#0a0a0a 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="container-site relative z-10">
          <AnimateOnScroll direction="up">
            <p className="eyebrow mb-4">Partners</p>
            <h1 className="heading-lg text-obsidian-900 text-balance mb-5 max-w-3xl">
              Built together with leading partners
            </h1>
            <p className="body-lg max-w-2xl">
              We collaborate with academic institutions, innovation networks, startup ecosystems, and corporate partners to develop and validate our programs. Strong partnerships make stronger science.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Category filters display */}
      <section className="py-8 bg-[#fafafa] border-y border-neutral-100">
        <div className="container-site">
          <div className="flex flex-wrap gap-3">
            {partnerCategories.map((cat) => (
              <div
                key={cat.id}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full ${cat.bg}`}
              >
                <cat.icon size={13} className={cat.color} strokeWidth={2} />
                <span className={`text-xs font-semibold ${cat.color}`}>{cat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="section-pad bg-[#fafafa]">
        <div className="container-site">
          <AnimateOnScroll direction="up">
            <div className="mb-10">
              <h2 className="heading-md text-obsidian-900 mb-3">Our partner network</h2>
              <p className="body-md max-w-xl">
                We work with a curated network of partners across research, innovation, and industry. Partner listings will be updated as collaborations are confirmed.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {partners.map((partner, i) => {
              const cat = getCategoryData(partner.category);
              return (
                <AnimateOnScroll key={partner.name} direction="up" delay={i * 60}>
                  <div className="card h-full flex flex-col">
                    {/* Category badge */}
                    <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full w-fit mb-3 ${cat.bg}`}>
                      <cat.icon size={12} className={cat.color} strokeWidth={2} />
                      <span className={`text-[0.65rem] font-semibold uppercase tracking-wider ${cat.color}`}>
                        {cat.label}
                      </span>
                    </div>

                    <h3 className="heading-sm text-obsidian-900 mb-2">{partner.name}</h3>
                    <p className="body-md text-sm flex-1">{partner.description}</p>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* Collaboration types */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <AnimateOnScroll direction="up">
            <div className="text-center mb-12">
              <p className="eyebrow mb-3 !text-base !font-bold">How We Partner</p>
              <h2 className="heading-md text-obsidian-900 mb-4">Types of collaboration</h2>
              <p className="body-md max-w-lg mx-auto">
                We engage in multiple partnership models depending on the nature of the collaboration and mutual goals.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: "Research Collaboration",
                desc: "Co-design studies, contribute expertise, and co-publish findings. Ideal for universities and research institutes.",
                icon: GraduationCap,
              },
              {
                title: "Pilot Program Hosting",
                desc: "Host or co-facilitate our programs within your accelerator, corporate, or educational context.",
                icon: Rocket,
              },
              {
                title: "EU Project Co-Application",
                desc: "Join as a consortium partner in EU Horizon or Business Finland project applications.",
                icon: Globe,
              },
              {
                title: "Ecosystem Integration",
                desc: "Integrate our tools into existing startup support, wellbeing, or performance programs.",
                icon: Building,
              },
              {
                title: "Strategic Alliance",
                desc: "Longer-term strategic collaboration to develop the field of occupational neuroscience in the Nordic region.",
                icon: Handshake,
              },
              {
                title: "Data Sharing Partner",
                desc: "Contribute anonymized outcome data to build a larger evidence base for occupational neuroscience.",
                icon: Globe,
              },
            ].map((collab, i) => (
              <AnimateOnScroll key={collab.title} direction="up" delay={i * 60}>
                <div className="card h-full group">
                  <div className="w-9 h-9 rounded-xl bg-[#7ecfc0]/10 flex items-center justify-center mb-4 group-hover:bg-[#7ecfc0]/20 transition-colors">
                    <collab.icon size={18} className="text-[#338b7d]" strokeWidth={1.75} />
                  </div>
                  <h3 className="heading-sm text-obsidian-900 mb-2">{collab.title}</h3>
                  <p className="body-md text-sm">{collab.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration CTA */}
      <section className="section-pad bg-[#7ecfc0] relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.05]"
          style={{
            backgroundImage: "radial-gradient(#0a0a0a 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="container-site relative z-10">
          <AnimateOnScroll direction="up">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-obsidian-600 text-xs font-semibold uppercase tracking-widest mb-4">
                Interested in Collaboration?
              </p>
              <h2 className="heading-md text-obsidian-900 mb-5">
                Let&apos;s build the evidence base together
              </h2>
              <p className="text-obsidian-600 text-base leading-relaxed mb-8">
                We are actively seeking research, pilot, and ecosystem partnerships. Whether you&apos;re a university, accelerator, or corporate partner — we would like to hear from you.
              </p>
              <Link href="/contacts" className="btn-primary">
                Start a Conversation <ArrowRight size={16} />
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
