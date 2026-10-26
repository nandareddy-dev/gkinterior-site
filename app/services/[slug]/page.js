import Link from "next/link";
import { notFound } from "next/navigation";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import { serviceList } from "@/data/servicesData";

export function generateStaticParams() {
  return serviceList.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const s = serviceList.find((x) => x.slug === slug);
  if (!s) return {};
  return { title: s.title, description: `${s.title} in Hyderabad by GK Home Interiors. ${s.text}` };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const s = serviceList.find((x) => x.slug === slug);
  if (!s) notFound();

  const others = serviceList.filter((x) => x.slug !== s.slug);

  return (
    <>
      <Hero crumb={s.title} title={s.title} subtitle={s.short} image={s.image} />

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-24 md:grid-cols-2">
        <Reveal from="left">
          <img
            src={s.image}
            alt={`${s.title} by GK Home Interiors`}
            className="aspect-[4/3] w-full object-cover shadow-2xl"
          />
        </Reveal>
        <Reveal from="right">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-amber-700">What you get</p>
          <h2 className="mb-5 font-serif text-3xl md:text-4xl">{s.title}</h2>
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
          <Link
            href="/contact"
            className="inline-block rounded-full bg-amber-600 px-8 py-3.5 text-xs uppercase tracking-widest text-white transition hover:bg-amber-700"
          >
            Get Free Quote
          </Link>
        </Reveal>
      </section>

      <section className="bg-stone-100 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="mb-10 text-center font-serif text-3xl">Our other services</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/services/${o.slug}`}
                className="group border-b-4 border-transparent bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-amber-700 hover:shadow-xl"
              >
                <h3 className="mb-2 font-serif text-xl">{o.title}</h3>
                <p className="text-sm text-stone-600">{o.short}</p>
                <span className="mt-4 inline-block text-xs uppercase tracking-widest text-amber-700">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}