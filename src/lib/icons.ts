import { Github, Linkedin, Twitter, Mail, ExternalLink } from 'lucide-react';

/**
 * Mapeo centralizado de iconos de redes sociales.
 * Usado por Footer y SocialLinks para evitar duplicación.
 * 
 * Agregar nuevos iconos aquí cuando se necesiten.
 */
export const iconMap: Record<string, any> = {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ExternalLink,
};

/**
 * Obtiene un icono por su nombre.
 * Devuelve ExternalLink como fallback si no se encuentra.
 * 
 * @param iconName - Nombre del icono (ej: 'Github')
 * @returns Componente de icono de Lucide
 */
export function getIcon(iconName: string) {
  return iconMap[iconName] || ExternalLink;
}
