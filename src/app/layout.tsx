import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { ThemeProvider } from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { personalInfo, socialLinks } from '@/data/personal';
import {
  GITHUB_URL,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  TWITTER_HANDLE,
} from '@/lib/site';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | ${personalInfo.role}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'desarrollador',
    'full stack',
    'portfolio',
    'react',
    'nextjs',
    'typescript',
    'laravel',
    'rust',
    SITE_NAME,
    'Junín',
    'Perú',
  ],
  authors: [{ name: SITE_NAME, url: GITHUB_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: '/',
    title: `${SITE_NAME} | ${personalInfo.role}`,
    description: SITE_DESCRIPTION,
    siteName: `${SITE_NAME} · Portafolio`,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} | ${personalInfo.role}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | ${personalInfo.role}`,
    description: SITE_DESCRIPTION,
    creator: TWITTER_HANDLE,
    images: ['/og-image.png'],
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

/** Next.js 15+ requiere el viewport exportado por separado. */
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: SITE_NAME,
  url: SITE_URL,
  email: `mailto:${personalInfo.email}`,
  jobTitle: personalInfo.role,
  description: SITE_DESCRIPTION,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Junín',
    addressCountry: 'PE',
  },
  sameAs: socialLinks.map((link) => link.url),
  knowsAbout: ['Next.js', 'TypeScript', 'React', 'Laravel', 'PostgreSQL', 'Rust'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Script
          id="person-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <ErrorBoundary>
            <main className="min-h-screen">{children}</main>
          </ErrorBoundary>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
