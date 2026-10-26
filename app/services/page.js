import Link from "next/link";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import { serviceList } from "@/data/servicesData";

export const metadata = {
  title: "Services",
  description:
    "Residential interiors, modular kitchens, false ceiling, commercial interiors and furniture design services in Hyderabad.",
};

const process = [
  { t: "Free consultation", d: "We understand your needs, space and budget." },
  { t: "Concept & 3D design", d: "See your space in 3D before work starts." },
  { t: "Quotation & approval", d: "Clear cost breakdown. You approve every detail." },
  { t: "Execution", d: "Skilled carpenters and supervisors on site." },
  { t: "Handover", d: "Final cleaning, walkthrough and after-service support." },
];

// Mee real answers tho marchandi
const faqs = [
  {
    q: "How long does a full home interior take?",
    a: "A typical 2BHK / 3BHK takes around 45 to 75 days after design approval, depending on the scope. We share a fixed timeline before starting.",
  },
  {
    q: "Do you provide 3D designs before starting?",
    a: "Yes. You will see 2D layouts and 3D views of your rooms, and we make changes until you are happy.",
  },
  {
    q: "What materials do you use?",
    a: "Branded plywood, laminates, hardware and paints. Brands and specifications are written clearly in your quotation.",
  },
  {
    q: "Is there any warranty?",
    a: "Yes. We provide warranty on woodwork and fittings, with after-service support once the project is handed over.",
  },
  {
    q: "How do payments work?",
    a: "Payments are linked to project stages (design approval, material, execution, handover), so you only pay as work progresses.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero banner */}
      <Hero
        crumb="Services"
        title="Our Services"
        subtitle="Everything you need, from first sketch to final handover."
      >
        <div className="flex flex-wrap justify-center gap-3">
          {serviceList.map((s) => (
            <a
              key={s.slug}
              href={`#${s.slug}`}
              className="rounded-full border border-white/40 px-5 py-2 text-xs uppercase tracking-widest transition hover:border-amber-500 hover:bg-amber-600"
            >
              {s.title}
            </a>
          ))}
        </div>
      </Hero>

      {/* Detailed services */}
      <section className="mx-auto max-w-6xl space-y-24 px-5 py-24">
        {serviceList.map((s, i) => (
          <div key={s.slug} id={s.slug} className="grid scroll-mt-28 items-center gap-12 md:grid-cols-2">
            <Reveal from={i % 2 === 0 ? "left" : "right"} className={i % 2 === 1 ? "md:order-2" : ""}>
              <Link href={`/services/${s.slug}`} className="group relative block overflow-hidden shadow-2xl">
                <img
                  src={s.image.replace("w=1600", "w=1200")}
                  alt={`${s.title} by GK Home Interiors`}
                  className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <span className="absolute left-0 top-0 bg-amber-700 px-5 py-3 font-serif text-2xl text-white">
                  0{i + 1}
                </span>
              </Link>
            </Reveal>

            <Reveal from={i % 2 === 0 ? "right" : "left"} className={i % 2 === 1 ? "md:order-1" : ""}>
              <p className="mb-3 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-amber-700">
                <span className="h-px w-10 bg-amber-700" /> Service
              </p>
              <h2 className="mb-5 font-serif text-3xl leading-tight md:text-4xl">{s.title}</h2>
              <p className="mb-6 leading-relaxed text-stone-600">{s.text}</p>
              <ul className="mb-8 grid gap-3 sm:grid-cols-2">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-sm text-stone-700">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-700 text-[10px] text-white">
                      ✓
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={`/services/${s.slug}`}
                  className="inline-block rounded-full border border-stone-900 px-8 py-3 text-xs uppercase tracking-widest transition hover:bg-stone-900 hover:text-white"
                >
                  Learn more
                </Link>
                <Link
                  href="/contact"
                  className="inline-block rounded-full bg-amber-600 px-8 py-3 text-xs uppercase tracking-widest text-white transition hover:bg-amber-700"
                >
                  Enquire now
                </Link>
              </div>
            </Reveal>
          </div>
        ))}
      </section>

      {/* Process */}
      <section className="bg-stone-900 py-24 text-white">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal className="mb-14 text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-amber-500">How we work</p>
            <h2 className="font-serif text-3xl md:text-5xl">From idea to your new space</h2>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((p, i) => (
              <Reveal key={p.t} delay={i * 120}>
                <div className="h-full border border-white/10 p-6 transition hover:border-amber-500">
                  <span className="font-serif text-4xl text-amber-500">0{i + 1}</span>
                  <h3 className="mb-2 mt-3 font-serif text-lg">{p.t}</h3>
                  <p className="text-sm leading-relaxed text-stone-400">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-5 py-24">
        <Reveal className="mb-12 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-amber-700">FAQ</p>
          <h2 className="font-serif text-3xl md:text-5xl">Common questions</h2>
        </Reveal>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 80}>
              <details className="group border border-stone-200 bg-white px-6 py-5 shadow-sm open:border-amber-700 open:shadow-md">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-lg">
                  {f.q}
                  <span className="text-2xl text-amber-700 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-stone-600">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        className="bg-cover bg-center py-24 text-center text-white"
        style={{
          backgroundImage:
            "linear-gradient(rgba(28,25,23,.8), rgba(28,25,23,.8)), url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1800')",
        }}
      >
        <Reveal className="mx-auto max-w-3xl px-5">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-amber-500">Let's get started</p>
          <h2 className="mb-5 font-serif text-3xl md:text-5xl">Ready to transform your space?</h2>
          <p className="mb-8 text-stone-300">
            Book a free consultation. Our team will visit, understand your needs and share a quotation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-amber-600 px-8 py-3.5 text-xs uppercase tracking-widest transition hover:bg-amber-700"
            >
              Get Free Quote
            </Link>
            <a
              href="tel:+919742483054"
              className="rounded-full border border-white/60 px-8 py-3.5 text-xs uppercase tracking-widest transition hover:bg-white hover:text-stone-900"
            >
              Call +91 97424 83054
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}