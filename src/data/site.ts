/**
 * site.ts - Configuración general del sitio web
 *
 * Contiene la información estática del sitio: título, descripción,
 * URL, imagen OG para redes sociales y datos de contacto.
 */

import type { SiteConfig } from "../types";

/** Configuración principal del sitio Daller */
export const siteConfig: SiteConfig = {
  /** Título del sitio que aparece en pestañas y SEO */
  title: "Daller - Visión en Movimiento",
  /** Descripción meta para motores de búsqueda */
  description:
    "Producción cinematográfica de élite encuentra ingeniería digital brutalista. Creamos experiencias que exigen atención y se niegan a ser ignoradas.",
  /** URL base del sitio */
  url: "https://daller.agency",
  /** Imagen por defecto para compartir en redes sociales */
  image: "/images/og-kinetix.jpg",
  /** Correo electrónico de contacto */
  email: "hola@daller.agency",
  /** Teléfono de contacto */
  phone: "+51989634309",
};
