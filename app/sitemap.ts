import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { serviceList } from "@/data/servicesData";

const SITE_URL = "https://www.gkhomeinteriors.in"; // mee real domain
const UPDATED = "2026-11-10"; // site marchinappudu ee date marchandi

export default function sitemap(): MetadataRoute.Sitemap {
  const fixed = ["", "/about", "/services", "/portfolio", "/contact"].map((p) => ({
    url: `${SITE_URL}${p}`,
    lastModified: UPDATED,
    priority: p === "" ? 1 : 0.8,
  }));
  const services = serviceList.map((s) => ({
    url: `${SITE_URL}/services/${s.slug}`,
    lastModified: UPDATED,
    priority: 0.7,
  }));
  const work = projects.map((p) => ({
    url: `${SITE_URL}/portfolio/${p.slug}`,
    lastModified: UPDATED,
    priority: 0.6,
  }));
  return [...fixed, ...services, ...work];
}