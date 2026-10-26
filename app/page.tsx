import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import HeroSlider from "@/components/HeroSlider";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import { projects, testimonials } from "@/data/projects";
import { serviceList } from "@/data/servicesData";
import Brands from "@/components/Brands";

const keywords = [
  "Modular Kitchens",
  "Living Rooms",
  "Bedrooms",
  "Wardrobes",
  "False Ceiling",
  "Office Interiors",
  "TV Units",
  "Pooja Rooms",
];

// Mee real numbers ikkada marchandi
const stats = [
  { end: 2, suffix: "+", label: "Years of experience" },
  { end: 50, suffix: "+", label: "Projects completed" },
  { end: 38, suffix: "+", label: "Happy families" },
  { end: 100, suffix: "%", label: "On-time focus" },
];

const why = [
  { t: "End-to-end service", d: "Design, material, execution and handover from one team." },
  { t: "Transparent pricing", d: "Clear quotation up front, with no hidden costs later." },
  { t: "Quality materials", d: "Branded plywood, hardware and finishes with proper warranty." },
  { t: "On-time delivery", d: "A fixed timeline that we respect, with regular site updates." },
];

const steps = [
  { t: "Free consultation", d: "We understand your needs, space and budget." },
  { t: "Concept & 3D design", d: "See your home in 3D before work starts." },
  { t: "Quotation & approval", d: "Clear cost breakdown, you approve every detail." },
  { t: "Execution", d: "Skilled carpenters and supervisors on site." },
  { t: "Handover", d: "Final cleaning, walkthrough and after-service support." },
];

const areas = [
  "KPHB",
  "Kukatpally",
  "Miyapur",
  "Madhapur",
  "Kondapur",
  "Gachibowli",
  "HITEC City",
  "Jubilee Hills",
  "Bachupally",
  "Nizampet",
];

// Mee real answers tho marchandi
const faqs = [
  {
    q: "How long does a full home interior take?",
    a: "A typical 2BHK / 3BHK takes around 45 to 75 days after design approval. We share a fixed timeline before starting.",
  },
  {
    q: "Do you provide 3D designs before starting?",
    a: "Yes. You will see 2D layouts and 3D views of your rooms, and we make changes until you are happy.",
  },
  {
    q: "Is the consultation really free?",
    a: "Yes. Our team understands your needs and shares a quotation at no cost.",
  },
  {
    q: "Which areas in Hyderabad do you serve?",
    a: "We work across Hyderabad, including KPHB, Kukatpally, Madhapur, Kondapur, Gachibowli and HITEC City.",
  },
];

