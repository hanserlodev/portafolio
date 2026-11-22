import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ExternalLink,
  type LucideIcon,
} from 'lucide-react';

/** Mapeo centralizado de iconos usados por Footer y SocialLinks. */
export const iconMap: Record<string, LucideIcon> = {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ExternalLink,
};

/** Devuelve el icono solicitado o ExternalLink como fallback. */
export function getIcon(iconName: string): LucideIcon {
  return iconMap[iconName] ?? ExternalLink;
}
