import Link from "next/link";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import Hero from "@/components/Hero";

export const metadata = {
  title: "About Us",
  description:
    "Learn about GK Home Interiors, our design team and how we create beautiful, practical homes and offices in Hyderabad.",
};

// Mee real numbers ikkada marchandi
const stats = [
  { end: 8, suffix: "+", label: "Years of experience" },
  { end: 150, suffix: "+", label: "Projects completed" },
  { end: 120, suffix: "+", label: "Happy families" },
  { end: 100, suffix: "%", label: "Client focus" },
];

const values = [
  {
    t: "Our Mission",
    d: "To make good design practical and affordable, so every family can live in a home they love.",
  },
  {
    t: "Our Vision",
    d: "To be the most trusted interior design studio in Hyderabad for quality, honesty and on-time delivery.",
  },
  {
    t: "Our Promise",
    d: "Clear pricing, quality materials and regular site updates. No surprises, no hidden costs.",
  },
];

const points = [
  "2D & 3D designs before you decide",
  "Branded materials with warranty",
  "Skilled in-house carpenters and supervisors",
  "One team, one clear timeline",
];

// Real photo unte img: "/images/team/priyanka.jpg" ani pettandi. Lekapothe initials chupistundi.
const team = [
  { name: "Founder Name", role: "Principal Designer", img: "" },
  { name: "Priyanka", role: "Senior Designer", img: "" },
  { name: "Nanda Reddy", role: "Project Manager", img: "" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero banner */}
      <Hero
        crumb="About"
        title="About GK Home Interiors"
        subtitle="We design spaces people love living in, from first sketch to final handover."
      />

      {/* Story */}
      <section className="mx-auto grid max-w-6xl items-center gap-16 px-5 py-24 md:grid-cols-2">
        <Reveal from="left" className="relative">
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1000"
            alt="Living room designed by GK Home Interiors"
            className="aspect-[4/5] w-full object-cover shadow-2xl"
          />
          <img
            src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=700"
            alt="Modular kitchen by GK Home Interiors"
            className="absolute -bottom-8 -right-4 hidden aspect-square w-2/5 border-8 border-[#faf8f5] object-cover shadow-xl sm:block"
          />
          <div className="absolute -left-3 top-8 bg-amber-700 px-5 py-4 text-white shadow-xl">
            <p className="font-serif text-4xl leading-none">8+</p>
            <p className="mt-1 text-[10px] uppercase tracking-widest">Years of design</p>
          </div>
        </Reveal>

        <Reveal from="right">
          <p className="mb-3 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-amber-700">
            <span className="h-px w-10 bg-amber-700" /> Our story
          </p>
          <h2 className="mb-6 font-serif text-3xl leading-tight md:text-5xl">
            Good design should be practical, affordable and personal
          </h2>
          <p className="mb-4 leading-relaxed text-stone-600">
            GK Home Interiors started with a simple idea: your home should look beautiful and work
            perfectly for the way you live. We work closely with every client to understand their
            lifestyle, budget and taste before we draw a single line.
          </p>
          <p className="mb-6 leading-relaxed text-stone-600">
            From compact apartments to large offices in Hyderabad, we handle design, material
            selection and execution, so you deal with one team and one clear timeline.
          </p>
          <ul className="space-y-2 text-sm text-stone-700">
            {points.map((x) => (
              <li key={x} className="flex items-center gap-3">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-700 text-[10px] text-white">
                  ✓
                </span>
                {x}
              </li>
            ))}
          </ul>
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

      {/* Mission / Vision / Promise */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-amber-700">What drives us</p>
          <h2 className="font-serif text-3xl md:text-5xl">Our values</h2>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.t} delay={i * 150}>
              <div className="group h-full border-b-4 border-transparent bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-amber-700 hover:shadow-xl">
                <span className="font-serif text-5xl text-stone-200 transition group-hover:text-amber-600">
                  0{i + 1}
                </span>
                <h3 className="mb-3 mt-4 font-serif text-2xl">{v.t}</h3>
                <p className="text-sm leading-relaxed text-stone-600">{v.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="bg-stone-100 py-24">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal className="mb-14 text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-amber-700">The people</p>
            <h2 className="font-serif text-3xl md:text-5xl">Meet the team</h2>
          </Reveal>
          <div className="grid gap-8 sm:grid-cols-3">
            {team.map((m, i) => (
              <Reveal key={i} delay={i * 150}>
                <div className="group relative overflow-hidden bg-stone-200">
                  {m.img ? (
                    <img
                      src={m.img}
                      alt={m.name}
                      className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex aspect-[4/5] w-full items-center justify-center bg-gradient-to-br from-amber-700 to-amber-500">
                      <span className="font-serif text-7xl text-white/90">
                        {m.name
                          .split(" ")
                          .map((w) => w[0])
                          .join("")
                          .slice(0, 2)}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 pt-16 text-white">
                    <h3 className="font-serif text-xl">{m.name}</h3>
                    <p className="text-xs uppercase tracking-widest text-amber-400">{m.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Visit + CTA */}
      <section
        className="bg-cover bg-center py-24 text-center text-white"
        style={{
          backgroundImage:
            "linear-gradient(rgba(28,25,23,.8), rgba(28,25,23,.8)), url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1800')",
        }}
      >
        <Reveal className="mx-auto max-w-3xl px-5">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-amber-500">Let's talk</p>
          <h2 className="mb-5 font-serif text-3xl md:text-5xl">Visit our studio in KPHB</h2>
          <address className="mb-8 not-italic leading-relaxed text-stone-300">
            301/4, 4th Floor, Alluri Trade Centre,
            <br />
            KPHB Rd, Bhagya Nagar Colony,
            <br />
            Hyderabad, Telangana 500072
          </address>
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