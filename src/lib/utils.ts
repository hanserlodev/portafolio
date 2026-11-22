import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** Combina clases de CSS resolviendo conflictos de Tailwind. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
