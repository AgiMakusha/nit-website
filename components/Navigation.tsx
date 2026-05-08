"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/programs", label: "Our Programs" },
  { href: "/research", label: "Research" },
  { href: "/projects", label: "Projects" },
  { href: "/partners", label: "Partners" },
  { href: "/contacts", label: "Contacts" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-neutral-100 shadow-sm"
            : "bg-white/80 backdrop-blur-sm"
        }`}
      >
        <div className="container-site">
          <nav className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 flex-shrink-0">
              <div className="w-12 h-12 relative flex-shrink-0">
                <Image
                  src="/assets/logo-black.svg"
                  alt="NIT Logo"
                  fill
                  className="object-contain"
                  priority
                  sizes="48px"
                />
              </div>
              <div className="flex flex-col justify-center h-12">
                <div className="text-[0.55rem] sm:text-[0.6rem] font-semibold tracking-widest uppercase text-mint-600 leading-none mb-0.5">
                  Center for
                </div>
                <div className="text-[0.7rem] sm:text-sm leading-tight tracking-tight text-obsidian-900 font-extrabold">
                  Neuro-Innovation & Performance
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <ul className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                      pathname === link.href
                        ? "text-obsidian-900 bg-neutral-100"
                        : "text-neutral-500 hover:text-obsidian-900 hover:bg-neutral-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-3">
              <Link href="/contacts" className="hidden md:inline-flex btn-mint text-xs px-4 py-2.5">
                Get Started
              </Link>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden p-2 rounded-lg text-obsidian-700 hover:bg-neutral-100 transition-colors"
                aria-label="Toggle menu"
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />
        <div
          className={`absolute top-0 right-0 bottom-0 w-[280px] bg-white flex flex-col transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-5 border-b border-neutral-100">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 relative flex-shrink-0">
                <Image
                  src="/assets/Asset_4_3x-8-357d2ba7-7e43-4579-98a1-b2caf5a88871.png"
                  alt="NIT Logo"
                  fill
                  className="object-contain"
                  sizes="32px"
                />
              </div>
              <span className="text-xs font-bold text-obsidian-900 leading-tight">NIT</span>
            </div>
            <button
              onClick={() => setMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-neutral-100 transition-colors"
            >
              <X size={18} />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto p-5">
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`flex items-center px-4 py-3.5 rounded-xl text-base font-medium transition-all duration-200 ${
                      pathname === link.href
                        ? "bg-obsidian-900 text-white"
                        : "text-obsidian-700 hover:bg-neutral-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="p-5 border-t border-neutral-100">
            <Link href="/contacts" className="btn-mint w-full justify-center">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
