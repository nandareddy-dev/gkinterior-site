"use client";

import { useState } from "react";
import { brandCategories, brands } from "@/data/brands";

/* =========================================
   ORIGINAL BRAND LOGOS
========================================= */

const logoMap = {
  Greenply: "/Brands/greenply.jpg",
  CenturyPly: "/Brands/centuryply.png",
  Kitply: "/Brands/kitply.png",
  Archidply: "/Brands/archidply.png",
  "Saint-Gobain Gyproc": "/Brands/gyproc.jpg",
  "USG Boral": "/Brands/usg-boral.png",
  Armstrong: "/Brands/armstrong.png",
  Hettich: "/Brands/hettich.webp",
  Häfele: "/Brands/hafele.png",
  Ebco: "/Brands/ebco.jpg",
  Blum: "/Brands/blum.png",
  Merino: "/Brands/merino.png",
  Greenlam: "/Brands/greenlam.png",
  Philips: "/Brands/philips.png",
  Havells: "/Brands/havells.png",
  Wipro: "/Brands/wipro.webp",
};

/* =========================================
   BRAND DETAILS
========================================= */

const brandDetails = {
  Greenply: {
    description:
      "Premium plywood and wood-based solutions for beautiful and durable interiors.",
    products: ["Plywood", "MDF Boards", "Block Boards", "Veneers"],
    features: ["Durable Materials", "Premium Quality"],
  },

  CenturyPly: {
    description:
      "Premium plywood and decorative surface solutions for modern homes.",
    products: ["Plywood", "Laminates", "Veneers", "MDF"],
    features: ["Premium Finishes", "Wide Product Range"],
  },

  Kitply: {
    description:
      "Quality wood-based products for furniture and residential interiors.",
    products: ["Plywood", "Block Boards", "Flush Doors"],
    features: ["Strong Construction", "Quality Materials"],
  },

  Archidply: {
    description:
      "Decorative laminates and plywood solutions for stylish interiors.",
    products: ["Plywood", "Laminates", "Decorative Boards"],
    features: ["Modern Designs", "Beautiful Finishes"],
  },

  "Saint-Gobain Gyproc": {
    description:
      "Gypsum-based solutions for elegant false ceilings and interior partitions.",
    products: ["Gypsum Boards", "Ceiling Systems", "Drywall"],
    features: ["Smooth Finishes", "Ceiling Solutions"],
  },

  "USG Boral": {
    description:
      "Ceiling and drywall systems for residential and commercial spaces.",
    products: ["Ceiling Boards", "Drywall Systems", "Jointing"],
    features: ["Modern Systems", "Interior Solutions"],
  },

  Armstrong: {
    description:
      "Innovative ceiling solutions for beautiful and functional interior spaces.",
    products: ["Acoustic Ceilings", "Ceiling Tiles", "Grid Systems"],
    features: ["Acoustic Comfort", "Modern Designs"],
  },

  Hettich: {
    description:
      "Premium furniture fittings and intelligent hardware for modern homes.",
    products: ["Hinges", "Drawer Systems", "Sliding Systems", "Handles"],
    features: ["Smooth Movement", "Smart Storage"],
  },

  Häfele: {
    description:
      "Furniture fittings, kitchen accessories and architectural hardware.",
    products: ["Kitchen Accessories", "Handles", "Fittings", "Hardware"],
    features: ["Smart Solutions", "Premium Accessories"],
  },

  Ebco: {
    description:
      "Furniture hardware and accessories for practical interior solutions.",
    products: ["Drawer Channels", "Hinges", "Wardrobe Accessories"],
    features: ["Space Saving", "Functional Designs"],
  },

  Blum: {
    description:
      "Premium furniture fittings for smooth and intelligent kitchen solutions.",
    products: ["Hinges", "Drawer Systems", "Lift Systems", "Runners"],
    features: ["Soft Closing", "Smooth Functionality"],
  },

  Merino: {
    description:
      "Decorative surfaces and laminates for elegant furniture and interiors.",
    products: ["Laminates", "Compact Boards", "Wall Cladding"],
    features: ["Rich Textures", "Modern Patterns"],
  },

  Greenlam: {
    description:
      "Decorative laminate and surface solutions for stylish interiors.",
    products: ["Decorative Laminates", "Compact Laminates", "Veneers"],
    features: ["Premium Designs", "Multiple Finishes"],
  },

  Philips: {
    description:
      "Lighting solutions to enhance the ambience of residential interiors.",
    products: ["LED Lights", "Downlights", "Decorative Lighting"],
    features: ["Energy Efficient", "Modern Lighting"],
  },

  Havells: {
    description:
      "Electrical and lighting solutions for comfortable modern homes.",
    products: ["LED Lighting", "Switches", "Electrical Accessories"],
    features: ["Modern Designs", "Home Solutions"],
  },

  Wipro: {
    description:
      "Lighting solutions for beautiful residential and commercial spaces.",
    products: ["LED Lights", "Spotlights", "Panel Lights"],
    features: ["Efficient Lighting", "Contemporary Designs"],
  },
};

