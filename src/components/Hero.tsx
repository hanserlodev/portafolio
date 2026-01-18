'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Download } from 'lucide-react';
import { personalInfo } from '@/data/personal';
import SocialLinks from './SocialLinks';

/**
 * Sección Hero de la página principal.
 * 
 * Incluye:
 * - Avatar animado con gradiente
 * - Nombre y rol con texto gradiente
 * - Descripción personal
 * - Botones CTA (Ver Proyectos / Descargar CV)
 * - Enlaces a redes sociales
 * - Elementos de fondo animados (burbujas)
 * 
 * Toda la información se obtiene de src/data/personal.ts
 */
export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center">
          {/* Avatar con gradiente animado */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-1">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center text-4xl font-bold">
                {personalInfo.name.charAt(0)}
              </div>
            </div>
          </motion.div>

          {/* Texto principal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              Hola, soy{' '}
              <span className="gradient-text">{personalInfo.name}</span>
            </h1>
            
            <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-6">
              {personalInfo.role}
            </p>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              {personalInfo.description}
            </p>
          </motion.div>

          {/* Botones de acción */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-all hover:gap-3"
            >
              Ver Proyectos
              <ArrowRight size={20} className="transition-transform" />
            </Link>

            {personalInfo.resumeUrl && (
              <a
                href={personalInfo.resumeUrl}
                download
                className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors"
              >
                <Download size={20} />
                Descargar CV
              </a>
            )}
          </motion.div>

          {/* Enlaces sociales */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <SocialLinks />
          </motion.div>
        </div>

        {/* Elementos decorativos de fondo */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-1/4 -left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
            className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"
          />
        </div>
      </div>
    </section>
  );
}
