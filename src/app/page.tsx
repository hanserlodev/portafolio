import Hero from '@/components/Hero';
import SectionTitle from '@/components/SectionTitle';
import ProjectCard from '@/components/ProjectCard';
import { getFeaturedProjects } from '@/data/projects';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

/**
 * Página principal del portafolio.
 * 
 * Muestra:
 * - Sección Hero con presentación personal
 * - Proyectos destacados (featured: true en projects.ts)
 * - Botón para ver todos los proyectos
 * 
 * Los proyectos destacados se configuran en src/data/projects.ts
 * marcando el campo 'featured' como true.
 */
export default function Home() {
  const featuredProjects = getFeaturedProjects();

  return (
    <>
      <Hero />

      {/* Sección de proyectos destacados */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Algunos de mis trabajos más destacados">
            Proyectos Destacados
          </SectionTitle>

          {/* Grid de proyectos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* CTA para ver todos los proyectos */}
          <div className="text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-all hover:gap-3"
            >
              Ver todos los proyectos
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
