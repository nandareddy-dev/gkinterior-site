import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <Link href={`/portfolio/${project.slug}`} className="group block">
      <div className="overflow-hidden aspect-[4/3] bg-stone-200">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        />
      </div>
      <p className="mt-3 text-xs uppercase tracking-widest text-amber-700">{project.category}</p>
      <h3 className="font-serif text-xl">{project.title}</h3>
    </Link>
  );
}