'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { empresaInfo } from '@/lib/data';

const CLAVE_BURBUJA = 'fisiosphere_burbuja_wa';

function marcarBurbujaVista() {
  try {
    sessionStorage.setItem(CLAVE_BURBUJA, '1');
  } catch {}
}

export default function WhatsAppButton() {
  const [burbuja, setBurbuja] = useState(false);

  // Burbuja de ayuda: aparece una vez por visita, unos segundos después de entrar.
  useEffect(() => {
    let vista = false;
    try {
      vista = sessionStorage.getItem(CLAVE_BURBUJA) === '1';
    } catch {}
    if (vista) return;

    const mostrar = setTimeout(() => setBurbuja(true), 6000);
    const ocultar = setTimeout(() => {
      setBurbuja(false);
      marcarBurbujaVista();
    }, 16000);
    return () => {
      clearTimeout(mostrar);
      clearTimeout(ocultar);
    };
  }, []);

  const cerrarBurbuja = () => {
    setBurbuja(false);
    marcarBurbujaVista();
  };

  return (
    <div
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-end gap-3"
      style={{ viewTransitionName: 'whatsapp-fab' }}
    >
      <AnimatePresence>
        {burbuja && (
          <motion.div
            initial={{ opacity: 0, x: 16, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 12, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 320, damping: 24 }}
            className="relative mb-2 max-w-[220px] rounded-2xl rounded-br-sm bg-white px-4 py-3 text-sm text-neutral-700 shadow-xl border border-neutral-100"
          >
            <button
              onClick={cerrarBurbuja}
              aria-label="Cerrar mensaje"
              className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-neutral-800 text-white flex items-center justify-center shadow"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            <p className="font-semibold text-neutral-900">¿Te ayudamos? 👋</p>
            <p className="text-xs text-neutral-500 mt-0.5">Escríbenos y te orientamos sin compromiso.</p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={empresaInfo.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        onClick={cerrarBurbuja}
        initial={{ scale: 0, rotate: -30, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 16, delay: 1 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-2xl hover:shadow-green-500/50"
        aria-label="Escríbenos por WhatsApp"
        title="Escríbenos por WhatsApp"
      >
        {/* Onda suave */}
        <span className="absolute inset-0 rounded-full bg-emerald-500/40 fab-ring pointer-events-none" />
        <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-emerald-500 to-green-400 opacity-70 blur-sm pointer-events-none" />

        <span className="relative w-full h-full rounded-full overflow-hidden flex items-center justify-center bg-white shadow-md p-1 border-2 border-emerald-400/80">
          <Image
            src="/whatt.png"
            alt=""
            width={64}
            height={64}
            className="w-full h-full object-contain"
          />
        </span>
      </motion.a>
    </div>
  );
}
