import AnimateOnScroll from "./AnimateOnScroll";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
}

export default function PageHero({ eyebrow, title, subtitle, dark = false }: PageHeroProps) {
  return (
    <section className={`pt-32 pb-16 md:pt-40 md:pb-20 ${dark ? "bg-obsidian-900" : "bg-white"}`}>
      <div className="container-site">
        <AnimateOnScroll direction="up">
          {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
          <h1
            className={`heading-lg max-w-3xl text-balance ${dark ? "text-white" : "text-obsidian-900"}`}
          >
            {title}
          </h1>
          {subtitle && (
            <p className={`mt-5 text-lg leading-relaxed max-w-2xl ${dark ? "text-white/60" : "text-obsidian-500"}`}>
              {subtitle}
            </p>
          )}
        </AnimateOnScroll>
      </div>
    </section>
  );
}
