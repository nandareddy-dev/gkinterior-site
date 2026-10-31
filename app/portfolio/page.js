import { Suspense } from "react";
import Link from "next/link";
import Hero from "@/components/Hero";
import PortfolioGrid from "@/components/PortfolioGrid";
import Reveal from "@/components/Reveal";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Portfolio",
  description:
    "Explore completed residential and commercial interior design projects by GK Home Interiors in Hyderabad.",
};

export default function PortfolioPage() {
  return (
    <>
      <Hero
        crumb="Portfolio"
        title="Our Portfolio"
        subtitle={`${projects.length} projects. Homes and workspaces designed around the people who use them.`}
        image="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1800"
      />

      <section id="projects" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20">
        <Suspense fallback={<div className="h-96" />}>
          <PortfolioGrid projects={projects} />
        </Suspense>
      </section>

      <section
        className="bg-cover bg-center py-24 text-center text-white"
        style={{
          backgroundImage:
            "linear-gradient(rgba(28,25,23,.8), rgba(28,25,23,.8)), url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1800')",
        }}
      >
        <Reveal className="mx-auto max-w-3xl px-5">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-amber-500">Your turn</p>
          <h2 className="mb-5 font-serif text-3xl md:text-5xl">Like what you see?</h2>
          <p className="mb-8 text-stone-300">
            Let us design something just as beautiful for your home or office.
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