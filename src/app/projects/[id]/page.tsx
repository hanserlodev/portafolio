import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Github, ExternalLink, Lock } from 'lucide-react';
import ProjectVisual from '@/components/ProjectVisual';
import { getProjectById, projects } from '@/data/projects';

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) return { title: 'Proyecto no encontrado' };

  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: `/projects/${project.id}` },
    openGraph: {
      title: project.title,
      description: project.description,
      images: project.image ? [project.image] : ['/og-image.png'],
      type: 'article',
    },
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) notFound();

  const index = projects.findIndex((item) => item.id === project.id);
  const previous = index > 0 ? projects[index - 1] : null;
  const next = index < projects.length - 1 ? projects[index + 1] : null;

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-4xl">
        <Link
          href="/projects"
          className="mb-8 inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft size={20} aria-hidden="true" />
          Volver a proyectos
        </Link>

        <div className="mb-4 flex flex-wrap items-center gap-2">
          {project.featured && (
            <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              ⭐ Proyecto Destacado
            </span>
          )}
          {project.confidential && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-sm font-medium text-muted-foreground">
              <Lock size={14} aria-hidden="true" />
              Proyecto privado · trabajo
            </span>
          )}
          <span className="rounded-full bg-secondary px-3 py-1 text-sm font-medium text-muted-foreground">
            {project.year}
          </span>
        </div>

        <h1 className="mb-4 text-4xl font-bold md:text-5xl">{project.title}</h1>
        <p className="mb-8 text-xl text-muted-foreground">{project.description}</p>

        <div className="mb-8 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-secondary px-4 py-2 text-sm font-medium">
              {tag}
            </span>
          ))}
        </div>

        <div className="mb-12 flex flex-wrap gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-secondary px-6 py-3 font-medium transition-colors hover:bg-accent"
            >
              <Github size={20} aria-hidden="true" />
              Ver código
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-all hover:opacity-90"
            >
              <ExternalLink size={20} aria-hidden="true" />
              Ver demo en vivo
            </a>
          )}
          {project.confidential && (
            <p className="self-center text-sm text-muted-foreground">
              El código no está disponible públicamente.
            </p>
          )}
        </div>

        <ProjectVisual
          project={project}
          className="mb-12 h-72 w-full rounded-xl border border-border md:h-96"
          sizes="(max-width: 768px) 100vw, 896px"
          priority
        />

        {project.longDescription && (
          <div className="max-w-none">
            <h2 className="mb-4 text-2xl font-bold">Sobre este proyecto</h2>
            <p className="leading-relaxed text-muted-foreground">
              {project.longDescription}
            </p>
          </div>
        )}

        <div className="mt-12 rounded-xl bg-secondary p-6">
          <h3 className="mb-4 text-xl font-bold">Tecnologías utilizadas</h3>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {project.tags.map((tag) => (
              <div key={tag} className="flex items-center gap-2 text-muted-foreground">
                <span className="text-primary" aria-hidden="true">▸</span>
                {tag}
              </div>
            ))}
          </div>
        </div>

        <nav className="mt-12 flex items-center justify-between border-t border-border pt-8" aria-label="Navegación entre proyectos">
          {previous ? (
            <Link
              href={`/projects/${previous.id}`}
              className="group inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" aria-hidden="true" />
              <span>{previous.title}</span>
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link
              href={`/projects/${next.id}`}
              className="group inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
            >
              <span>{next.title}</span>
              <ArrowLeft size={20} className="rotate-180 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          )}
        </nav>
      </article>
    </div>
  );
}
