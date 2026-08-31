import { type NextRequest } from 'next/server';
import { updateSession } from '@/utils/supabase/middleware';

// Simple in-memory store para Rate Limiting (Solo funciona en un servidor Node.js local o custom)
// Para despliegues Serverless (ej. Vercel), se recomienda usar @upstash/ratelimit con Redis
const rateLimitMap = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minuto
const MAX_REQUESTS = 10; // Max peticiones por ventana para rutas sensibles

export async function proxy(request: NextRequest) {
  // 1. Rate Limiting Básico para acciones sensibles (ej. submit de formularios)
  if (request.method === 'POST') {
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    const now = Date.now();
    const windowStart = now - RATE_LIMIT_WINDOW;

    const requestData = rateLimitMap.get(ip) || { count: 0, timestamp: now };

    if (requestData.timestamp < windowStart) {
      requestData.count = 1;
      requestData.timestamp = now;
    } else {
      requestData.count++;
    }

    rateLimitMap.set(ip, requestData);

    if (requestData.count > MAX_REQUESTS) {
      console.warn(`Rate limit exceeded for IP: ${ip}`);
      // Nota: En producción real con Next.js, no devolver un string plano en peticiones POST
      // ya que rompe el formato esperado por Server Actions. Es mejor manejarlo en la propia Action.
    }
  }

  // 2. Procesar sesión y proteger rutas con Supabase
  return await updateSession(request);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
