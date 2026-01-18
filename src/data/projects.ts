/**
 * Interfaz para definir la estructura de un proyecto.
 * 
 * @property id - Identificador único del proyecto
 * @property title - Nombre del proyecto
 * @property description - Descripción breve (se muestra en las tarjetas)
 * @property longDescription - Descripción extendida (opcional, para página de detalle)
 * @property image - URL de la imagen del proyecto
 * @property tags - Array de tecnologías utilizadas
 * @property github - URL del repositorio en GitHub (opcional)
 * @property demo - URL de la demo en vivo (opcional)
 * @property featured - Si es true, aparecerá en la página de inicio
 */
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
}

/**
 * 🚀 EDITA TUS PROYECTOS AQUÍ
 * 
 * Este es el array principal de proyectos que se mostrará en tu portafolio.
 * 
 * INSTRUCCIONES:
 * 1. Copia la estructura de un proyecto existente
 * 2. Cambia el 'id' (debe ser único)
 * 3. Actualiza todos los campos con tu información
 * 4. Las imágenes pueden ser:
 *    - URLs de Unsplash (como en los ejemplos)
 *    - URLs de tu propio hosting
 *    - Rutas locales (ej: '/images/proyecto1.jpg')
 * 5. Marca 'featured: true' para destacar el proyecto en la página principal
 * 
 * TIPS:
 * - Los proyectos con 'featured: true' aparecen en la página de inicio
 * - Usa tags relevantes para filtrado futuro
 * - Las descripciones cortas se ven mejor entre 100-150 caracteres
 */
export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description:
      'Plataforma de comercio electrónico completa con carrito de compras, pagos y panel de administración.',
    longDescription:
      'Una solución e-commerce completa construida con Next.js, Stripe para pagos y un panel de administración robusto. Incluye gestión de inventario, órdenes y análisis en tiempo real.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Prisma'],
    github: 'https://github.com/tuusuario/ecommerce',
    demo: 'https://tuproyecto.vercel.app',
    featured: true,
  },
  {
    id: '2',
    title: 'Task Management App',
    description:
      'Aplicación de gestión de tareas con drag & drop, colaboración en tiempo real y notificaciones.',
    longDescription:
      'Una aplicación moderna de gestión de proyectos con funcionalidades de colaboración en tiempo real, tableros Kanban, y sistema de notificaciones.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    tags: ['React', 'Firebase', 'TailwindCSS', 'DnD Kit'],
    github: 'https://github.com/tuusuario/task-manager',
    demo: 'https://task-manager-demo.vercel.app',
    featured: true,
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description:
      'Dashboard del clima con pronósticos detallados, mapas interactivos y alertas personalizadas.',
    longDescription:
      'Una aplicación del clima completa que muestra pronósticos detallados, mapas meteorológicos interactivos, y permite configurar alertas personalizadas.',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80',
    tags: ['Next.js', 'OpenWeather API', 'Mapbox', 'Chart.js'],
    github: 'https://github.com/tuusuario/weather-app',
    demo: 'https://weather-demo.vercel.app',
    featured: false,
  },
  {
    id: '4',
    title: 'Social Media Analytics',
    description:
      'Herramienta de análisis para redes sociales con métricas en tiempo real y reportes automáticos.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    tags: ['React', 'Node.js', 'MongoDB', 'D3.js'],
    github: 'https://github.com/tuusuario/social-analytics',
    featured: false,
  },
  {
    id: '5',
    title: 'Portfolio CMS',
    description:
      'Sistema de gestión de contenido personalizado para portafolios creativos con editor visual.',
    image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&q=80',
    tags: ['Next.js', 'Sanity.io', 'TypeScript', 'TailwindCSS'],
    github: 'https://github.com/tuusuario/portfolio-cms',
    demo: 'https://portfolio-cms-demo.vercel.app',
    featured: false,
  },
  {
    id: '6',
    title: 'AI Content Generator',
    description:
      'Generador de contenido basado en IA para marketing, blogs y redes sociales.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    tags: ['Next.js', 'OpenAI', 'Prisma', 'PostgreSQL'],
    github: 'https://github.com/tuusuario/ai-content-gen',
    featured: true,
  },
];

/**
 * Retorna solo los proyectos marcados como destacados.
 * Útil para mostrar en la página de inicio.
 */
export const getFeaturedProjects = (): Project[] => {
  return projects.filter((project) => project.featured);
};

/**
 * Busca y retorna un proyecto por su ID.
 * Retorna undefined si no se encuentra.
 * 
 * @param id - ID único del proyecto a buscar
 */
export const getProjectById = (id: string): Project | undefined => {
  return projects.find((project) => project.id === id);
};
