'use client';

import Image from 'next/image';
import { empresaInfo } from '@/lib/data';

export default function WhatsAppButton() {
  return (
    <a
      href={empresaInfo.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-2xl hover:shadow-green-500/50 hover:scale-110 transition-all duration-300 group"
      aria-label="Escríbenos por WhatsApp - FisioSphere"
      title="Escríbenos por WhatsApp"
    >
      {/* Aura pulsante suave */}
      <span className="absolute inset-0 rounded-full bg-emerald-500 opacity-40 animate-ping pointer-events-none" />
      <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-emerald-500 to-green-400 opacity-70 blur-sm pointer-events-none" />
      
      {/* Contenedor del Icono Oficial */}
      <div className="relative w-full h-full rounded-full overflow-hidden flex items-center justify-center bg-white shadow-md p-1 border-2 border-emerald-400/80">
        <Image
          src="/whatt.png"
          alt="WhatsApp FisioSphere"
          width={64}
          height={64}
          priority
          className="w-full h-full object-contain transform group-hover:scale-105 transition-transform"
        />
      </div>
    </a>
  );
}
