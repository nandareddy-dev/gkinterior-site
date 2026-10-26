"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { serviceList } from "@/data/servicesData";

const PHONE = "+91 9742483054";
const PHONE_LINK = "+919742483054";
const WHATSAPP = "919742483054";

const LOGO = "/images/gk-logo.png";

const links = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services", dropdown: true },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const thumb = (url) => url.replace("w=1600", "w=240");

function Logo({ light }) {
  return (
    <span className="flex items-center gap-3">
      <span
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full p-1.5 transition-all duration-500 md:h-12 md:w-12 ${
          light ? "bg-white/95 shadow-md" : "bg-transparent"
        }`}
      >
        <img src={LOGO} alt="GK Home Interiors logo" className="h-full w-full object-contain" />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-serif text-xl tracking-wide transition-colors md:text-2xl ${
            light ? "text-white" : "text-stone-900"
          }`}
        >
          GK <span className="text-amber-600">Home</span>
        </span>
        <span
          className={`mt-1 text-[9px] uppercase tracking-[0.35em] transition-colors md:text-[10px] ${
            light ? "text-stone-200" : "text-stone-600"
          }`}
        >
          Interiors
        </span>
      </span>
    </span>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(y > 40);
      setProgress(max > 0 ? (y / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const transparent = isHome && !scrolled;
  const isActive = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  const closeMenu = () => setOpen(false);

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
          transparent
            ? "bg-gradient-to-b from-black/60 to-transparent"
            : "bg-[#d9d6d0]/95 shadow-md shadow-stone-900/10 backdrop-blur-lg"
        }`}
      >
        {/* nav = relative: mega menu ee container width lo untundi */}
        <nav className="relative mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-[72px]">
          <Link href="/" aria-label="GK Home Interiors">
            <Logo light={transparent} />
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-9 md:flex">
            {links.map((l) => (
              <li key={l.href} className="group/item">
                <Link
                  href={l.href}
                  className={`group relative flex items-center gap-1 py-2 text-[13px] uppercase tracking-[0.2em] transition-colors ${
                    isActive(l.href)
                      ? transparent
                        ? "text-amber-400"
                        : "text-amber-700"
                      : transparent
                      ? "text-white hover:text-amber-400"
                      : "text-stone-800 hover:text-amber-700"
                  }`}
                >
                  {l.label}
                  {l.dropdown && (
                    <span className="text-[10px] transition-transform duration-300 group-hover/item:rotate-180">▾</span>
                  )}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-[2px] transition-all duration-300 ${
                      transparent ? "bg-amber-400" : "bg-amber-700"
                    } ${isActive(l.href) ? "w-full" : "w-0 group-hover:w-full"}`}
                  />
                </Link>

                {/* MEGA MENU */}
                {l.dropdown && (
                  <div className="invisible absolute left-5 right-5 top-full translate-y-2 pt-3 opacity-0 transition-all duration-300 group-hover/item:visible group-hover/item:translate-y-0 group-hover/item:opacity-100 group-focus-within/item:visible group-focus-within/item:translate-y-0 group-focus-within/item:opacity-100">
                    <div className="grid overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/5 lg:grid-cols-3">
                      {/* Service cards */}
                      <div className="p-4 lg:col-span-2">
                        <p className="mb-3 px-3 text-[10px] uppercase tracking-[0.3em] text-stone-400">
                          Our services
                        </p>
                        <ul className="grid gap-1 sm:grid-cols-2">
                          {serviceList.map((s) => (
                            <li key={s.slug}>
                              <Link
                                href={`/services/${s.slug}`}
                                className={`group/card flex items-center gap-3 rounded-xl p-3 transition hover:bg-stone-100 ${
                                  pathname === `/services/${s.slug}` ? "bg-stone-100" : ""
                                }`}
                              >
                                <img
                                  src={thumb(s.image)}
                                  alt=""
                                  className="h-14 w-14 shrink-0 rounded-lg object-cover transition duration-500 group-hover/card:scale-105"
                                />
                                <span className="min-w-0">
                                  <span className="block text-sm font-medium normal-case tracking-normal text-stone-900 group-hover/card:text-amber-700">
                                    {s.title}
                                  </span>
                                  <span className="block text-xs normal-case leading-snug tracking-normal text-stone-500">
                                    {s.short}
                                  </span>
                                </span>
                              </Link>
                            </li>
                          ))}
                          <li>
                            <Link
                              href="/services"
                              className="flex h-full items-center justify-center gap-2 rounded-xl border border-dashed border-stone-300 p-3 text-xs uppercase tracking-widest text-amber-700 transition hover:border-amber-700 hover:bg-stone-50"
                            >
                              View all services →
                            </Link>
                          </li>
                        </ul>
                      </div>

                      {/* CTA panel */}
                      <div className="flex flex-col justify-center bg-stone-900 p-8 text-white">
                        <p className="mb-2 text-[10px] uppercase tracking-[0.3em] text-amber-400">
                          Free consultation
                        </p>
                        <h3 className="mb-3 font-serif text-2xl normal-case leading-tight tracking-normal">
                          Planning your dream home?
                        </h3>
                        <p className="mb-5 text-sm normal-case leading-relaxed tracking-normal text-stone-300">
                          Talk to our design team and get a free quote with 3D designs.
                        </p>
                        <Link
                          href="/contact"
                          className="mb-3 rounded-full bg-amber-600 py-3 text-center text-xs uppercase tracking-widest text-white transition hover:bg-amber-700"
                        >
                          Get Free Quote
                        </Link>
                        <a
                          href={`tel:${PHONE_LINK}`}
                          className="text-center text-sm normal-case tracking-normal text-stone-300 transition hover:text-white"
                        >
                          📞 {PHONE}
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            className="hidden rounded-full bg-amber-600 px-6 py-2.5 text-xs uppercase tracking-widest text-white shadow-lg shadow-amber-600/30 transition hover:-translate-y-0.5 hover:bg-amber-700 md:inline-block"
          >
            Get Free Quote
          </Link>

          {/* Mobile hamburger */}
          <button
            className={`flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-full md:hidden ${
              transparent ? "text-white" : "text-stone-900"
            }`}
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <span className="h-[2px] w-6 bg-current" />
            <span className="mr-[10px] h-[2px] w-4 self-end bg-current" />
            <span className="h-[2px] w-6 bg-current" />
          </button>
        </nav>

        <div
          className={`h-[3px] bg-gradient-to-r from-amber-500 to-amber-700 transition-opacity duration-300 ${
            scrolled ? "opacity-100" : "opacity-0"
          }`}
          style={{ width: `${progress}%` }}
        />
      </header>

      {!isHome && <div className="h-[67px] md:h-[75px]" />}

      {/* Mobile full-screen menu */}
      <div
        className={`fixed inset-0 z-[60] bg-stone-950 text-white transition-transform duration-500 ease-out md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <div className="flex h-full flex-col px-6 pb-8 pt-4">
          <div className="flex h-12 items-center justify-between">
            <Logo light />
            <button
              onClick={closeMenu}
              aria-label="Close menu"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-xl"
            >
              ✕
            </button>
          </div>

          <ul className="mt-6 flex-1 overflow-y-auto">
            {links.map((l, i) => (
              <li
                key={l.href}
                className={`transition-all duration-500 ${
                  open ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
                }`}
                style={{ transitionDelay: open ? `${150 + i * 70}ms` : "0ms" }}
              >
                {l.dropdown ? (
                  <>
                    <div className="flex items-center justify-between border-b border-white/10">
                      <Link
                        href={l.href}
                        onClick={closeMenu}
                        className={`flex-1 py-4 font-serif text-3xl ${
                          isActive(l.href) ? "text-amber-500" : "text-white"
                        }`}
                      >
                        {l.label}
                      </Link>
                      <button
                        onClick={() => setMobileServices((v) => !v)}
                        aria-label="Show services"
                        aria-expanded={mobileServices}
                        className="flex h-11 w-11 items-center justify-center text-xl text-amber-500"
                      >
                        <span className={`transition-transform duration-300 ${mobileServices ? "rotate-180" : ""}`}>
                          ▾
                        </span>
                      </button>
                    </div>
                    <ul
                      className={`overflow-hidden border-l border-amber-500/40 pl-4 transition-all duration-500 ${
                        mobileServices ? "max-h-[28rem] py-2 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      {serviceList.map((s) => (
                        <li key={s.slug}>
                          <Link
                            href={`/services/${s.slug}`}
                            onClick={closeMenu}
                            className="block py-2.5 text-lg text-stone-200 hover:text-amber-400"
                          >
                            {s.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link
                    href={l.href}
                    onClick={closeMenu}
                    className={`flex items-center justify-between border-b border-white/10 py-4 font-serif text-3xl ${
                      isActive(l.href) ? "text-amber-500" : "text-white"
                    }`}
                  >
                    {l.label}
                    <span className="text-lg text-amber-500">→</span>
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <div className="space-y-3 pt-4">
            <Link
              href="/contact"
              onClick={closeMenu}
              className="block rounded-full bg-amber-600 py-3.5 text-center text-sm uppercase tracking-widest"
            >
              Get Free Quote
            </Link>
            <div className="grid grid-cols-2 gap-3">
              <a href={`tel:${PHONE_LINK}`} className="rounded-full border border-white/25 py-3 text-center text-sm">
                📞 Call
              </a>
              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-green-600 py-3 text-center text-sm"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}