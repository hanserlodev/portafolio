import { useCallback, useRef } from 'react';

/**
 * Limita la frecuencia de ejecución de un callback a una vez cada `delay` ms.
 */
export function useThrottle<Args extends unknown[]>(
  callback: (...args: Args) => void,
  delay = 100
): (...args: Args) => void {
  const lastRan = useRef(0);

  return useCallback(
    (...args: Args) => {
      const now = Date.now();
      if (now - lastRan.current >= delay) {
        callback(...args);
        lastRan.current = now;
      }
    },
    [callback, delay]
  );
}
