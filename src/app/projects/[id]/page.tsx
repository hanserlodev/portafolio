import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Github, ExternalLink, Calendar } from 'lucide-react';
import { Metadata } from 'next';

interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

// Genera metadatos dinámicos para SEO
export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return {
      title: 'Proyecto no encontrado',
    };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.image],
      type: 'article',
    },
  };
}

// Genera rutas estáticas para todos los proyectos
export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Botón volver */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          Volver a proyectos
        </Link>

        {/* Badge de destacado */}
        {project.featured && (
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            ⭐ Proyecto Destacado
          </div>
        )}

        {/* Título */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {project.title}
        </h1>

        {/* Descripción breve */}
        <p className="text-xl text-muted-foreground mb-8">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 bg-secondary text-sm font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Enlaces */}
        <div className="flex flex-wrap gap-4 mb-12">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-secondary hover:bg-accent rounded-lg font-medium transition-colors"
            >
              <Github size={20} />
              Ver código
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-all"
            >
              <ExternalLink size={20} />
              Ver demo en vivo
            </a>
          )}
        </div>

        {/* Imagen principal */}
        <div className="relative w-full h-96 rounded-xl overflow-hidden mb-12 border border-border">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Descripción larga */}
        {project.longDescription && (
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold mb-4">Sobre este proyecto</h2>
            <p className="text-muted-foreground leading-relaxed">
              {project.longDescription}
            </p>
          </div>
        )}

        {/* Características (si quieres agregar más detalles) */}
        <div className="mt-12 p-6 bg-secondary rounded-xl">
          <h3 className="text-xl font-bold mb-4">Tecnologías utilizadas</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {project.tags.map((tag) => (
              <div
                key={tag}
                className="flex items-center gap-2 text-muted-foreground"
              >
                <span className="text-primary">▸</span>
                {tag}
              </div>
            ))}
          </div>
        </div>

        {/* Navegación entre proyectos */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex justify-between items-center">
            {getPreviousProject(project.id) && (
              <Link
                href={`/projects/${getPreviousProject(project.id)?.id}`}
                className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft
                  size={20}
                  className="group-hover:-translate-x-1 transition-transform"
                />
                <span>Proyecto anterior</span>
              </Link>
            )}
            <div className="flex-1" />
            {getNextProject(project.id) && (
              <Link
                href={`/projects/${getNextProject(project.id)?.id}`}
                className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <span>Siguiente proyecto</span>
                <ArrowLeft
                  size={20}
                  className="rotate-180 group-hover:translate-x-1 transition-transform"
                />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Helpers para navegación entre proyectos
function getPreviousProject(currentId: string) {
  const currentIndex = projects.findIndex((p) => p.id === currentId);
  return currentIndex > 0 ? projects[currentIndex - 1] : null;
}

function getNextProject(currentId: string) {
  const currentIndex = projects.findIndex((p) => p.id === currentId);
  return currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;
}
