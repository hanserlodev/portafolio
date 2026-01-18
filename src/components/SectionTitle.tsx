'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionTitleProps {
  children: ReactNode;
  subtitle?: string;
  className?: string;
}

/**
 * Componente reutilizable para títulos de sección.
 * 
 * Incluye:
 * - Animación de entrada al hacer scroll
 * - Título principal (children)
 * - Subtítulo opcional
 * - Estilos personalizables
 * 
 * @example
 * <SectionTitle subtitle="Mis mejores trabajos">
 *   Proyectos Destacados
 * </SectionTitle>
 */
export default function SectionTitle({
  children,
  subtitle,
  className = '',
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`text-center mb-12 ${className}`}
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
        {children}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
