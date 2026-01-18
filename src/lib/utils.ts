import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combina clases de CSS de manera inteligente usando clsx y tailwind-merge.
 * Esto resuelve conflictos de clases de Tailwind y permite composición condicional.
 * 
 * @example
 * cn('px-2 py-1', condition && 'bg-primary', 'text-white')
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formatea una fecha al formato local español.
 * Acepta tanto objetos Date como strings ISO.
 * 
 * @param date - Fecha a formatear (Date o string ISO)
 * @returns Fecha formateada en español (ej: "31 de octubre de 2025")
 */
export function formatDate(date: Date | string): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return dateObj.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Hace scroll suave hacia un elemento específico del DOM.
 * Útil para navegación interna de la página.
 * 
 * @param elementId - ID del elemento destino (sin el #)
 */
export function scrollToElement(elementId: string): void {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}

/**
 * Valida el formato de un email usando regex.
 * 
 * @param email - Email a validar
 * @returns true si el formato es válido, false si no
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Trunca un texto a una longitud máxima y añade puntos suspensivos.
 * 
 * @param text - Texto a truncar
 * @param maxLength - Longitud máxima permitida
 * @returns Texto truncado con "..." si excede la longitud
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
}
