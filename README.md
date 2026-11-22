# 🚀 Portafolio Profesional - Next.js 16

Un portafolio moderno, limpio y completamente personalizable construido con Next.js 16, TypeScript, TailwindCSS y Framer Motion.

![Next.js](https://img.shields.io/badge/Next.js-16-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8)
![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Características

- 🎨 **Diseño Moderno y Minimalista** - Interfaz limpia con animaciones suaves
- 🌓 **Modo Oscuro/Claro** - Cambio de tema con persistencia
- 📱 **Totalmente Responsive** - Optimizado para todos los dispositivos
- ⚡ **Rendimiento Óptimo** - Next.js 16 con App Router y Turbopack
- 🎭 **Animaciones Fluidas** - Framer Motion para transiciones elegantes
- 📊 **Gestión de Datos Modular** - Edita proyectos desde archivos TypeScript
- 🔍 **SEO Optimizado** - Metadatos configurables
- 📧 **Formulario de Contacto** - Integración con EmailJS
- 🎯 **Type-Safe** - 100% TypeScript
- 🚀 **Deploy Fácil** - Listo para Vercel

## 🛠️ Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
- **Estilos:** [TailwindCSS](https://tailwindcss.com/)
- **Animaciones:** [Framer Motion](https://www.framer.com/motion/)
- **Iconos:** [Lucide React](https://lucide.dev/)
- **Formularios:** [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Tema:** [next-themes](https://github.com/pacocoursey/next-themes)
- **Email:** [EmailJS](https://www.emailjs.com/)

## 📁 Estructura del Proyecto

```
/
├── src/
│   ├── app/                    # App Router de Next.js
│   │   ├── layout.tsx          # Layout principal
│   │   ├── page.tsx            # Página de inicio
│   │   ├── about/              # Página "Sobre mí"
│   │   ├── projects/           # Página de proyectos
│   │   ├── contact/            # Página de contacto
│   │   └── globals.css         # Estilos globales
│   │
│   ├── components/             # Componentes reutilizables
│   │   ├── Navbar.tsx          # Navegación principal
│   │   ├── Hero.tsx            # Sección hero
│   │   ├── ProjectCard.tsx     # Tarjeta de proyecto
│   │   ├── SectionTitle.tsx    # Título de sección
│   │   ├── Footer.tsx          # Footer
│   │   ├── SocialLinks.tsx     # Enlaces sociales
│   │   └── ThemeToggle.tsx     # Botón de tema
│   │
│   ├── data/                   # Datos modulares
│   │   ├── projects.ts         # 📝 EDITA TUS PROYECTOS AQUÍ
│   │   └── personal.ts         # 📝 EDITA TU INFO PERSONAL AQUÍ
│   │
│   └── lib/
│       └── utils.ts            # Utilidades
│
├── public/                     # Archivos estáticos
│   └── images/                 # Tus imágenes
│
├── tailwind.config.ts          # Configuración de Tailwind
├── tsconfig.json               # Configuración de TypeScript
└── package.json                # Dependencias
```

## 🚀 Inicio Rápido

### 1. Instalar dependencias

```bash
npm install
# o
yarn install
# o
pnpm install
```

### 2. Personalizar tu información

#### Edita `src/data/personal.ts`:

```typescript
export const personalInfo = {
  name: 'Tu Nombre',
  role: 'Tu Rol',
  description: 'Tu descripción...',
  email: 'tuemail@ejemplo.com',
  location: 'Tu Ciudad, País',
  avatar: '/images/avatar.jpg',
  resumeUrl: '/resume.pdf',
};
```

#### Edita `src/data/projects.ts`:

```typescript
export const projects: Project[] = [
  {
    id: '1',
    title: 'Nombre del Proyecto',
    description: 'Descripción corta...',
    image: 'URL_DE_LA_IMAGEN',
    tags: ['React', 'Next.js'],
    github: 'https://github.com/...',
    demo: 'https://...',
    featured: true,
  },
  // Más proyectos...
];
```

### 3. Agregar tu foto (opcional)

Coloca tu foto en `public/images/avatar.jpg` y actualiza la ruta en `personal.ts`.

### 4. Configurar EmailJS (opcional)

1. Regístrate en [EmailJS](https://www.emailjs.com/) y crea un servicio y una plantilla
2. Copia `.env.example` a `.env.local` y rellena las tres variables `NEXT_PUBLIC_EMAILJS_*`
3. Las credenciales **no** se editan en el código. Si faltan, el formulario muestra tu email directo en lugar de simular un envío

```bash
cp .env.example .env.local
```

También configura `NEXT_PUBLIC_SITE_URL` con el dominio real: alimenta metadatos, canonical, `robots.txt` y `sitemap.xml`.

### 5. Ejecutar en desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🎨 Personalización

### Cambiar Colores

Edita `tailwind.config.ts` y `src/app/globals.css` para personalizar la paleta de colores:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 240 10% 3.9%;
  --primary: 240 5.9% 10%;
  /* ... más colores */
}
```

### Agregar Secciones

Crea nuevos componentes en `src/components/` y úsalos en las páginas.

### Modificar Animaciones

Edita las animaciones de Framer Motion en los componentes:

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  {/* Contenido */}
</motion.div>
```

## 📦 Scripts Disponibles

```bash
npm run dev             # Inicia el servidor de desarrollo
npm run build           # Construye para producción
npm run start           # Inicia el servidor de producción
npm run lint            # Ejecuta ESLint
npm run lint:fix        # Corrige problemas de lint automáticamente
npm run typecheck       # Verifica los tipos de TypeScript
npm run typecheck:strict # Verificación de tipos con reglas estrictas (opcional)
npm run verify          # lint + typecheck + build, en ese orden
```

El flujo de CI (`.github/workflows/ci.yml`) ejecuta `npm ci` → `lint` → `typecheck` → `build` con Node 20 en pushes y PRs a `main`.

## 🚀 Deploy en Vercel

1. Sube tu código a GitHub
2. Importa el proyecto en [Vercel](https://vercel.com)
3. Vercel detectará Next.js automáticamente
4. ¡Deploy! 🎉

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## 🎯 Características Pendientes

- [x] Página de cada proyecto individual
- [x] SEO (sitemap, robots, Open Graph y Twitter Cards)
- [ ] Blog con MDX
- [ ] Modo multilenguaje (i18n)
- [ ] Integración con CMS (Sanity/Contentful)
- [ ] Analytics
- [ ] Sistema de comentarios

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Puedes usarlo libremente para tu portafolio personal.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si encuentras un bug o tienes una sugerencia:

1. Haz fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 💡 Inspiración

Este portafolio fue diseñado para ser:
- ✅ Fácil de personalizar
- ✅ Rápido y eficiente
- ✅ Profesional y moderno
- ✅ 100% código abierto

## 📧 Contacto

Si tienes preguntas o necesitas ayuda:

- 📧 Email: hanserlodev@gmail.com
- 🐦 Twitter: [@hanserlodev](https://twitter.com/hanserlodev)
- 💼 LinkedIn: [Hans Ordoñez](https://www.linkedin.com/in/hans-anderson-ordo%C3%B1ez-molinero-699a19381/)

---

⭐ Si este proyecto te fue útil, considera darle una estrella en GitHub!

**Hecho con ❤️ usando Next.js 16**