/* =========================================
   BRAND LOGO COMPONENT
========================================= */

function BrandLogo({ brand, large = false }) {
  const [failed, setFailed] = useState(false);

  const logo = logoMap[brand.name] || brand.logo;

  return (
    <div
      className={`flex shrink-0 items-center justify-center ${
        large
          ? "h-28 w-full px-2"
          : "h-24 w-56 px-4"
      }`}
    >
      {logo && !failed ? (
        <img
          src={logo}
          alt={`${brand.name} logo`}
          loading="lazy"
          onError={() => setFailed(true)}
          className={`block object-contain ${
            large
              ? "h-24 w-full max-w-[260px]"
              : "h-20 w-full max-w-[230px]"
          }`}
        />
      ) : (
        <span className="font-serif text-lg font-semibold text-stone-600">
          {brand.name}
        </span>
      )}
    </div>
  );
}

/* =========================================
   MARQUEE BRAND COMPONENT
========================================= */

function BrandMark({ brand }) {
  return (
    <div className="flex h-28 w-60 shrink-0 items-center justify-center rounded-xl border border-stone-200 bg-white px-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-amber-700 hover:shadow-lg">
      <BrandLogo brand={brand} />
    </div>
  );
}

/* =========================================
   INFINITE MARQUEE
========================================= */

