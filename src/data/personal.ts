export interface PersonalInfo {
    name: string;
    role: string;
    description: string;
    email: string;
    location: string;
    avatar: string;
    resumeUrl?: string;
}

/**
 * Interfaz para los enlaces de redes sociales.
 * El 'icon' debe coincidir con el nombre del componente de lucide-react.
 */
export interface SocialLink {
    name: string;
    url: string;
    icon: string; // Nombre del icono de lucide-react (ej: 'Github', 'Linkedin')
}

/**
 * Interfaz para las habilidades técnicas.
 * Las categorías ayudan a organizar las skills por sección.
 */
export interface Skill {
    name: string;
    category: 'frontend' | 'backend' | 'tools' | 'other';
}

/**
 * 📝 EDITA ESTA SECCIÓN CON TU INFORMACIÓN PERSONAL
 * 
 * Esta información aparecerá en toda la aplicación:
 * - Página de inicio (Hero)
 * - Página "Sobre mí"
 * - Footer
 * - Metadatos SEO
 */
export const personalInfo: PersonalInfo = {
    name: 'Hans Ordoñez',
    role: 'Desarrollador Full Stack',
    description:
        'Apasionado por crear experiencias web excepcionales. Especializado en React, Next.js y TypeScript. Me encanta resolver problemas complejos con soluciones elegantes.',
    email: 'hanserlodev@gmail.com',
    location: 'Junín, Perú',
    avatar: '/images/avatar.jpg', // Coloca tu foto en public/images/avatar.jpg
    resumeUrl: '/resume.pdf', // Opcional: Coloca tu CV en public/resume.pdf
};

export const socialLinks: SocialLink[] = [
    {
        name: 'GitHub',
        url: 'https://github.com/hanserlodev',
        icon: 'Github',
    },
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/hans-anderson-ordo%C3%B1ez-molinero-699a19381/',
        icon: 'Linkedin',
    },
    {
        name: 'Twitter',
        url: 'https://twitter.com/hanserlodev',
        icon: 'Twitter',
    },
    {
        name: 'Email',
        url: 'mailto:hanserlodev@gmail.com',
        icon: 'Mail',
    },
];


export const skills: Skill[] = [
    // Frontend
    { name: 'React', category: 'frontend' },
    { name: 'Next.js', category: 'frontend' },
    { name: 'TypeScript', category: 'frontend' },
    { name: 'TailwindCSS', category: 'frontend' },
    { name: 'Framer Motion', category: 'frontend' },

    // Backend
    { name: 'Node.js', category: 'backend' },
    { name: 'Express', category: 'backend' },
    { name: 'PostgreSQL', category: 'backend' },
    { name: 'MongoDB', category: 'backend' },

    // Tools
    { name: 'Git', category: 'tools' },
    { name: 'Docker', category: 'tools' },
    { name: 'VS Code', category: 'tools' },
    { name: 'Figma', category: 'tools' },
];


export const aboutMe = {
    bio: `
    ¡Hola! Soy Hanserld, un desarrollador y entusiasta de la inteligencia artificial con pasión por construir proyectos que combinan innovación,
    creatividad y tecnología. Me especializo en crear aplicaciones modernas, escalables y centradas en el usuario, desde scripts en Python hasta
    soluciones completas para web y dispositivos móviles. Disfruto diseñar sistemas que no solo funcionen bien, sino que también generen un impacto real.
    Mi enfoque se basa en aprender constantemente, explorar nuevas herramientas y aplicar la IA como motor de cambio en el desarrollo de software.
    Cuando no estoy programando, me dedico a investigar, idear proyectos de código abierto y compartir conocimientos con la comunidad tecnológica.
  `,
    highlights: [
        '2+ años de experiencia en desarrollo web',
        'Especializado en React, Angular y Next.js',
        'Contribuidor acérrimo del open source',
        'Aprendiz continuo',
    ],
};