export default function Home() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);
  const shown = featured.length ? featured : projects.slice(0, 3);
  const marquee = [...keywords, ...keywords];
  const years = stats[0];

  return (
    <>
      {/* Hero slider */}
      <HeroSlider />

      {/* Keyword strip */}
      <div className="overflow-hidden bg-stone-900 py-4 text-stone-300">
        <div className="animate-marquee flex w-max gap-10 whitespace-nowrap text-xs uppercase tracking-[0.3em]">
          {marquee.map((k, i) => (
            <span key={i} className="flex items-center gap-10">
              {k}
              <span className="text-amber-500">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Quick enquiry strip */}
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-6 text-center md:flex-row md:text-left">
          <p className="font-serif text-xl md:text-2xl">
            Planning interiors? <span className="text-amber-700">Get a free quote today.</span>
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-amber-600 px-6 py-3 text-xs uppercase tracking-widest text-white transition hover:bg-amber-700"
            >
              Get Free Quote
            </Link>
            <a
              href="tel:+919742483054"
              className="rounded-full border border-stone-400 px-6 py-3 text-xs uppercase tracking-widest transition hover:border-amber-700 hover:text-amber-700"
            >
              Call now
            </a>
            <a
              href="https://wa.me/919742483054"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-green-600 px-6 py-3 text-xs uppercase tracking-widest text-white transition hover:bg-green-700"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Intro + images */}
      <section className="mx-auto grid max-w-6xl items-center gap-14 px-5 py-24 md:grid-cols-2">
        <Reveal from="left" className="relative">
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1000"
            alt="Living room designed by GK Home Interiors"
            className="aspect-[4/5] w-full object-cover shadow-2xl"
          />
          <img
            src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=700"
            alt="Modular kitchen design"
            className="absolute -bottom-8 -right-4 hidden aspect-square w-2/5 border-8 border-[#faf8f5] object-cover shadow-xl sm:block"
          />
          <div className="absolute -left-3 top-8 bg-amber-700 px-5 py-4 text-white shadow-xl">
            <p className="font-serif text-4xl leading-none">
              {years.end}
              {years.suffix}
            </p>
            <p className="mt-1 text-[10px] uppercase tracking-widest">Years of design</p>
          </div>
        </Reveal>

        <Reveal from="right">
          <p className="mb-3 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-amber-700">
            <span className="h-px w-10 bg-amber-700" /> About us
          </p>
          <h2 className="mb-6 font-serif text-3xl leading-tight md:text-5xl">
            Design that fits your life, your taste and your budget
          </h2>
          <p className="mb-5 leading-relaxed text-stone-600">
            GK Home Interiors creates homes and workspaces that are beautiful, practical and built to
            last. From the first sketch to the final handover, we take care of everything.
          </p>
          <ul className="mb-8 space-y-2 text-sm text-stone-700">
            {["2D & 3D designs before you decide", "Branded materials with warranty", "One team, one timeline"].map(
              (x) => (
                <li key={x} className="flex items-center gap-3">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-700 text-[10px] text-white">
                    ✓
                  </span>
                  {x}
                </li>
              )
            )}
          </ul>
          <Link
            href="/about"
            className="inline-block rounded-full border border-stone-900 px-8 py-3 text-xs uppercase tracking-widest transition hover:bg-stone-900 hover:text-white"
          >
            Know more about us
          </Link>
        </Reveal>
      </section>

      {/* Stats */}
      <section className="bg-stone-900 py-16 text-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-10 px-5 text-center md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 120}>
              <p className="font-serif text-5xl text-amber-500 md:text-6xl">
                <Counter end={s.end} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-xs uppercase tracking-widest text-stone-300">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Featured projects */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-3 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-amber-700">
              <span className="h-px w-10 bg-amber-700" /> Portfolio
            </p>
            <h2 className="font-serif text-3xl md:text-5xl">Featured Projects</h2>
          </div>
          <Link href="/portfolio" className="text-sm uppercase tracking-widest text-amber-700 hover:underline">
            View all projects →
          </Link>
        </Reveal>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((p, i) => (
            <Reveal key={p.slug} delay={i * 150}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Services (servicesData nundi auto) */}
      <section className="bg-stone-100 py-24">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-amber-700">What we do</p>
            <h2 className="font-serif text-3xl md:text-5xl">Our Services</h2>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serviceList.map((s, i) => (
              <Reveal key={s.slug} delay={i * 100}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group relative block aspect-[4/5] overflow-hidden bg-stone-300 shadow-md transition hover:shadow-2xl"
                >
                  <img
                    src={s.image.replace("w=1600", "w=900")}
                    alt={`${s.title} by GK Home Interiors`}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <span className="absolute left-0 top-0 bg-amber-700 px-4 py-2 font-serif text-xl text-white">
                    0{i + 1}
                  </span>
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 pt-24 text-white">
                    <h3 className="font-serif text-2xl">{s.title}</h3>
                    <p className="mt-1 text-sm text-stone-300">{s.short}</p>
                    <span className="mt-3 inline-block text-xs uppercase tracking-widest text-amber-400 transition group-hover:translate-x-1">
                      Learn more →
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}

            {/* Custom quote card */}
            <Reveal delay={serviceList.length * 100}>
              <Link
                href="/contact"
                className="group flex aspect-[4/5] flex-col items-center justify-center bg-amber-700 p-8 text-center text-white shadow-md transition hover:bg-amber-800 hover:shadow-2xl"
              >
                <p className="mb-2 text-[10px] uppercase tracking-[0.3em] text-amber-200">Something else?</p>
                <h3 className="mb-4 font-serif text-3xl">Tell us what you need</h3>
                <span className="rounded-full border border-white/60 px-6 py-2.5 text-xs uppercase tracking-widest transition group-hover:bg-white group-hover:text-amber-800">
                  Get Free Quote
                </span>
              </Link>
            </Reveal>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-block rounded-full border border-stone-900 px-8 py-3 text-xs uppercase tracking-widest transition hover:bg-stone-900 hover:text-white"
            >
              All services
            </Link>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="mx-auto grid max-w-6xl items-center gap-14 px-5 py-24 md:grid-cols-2">
        <Reveal from="left">
          <p className="mb-3 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-amber-700">
            <span className="h-px w-10 bg-amber-700" /> Why GK Home Interiors
          </p>
          <h2 className="mb-10 font-serif text-3xl leading-tight md:text-5xl">
            Why families and businesses trust us
          </h2>
          <div className="space-y-7">
            {why.map((w, i) => (
              <div key={w.t} className="flex gap-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-700/10 font-serif text-lg text-amber-700">
                  {i + 1}
                </span>
                <div>
                  <h3 className="mb-1 font-serif text-xl">{w.t}</h3>
                  <p className="text-sm leading-relaxed text-stone-600">{w.d}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal from="right">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1000"
            alt="Office interior by GK Home Interiors"
            className="aspect-[4/5] w-full object-cover shadow-2xl"
          />
        </Reveal>
      </section>


            {/* Brands */}
      <Brands />

      {/* Process */}
      <section className="relative overflow-hidden bg-white py-20 text-slate-700 md:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-20 h-72 w-72 rounded-full border-[35px] border-blue-50"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-20 bottom-10 h-56 w-56 rounded-full border-[25px] border-lime-50"
        />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="mx-auto mb-16 max-w-3xl text-center">
            <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-[#80BD16]">
              <span className="h-[2px] w-8 bg-[#0756B5]" />
              How We Work
              <span className="h-[2px] w-8 bg-[#0756B5]" />
            </span>

            <h2 className="mt-5 font-serif text-3xl font-bold leading-tight text-[#123B78] sm:text-4xl md:text-5xl">
              From Your Vision
              <span className="mt-2 block text-[#0756B5]">To Your Dream Home</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500 md:text-base">
              Your dream home deserves thoughtful planning and beautiful execution. Discover how we
              transform your ideas into spaces you'll love.
            </p>
          </Reveal>

          <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            <div
              aria-hidden="true"
              className="absolute left-[10%] right-[10%] top-9 hidden h-[2px] bg-gradient-to-r from-[#0756B5] via-[#80BD16] to-[#0756B5] lg:block"
            />

            {steps.map((p, i) => (
              <Reveal key={p.t} delay={i * 120}>
                <article className="group relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_4px_24px_rgba(18,59,120,0.05)] transition-all duration-300 hover:-translate-y-2 hover:border-[#80BD16] hover:shadow-[0_16px_35px_rgba(7,86,181,0.12)]">
                  <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-[#0756B5] to-[#80BD16] transition-transform duration-300 group-hover:scale-x-100" />

                  <div className="relative z-10 mb-7 flex h-[72px] w-[72px] items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 font-serif text-3xl font-bold text-[#0756B5] shadow-sm transition-all duration-300 group-hover:border-[#0756B5] group-hover:bg-[#0756B5] group-hover:text-white">
                    {String(i + 1).padStart(2, "0")}
                    <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-white bg-[#80BD16]" />
                  </div>

                  <div className="mb-5 h-1 w-10 rounded-full bg-[#80BD16] transition-all duration-300 group-hover:w-16" />

                  <h3 className="mb-3 font-serif text-xl font-bold leading-snug text-[#123B78] transition-colors group-hover:text-[#0756B5]">
                    {p.t}
                  </h3>
                  <p className="text-sm leading-7 text-slate-500">{p.d}</p>

                  <div className="mt-7 flex items-center justify-between border-t border-slate-100 pt-4">
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                      STEP {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-lime-50 text-lg text-[#659b0d] transition-all duration-300 group-hover:bg-[#80BD16] group-hover:text-white"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200} className="mt-16">
            <div className="relative overflow-hidden rounded-2xl bg-[#123B78] px-6 py-9 text-center shadow-lg shadow-blue-900/10 sm:px-10 md:py-12">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-12 -top-16 h-48 w-48 rounded-full border-[25px] border-white/5"
              />
              <div className="relative">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#A5D957]">
                  Let's Build Something Beautiful
                </span>
                <h3 className="mt-4 font-serif text-2xl font-bold text-white sm:text-3xl">
                  Ready to Design Your Dream Home?
                </h3>
                <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-blue-100">
                  Tell us your ideas. Our team will help you plan the perfect space for your lifestyle.
                </p>
                <a
                  href="https://wa.me/919742483054"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex items-center justify-center gap-3 rounded-lg bg-[#80BD16] px-7 py-4 text-sm font-bold text-[#17365d] shadow-md transition hover:-translate-y-1 hover:bg-[#91D32A] hover:shadow-lg"
                >
                  Get a Free Consultation
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-stone-100 py-24">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal className="mb-14 text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-amber-700">Testimonials</p>
            <h2 className="font-serif text-3xl md:text-5xl">Happy Clients</h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 150}>
                <figure className="relative h-full bg-white p-8 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
                  <span className="absolute right-6 top-2 font-serif text-7xl text-amber-700/15">"</span>
                  <div className="mb-4 text-amber-500">★★★★★</div>
                  <blockquote className="mb-6 italic leading-relaxed text-stone-700">{t.text}</blockquote>
                  <figcaption className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-700 text-sm text-white">
                      {t.name[0]}
                    </span>
                    <span className="text-sm font-medium">{t.name}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Areas we serve */}
      <section className="mx-auto max-w-6xl px-5 py-24 text-center">
        <Reveal>
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-amber-700">Areas we serve</p>
          <h2 className="mb-10 font-serif text-3xl md:text-5xl">Interior designers across Hyderabad</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {areas.map((a) => (
              <span
                key={a}
                className="rounded-full border border-stone-300 bg-white px-5 py-2 text-sm text-stone-700 transition hover:border-amber-700 hover:text-amber-700"
              >
                📍 {a}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-5 pb-24">
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
            "linear-gradient(rgba(28,25,23,.75), rgba(28,25,23,.75)), url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1800')",
        }}
      >
        <Reveal className="mx-auto max-w-3xl px-5">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-amber-500">Let's get started</p>
          <h2 className="mb-5 font-serif text-3xl md:text-5xl">Planning a new home or office?</h2>
          <p className="mb-8 text-stone-300">
            Book a free consultation. Our design team will visit, understand your needs and share a
            quotation.
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
              Call +91 9742483054
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}