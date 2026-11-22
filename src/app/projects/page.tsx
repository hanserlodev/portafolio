'use client';

import { useState } from 'react';
import SectionTitle from '@/components/SectionTitle';
import ProjectCard from '@/components/ProjectCard';
import { getAllTags, projects } from '@/data/projects';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const allTags = getAllTags();

export default function ProjectsPage() {
  const [scope, setScope] = useState<'all' | 'featured'>('all');
  const [tag, setTag] = useState<string | null>(null);

  const visibleProjects = projects.filter((project) => {
    const matchesScope = scope === 'all' || project.featured;
    const matchesTag = !tag || project.tags.includes(tag);
    return matchesScope && matchesTag;
  });

  const featuredCount = projects.filter((project) => project.featured).length;

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionTitle subtitle="Explora mis trabajos y proyectos personales">
          Mis Proyectos
        </SectionTitle>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex flex-wrap justify-center gap-3"
        >
          <button
            type="button"
            onClick={() => setScope('all')}
            aria-pressed={scope === 'all'}
            className={cn(
              'rounded-lg px-5 py-2 text-sm font-medium transition-all',
              scope === 'all'
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary hover:bg-accent'
            )}
          >
            Todos ({projects.length})
          </button>
          <button
            type="button"
            onClick={() => setScope('featured')}
            aria-pressed={scope === 'featured'}
            className={cn(
              'rounded-lg px-5 py-2 text-sm font-medium transition-all',
              scope === 'featured'
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary hover:bg-accent'
            )}
          >
            Destacados ({featuredCount})
          </button>
        </motion.div>

        {allTags.length > 0 && (
          <div className="mb-12 flex flex-wrap justify-center gap-2" aria-label="Filtrar por tecnología">
            <button
              type="button"
              onClick={() => setTag(null)}
              aria-pressed={tag === null}
              className={cn(
                'rounded-full border px-3 py-1 text-xs font-medium transition-colors',
                tag === null
                  ? 'border-primary bg-primary/10 text-primary'
                  : 'border-border text-muted-foreground hover:border-primary hover:text-primary'
              )}
            >
              Todas
            </button>
            {allTags.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setTag(item === tag ? null : item)}
                aria-pressed={tag === item}
                className={cn(
                  'rounded-full border px-3 py-1 text-xs font-medium transition-colors',
                  tag === item
                    ? 'border-primary bg-primary/10 text-primary'
                    : 'border-border text-muted-foreground hover:border-primary hover:text-primary'
                )}
              >
                {item}
              </button>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {visibleProjects.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-muted-foreground">
              No hay proyectos con esta combinación de filtros.
            </p>
            <button
              type="button"
              onClick={() => {
                setScope('all');
                setTag(null);
              }}
              className="mt-4 text-sm font-medium text-primary hover:underline"
            >
              Limpiar filtros
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
