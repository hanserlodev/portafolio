# 📝 Instrucciones de Personalización

## 🚀 Pasos Rápidos para Poner en Marcha

### 1. Configurar Variables de Entorno

```bash
cp .env.example .env.local
```

Edita `.env.local` con tus datos:

```env
# EmailJS - Regístrate en https://www.emailjs.com/
NEXT_PUBLIC_EMAILJS_SERVICE_ID=tu_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=tu_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=tu_public_key

# URL de tu sitio (para producción)
NEXT_PUBLIC_SITE_URL=https://tu-portfolio.vercel.app
```

### 2. Personalizar Información Personal

Edita **`src/data/personal.ts`**:

```typescript
export const personalInfo = {
  name: 'Tu Nombre',
  role: 'Tu Rol/Título',
  description: 'Tu descripción breve',
  email: 'tu@email.com',
  location: 'Tu Ciudad, País',
  avatar: '/images/avatar.jpg',
  resumeUrl: '/resume.pdf',
};
```

**Enlaces sociales:**
```typescript
export const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/tu-usuario',
    icon: 'Github', // Nombre del icono de Lucide
  },
  // Agrega más...
];
```

**Skills:**
```typescript
export const skills = [
  { name: 'React', category: 'frontend' },
  { name: 'Node.js', category: 'backend' },
  // Agrega tus skills...
];
```

### 3. Agregar Tus Proyectos

Edita **`src/data/projects.ts`**:

```typescript
export const projects = [
  {
    id: '1', // Debe ser único
    title: 'Nombre del Proyecto',
    description: 'Descripción breve (100-150 caracteres)',
    longDescription: 'Descripción detallada para la página individual',
    image: 'https://images.unsplash.com/photo-xxx', // o '/images/proyecto.jpg'
    tags: ['React', 'TypeScript', 'Next.js'],
    github: 'https://github.com/tu-usuario/proyecto',
    demo: 'https://tu-proyecto.vercel.app',
    featured: true, // true para mostrar en página principal
  },
  // Agrega más proyectos...
];
```

### 4. Agregar Imágenes

Coloca tus imágenes en **`public/images/`**:

- **`avatar.jpg`** - Tu foto de perfil (recomendado: 400x400px, formato cuadrado)
- **`resume.pdf`** - Tu CV en PDF
- **`proyecto-1.jpg`**, **`proyecto-2.jpg`**, etc. - Capturas de tus proyectos

**Opciones para imágenes:**
1. Subir a `public/images/` y usar: `image: '/images/proyecto.jpg'`
2. Usar URLs externas: `image: 'https://...'`
3. Usar placeholders de Unsplash (temporal)

### 5. Personalizar SEO

Edita **`src/app/layout.tsx`**:

```typescript
export const metadata = {
  title: {
    default: 'Tu Nombre | Tu Título',
    template: '%s | Tu Nombre',
  },
  description: 'Tu descripción para SEO',
  keywords: ['tus', 'palabras', 'clave'],
  authors: [{ name: 'Tu Nombre', url: 'https://...' }],
  // ...
};
```

### 6. Actualizar URLs

Reemplaza en varios archivos:
- `https://tu-portfolio.vercel.app` → Tu URL real
- `@tuusuario` en Twitter → Tu handle real
- URLs de ejemplo en proyectos

**Archivos a revisar:**
- `src/app/layout.tsx`
- `src/app/sitemap.ts`
- `public/robots.txt`
- `.env.local`

---

## 🎨 Personalización Avanzada

### Cambiar Colores del Tema

Edita **`src/app/globals.css`**:

```css
:root {
  --primary: 240 5.9% 10%;  /* Color primario modo claro */
  --background: 0 0% 100%;   /* Fondo modo claro */
  /* ... */
}

.dark {
  --primary: 0 0% 98%;       /* Color primario modo oscuro */
  --background: 240 10% 3.9%; /* Fondo modo oscuro */
  /* ... */
}
```

