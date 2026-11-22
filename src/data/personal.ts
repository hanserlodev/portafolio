export interface PersonalInfo {
  name: string;
  role: string;
  description: string;
  email: string;
  location: string;
  avatar: string;
  resumeUrl?: string;
}

/** El 'icon' debe coincidir con un nombre exportado por lucide-react. */
export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'other';
}

/** Fuente única de verdad del nombre y el rol mostrados en todo el sitio. */
export const personalInfo: PersonalInfo = {
  name: 'Hans Ordoñez',
  role: 'Desarrollador Full Stack',
  description:
    'Construyo aplicaciones web completas con Next.js, TypeScript y Laravel. Me interesa especialmente convertir datos complejos en herramientas que la gente pueda usar, desde dashboards geoespaciales hasta sistemas de gestión.',
  email: 'hanserlodev@gmail.com',
  location: 'Junín, Perú',
  avatar: 'https://avatars.githubusercontent.com/u/236074685?v=4',
  // resumeUrl: '/resume.pdf', // Descomenta cuando coloques tu CV en public/resume.pdf
};

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/hanserlodev', icon: 'Github' },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/hans-anderson-ordo%C3%B1ez-molinero-699a19381/',
    icon: 'Linkedin',
  },
  { name: 'Twitter', url: 'https://twitter.com/hanserlodev', icon: 'Twitter' },
  { name: 'Email', url: 'mailto:hanserlodev@gmail.com', icon: 'Mail' },
];

export const skills: Skill[] = [
  { name: 'React', category: 'frontend' },
  { name: 'Next.js', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'TailwindCSS', category: 'frontend' },
  { name: 'Framer Motion', category: 'frontend' },
  { name: 'Node.js', category: 'backend' },
  { name: 'Laravel', category: 'backend' },
  { name: 'Livewire', category: 'backend' },
  { name: 'PostgreSQL', category: 'backend' },
  { name: 'Supabase', category: 'backend' },
  { name: 'MongoDB', category: 'backend' },
  { name: 'Rust', category: 'backend' },
  { name: 'Git', category: 'tools' },
  { name: 'Docker', category: 'tools' },
  { name: 'Figma', category: 'tools' },
  { name: 'Vercel', category: 'tools' },
];

export const aboutMe = {
  bio: `
    ¡Hola! Soy Hans Ordoñez, desarrollador full stack y entusiasta de la inteligencia artificial. Construyo aplicaciones modernas y escalables, desde scripts en Python hasta motores gráficos en Rust y plataformas web completas.
    Trabajo principalmente con Next.js, TypeScript y Laravel, y disfruto especialmente los proyectos donde hay datos complejos de por medio: visualizarlos, limpiarlos y convertirlos en algo que una persona pueda entender y usar.
    Me motiva aprender constantemente, explorar nuevas herramientas y usar la IA como motor de cambio en el desarrollo de software. Cuando no estoy programando, investigo, ideo proyectos de código abierto y comparto conocimientos con la comunidad tecnológica.
  `,
  highlights: [
    'Proyectos de producción en Next.js y Laravel',
    'Experiencia con datos geoespaciales y NASA FIRMS',
    'Desarrollo multiplataforma: web, Android y motores nativos',
    'Contribuidor de código abierto y aprendiz continuo',
  ],
};
