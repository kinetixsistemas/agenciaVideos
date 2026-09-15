/**
 * navigation.ts - Definición de navegación del sitio
 *
 * Contiene las rutas del menú principal y los enlaces
 * de redes sociales que aparecen en el footer.
 */

import type { NavItem } from "../types";

/** Elementos del menú de navegación principal */
export const mainNav: NavItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Edición de Videos", href: "/video-editing" },
  { label: "Páginas Web", href: "/web-development" },
  { label: "Nosotros", href: "/about" },
  { label: "Contacto", href: "/contact" },
];

/** Enlaces de redes sociales del footer */
export const footerSocials: NavItem[] = [
  { label: "LinkedIn", href: "#", icon: "public" },
  { label: "Instagram", href: "#", icon: "photo_camera" },
  { label: "X", href: "#", icon: "tag" },
  { label: "GitHub", href: "#", icon: "code" },
];