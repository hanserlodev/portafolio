'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Github, ExternalLink } from 'lucide-react';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

/**
 * Tarjeta individual de proyecto.
 * 
 * Muestra:
 * - Imagen del proyecto con efecto hover
 * - Título y descripción
 * - Tags de tecnologías (máximo 4 visibles)
 * - Enlaces a GitHub y Demo
 * - Badge de "Destacado" si aplica
 * 
 * Incluye animaciones de entrada y hover effects.
 */
export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.id}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group relative bg-secondary rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl cursor-pointer"
      >
      {/* Image */}
      <div className="relative h-48 sm:h-56 overflow-hidden bg-muted">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Overlay gradient en hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        
        <p className="text-muted-foreground mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tags - Muestra máximo 4 */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium bg-accent text-accent-foreground rounded-full"
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

        {/* Links */}
        <div className="flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
            >
              <Github size={18} />
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
              <ExternalLink size={18} />
              Demo
            </a>
          )}
        </div>
      </div>

      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-4 right-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
          Destacado
        </div>
      )}
    </motion.div>
    </Link>
  );
}
