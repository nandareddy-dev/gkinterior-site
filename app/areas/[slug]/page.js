import Link from "next/link";
import { notFound } from "next/navigation";
import { areas } from "../areasData";

export function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const area = areas.find((a) => a.slug === slug);
  if (!area) return {};
  return {
    title: area.title,
    description: area.description,
    alternates: {
      canonical: `https://www.gkhomeinteriors.in/areas/${area.slug}`,
    },
  };
}

export default async function AreaPage({ params }) {
  const { slug } = await params;
  const area = areas.find((a) => a.slug === slug);
  if (!area) notFound();

  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: "40px 20px" }}>
      <h1>Interior Designers in {area.name}, Hyderabad</h1>
      <p>{area.intro}</p>

      <h2>Mana Services in {area.name}</h2>
      <ul>
        {area.services.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>

      {area.faqs.length > 0 && (
        <>
          <h2>FAQs</h2>
          {area.faqs.map((f) => (
            <div key={f.q}>
              <h3>{f.q}</h3>
              <p>{f.a}</p>
            </div>
          ))}
        </>
      )}

      <p>
        <Link href="/contact">Get Free Quote</Link>
      </p>
    </main>
  );
}