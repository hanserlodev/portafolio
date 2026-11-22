'use client';

import { useTheme } from 'next-themes';
import { useSyncExternalStore } from 'react';
import { Moon, Sun } from 'lucide-react';

const subscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

/** Botón de tema. Usa useSyncExternalStore para evitar hydration mismatch. */
export function ThemeToggle() {
  const mounted = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const { resolvedTheme, setTheme } = useTheme();

  if (!mounted) {
    return (
      <button className="rounded-md p-2" aria-label="Cambiar tema" disabled>
        <div className="h-5 w-5" />
      </button>
    );
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="rounded-md p-2 transition-colors hover:bg-accent"
      aria-label={isDark ? 'Activar tema claro' : 'Activar tema oscuro'}
    >
      {isDark ? (
        <Sun size={20} className="text-foreground" aria-hidden="true" />
      ) : (
        <Moon size={20} className="text-foreground" aria-hidden="true" />
      )}
    </button>
  );
}
