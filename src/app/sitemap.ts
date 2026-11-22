import type { MetadataRoute } from 'next';
import { projects } from '@/data/projects';
import { SITE_URL } from '@/lib/site';

/** Fecha estable derivada de los datos: no cambia en cada deploy. */
const lastModified = new Date(
  projects.reduce(
    (latest, project) => (project.updatedAt > latest ? project.updatedAt : latest),
    projects[0]?.updatedAt ?? '2026-01-01'
  )
);

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: SITE_URL, changeFrequency: 'monthly' as const, priority: 1 },
    { url: `${SITE_URL}/about`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${SITE_URL}/projects`, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${SITE_URL}/contact`, changeFrequency: 'monthly' as const, priority: 0.7 },
  ].map((page) => ({ ...page, lastModified }));

  const projectPages = projects.map((project) => ({
    url: `${SITE_URL}/projects/${project.id}`,
    lastModified: new Date(project.updatedAt),
    changeFrequency: 'monthly' as const,
    priority: project.featured ? 0.7 : 0.6,
  }));

  return [...staticPages, ...projectPages];
}
