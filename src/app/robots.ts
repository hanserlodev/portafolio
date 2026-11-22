import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

/** robots.txt generado desde la misma URL base que metadatos y sitemap. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/', disallow: ['/api/'] },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
