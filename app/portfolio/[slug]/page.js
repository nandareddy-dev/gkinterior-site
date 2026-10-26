import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import Gallery from "@/components/Gallery";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return { title: `${project.title} | Your Studio Name`, description: project.description };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const images = project.gallery && project.gallery.length ? project.gallery : [project.image];

  return (
    <article className="max-w-5xl mx-auto px-5 py-12">
      <Link href="/portfolio" className="text-sm uppercase tracking-widest text-amber-700">
        ← Back to Portfolio
      </Link>

      <p className="mt-8 text-xs uppercase tracking-widest text-amber-700">{project.category}</p>
      <h1 className="font-serif text-4xl md:text-5xl mb-6">{project.title}</h1>

      {/* <img
        src={images[0]}
        alt={project.title}
        className="w-full aspect-[16/9] object-cover mb-10"
      /> */}
      <Gallery images={images} title={project.title} />

      <div className="grid gap-10 md:grid-cols-3 mb-12">
        <p className="md:col-span-2 text-stone-700 leading-relaxed">{project.description}</p>
        <dl className="text-sm space-y-3 border-l border-stone-300 pl-6">
          <div>
            <dt className="uppercase tracking-widest text-xs text-stone-500">Location</dt>
            <dd>{project.location}</dd>
          </div>
          <div>
            <dt className="uppercase tracking-widest text-xs text-stone-500">Area</dt>
            <dd>{project.area}</dd>
          </div>
          <div>
            <dt className="uppercase tracking-widest text-xs text-stone-500">Type</dt>
            <dd>{project.category}</dd>
          </div>
        </dl>
      </div>

      {images.length > 1 && (
        <div className="grid gap-4 sm:grid-cols-2">
          {images.slice(1).map((src, i) => (
            <img key={i} src={src} alt={`${project.title} ${i + 2}`} className="w-full aspect-[4/3] object-cover" />
          ))}
        </div>
      )}

      <div className="mt-16 text-center">
        <Link
          href="/contact"
          className="inline-block bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 uppercase tracking-widest text-sm transition"
        >
          Want something similar?
        </Link>
      </div>
    </article>
  );
}