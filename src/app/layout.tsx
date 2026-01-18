import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

// Configuración de la fuente Inter
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

/**
 * Metadatos SEO del sitio.
 * 
 * IMPORTANTE: Personaliza estos metadatos con tu información:
 * - title: Título que aparece en la pestaña del navegador
 * - description: Descripción para motores de búsqueda
 * - keywords: Palabras clave para SEO
 * - authors: Tu nombre
 * - openGraph: Para compartir en redes sociales
 */
export const metadata: Metadata = {
  title: {
    default: 'Hans Ordoñez | Desarrollador Full Stack',
    template: '%s | Hans Ordoñez',
  },
  description:
    'Desarrollador Full Stack especializado en React, Next.js y TypeScript. Creando experiencias web excepcionales con soluciones elegantes.',
  keywords: [
    'desarrollador',
    'portfolio',
    'react',
    'nextjs',
    'typescript',
    'fullstack',
    'Hans Ordoñez',
    'desarrollador web',
    'Junín',
    'Perú',
  ],
  authors: [{ name: 'Hans Ordoñez', url: 'https://github.com/hanserlodev' }],
  creator: 'Hans Ordoñez',
  publisher: 'Hans Ordoñez',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://tu-portfolio.vercel.app'),
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: '/',
    title: 'Hans Ordoñez | Desarrollador Full Stack',
    description:
      'Desarrollador Full Stack especializado en React, Next.js y TypeScript. Creando experiencias web excepcionales.',
    siteName: 'Portfolio Hans Ordoñez',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hans Ordoñez | Desarrollador Full Stack',
    description:
      'Desarrollador Full Stack especializado en React, Next.js y TypeScript.',
    creator: '@tuusuario',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

/**
 * Configuración de viewport separada (Next.js 15+ requirement)
 */
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

/**
 * Layout raíz de la aplicación.
 * 
 * Este componente envuelve todas las páginas y proporciona:
 * - Configuración de fuentes
 * - ThemeProvider para modo oscuro/claro
 * - Navbar persistente
 * - Footer persistente
 * - Estructura HTML base
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
