/**
 * Hook personalizado para debounce de valores.
 * Útil para optimizar búsquedas y eventos frecuentes.
 * 
 * @param value - Valor a debounce
 * @param delay - Tiempo de espera en milisegundos
 * @returns Valor debounced
 * 
 * @example
 * const debouncedSearch = useDebounce(searchTerm, 500);
 */
import { useEffect, useState } from 'react';

export function useDebounce<T>(value: T, delay: number = 500): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
