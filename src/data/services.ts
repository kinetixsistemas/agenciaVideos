/**
 * services.ts - Catálogo de servicios de Electric Apple
 *
 * Define los tres servicios principales que ofrece la agencia:
 * producción de video, desarrollo web y diseño gráfico.
 * Cada servicio incluye metadata para tags, imágenes e iconos.
 */

import type { Service } from "../types";

/** Lista de servicios disponibles */
export const services: Service[] = [
  /** Servicio de producción de video y efectos visuales */
  {
    icon: "videocam",
    tagline: "Motion VFX",
    title: "Producción de Video",
    description:
      "Narrativa cinematográfica diseñada para plataformas digitales. Creamos visuales de movimiento viscerales y de alto impacto que comunican narrativas complejas con brutal claridad.",
    cta: "Iniciar Proyecto",
    href: "/contact",
    tags: ["Motion", "VFX"],
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=480&fit=crop&q=80",
  },
  /** Servicio de desarrollo web y aplicaciones */
  {
    icon: "code",
    tagline: "React WebGL",
    title: "Desarrollo Web",
    description:
      "Arquitecturas de alto rendimiento construidas sobre stacks modernos. Construimos entornos resilientes e interactivos que fusionan estética táctil con ejecución técnica impecable.",
    cta: "Construir tu Plataforma",
    href: "/contact",
    tags: ["React", "WebGL"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=480&fit=crop&q=80",
  },
  /** Servicio de diseño gráfico e identidad visual */
  {
    icon: "design_services",
    tagline: "Identidad UI/UX",
    title: "Diseño Gráfico",
    description:
      "Identidades visuales sin disculpas. Diseñamos sistemas de marca e interfaces estructurados y de alto contraste que dominan el espacio y definen la vanguardia de la estética digital.",
    cta: "Transformar tu Marca",
    href: "/contact",
    tags: ["Identidad", "UI/UX"],
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=480&fit=crop&q=80",
  },
];
