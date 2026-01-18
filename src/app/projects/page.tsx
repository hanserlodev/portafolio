'use client';

import { useState, useMemo } from 'react';
import SectionTitle from '@/components/SectionTitle';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';
import { motion } from 'framer-motion';

/**
 * Página de todos los proyectos.
 * 
 * Características:
 * - Muestra todos los proyectos de src/data/projects.ts
 * - Filtro entre "Todos" y "Destacados"
 * - Grid responsive
 * - Lista de todas las tecnologías usadas
 * - Animaciones de entrada
 * - Performance optimizada con useMemo
 */
export default function ProjectsPage() {
  const [filter, setFilter] = useState<'all' | 'featured'>('all');

  // Memoiza la extracción de tags para evitar recálculos innecesarios
  const allTags = useMemo(
    () => Array.from(new Set(projects.flatMap((p) => p.tags))),
    []
  );

  // Memoiza el filtrado de proyectos
  const filteredProjects = useMemo(
    () => (filter === 'featured' ? projects.filter((p) => p.featured) : projects),
    [filter]
  );

  const featuredCount = useMemo(
    () => projects.filter((p) => p.featured).length,
    []
  );

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionTitle subtitle="Explora mis trabajos y proyectos personales">
          Mis Proyectos
        </SectionTitle>

        {/* Botones de filtro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center gap-4 mb-12"
        >
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${
              filter === 'all'
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary hover:bg-accent'
            }`}
          >
            Todos ({projects.length})
          </button>
          <button
            onClick={() => setFilter('featured')}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${
              filter === 'featured'
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary hover:bg-accent'
            }`}
          >
            Destacados ({featuredCount})
          </button>
        </motion.div>

        {/* Grid de proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Mensaje si no hay proyectos */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No se encontraron proyectos con este filtro.
            </p>
          </div>
        )}

        {/* Sección de tecnologías utilizadas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">
            Tecnologías Utilizadas
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {allTags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-secondary hover:bg-accent rounded-full text-sm font-medium transition-colors cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
