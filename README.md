# Daller — Visión en Movimiento

> Visión en Movimiento. Código en Precisión.

Sitio web oficial de **Daller** ([daller.agency](https://daller.agency)), una agencia digital que fusiona producción cinematográfica de élite con ingeniería digital brutalista. Creamos experiencias que exigen atención y se niegan a ser ignoradas.

## Descripción

Daller ofrece servicios de:

- **Edición de Video** — Narrativa cinematográfica, motion graphics, VFX y color grading
- **Diseño Gráfico** — Identidades visuales y sistemas de marca brutalistas
- **Páginas Web** — Arquitecturas de alto rendimiento con animaciones GSAP

## Tecnologías

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| [Astro](https://astro.build) | ^7.2.6 | Framework de sitios estáticos |
| [Tailwind CSS](https://tailwindcss.com) | ^4.3.3 | Framework de utilidades CSS |
| [GSAP](https://gsap.com) | ^3.15.0 | Animaciones y scroll-triggered effects |

### Dependencias Principales

- `@astrojs/sitemap` — Generación automática de sitemap XML
- `@tailwindcss/vite` — Integración de Tailwind con Vite

## Estructura del Proyecto

```
agenciaVideos/
├── public/                    # Assets estáticos (favicon, robots, imágenes)
│   ├── cache/
│   ├── images/
│   ├── favicon.ico
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── assets/                # Assets procesados por Vite
│   │   ├── og-kinetix.jpg    # Imagen Open Graph
│   │   └── videos/            # Showreel (BLACK FADE STUDIO (REEL).mp4)
│   ├── components/            # Componentes Astro reutilizables
│   │   ├── Caption.astro
│   │   ├── CookieConsent.astro
│   │   ├── CTA.astro
│   │   ├── FeaturedWork.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── SEOHead.astro
│   │   └── Services.astro
│   ├── data/                  # Datos estáticos del sitio
│   │   ├── site.ts           # Configuración general (Daller, daller.agency)
│   │   ├── navigation.ts     # Rutas de navegación y redes sociales
│   │   └── projects.ts       # Portfolio de proyectos
│   ├── layouts/
│   │   └── BaseLayout.astro  # Layout principal
│   ├── lib/                   # Utilidades
│   ├── pages/                 # Páginas (rutas)
│   │   ├── index.astro        # Inicio
│   │   ├── services.astro     # Servicios
│   │   ├── video-editing.astro# Edición de videos (galería con showreel)
│   │   ├── graphic-design.astro# Diseño gráfico
│   │   ├── web-development.astro# Páginas web
│   │   ├── projects.astro     # Proyectos
│   │   ├── packages.astro     # Precios
│   │   ├── about.astro        # Nosotros
│   │   ├── contact.astro      # Contacto (formulario con slider de presupuesto)
│   │   ├── faq.astro          # Preguntas frecuentes
│   │   ├── terminos.astro     # Términos y condiciones
│   │   ├── privacidad.astro   # Política de privacidad
│   │   └── 404.astro          # Página de error
│   ├── styles/
│   │   └── global.css        # Design tokens, tipografía y animaciones
│   ├── types/
│   │   └── index.ts          # Definiciones TypeScript
│   └── middleware.ts          # Headers de seguridad y cache
├── astro.config.mjs           # Configuración de Astro (site: daller.agency)
├── tsconfig.json              # Configuración de TypeScript
└── package.json               # Dependencias y scripts
```

## Instalación

### Requisitos Previos

- Node.js >= 22.12.0
- npm o yarn

### Pasos

```bash
# Clonar el repositorio
git clone https://github.com/kinetixsistemas/agenciaVideos.git

# Navegar al directorio del proyecto
cd agenciaVideos

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El sitio estará disponible en `http://localhost:4321`

## Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia servidor de desarrollo |
| `npm run build` | Genera build de producción en `./dist/` |
| `npm run preview` | Previsualiza el build localmente |
| `npm run astro` | Ejecuta comandos CLI de Astro |

### Gestión del Servidor de Desarrollo

```bash
# Iniciar en segundo plano
astro dev --background

# Detener servidor
astro dev stop

# Verificar estado
astro dev status

# Ver logs
astro dev logs
```

## Diseño

### Paleta de Colores

| Color | Hex | Uso |
|-------|-----|-----|
| Surface | `#131315` | Fondo principal |
| Surface Container Lowest | `#0e0e10` | Fondo de secciones alternas |
| Primary | `#e8b3ff` | Acentos y texto destacado |
| Primary Container | `#c961ff` | Elementos de alto énfasis |
| On Primary | `#500075` | Texto sobre primary |
| Tertiary | `#fdba53` | Acentos secundarios |
| Text Primary | `#F5F5F7` | Texto principal |
| Text Muted | `#86868B` | Texto secundario |
| Success | `#32D74B` | Botones CTA, play y estados de éxito |
| Error | `#ffb4ab` | Estados de error |

### Tipografía

- **Headlines**: [Syne](https://fonts.google.com/specimen/Syne) — Tipografía expresiva para títulos
- **Body**: [Hanken Grotesk](https://fonts.google.com/specimen/Hanken+Grotesk) — Neo-grotesque limpia para cuerpo de texto

### Componentes Clave

- **Glass Panel**: Efecto glassmorphism con backdrop-blur
- **Neon Glow**: Efecto de brillo en hover para botones
- **Hover Lift**: Elevación de tarjetas al pasar el cursor
- **Carousel**: Carrusel infinito de proyectos destacados (FeaturedWork)
- **Showreel**: Tarjeta de video con botón de play centrado siempre visible (toggle play/pausa con GSAP)

## Funcionalidades

- ✅ Diseño responsive (mobile-first)
- ✅ Navegación con menú overlay móvil
- ✅ Formulario de contacto con slider de presupuesto
- ✅ Banner de consentimiento de cookies
- ✅ Headers de seguridad (XSS, clickjacking, MIME sniffing, referrer, permissions)
- ✅ Cache inmutable para assets estáticos (`/_astro/`)
- ✅ SEO optimizado (Open Graph, Twitter Cards, Schema.org)
- ✅ Sitemap XML automático
- ✅ Accesibilidad (skip-to-content, aria labels)
- ✅ Animaciones GSAP + ScrollTrigger (hero, galería, precios, FAQ)

## Despliegue

El proyecto genera archivos estáticos en `./dist/` que pueden desplegarse en:

- [Vercel](https://vercel.com)
- [Netlify](https://netlify.com)
- [Cloudflare Pages](https://pages.cloudflare.com)
- [GitHub Pages](https://pages.github.com)

```bash
# Generar build de producción
npm run build

# La carpeta dist/ está lista para desplegar
```

### Nota sobre medios (video showreel)

El showreel vive en `src/assets/videos/BLACK FADE STUDIO (REEL).mp4` y se emite a `dist/_astro/` con hash inmutable.

- **GitHub** rechaza archivos > 100 MB (recomendado < 50 MB). El showreel está comprimido a ~69 MB.
- Para streaming, el box `moov` debe ir al inicio del archivo (`-movflags +faststart`).
- Re-transcodificación recomendada:

```bash
ffmpeg -i reel-original.mp4 \
  -c:v libx264 -preset slow -crf 24 -maxrate 8M -bufsize 16M \
  -pix_fmt yuv420p -profile:v high -movflags +faststart \
  -c:a aac -b:a 160k -ar 44100 -ac 2 reel-web.mp4
```

## Licencia

© 2026 Daller. Todos los derechos reservados.

---

**Daller** — Visión en Movimiento.