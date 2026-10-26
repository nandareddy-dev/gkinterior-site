"use client";
import Link from "next/link";
import { useState } from "react";

export default function PortfolioGrid({ projects }) {
  const categories = ["All", ...new Set(projects.map((p) => p.category))];
  const [active, setActive] = useState("All");

  const count = (c) => (c === "All" ? projects.length : projects.filter((p) => p.category === c).length);
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      {/* Filter pills */}
      <div className="mb-14 flex flex-wrap justify-center gap-3">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`flex items-center gap-2 rounded-full border px-5 py-2.5 text-xs uppercase tracking-widest transition ${
              active === c
                ? "border-amber-700 bg-amber-700 text-white shadow-lg shadow-amber-700/30"
                : "border-stone-300 bg-white hover:border-amber-700 hover:text-amber-700"
            }`}
          >
            {c}
            <span
              className={`rounded-full px-2 py-0.5 text-[10px] ${
                active === c ? "bg-white/25" : "bg-stone-100 text-stone-500"
              }`}
            >
              {count(c)}
            </span>
          </button>
        ))}
      </div>

      {/* Grid (key marinappudu animation malli run avutundi) */}
      <div key={active} className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p, i) => (
          <Link
            key={p.slug}
            href={`/portfolio/${p.slug}`}
            className="animate-fade-up group relative block overflow-hidden bg-stone-200 shadow-md transition hover:shadow-2xl"
            style={{ animationDelay: `${i * 90}ms` }}
          >
            <img
              src={p.image}
              alt={`${p.title} interior design by GK Home Interiors`}
              className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-110"
            />

            {/* Category tag */}
            <span className="absolute left-4 top-4 bg-white/90 px-3 py-1 text-[10px] uppercase tracking-widest text-stone-800 backdrop-blur">
              {p.category}
            </span>

            {/* Bottom gradient + info */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-6 pt-24 text-white">
              <h3 className="font-serif text-2xl">{p.title}</h3>
              {/* Mobile: always visible. Desktop: hover lo vastundi */}
              <div className="mt-3 max-h-24 overflow-hidden opacity-100 transition-all duration-500 md:mt-0 md:max-h-0 md:opacity-0 md:group-hover:mt-3 md:group-hover:max-h-24 md:group-hover:opacity-100">
                <p className="text-xs text-stone-300">
                  📍 {p.location} &nbsp;·&nbsp; {p.area}
                </p>
                <span className="mt-2 inline-block text-xs uppercase tracking-widest text-amber-400">
                  View project →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-20 text-center text-stone-500">No projects in this category yet.</p>
      )}
    </>
  );
}