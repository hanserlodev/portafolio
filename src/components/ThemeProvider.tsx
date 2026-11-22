'use client';

import { MotionConfig } from 'framer-motion';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';

/**
 * Componente Provider para el tema oscuro/claro.
 * 
 * Este componente envuelve la aplicación y permite el cambio de tema
 * con persistencia en localStorage. Debe ser un Client Component
 * porque next-themes usa hooks de React.
 * 
 * @see https://github.com/pacocoursey/next-themes
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <MotionConfig reducedMotion="user">
      <NextThemesProvider {...props}>{children}</NextThemesProvider>
    </MotionConfig>
  );
}
