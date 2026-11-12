'use client';

import { useEffect } from 'react';
import { registrarEvento } from '@/lib/analytics';

// Escucha los clics en enlaces de WhatsApp y teléfono de todo el sitio y los registra en Analytics.
export default function ConversionTracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const enlace = (e.target as HTMLElement | null)?.closest?.('a');
      const href = enlace?.getAttribute('href') ?? '';
      const texto = (enlace?.textContent ?? '').trim().slice(0, 60);
      if (href.includes('wa.me/')) registrarEvento('whatsapp_click', { texto });
      else if (href.startsWith('tel:')) registrarEvento('llamada_click', { texto });
    };
    document.addEventListener('click', onClick, { capture: true });
    return () => document.removeEventListener('click', onClick, { capture: true });
  }, []);

  return null;
}
