"use client";
import { useState } from "react";
import { brandCategories, brands } from "@/data/brands";

function BrandMark({ brand, size = "md" }) {
  const pad = size === "lg" ? "h-24 px-6" : "h-16 px-8";
  return (
    <div
      className={`flex ${pad} shrink-0 items-center justify-center rounded-xl border border-stone-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-amber-700 hover:shadow-lg`}
    >
      {brand.logo ? (
        <img src={brand.logo} alt={brand.name} className="max-h-full max-w-[140px] object-contain" />
      ) : (
        <span className="whitespace-nowrap font-serif text-lg font-semibold tracking-wide text-stone-700 transition group-hover:text-amber-700">
          {brand.name}
        </span>
      )}
    </div>
  );
}

function MarqueeRow({ items, reverse = false }) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-pause overflow-hidden">
      <div
        className={`flex w-max gap-4 py-2 ${reverse ? "animate-marquee-reverse" : "animate-marquee-slow"}`}
      >
        {doubled.map((b, i) => (
          <div key={`${b.name}-${i}`} className="group">
            <BrandMark brand={b} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Brands() {
  const [active, setActive] = useState("all");

  const shown = active === "all" ? brands : brands.filter((b) => b.category === active);
  const half = Math.ceil(brands.length / 2);
  const rowA = brands.slice(0, half);
  const rowB = brands.slice(half);

  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="mx-auto max-w-6xl px-5">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-amber-700">Quality you can trust</p>
          <h2 className="mb-4 font-serif text-3xl md:text-5xl">Brands we work with</h2>
          <p className="text-stone-600">
            We use trusted brands for plywood, false ceiling, hardware and finishes, so your interiors
            stay strong and beautiful for years.
          </p>
        </div>

        {/* Category image cards */}
        <div className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {brandCategories.map((c, i) => {
            const on = active === c.id;
            return (
              <button
                key={c.id}
                onClick={() => setActive(on ? "all" : c.id)}
                style={{ animationDelay: `${i * 90}ms` }}
                className={`animate-pop-in group relative aspect-[4/5] overflow-hidden rounded-2xl text-left shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                  on ? "ring-4 ring-amber-700" : ""
                }`}
                aria-pressed={on}
              >
                <img
                  src={c.image}
                  alt={c.label}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 transition ${
                    on ? "bg-amber-700/60" : "bg-gradient-to-t from-black/85 via-black/35 to-black/10"
                  }`}
                />
                <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                  <span className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-xl backdrop-blur">
                    {c.icon}
                  </span>
                  <h3 className="font-serif text-lg leading-tight">{c.label}</h3>
                  <p className="mt-1 text-xs text-stone-200">{c.note}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Filter pills */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {[{ id: "all", label: "All brands" }, ...brandCategories].map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`rounded-full border px-5 py-2 text-xs uppercase tracking-widest transition ${
                active === c.id
                  ? "border-amber-700 bg-amber-700 text-white shadow-lg shadow-amber-700/30"
                  : "border-stone-300 hover:border-amber-700 hover:text-amber-700"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Brand cards (filter marinappudu malli animate avutayi) */}
        <div
          key={active}
          className="mb-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
        >
          {shown.map((b, i) => (
            <div
              key={b.name}
              className="animate-pop-in group"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <BrandMark brand={b} size="lg" />
            </div>
          ))}
        </div>
      </div>

      {/* Infinite marquee rows */}
      <div className="space-y-3">
        <MarqueeRow items={rowA} />
        <MarqueeRow items={rowB} reverse />
      </div>
    </section>
  );
}