function MarqueeRow({ items, reverse = false }) {
  if (!items.length) return null;

  const doubled = [...items, ...items];

  return (
    <div className="marquee-pause overflow-hidden">
      <div
        className={`flex w-max gap-4 py-2 ${
          reverse
            ? "animate-marquee-reverse"
            : "animate-marquee-slow"
        }`}
      >
        {doubled.map((brand, index) => (
          <div key={`${brand.name}-${index}`}>
            <BrandMark brand={brand} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================================
   BRAND DETAIL CARD
========================================= */

function BrandDetailCard({ brand, details }) {
  const products = (details?.products || [brand.category]).slice(0, 4);
  const features = (
    details?.features || ["Interior Solutions"]
  ).slice(0, 2);

  return (
    <div className="brand-back absolute inset-0 flex flex-col justify-center overflow-hidden bg-gradient-to-br from-[#183d53] via-[#102d42] to-[#071c2d] p-4 text-white sm:p-5">

      {/* Category Header */}

      <div className="mb-2 flex shrink-0 items-center justify-between">
        <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-300">
          {brand.category}
        </span>

        <span className="text-xl text-amber-300" aria-hidden="true">
          ▱
        </span>
      </div>

      {/* Brand Name */}

      <h3 className="mb-2 shrink-0 font-serif text-xl font-bold text-white">
        {brand.name}
      </h3>

      {/* Description */}

      <p className="mb-3 text-xs leading-[1.4] text-slate-200 line-clamp-2">
        {details?.description ||
          `Explore ${brand.name} products and solutions for modern interiors.`}
      </p>

      {/* Product Range */}

      <p className="mb-2 shrink-0 text-[10px] font-bold uppercase tracking-wider text-amber-300">
        Product Range
      </p>

      <div className="mb-3 flex flex-wrap gap-1.5">
        {products.map((product) => (
          <span
            key={product}
            className="rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[10px] leading-tight text-white"
          >
            {product}
          </span>
        ))}
      </div>

      {/* Features */}

      <div className="flex flex-wrap gap-x-3 gap-y-1 border-t border-white/15 pt-2">
        {features.map((feature) => (
          <span
            key={feature}
            className="flex items-center gap-1 text-[10px] leading-tight text-slate-200"
          >
            <span className="text-sm font-bold text-lime-400">
              ✓
            </span>
            {feature}
          </span>
        ))}
      </div>

      {/* Footer */}

      <span className="mt-2 flex shrink-0 items-center gap-1 text-[10px] font-semibold text-amber-300">
        Trusted by GK Home Interiors
        <span aria-hidden="true">↗</span>
      </span>

    </div>
  );
}

/* =========================================
   MAIN BRANDS SECTION
========================================= */

export default function Brands() {
  const [active, setActive] = useState("all");
  const [selectedBrand, setSelectedBrand] = useState(null);

  /* Category Filtering */

  const shown =
    active === "all"
      ? brands
      : brands.filter((brand) => brand.category === active);

  /* Marquee Rows */

  const half = Math.ceil(brands.length / 2);

  const rowA = brands.slice(0, half);
  const rowB = brands.slice(half);

  /* Filter Handler */

  const handleFilter = (categoryId) => {
    setActive(categoryId);
    setSelectedBrand(null);
  };

  return (
    <section
      id="brands"
      className="relative overflow-hidden bg-white py-20 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-5">

        {/* =================================
            SECTION HEADING
        ================================= */}

        <div className="mx-auto mb-14 max-w-3xl text-center">

          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-amber-800">
            <span aria-hidden="true">✦</span>
            Quality You Can Trust
          </div>

          <h2 className="mb-5 font-serif text-4xl text-stone-900 md:text-6xl">
            Brands we work with
          </h2>

          <p className="mx-auto max-w-2xl text-base leading-8 text-stone-600 md:text-lg">
            We partner with trusted brands for plywood,
            false ceilings, hardware, laminates and lighting
            to deliver beautiful and long-lasting interiors.
          </p>

          <div className="mx-auto mt-7 h-1 w-20 rounded-full bg-gradient-to-r from-amber-700 to-lime-600" />

        </div>

        {/* =================================
            CATEGORY IMAGE CARDS
        ================================= */}

        <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">

          {brandCategories.map((category, index) => {
            const isActive = active === category.id;

            return (
              <button
                key={category.id}
                onClick={() =>
                  handleFilter(isActive ? "all" : category.id)
                }
                style={{
                  animationDelay: `${index * 80}ms`,
                }}
                className={`animate-pop-in group relative aspect-[4/5] overflow-hidden rounded-2xl text-left shadow-md transition duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                  isActive ? "ring-4 ring-amber-600" : ""
                }`}
                aria-pressed={isActive}
              >

                <img
                  src={category.image}
                  alt={category.label}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div
                  className={`absolute inset-0 transition duration-300 ${
                    isActive
                      ? "bg-amber-800/65"
                      : "bg-gradient-to-t from-black/90 via-black/35 to-black/10"
                  }`}
                />

                <div className="absolute inset-x-0 bottom-0 p-4 text-white">

                  <span className="mb-3 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/20 text-xl backdrop-blur-md">
                    {category.icon}
                  </span>

                  <h3 className="font-serif text-lg leading-tight md:text-xl">
                    {category.label}
                  </h3>

                  <p className="mt-2 text-xs text-stone-200">
                    {category.note}
                  </p>

                  <span className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-amber-300">
                    Explore Category ↗
                  </span>

                </div>

              </button>
            );
          })}

        </div>

        {/* =================================
            FILTER BUTTONS
        ================================= */}

        <div className="mb-10 flex flex-wrap justify-center gap-2">

          {[{ id: "all", label: "All Brands" }, ...brandCategories].map(
            (category) => (
              <button
                key={category.id}
                onClick={() => handleFilter(category.id)}
                className={`rounded-full border px-5 py-3 text-[11px] font-semibold uppercase tracking-widest transition duration-300 ${
                  active === category.id
                    ? "border-amber-700 bg-amber-700 text-white shadow-lg shadow-amber-700/30"
                    : "border-stone-300 bg-white text-stone-700 hover:border-amber-700 hover:text-amber-700"
                }`}
              >
                {category.label}
              </button>
            )
          )}

        </div>

        {/* =================================
            INTERACTIVE BRAND CARDS
        ================================= */}

        <div
          key={active}
          className="mb-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >

          {shown.map((brand, index) => {
            const details = brandDetails[brand.name];
            const selected = selectedBrand === brand.name;

            return (
              <article
                key={brand.name}
                role="button"
                tabIndex={0}
                aria-label={`${brand.name} brand details`}
                aria-expanded={selected}

                onMouseEnter={() => setSelectedBrand(brand.name)}
                onMouseLeave={() => setSelectedBrand(null)}

                onClick={() =>
                  setSelectedBrand(
                    selected ? null : brand.name
                  )
                }

                onKeyDown={(event) => {
                  if (
                    event.key === "Enter" ||
                    event.key === " "
                  ) {
                    event.preventDefault();

                    setSelectedBrand(
                      selected ? null : brand.name
                    );
                  }

                  if (event.key === "Escape") {
                    setSelectedBrand(null);
                  }
                }}

                style={{
                  animationDelay: `${index * 60}ms`,
                }}

                className={`brand-interactive-card animate-pop-in group relative min-h-[320px] cursor-pointer overflow-hidden rounded-2xl border bg-white shadow-sm outline-none transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl focus-visible:ring-2 focus-visible:ring-amber-600 ${
                  selected
                    ? "selected border-amber-700 shadow-xl"
                    : "border-stone-200"
                }`}
              >

                {/* =================================
                    NORMAL BRAND CARD
                ================================= */}

                <div className="brand-front flex min-h-[320px] flex-col items-center justify-center gap-4 p-5">

                  <BrandLogo brand={brand} large />

                  <div className="text-center">

                    <h3 className="font-serif text-xl font-semibold text-stone-700">
                      {brand.name}
                    </h3>

                    <p className="mt-2 text-[11px] uppercase tracking-widest text-stone-400">
                      {brand.category}
                    </p>

                  </div>

                  <span className="flex items-center gap-1 text-sm font-semibold text-blue-700">
                    View Details ↗
                  </span>

                </div>

                {/* =================================
                    PREMIUM HOVER DETAILS

                    NO LOGO
                    NO WHITE BACKGROUND
                    NO SCROLLBAR
                    NO INTERNAL SCROLLING
                ================================= */}

                <BrandDetailCard
                  brand={brand}
                  details={details}
                />

              </article>
            );
          })}

        </div>

        {/* =================================
            BOTTOM MESSAGE
        ================================= */}

        <div className="mb-16 rounded-2xl border border-amber-100 bg-gradient-to-r from-stone-50 to-amber-50 px-6 py-10 text-center">

          <span className="mb-4 block text-3xl text-amber-700">
            ✦
          </span>

          <h3 className="font-serif text-2xl text-stone-800 md:text-3xl">
            Quality Materials. Beautiful Interiors.
          </h3>

          <p className="mt-3 text-sm leading-7 text-stone-600">
            Every detail matters. That is why we choose trusted
            brands for your dream home.
          </p>

        </div>

      </div>

      {/* =================================
          INFINITE MARQUEE
      ================================= */}

      <div className="space-y-4">

        <MarqueeRow items={rowA} />

        <MarqueeRow items={rowB} reverse />

      </div>

      {/* =================================
          HOVER ANIMATIONS
      ================================= */}

      <style jsx global>{`

        .brand-interactive-card {
          isolation: isolate;
        }

        .brand-front {
          position: relative;
          z-index: 1;
          transition:
            opacity 0.35s ease,
            transform 0.4s ease;
        }

        .brand-back {
          position: absolute;
          inset: 0;
          z-index: 2;

          display: flex;
          flex-direction: column;

          opacity: 0;
          visibility: hidden;
          overflow: hidden !important;

          transform: translateY(12px);

          transition:
            opacity 0.35s ease,
            transform 0.4s ease,
            visibility 0.35s ease;

          pointer-events: none;

          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .brand-back::-webkit-scrollbar {
          display: none !important;
          width: 0 !important;
          height: 0 !important;
        }

        .brand-interactive-card:hover .brand-back,
        .brand-interactive-card:focus-visible .brand-back,
        .brand-interactive-card.selected .brand-back {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
          pointer-events: auto;
        }

        .brand-interactive-card:hover .brand-front,
        .brand-interactive-card:focus-visible .brand-front,
        .brand-interactive-card.selected .brand-front {
          opacity: 0;
          transform: translateY(-12px);
          pointer-events: none;
        }

        @media (hover: none) {
          .brand-interactive-card:not(.selected) .brand-back {
            opacity: 0;
            visibility: hidden;
          }

          .brand-interactive-card.selected .brand-back {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .brand-back,
          .brand-front {
            transition: none;
          }
        }

      `}</style>

    </section>
  );
}