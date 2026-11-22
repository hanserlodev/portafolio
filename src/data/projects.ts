/**
 * Proyectos reales del portafolio.
 *
 * `github` se omite en proyectos de trabajo privados (`confidential: true`):
 * solo se muestra su demo pública, nunca el repositorio.
 * `image` es opcional; si no hay captura, ProjectVisual dibuja un placeholder
 * con la paleta indicada en `tone`.
 */
export type ProjectTone =
  | 'ember'
  | 'violet'
  | 'indigo'
  | 'amber'
  | 'rose'
  | 'slate'
  | 'emerald'
  | 'cyan'
  | 'sky'
  | 'fuchsia';

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image?: string;
  tone: ProjectTone;
  tags: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  confidential?: boolean;
  year: string;
  updatedAt: string;
}

const GITHUB = 'https://github.com/hanserlodev';

export const projects: Project[] = [
  {
    id: 'ninacal',
    title: 'NinaCal',
    description:
      'Calendario de actividad de incendios a 23 años para cualquier país o área dibujada, construido para el NASA Space Apps Challenge 2026.',
    longDescription:
      'Armoniza los puntos calientes detectados por MODIS (Aqua) y VIIRS (Suomi-NPP/NOAA-20) en una sola escala de días, con 153 países publicados y 57 millones de celdas mensuales. Expone un calendario año × mes con clasificación Normal / Elevado / Crítico, comparación contra la mediana histórica, exportación de datos y enlaces compartibles de la vista exacta.',
    image: '/images/projects/ninacal.png',
    tone: 'ember',
    tags: ['Next.js', 'TypeScript', 'NASA FIRMS', 'Datos geoespaciales'],
    github: `${GITHUB}/ninacal`,
    demo: 'https://ninacal.vercel.app',
    featured: true,
    year: '2026',
    updatedAt: '2026-11-21',
  },
  {
    id: 'mercado-modelo',
    title: 'Mercado Modelo · Gestión integral',
    description:
      'Sistema financiero, administrativo y operativo para el Mercado Modelo: socios, puestos, pagos, deudas, contabilidad y constancias PDF.',
    longDescription:
      'Plataforma de gestión con roles (ADMIN, TESORERÍA, OPERADOR, SECRETARÍA, PRESIDENTE), validación de pagos, vencimientos automáticos de deudas, control de SSHH y ambulants, y generación de constancias. Desplegada en VPS propio con PM2. Proyecto de trabajo con repositorio privado.',
    tone: 'emerald',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'shadcn/ui'],
    demo: 'https://mercado-modelo-jade.vercel.app',
    featured: true,
    confidential: true,
    year: '2026',
    updatedAt: '2026-11-21',
  },
  {
    id: 'gabriela-mistral',
    title: 'IEP Gabriela Mistral',
    description:
      'Landing institucional de 10 páginas para una institución educativa privada en Huancayo, con blog, galería y panel administrativo.',
    longDescription:
      'Sitio institucional con autenticación por roles (admin/profesor), chatbot conectado a Google Sheets, blog dinámico filtrable, galería fotográfica, formulario de contacto persistido en Supabase y middleware de seguridad en rutas protegidas. Proyecto de trabajo con repositorio privado.',
    tone: 'sky',
    tags: ['Next.js', 'Supabase', 'NextAuth', 'Google Sheets API'],
    demo: 'https://gmschool.pe/',
    featured: true,
    confidential: true,
    year: '2026',
    updatedAt: '2026-11-21',
  },
  {
    id: 'voronia',
    title: 'Voronia',
    description:
      'Motor nativo en Rust + wgpu para generar y editar mundos de fantasía, con importación bit-exacta de mapas de Azgaar.',
    longDescription:
      'Reimplementación desde cero del pipeline procedural de Azgaar: regeneración determinista de la geometría (grid + Voronoi + repacking), parser del formato .map, capas de render en GPU (biomas, relieve, ríos, estados, burgos, etiquetas) y formato nativo .vorn con autoguardado. Incluye hidrología y Paridad de Geografía Humana; objetivo de 100k celdas a 60 FPS.',
    image: '/images/projects/voronia.png',
    tone: 'violet',
    tags: ['Rust', 'wgpu', 'egui', 'Procedural generation'],
    github: `${GITHUB}/voronia`,
    featured: true,
    year: '2026',
    updatedAt: '2026-11-21',
  },
  {
    id: 'debateia',
    title: 'DebateIA',
    description:
      'Plataforma para practicar debates estructurados contra una IA adaptativa, con evaluación, estadísticas y modo voz.',
    longDescription:
      'Debates con sets y turnos configurables, posturas a favor/en contra/aleatorias, puntuación 0-100, historial con resúmenes, gráficos de evolución, más de 100 temas visuales y síntesis y reconocimiento de voz. Proyecto de trabajo con repositorio privado.',
    image: '/images/projects/DebateIA.png',
    tone: 'fuchsia',
    tags: ['Next.js', 'TypeScript', 'Gemini API', 'Web Speech API'],
    demo: 'https://debate-ia-sigma.vercel.app',
    confidential: true,
    year: '2026',
    updatedAt: '2026-11-21',
  },
  {
    id: 'filam-centroplas',
    title: 'Filam CentroPlas',
    description:
      'E-commerce corporativo para FILAM S.A.: catálogo industrial, solicitudes de compra, panel administrativo y cumplimiento legal peruano.',
    longDescription:
      'Plataforma B2B para productos plásticos, láminas y suministros industriales. Incluye RBAC con Fortify y Policies, colas y caché con Redis/Valkey + Horizon, generación de PDF con DomPDF y cumplimiento de la Ley 29733 y Ley 29571. Calidad con Pint, PHPStan/Larastan y 56 pruebas PHPUnit. Proyecto de trabajo con repositorio privado.',
    tone: 'cyan',
    tags: ['Laravel 13', 'Livewire 4', 'PostgreSQL', 'Tailwind 4', 'PHPUnit'],
    confidential: true,
    year: '2026',
    updatedAt: '2026-11-21',
  },
  {
    id: 'kanadojo',
    title: 'KanaDojo',
    description:
      'Plataforma minimalista y estética para aprender y practicar japonés, inspirada en Monkeytype y traducida por la comunidad.',
    longDescription:
      'Entrenamiento de hiragana, katakana y vocabulario con una interfaz limpia y personalizable, soporte para nueve idiomas gracias a contribuciones de la comunidad y documentación abierta.',
    image: '/images/projects/kanadojo.png',
    tone: 'indigo',
    tags: ['TypeScript', 'React', 'i18n', 'Open source'],
    github: `${GITHUB}/kanadojo`,
    demo: 'https://kanadojo.com',
    year: '2026',
    updatedAt: '2026-11-21',
  },
  {
    id: 'agusto-market',
    title: 'A Gusto Market',
    description:
      'Demo frontend de una plataforma regional de snacks con carrito, pedidos por WhatsApp y panel administrativo tipo SaaS.',
    longDescription:
      'Cliente PWA instalable con carrito por Context API, confirmación de pedidos mediante QR + WhatsApp y datos mock completos. El panel administrativo añade dashboard con métricas, CRUD de productos e inventario, gestión de pedidos, promociones, base de clientes y reportes.',
    image: '/images/projects/agusto-market.png',
    tone: 'amber',
    tags: ['Next.js', 'TypeScript', 'TailwindCSS', 'PWA'],
    github: `${GITHUB}/agusto-market`,
    demo: 'https://agusto-market.vercel.app',
    year: '2026',
    updatedAt: '2026-11-21',
  },
  {
    id: 'registro-clash-royale',
    title: 'Registro Clash Royale',
    description:
      'Sistema de inscripción para un torneo universitario de Clash Royale con 8 grupos de 8 participantes y validación en Supabase.',
    longDescription:
      'Formulario de registro con validación de código de estudiante, correo y grupo; persistencia en PostgreSQL mediante Supabase y restricciones de integridad para garantizar el límite de 64 participantes.',
    image: '/images/projects/registro-clash-royale.png',
    tone: 'rose',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL'],
    github: `${GITHUB}/registro-clash-royale`,
    demo: 'https://registro-clash-royale.vercel.app',
    year: '2026',
    updatedAt: '2026-11-21',
  },
  {
    id: 'your-free-downloader',
    title: 'YourFreeDownloader',
    description:
      'Descargador de videos multiplataforma, de escritorio y Android, pensado como alternativa libre a apps con publicidad invasiva.',
    longDescription:
      'Cliente de escritorio en Python 3.11 + CustomTkinter + yt-dlp para Windows y Linux, y cliente Android en Kotlin + Jetpack Compose con Chaquopy para ejecutar el backend Python.',
    image: '/images/projects/YourFreeDownloader.png',
    tone: 'slate',
    tags: ['Python', 'Kotlin', 'Jetpack Compose', 'yt-dlp'],
    github: `${GITHUB}/YourFreeDownloader`,
    year: '2025',
    updatedAt: '2026-11-21',
  },
  {
    id: 'debateia-android',
    title: 'DebateIA Android',
    description:
      'Aplicación Android para practicar debates con Gemini: misma experiencia de DebateIA en formato nativo móvil.',
    tone: 'fuchsia',
    tags: ['Kotlin', 'Android', 'Gemini API'],
    confidential: true,
    year: '2026',
    updatedAt: '2026-11-21',
  },
];

/** Proyectos destacados, en el orden definido arriba. */
export const getFeaturedProjects = (): Project[] =>
  projects.filter((project) => project.featured);

/** Busca un proyecto por su slug. */
export const getProjectById = (id: string): Project | undefined =>
  projects.find((project) => project.id === id);

/** Todas las tecnologías distintas usadas en el portafolio. */
export const getAllTags = (): string[] =>
  Array.from(new Set(projects.flatMap((project) => project.tags)));
