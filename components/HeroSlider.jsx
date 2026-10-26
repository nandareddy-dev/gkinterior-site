"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=2000",
    eyebrow: "Interior Design Studio · Hyderabad",
    title: "Spaces designed to feel like you",
    text: "Complete home interiors from first sketch to final handover, with one team and one clear timeline.",
  },
  {
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=2000",
    eyebrow: "Living Rooms",
    title: "Where comfort meets timeless style",
    text: "Warm textures, smart storage and lighting that makes every evening feel special.",
  },
  {
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=2000",
    eyebrow: "Modular Kitchens",
    title: "Kitchens you will love to cook in",
    text: "Smart layouts, premium finishes and quality fittings built to last for years.",
  },
  {
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=2000",
    eyebrow: "Bedrooms & Wardrobes",
    title: "Calm bedrooms made for rest",
    text: "Custom headboards, wardrobes and hidden storage, designed around your routine.",
  },
];

export default function HeroSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % slides.length), 6500);
    return () => clearInterval(id);
  }, [active]);

  const go = (i) => setActive((i + slides.length) % slides.length);
  const s = slides[active];

  return (
    <section className="relative flex min-h-[640px] h-svh items-center overflow-hidden bg-stone-900 text-white">
      {/* Background slides */}
      {slides.map((sl, i) => (
        <div
          key={sl.image}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${sl.image}')`,
            opacity: i === active ? 1 : 0,
            transform: i === active ? "scale(1.12)" : "scale(1)",
            transition:
              i === active
                ? "opacity 1.2s ease, transform 9s ease-out"
                : "opacity 1.2s ease, transform 0s linear 1.2s",
          }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/20" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/60 to-transparent" />

      {/* Content */}
      <div className="relative mx-auto w-full max-w-6xl px-5 pb-24 pt-24 md:pt-32">
        <div key={active} className="max-w-2xl">
          <p className="animate-fade-up mb-5 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-amber-400">
            <span className="h-px w-10 shrink-0 bg-amber-400" />
            {s.eyebrow}
          </p>
          <h1
            className="animate-fade-up mb-6 font-serif text-4xl leading-[1.1] sm:text-5xl md:text-7xl"
            style={{ animationDelay: "150ms" }}
          >
            {s.title}
          </h1>
          <p
            className="animate-fade-up mb-9 line-clamp-3 max-w-xl text-base leading-relaxed text-stone-200 md:line-clamp-none md:text-lg"
            style={{ animationDelay: "300ms" }}
          >
            {s.text}
          </p>
          <div className="animate-fade-up flex flex-wrap gap-4" style={{ animationDelay: "450ms" }}>
            <Link
              href="/contact"
              className="rounded-full bg-amber-600 px-8 py-3.5 text-xs uppercase tracking-widest shadow-lg shadow-amber-600/30 transition hover:-translate-y-0.5 hover:bg-amber-700"
            >
              Get Free Quote
            </Link>
            <Link
              href="/portfolio"
              className="rounded-full border border-white/60 px-8 py-3.5 text-xs uppercase tracking-widest transition hover:bg-white hover:text-stone-900"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-8 left-0 right-0">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5">
          <div className="flex items-center gap-4">
            <button
              onClick={() => go(active - 1)}
              aria-label="Previous slide"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 transition hover:bg-white hover:text-stone-900"
            >
              ←
            </button>
            <button
              onClick={() => go(active + 1)}
              aria-label="Next slide"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 transition hover:bg-white hover:text-stone-900"
            >
              →
            </button>
            <div className="ml-2 hidden items-center gap-2 sm:flex">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-[3px] rounded-full transition-all duration-500 ${
                    i === active ? "w-12 bg-amber-500" : "w-6 bg-white/40 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
            <span className="font-serif text-sm text-stone-300">
              0{active + 1} / 0{slides.length}
            </span>
          </div>

          <div className="hidden flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-stone-300 md:flex">
            Scroll
            <span className="flex h-9 w-5 justify-center rounded-full border border-white/50 pt-1.5">
              <span className="animate-scroll-dot h-1.5 w-1 rounded-full bg-white" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}