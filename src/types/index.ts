/**
 * types/index.ts - Definiciones de tipos TypeScript
 *
 * Contiene las interfaces que definen la estructura
 * de datos utilizada en todo el proyecto:
 * - Service: Servicios que ofrece la agencia
 * - Project: Proyectos del portfolio
 * - NavItem: Elementos de navegación
 * - SiteConfig: Configuración general del sitio
 */

/** Interfaz para un servicio de la agencia */
export interface Service {
  /** Icono de Material Symbols */
  icon: string;
  /** Etiqueta corta del servicio (ej: "Motion VFX") */
  tagline: string;
  /** Título completo del servicio */
  title: string;
  /** Descripción detallada del servicio */
  description: string;
  /** Texto del botón CTA */
  cta: string;
  /** URL de destino del CTA */
  href: string;
  /** Tags visualizados como pills en la tarjeta */
  tags: string[];
  /** URL de imagen representativa del servicio */
  image: string;
}

/** Interfaz para un proyecto del portfolio */
export interface Project {
  /** Categoría del proyecto (ej: "Video", "Web", "Marca") */
  category: string;
  /** Etiqueta específica (ej: "Automotriz", "WebGL") */
  tag: string;
  /** Título del proyecto */
  title: string;
  /** Descripción del proyecto */
  description: string;
  /** URL de imagen del proyecto */
  image: string;
  /** Texto del botón CTA */
  cta: string;
}

/** Interfaz para un elemento de navegación */
export interface NavItem {
  /** Texto visible del enlace */
  label: string;
  /** URL de destino */
  href: string;
  /** Icono opcional de Material Symbols */
  icon?: string;
}

/** Interfaz de configuración general del sitio */
export interface SiteConfig {
  /** Título del sitio */
  title: string;
  /** Descripción meta del sitio */
  description: string;
  /** URL base del sitio */
  url: string;
  /** URL de imagen OG por defecto */
  image: string;
  /** Correo electrónico de contacto */
  email: string;
  /** Teléfono de contacto */
  phone: string;
}
