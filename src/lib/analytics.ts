import { sendGAEvent } from '@next/third-parties/google';

// Envía un evento a Google Analytics (solo si GA está cargado en la página).
// Sirve para medir clientes potenciales: clics en WhatsApp, llamadas y formularios enviados.
export function registrarEvento(nombre: string, datos: Record<string, string | number> = {}) {
  if (typeof window === 'undefined' || !window.dataLayer) return;
  sendGAEvent('event', nombre, { ...datos, pagina: window.location.pathname });
}