**Generador de colores:** [uicolors.app/create](https://uicolors.app/create)

### Agregar Nuevas Secciones

Puedes agregar nuevas páginas en `src/app/`:

```bash
src/app/
├── blog/          # Nueva sección blog
│   ├── page.tsx
│   └── [slug]/
│       └── page.tsx
└── services/      # Nueva sección servicios
    └── page.tsx
```

No olvides actualizar **`src/components/Navbar.tsx`** con los nuevos enlaces.

### Cambiar Animaciones

Las animaciones usan **Framer Motion**. Ejemplo:

```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  {/* contenido */}
</motion.div>
```

**Propiedades comunes:**
- `initial` - Estado inicial
- `animate` - Estado final
- `transition` - Configuración de la transición
- `whileHover` - Animación al hacer hover
- `whileInView` - Animación al entrar en viewport

---

## 🔧 Configuración de EmailJS

### Paso a Paso:

1. **Crear cuenta en EmailJS**
   - Ve a [emailjs.com](https://www.emailjs.com/)
   - Regístrate gratis (200 emails/mes)

2. **Crear un servicio de email**
   - Dashboard → Email Services → Add New Service
   - Conecta con Gmail, Outlook, etc.
   - Copia el **Service ID**

3. **Crear plantilla**
   - Dashboard → Email Templates → Create New Template
   - Usa estas variables en la plantilla:
     - `{{from_name}}` - Nombre del remitente
     - `{{from_email}}` - Email del remitente
     - `{{message}}` - Mensaje
     - `{{to_email}}` - Tu email

4. **Obtener Public Key**
   - Dashboard → Account → API Keys
   - Copia tu **Public Key**

5. **Configurar en `.env.local`**
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxx
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxx
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxx
   ```

---

## 🚀 Deploy a Vercel

### Opción 1: Deploy desde GitHub

1. **Push tu código a GitHub**
   ```bash
   git add .
   git commit -m "feat: portfolio personalizado"
   git push origin main
   ```

2. **Importar en Vercel**
   - Ve a [vercel.com](https://vercel.com)
   - Click en "Import Project"
   - Selecciona tu repositorio
   - Click en "Import"

3. **Configurar Variables de Entorno**
   - En Vercel dashboard → Settings → Environment Variables
   - Agrega:
     - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
     - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
     - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
     - `NEXT_PUBLIC_SITE_URL` (será: `https://tu-proyecto.vercel.app`)

4. **Deploy Automático**
   - Vercel hace deploy automáticamente
   - Cada push a main → nuevo deploy

### Opción 2: Deploy Manual

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy a producción
vercel --prod
```

---

## ✅ Checklist Pre-Deploy

Antes de hacer deploy, verifica:

- [ ] ✅ Información personal actualizada en `personal.ts`
- [ ] ✅ Proyectos reales en `projects.ts`
- [ ] ✅ Imágenes agregadas en `public/images/`
- [ ] ✅ Avatar y CV disponibles
- [ ] ✅ URLs actualizadas (no tienen "ejemplo" o "tu-")
- [ ] ✅ Variables de entorno configuradas
- [ ] ✅ EmailJS probado localmente
- [ ] ✅ SEO metadata personalizado
- [ ] ✅ `npm run build` ejecuta sin errores
- [ ] ✅ Probado en móvil y desktop
- [ ] ✅ Modo claro y oscuro funcionan
- [ ] ✅ Todos los links externos funcionan

---

## 🧪 Testing Local

```bash
# Desarrollo
npm run dev
# Abre: http://localhost:3000

# Build de producción
npm run build
npm run start
# Abre: http://localhost:3000

# Lint
npm run lint
```

**Prueba:**
1. Navegación entre páginas
2. Modo claro/oscuro
3. Responsive (mobile, tablet, desktop)
4. Formulario de contacto
5. Links externos (GitHub, demos)
6. Carga de imágenes

---

## 📊 Analytics (Opcional)

### Google Analytics

1. Crea una propiedad en [analytics.google.com](https://analytics.google.com)
2. Obtén tu Measurement ID (G-XXXXXXXXXX)
3. Agrega en `src/app/layout.tsx`:

```tsx
import Script from 'next/script'

// Dentro de <body>
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

### Vercel Analytics

Si usas Vercel:

```bash
npm install @vercel/analytics
```

En `src/app/layout.tsx`:
```tsx
import { Analytics } from '@vercel/analytics/react';

// Antes del cierre de </body>
<Analytics />
```

---

## 🆘 Solución de Problemas

### Error: "Cannot find module"
```bash
rm -rf node_modules .next
npm install
npm run dev
```

### Imágenes no cargan
- Verifica que estén en `public/images/`
- Verifica el nombre del archivo (case-sensitive)
- Para URLs externas, añade el dominio en `next.config.js`

### EmailJS no funciona
- Verifica las variables de entorno en `.env.local`
- Verifica que el servicio esté activo en EmailJS dashboard
- Revisa la consola del navegador para errores

### Build falla
```bash
npm run lint
# Corrige los errores mostrados
npm run build
```

---

## 📚 Recursos Útiles

- [Next.js Docs](https://nextjs.org/docs)
- [TailwindCSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
- [EmailJS Docs](https://www.emailjs.com/docs/)
- [Vercel Docs](https://vercel.com/docs)

---

¿Necesitas ayuda? Revisa:
- `MEJORAS_IMPLEMENTADAS.md` - Log de cambios
- `MEJORAS.md` - Documentación de código
- `README.md` - Overview del proyecto
