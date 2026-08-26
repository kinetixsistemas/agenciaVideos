# Electric Apple

> Visión en Movimiento. Código en Precisión.

Sitio web oficial de **Electric Apple**, un estudio de producción digital de élite que fusiona ingeniería digital brutalista con producción cinematográfica de alta gama.

## Descripción

Electric Apple es una agencia digital especializada en crear experiencias que exigen atención y se niegan a ser ignoradas. Ofrecemos servicios de:

- **Producción de Video** - Narrativa cinematográfica y motion VFX
- **Desarrollo Web** - Arquitecturas de alto rendimiento con React y WebGL
- **Diseño Gráfico** - Identidades visuales y sistemas de marca brutalistas

## Tecnologías

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| [Astro](https://astro.build) | ^7.2.6 | Framework de sitios estáticos |
| [Tailwind CSS](https://tailwindcss.com) | ^4.3.3 | Framework de utilidades CSS |
| [TypeScript](https://www.typescriptlang.org) | ^6.0.3 | Tipado estático |
| [Vite](https://vitejs.dev) | - | Bundler de desarrollo |

### Dependencias Principales

- `@astrojs/sitemap` - Generación automática de sitemap XML
- `@tailwindcss/vite` - Integración de Tailwind con Vite

## Estructura del Proyecto

```
electric-apple/
├── public/                    # Assets estáticos (favicon, etc.)
├── src/
│   ├── components/           # Componentes Astro reutilizables
│   │   ├── Header.astro     # Barra de navegación principal
│   │   ├── Footer.astro     # Pie de página
│   │   ├── Hero.astro       # Sección principal de bienvenida
│   │   ├── Features.astro   # Características destacadas
│   │   ├── FeaturedWork.astro # Carrusel de proyectos
│   │   ├── CTA.astro        # Llamada a la acción final
│   │   ├── SEOHead.astro    # Meta tags SEO
│   │   └── CookieConsent.astro # Banner de cookies
│   ├── data/                 # Datos estáticos del sitio
│   │   ├── site.ts          # Configuración general
│   │   ├── navigation.ts    # Rutas de navegación
│   │   ├── services.ts      # Catálogo de servicios
│   │   └── projects.ts      # Portfolio de proyectos
│   ├── layouts/
│   │   └── BaseLayout.astro # Layout principal
│   ├── pages/                # Páginas (rutas)
│   │   ├── index.astro      # Inicio
│   │   ├── services.astro   # Servicios
│   │   ├── projects.astro   # Proyectos
│   │   ├── about.astro      # Nosotros
│   │   ├── contact.astro    # Contacto
│   │   ├── terminos.astro   # Términos y condiciones
│   │   ├── privacidad.astro # Política de privacidad
│   │   └── 404.astro        # Página de error
│   ├── styles/
│   │   └── global.css       # Estilos globales y design tokens
│   ├── types/
│   │   └── index.ts         # Definiciones TypeScript
│   └── middleware.ts         # Headers de seguridad y cache
├── astro.config.mjs          # Configuración de Astro
├── tsconfig.json             # Configuración de TypeScript
└── package.json              # Dependencias y scripts
```

## Instalación

### Requisitos Previos

- Node.js >= 22.12.0
- npm o yarn

### Pasos

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/electric-apple.git

# Navegar al directorio del proyecto
cd electric-apple

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
| Primary | `#e8b3ff` | Acentos y texto destacado |
| Primary Container | `#c961ff` | Elementos de alto énfasis |
| Text Primary | `#F5F5F7` | Texto principal |
| Text Muted | `#86868B` | Texto secundario |
| Success | `#32D74B` | Botones CTA y estados de éxito |

### Tipografía

- **Headlines**: [Syne](https://fonts.google.com/specimen/Syne) - Tipografía expresiva para títulos
- **Body**: [Hanken Grotesk](https://fonts.google.com/specimen/Hanken+Grotesk) - Neo-grotesque limpia para cuerpo de texto

### Componentes Clave

- **Glass Panel**: Efecto glassmorphism con backdrop-blur
- **Neon Glow**: Efecto de brillo en hover para botones
- **Hover Lift**: Elevación de tarjetas al pasar el cursor
- **Carousel**: Carrusel infinito de proyectos destacados

## Funcionalidades

- ✅ Diseño responsive (mobile-first)
- ✅ Navegación con menú overlay móvil
- ✅ Formulario de contacto con slider de presupuesto
- ✅ Banner de consentimiento de cookies
- ✅ Headers de seguridad (XSS, clickjacking, etc.)
- ✅ Cache inmutable para assets estáticos
- ✅ SEO optimizado (Open Graph, Twitter Cards, Schema.org)
- ✅ Sitemap XML automático
- ✅ Accesibilidad (skip-to-content, aria labels)
- ✅ Animaciones CSS suaves

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

## Licencia

© 2024 Electric Apple. Todos los derechos reservados.

---

**Electric Apple** - Visión en Movimiento.
