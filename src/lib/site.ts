import { personalInfo, socialLinks } from '@/data/personal';

/**
 * URL base del sitio. Se obtiene de `NEXT_PUBLIC_SITE_URL` (sin barra final)
 * y se usa en metadatos, canonical, robots.txt y sitemap.
 * Configúrala en `.env.local` y en Vercel para apuntar al dominio real.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ||
  'https://portafolio-mu-teal.vercel.app';

export const SITE_NAME = personalInfo.name;
export const SITE_DESCRIPTION = personalInfo.description;

export const GITHUB_URL =
  socialLinks.find((link) => link.name === 'GitHub')?.url ??
  'https://github.com/hanserlodev';

export const TWITTER_HANDLE = '@hanserlodev';
