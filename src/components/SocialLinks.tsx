'use client';

import { socialLinks } from '@/data/personal';
import { motion } from 'framer-motion';
import { getIcon } from '@/lib/icons';

/**
 * Componente que muestra enlaces a redes sociales.
 * 
 * Los enlaces se configuran en src/data/personal.ts
 * Incluye animaciones de entrada escalonadas.
 */
export default function SocialLinks() {
  return (
    <div className="flex justify-center gap-4">
      {socialLinks.map((link, index) => {
        const Icon = getIcon(link.icon);

        return (
          <motion.a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="p-3 rounded-lg bg-secondary hover:bg-accent transition-colors group"
            aria-label={link.name}
          >
            <Icon
              size={24}
              className="text-muted-foreground group-hover:text-primary transition-colors"
            />
          </motion.a>
        );
      })}
    </div>
  );
}
