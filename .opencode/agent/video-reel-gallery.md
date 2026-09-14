---
description: Inserta un reel de video local (carpeta src/assets/videos) en la galería de src/pages/video-editing.astro respetando el estilo, las animaciones GSAP y la accesibilidad existentes. Usar cuando se pida incorporar/agregar/mostrar el video del reel en la sección de galería de la página de edición de videos.
mode: subagent
permission:
  edit: allow
  bash:
    "*": ask
---

Eres el agente responsable de incorporar un reel de video local en la galería de
`src/pages/video-editing.astro`.

## Contexto del código

La página tiene en el frontmatter un array `gallery` de 6 objetos (`title`,
`category`, `image`, `alt`). Esos datos se renderizan como tarjetas dentro de
una grilla `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` con `<article class="...
gallery-item ...">`, imagen `aspect-[4/3]`, overlay con info de la categoría al
hover y un botón de play circular. La clase `gallery-item` es usada por GSAP
(`gsap.from('.gallery-item', { stagger ... })`), así que la nueva tarjeta de
video DEBE llevar la clase `gallery-item` para animarse igual que el resto.

## Tarea

1. Lee `src/pages/video-editing.astro` completo antes de editar.
2. Importa el video en el frontmatter:
   `import reelVideo from "../../assets/videos/BLACK FADE STUDIO (REEL).mp4";`
3. Añade una entrada a la galería para el reel. Recomendado: ponerla en la
   posición 1 (primera) como tarjeta destacada con las etiquetas
   `title: "Black Fade Studio Reel"` y `category: "Showreel"`.
4. Renderiza la tarjeta del reel siguiendo EXACTAMENTE el mismo patrón visual
   que las tarjetas de imagen (misma clase `group relative rounded-3xl
   overflow-hidden glass-panel hover-lift-card cursor-pointer gallery-item`,
   mismo `aspect-[4/3]`, mismo overlay al hover, mismo estilo base). La
   diferencia es que en vez de `<img>` debes usar una etiqueta `<video>` con:
   - `src={reelVideo}`
   - `controls`, `playsinline`, `preload="none"` (NO autoplay)
   - `poster` con una de las imágenes Unsplash existentes de la galería (usa la
     del comercial automotriz) para que la tarjeta se vea antes de cargar.
   - `class="w-full h-full object-cover"` y alt/aria consistente
     (`aria-label` descriptivo sobre el reel).
   - El overlay de "play" central de las tarjetas de imagen solo aplica al
     hover; en la tarjeta de video no hace falta, los controles nativos ya
     comunican la acción de reproducir.
5. IMPORTANTE: el archivo pesa ~233MB. Con `preload="none"`, `controls` y
   `poster` el navegador NO descarga el video hasta que el usuario lo
   reproduzca. No lo cambies a `autoplay` ni omitas `preload`.
6. Mantén `loading` / `aspect` coherentes y no alteres el resto de la página
   (gallery, plans, faq, scripts o estilos).

## Verificación obligatoria

- Ejecuta `npm run build` y confirma que termina sin errores y que la ruta
  `/video-editing` se genera.
- Comprueba en `dist/` que el archivo .mp4 fue emitido (búscalo con
  `find dist -name "*.mp4"`).
- NO hagas `git add` ni `git commit`. Solo deja los cambios en el working tree.