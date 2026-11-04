'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, ArrowRight } from 'lucide-react';
import { testimonios } from '@/lib/data';

const INTERVALO = 7000;

// Entra desde el lado hacia el que se avanza y sale por el contrario.
const deslizar: Variants = {
  entra: (dir: number) => ({ opacity: 0, x: dir * 80, scale: 0.98 }),
  centro: { opacity: 1, x: 0, scale: 1 },
  sale: (dir: number) => ({ opacity: 0, x: dir * -80, scale: 0.98 }),
};

const iniciales = (nombre: string) =>
  nombre
    .split(' ')
    .slice(0, 2)
    .map((p) => p[0])
    .join('');

export default function TestimoniosSection() {
  const [[indice, direccion], setEstado] = useState<[number, number]>([0, 1]);
  const [pausado, setPausado] = useState(false);

  const mover = useCallback((paso: number) => {
    setEstado(([actual]) => [(actual + paso + testimonios.length) % testimonios.length, paso]);
  }, []);

  useEffect(() => {
    if (pausado) return;
    const timer = setTimeout(() => mover(1), INTERVALO);
    return () => clearTimeout(timer);
  }, [indice, pausado, mover]);

  const t = testimonios[indice];

  return (
    <section className="py-20 section-light overflow-hidden" aria-labelledby="testimonios-titulo">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <motion.h2
            id="testimonios-titulo"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            Lo que dicen nuestros <span className="text-primary-600">pacientes</span>
          </motion.h2>
          <p className="text-lg text-neutral-600">Familias que confiaron en nosotros</p>
        </div>

        <div
          className="max-w-4xl mx-auto relative"
          onMouseEnter={() => setPausado(true)}
          onMouseLeave={() => setPausado(false)}
          onFocus={() => setPausado(true)}
          onBlur={() => setPausado(false)}
        >
          <button
            onClick={() => mover(-1)}
            aria-label="Testimonio anterior"
            className="absolute top-1/2 -translate-y-1/2 -left-2 md:-left-14 z-20 p-3 bg-white rounded-full shadow-md text-gray-600 hover:text-primary-600 hover:scale-110 transition-all"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={() => mover(1)}
            aria-label="Siguiente testimonio"
            className="absolute top-1/2 -translate-y-1/2 -right-2 md:-right-14 z-20 p-3 bg-white rounded-full shadow-md text-gray-600 hover:text-primary-600 hover:scale-110 transition-all"
          >
            <ChevronRight size={22} />
          </button>

          <div className="bg-white rounded-3xl px-8 py-10 md:p-12 shadow-lg relative min-h-[340px] flex items-center justify-center overflow-hidden">
            <Quote className="absolute top-6 left-6 text-primary-100 w-20 h-20" aria-hidden />

            <AnimatePresence mode="wait" custom={direccion} initial={false}>
              <motion.figure
                key={indice}
                custom={direccion}
                variants={deslizar}
                initial="entra"
                animate="centro"
                exit="sale"
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.6}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -70) mover(1);
                  else if (info.offset.x > 70) mover(-1);
                }}
                className="relative z-10 text-center w-full cursor-grab active:cursor-grabbing select-none"
              >
                <div className="flex justify-center gap-1 mb-6" aria-label={`${t.estrellas} de 5 estrellas`}>
                  {[...Array(5)].map((_, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.15 + i * 0.06, type: 'spring', stiffness: 400, damping: 15 }}
                    >
                      <Star className={`w-6 h-6 ${i < t.estrellas ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                    </motion.span>
                  ))}
                </div>

                <blockquote className="text-lg md:text-2xl text-gray-700 italic mb-8 leading-relaxed">
                  &ldquo;{t.texto}&rdquo;
                </blockquote>

                <figcaption className="flex items-center justify-center gap-3">
                  <span className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-purple-600 text-white font-bold flex items-center justify-center shadow-md">
                    {iniciales(t.nombre)}
                  </span>
                  <span className="text-left">
                    <span className="block text-base font-bold text-gray-900">{t.nombre}</span>
                    <span className="block text-sm text-primary-600">{t.servicio}</span>
                  </span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>

            {/* Progreso del cambio automático */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-neutral-100">
              <motion.div
                key={`${indice}-${pausado}`}
                className="h-full bg-gradient-to-r from-primary-500 to-purple-500"
                initial={{ width: '0%' }}
                animate={{ width: pausado ? '0%' : '100%' }}
                transition={{ duration: pausado ? 0 : INTERVALO / 1000, ease: 'linear' }}
              />
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-8" role="tablist" aria-label="Elegir testimonio">
            {testimonios.map((item, idx) => (
              <button
                key={item.id}
                role="tab"
                aria-selected={idx === indice}
                onClick={() => setEstado([idx, idx > indice ? 1 : -1])}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  idx === indice ? 'w-8 bg-primary-600' : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Ver testimonio ${idx + 1}`}
              />
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/testimonios" className="group inline-flex items-center gap-2 font-semibold text-primary-600 hover:text-primary-700">
              Ver todos los testimonios
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
