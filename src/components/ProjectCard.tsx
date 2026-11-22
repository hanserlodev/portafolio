'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Github, ExternalLink } from 'lucide-react';
import ProjectVisual from '@/components/ProjectVisual';
import type { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

/**
 * Tarjeta de proyecto. El Link de portada es una capa absoluta: así toda la
 * tarjeta es clicable sin anidar <a> dentro de <a> (HTML inválido).
 */
export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-secondary rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
    >
      <Link
        href={`/projects/${project.id}`}
        aria-label={`Ver detalles de ${project.title}`}
        className="absolute inset-0 z-10 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      />

      <ProjectVisual
        project={project}
        className="relative h-48 sm:h-56"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      <div className="p-6">
        <div className="mb-2 flex items-center gap-2">
          <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          {project.confidential && (
            <span className="rounded-full bg-foreground/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
              Trabajo
            </span>
          )}
        </div>

        <p className="mb-4 line-clamp-2 text-muted-foreground">
          {project.description}
        </p>

        <div className="mb-4 flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="px-3 py-1 text-xs font-medium text-muted-foreground">
              +{project.tags.length - 4}
            </span>
          )}
        </div>

        {/* z-20 para quedar por encima del Link que cubre la tarjeta */}
        <div className="relative z-20 flex gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
            >
              <Github size={18} aria-hidden="true" />
              Código
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
            >
              <ExternalLink size={18} aria-hidden="true" />
              Demo
            </a>
          )}
          {!project.github && !project.demo && (
            <span className="text-sm text-muted-foreground">
              {project.year}
            </span>
          )}
        </div>
      </div>

      {project.featured && (
        <span className="pointer-events-none absolute right-4 top-4 z-20 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
          Destacado
        </span>
      )}
    </motion.article>
  );
}
