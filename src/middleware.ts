/**
 * middleware.ts - Middleware de Astro
 *
 * Intercepta todas las peticiones HTTP para agregar:
 * - Headers de seguridad (X-Content-Type-Options, X-Frame-Options, etc.)
 * - Cache inmutable para assets estáticos de Astro (/_astro/)
 *
 * Se ejecuta en cada petición antes de llegar a la página.
 */

import type { APIContext } from "astro";

/**
 * Manejador de peticiones que agrega headers de seguridad
 * y optimización de cache a todas las respuestas.
 */
export async function onRequest(_ctx: APIContext, next: () => Promise<Response>) {
  return next().then((response) => {
    // Clonar headers para no modificar los originales
    const headers = new Headers(response.headers);

    // Headers de seguridad
    headers.set("X-Content-Type-Options", "nosniff");              // Prevenir MIME sniffing
    headers.set("X-Frame-Options", "DENY");                        // Prevenir clickjacking
    headers.set("X-XSS-Protection", "1; mode=block");              // Protección XSS
    headers.set("Referrer-Policy", "strict-origin-when-cross-origin"); // Control de referrer
    headers.set(
      "Permissions-Policy",
      "camera=(), microphone=(), geolocation=()",                   // Deshabilitar permisos sensibles
    );

    // Cache inmutable para assets estáticos de Astro
    const url = new URL(_ctx.request.url);
    if (url.pathname.startsWith("/_astro/")) {
      headers.set("Cache-Control", "public, max-age=31536000, immutable");
    }

    // Retornar respuesta con headers modificados
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  });
}
