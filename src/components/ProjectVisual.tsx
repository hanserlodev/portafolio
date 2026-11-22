import Image from 'next/image';
import { Lock } from 'lucide-react';
import type { Project, ProjectTone } from '@/data/projects';
import { cn } from '@/lib/utils';

const toneStyles: Record<ProjectTone, string> = {
  ember: 'bg-gradient-to-br from-orange-600 via-red-600 to-rose-800',
  violet: 'bg-gradient-to-br from-violet-600 via-purple-700 to-indigo-900',
  indigo: 'bg-gradient-to-br from-indigo-600 via-blue-700 to-slate-900',
  amber: 'bg-gradient-to-br from-amber-500 via-orange-600 to-red-700',
  rose: 'bg-gradient-to-br from-rose-600 via-pink-700 to-fuchsia-900',
  slate: 'bg-gradient-to-br from-slate-600 via-slate-800 to-zinc-950',
  emerald: 'bg-gradient-to-br from-emerald-600 via-teal-700 to-slate-900',
  cyan: 'bg-gradient-to-br from-cyan-600 via-sky-700 to-blue-900',
  sky: 'bg-gradient-to-br from-sky-600 via-blue-700 to-indigo-900',
  fuchsia: 'bg-gradient-to-br from-fuchsia-600 via-purple-700 to-indigo-900',
};

interface ProjectVisualProps {
  project: Pick<Project, 'title' | 'image' | 'tone' | 'confidential'>;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

/** Captura real del proyecto o, si no hay, una portada con identidad de marca. */
export default function ProjectVisual({
  project,
  className,
  sizes = '(max-width: 768px) 100vw, 33vw',
  priority = false,
}: ProjectVisualProps) {
  return (
    <div className={cn('relative overflow-hidden bg-muted', toneStyles[project.tone], className)}>
      {project.image ? (
        <Image
          src={project.image}
          alt={`Vista previa de ${project.title}`}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                'radial-gradient(circle at 20% 20%, rgba(255,255,255,.25) 0, transparent 45%), radial-gradient(circle at 80% 80%, rgba(0,0,0,.35) 0, transparent 50%)',
            }}
          />
          <span className="relative text-7xl font-black tracking-tighter text-white/25 select-none">
            {project.title.charAt(0)}
          </span>
          {project.confidential && (
            <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-black/40 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur-sm">
              <Lock size={12} aria-hidden="true" />
              Confidencial
            </span>
          )}
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  );
}
