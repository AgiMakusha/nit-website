import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/programs", label: "Our Programs" },
  { href: "/research", label: "Research" },
  { href: "/projects", label: "Projects" },
  { href: "/partners", label: "Partners" },
  { href: "/contacts", label: "Contacts" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white">
      <div className="container-site py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 relative flex-shrink-0">
                <Image
                  src="/assets/Asset_13_3x-8-47846e0a-5fd5-47ea-9e81-d32693912ae9.png"
                  alt="NIT Logo"
                  fill
                  className="object-contain"
                  sizes="40px"
                />
              </div>
              <div>
                <div className="text-[0.6rem] font-semibold tracking-widest uppercase text-white/40 leading-none mb-0.5">
                  Center for
                </div>
                <div className="text-sm font-bold leading-tight tracking-tight text-white">
                  Neuro-Innovation & Performance
                </div>
              </div>
            </Link>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              Translating neuroscience into practical tools for performance, stress regulation, and decision-making.
            </p>
            <div className="mt-5">
              <span className="tag text-[#7ecfc0]" style={{ background: "rgba(126,207,192,0.08)", borderColor: "rgba(126,207,192,0.2)" }}>
                Occupational Neuroscience · Finland
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-5">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-5">
              Get in Touch
            </h4>
            <p className="text-sm text-white/50 leading-relaxed mb-5">
              Interested in our programs, research, or partnership opportunities?
            </p>
            <Link href="/contacts" className="btn-mint text-sm">
              Contact Us
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Center for Neuro-Innovation & Performance. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            Based on the Neurointegration Framework & Polyvagal Theory
          </p>
        </div>
      </div>
    </footer>
  );
}
