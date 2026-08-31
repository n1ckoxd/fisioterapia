'use client';

import { MessageCircle } from 'lucide-react';
import { empresaInfo } from '@/lib/data';

export default function WhatsAppButton() {
  return (
    <a
      href={empresaInfo.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-whatsapp text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 animate-float"
      aria-label="Escríbenos por WhatsApp"
      title="Escríbenos por WhatsApp"
    >
      <div className="absolute inset-0 rounded-full bg-whatsapp opacity-40 animate-pulse pointer-events-none" />
      <MessageCircle className="w-8 h-8 relative z-10" />
    </a>
  );
}
