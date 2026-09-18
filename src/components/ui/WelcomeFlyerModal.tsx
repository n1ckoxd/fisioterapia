'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, MessageCircle, Sparkles, CheckCircle2 } from 'lucide-react';
import { empresaInfo } from '@/lib/data';

export default function WelcomeFlyerModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Solo mostrar una vez por sesión de navegación
    const hasSeenModal = sessionStorage.getItem('fisiosphere_flyer_seen_v2');
    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 2000); // 2 segundos
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('fisiosphere_flyer_seen_v2', 'true');
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md animate-fadeIn"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative bg-white rounded-3xl overflow-hidden max-w-4xl w-full shadow-2xl border border-white/20 transform transition-all animate-scaleUp max-h-[92vh] flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón cerrar X destacado */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 z-30 w-10 h-10 bg-black/70 hover:bg-black text-white rounded-full flex items-center justify-center transition-all shadow-md hover:scale-105"
          aria-label="Cerrar flyer"
        >
          <X size={22} />
        </button>

        {/* Columna Izquierda: Imagen del Flyer 100% completa sin recortar */}
        <div className="md:w-7/12 bg-neutral-900 flex items-center justify-center p-2 sm:p-4 relative">
          <a
            href={empresaInfo.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClose}
            className="relative w-full h-[340px] sm:h-[420px] md:h-[520px] block cursor-pointer group"
            title="Haz clic para consultar por WhatsApp"
          >
            <Image
              src="/flyers/neurodesarrollo.jpg"
              alt="Neurodesarrollo y Estimulación Infantil FisioSphere"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 100vw, 55vw"
            />
            {/* Overlay sutil al pasar el mouse */}
            <div className="absolute inset-0 bg-primary-600/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="bg-black/80 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                <MessageCircle size={14} className="text-whatsapp" /> Toca para chatear por WhatsApp
              </span>
            </div>
          </a>
        </div>

        {/* Columna Derecha: Información y Llamado a la Acción Centrado */}
        <div className="md:w-5/12 p-6 sm:p-8 flex flex-col justify-between bg-white text-center md:text-left overflow-y-auto">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-bold mb-3 border border-primary-200 shadow-sm mx-auto md:mx-0">
              <Sparkles size={14} className="text-primary-600" />
              <span>ATENCIÓN A DOMICILIO VIP Y EN SEDE</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 leading-tight">
              ¡El mejor comienzo para tus <span className="gradient-text">hijos y familia</span>!
            </h3>

            <p className="text-gray-600 text-sm mb-5 leading-relaxed">
              Especialistas en <strong>estimulación temprana, neurodesarrollo y fisioterapia integral</strong>. Evita el tráfico de Lima: nosotros vamos a tu hogar.
            </p>

            {/* Puntos destacados */}
            <div className="space-y-2.5 text-left mb-6 bg-neutral-50 p-4 rounded-2xl border border-neutral-100">
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-800">
                <CheckCircle2 size={18} className="text-primary-600 shrink-0 mt-0.5" />
                <span><strong>A Domicilio:</strong> Llevamos camilla y equipos a tu casa.</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-800">
                <CheckCircle2 size={18} className="text-primary-600 shrink-0 mt-0.5" />
                <span><strong>En Sede:</strong> Consultorios acondicionados céntricos.</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-800">
                <CheckCircle2 size={18} className="text-primary-600 shrink-0 mt-0.5" />
                <span><strong>Licenciados Certificados:</strong> Amor, paciencia y ciencia.</span>
              </div>
            </div>
          </div>

          <div>
            <a
              href={empresaInfo.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClose}
              className="btn-whatsapp w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl font-bold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all"
            >
              <MessageCircle size={24} />
              Escribir al WhatsApp (950 332 639)
            </a>
            <p className="text-[11px] text-gray-400 text-center mt-2.5">
              Horario: Lunes a Sábado • Respuesta inmediata
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
