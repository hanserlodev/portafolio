'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

/**
 * Botón para cambiar entre tema oscuro y claro.
 * 
 * Incluye manejo de estado de montaje para evitar hydration mismatch.
 * El tema se persiste automáticamente en localStorage.
 */
export function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    // Evita hydration mismatch esperando a que el componente se monte
    useEffect(() => {
        setMounted(true);
    }, []);

    // Muestra un placeholder durante SSR
    if (!mounted) {
        return (
            <button className="p-2 rounded-md" aria-label="Toggle theme">
                <div className="w-5 h-5" />
            </button>
        );
    }

    return (
        <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-md hover:bg-accent transition-colors"
            aria-label="Toggle theme"
        >
            {theme === 'dark' ? (
                <Sun size={20} className="text-foreground" />
            ) : (
                <Moon size={20} className="text-foreground" />
            )}
        </button>
    );
}
