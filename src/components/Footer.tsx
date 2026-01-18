import { socialLinks, personalInfo } from '@/data/personal';
import { Heart } from 'lucide-react';
import Link from 'next/link';
import { getIcon } from '@/lib/icons';

/**
 * Footer del sitio web.
 * 
 * Incluye:
 * - Información del desarrollador
 * - Enlaces de navegación rápida
 * - Links a redes sociales
 * - Copyright dinámico
 * 
 * Toda la información se obtiene de src/data/personal.ts
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background/50 backdrop-blur-sm mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Información del desarrollador */}
          <div>
            <h3 className="text-lg font-bold mb-4 gradient-text">
              {personalInfo.name}
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              {personalInfo.role}
            </p>
            <p className="text-sm text-muted-foreground">
              📍 {personalInfo.location}
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Enlaces rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Sobre mí
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Proyectos
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Redes sociales */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Sígueme</h4>
            <div className="flex gap-3">
              {socialLinks.map((link) => {
                const Icon = getIcon(link.icon);

                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-secondary hover:bg-accent transition-colors"
                    aria-label={link.name}
                  >
                    <Icon size={20} className="text-muted-foreground hover:text-primary transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright y firma */}
        <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} {personalInfo.name}. Todos los derechos reservados.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Hecho con <Heart size={16} className="text-red-500 fill-red-500" /> y Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
