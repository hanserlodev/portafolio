/**
 * Hook personalizado para throttle de funciones.
 * Limita la frecuencia de ejecución de una función.
 * 
 * @param callback - Función a throttle
 * @param delay - Tiempo mínimo entre ejecuciones en ms
 * @returns Función throttled
 * 
 * @example
 * const throttledScroll = useThrottle(handleScroll, 100);
 */
import { useCallback, useRef } from 'react';

export function useThrottle<T extends (...args: any[]) => any>(
  callback: T,
  delay: number = 100
): T {
  const lastRan = useRef(Date.now());

  return useCallback(
    ((...args) => {
      const now = Date.now();
      
      if (now - lastRan.current >= delay) {
        callback(...args);
        lastRan.current = now;
      }
    }) as T,
    [callback, delay]
  );
}
