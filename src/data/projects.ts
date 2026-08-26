/**
 * projects.ts - Portfolio de proyectos destacados
 *
 * Contiene los proyectos de ejemplo que se muestran en
 * la página de proyectos y en el carrusel del home.
 * Cada proyecto incluye categoría, tags, imagen y CTA.
 */

import type { Project } from "../types";

/** Lista de proyectos del portfolio */
export const projects: Project[] = [
  /** Proyecto de interfaz automotriz */
  {
    category: "Video",
    tag: "Automotriz",
    title: "Lumina Motors",
    description:
      "Una interfaz revolucionaria en el automóvil que impulsó un aumento del 40% en la participación del usuario. Redefinimos el lujo digital automotriz con retroalimentación táctil sin costuras y minimalismo de neón.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=1000&fit=crop&q=80",
    cta: "Ver Caso de Estudio",
  },
  /** Proyecto de arquitectura WebGL */
  {
    category: "Web",
    tag: "WebGL",
    title: "Aura Tech",
    description:
      "Computación espacial redefinida. Diseñamos una arquitectura WebGL escalable que aumentó la conversión en un 65% manteniendo una renderización de alta fidelidad impecable en todos los dispositivos.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=1000&fit=crop&q=80",
    cta: "Iniciar Proyecto Similar",
  },
  /** Proyecto de identidad de marca */
  {
    category: "Marca",
    tag: "Identidad",
    title: "Neon Nights",
    description:
      "Una identidad de marca brutalista que exigió atención. La campaña generó más de 2 millones de impresiones orgánicas en su primera semana, estableciendo una nueva vanguardia para la estética nocturna.",
    image: "https://images.unsplash.com/photo-1563089145-599997674d42?w=800&h=1000&fit=crop&q=80",
    cta: "Ver Caso de Estudio",
  },
  /** Proyecto de infraestructura de sistemas */
  {
    category: "Sistema",
    tag: "Infraestructura",
    title: "Infraestructura Core",
    description:
      "Infraestructura de nivel empresarial construida para escalar. Diseñamos una arquitectura de sistema resiliente que maneja más de 10 millones de transacciones diarias con un 99.99% de tiempo de actividad.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=1000&fit=crop&q=80",
    cta: "Ver Caso de Estudio",
  },
];
