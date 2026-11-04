'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, MessageCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import type { FAQ } from '@/lib/data';
import { empresaInfo } from '@/lib/data';

export interface CategoriaFAQ {
  id: string;
  nombre: string;
  faqs: FAQ[];
  enlace?: { href: string; texto: string };
}

export default function FAQPageContent({ categorias }: { categorias: CategoriaFAQ[] }) {
  const [activa, setActiva] = useState(categorias[0].id);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const categoria = categorias.find((c) => c.id === activa) ?? categorias[0];

  const cambiarCategoria = (id: string) => {
    setActiva(id);
    setOpenIndex(0);
  };

  return (
    <section className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Pestañas por especialidad */}
      <div role="tablist" aria-label="Temas de preguntas" className="flex flex-wrap justify-center gap-2 mb-10">
        {categorias.map((c) => (
          <button
            key={c.id}
            role="tab"
            id={`tab-${c.id}`}
            aria-selected={activa === c.id}
            aria-controls="panel-faq"
            onClick={() => cambiarCategoria(c.id)}
            className={`relative px-4 py-2.5 rounded-full text-sm font-semibold transition-colors ${
              activa === c.id ? 'text-white' : 'bg-white text-neutral-600 border border-neutral-200 hover:border-primary-300'
            }`}
          >
            {activa === c.id && (
              <motion.span
                layoutId="tab-faq"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-600 to-purple-600 shadow-md"
                transition={{ type: 'spring', stiffness: 400, damping: 32 }}
              />
            )}
            <span className="relative">
              {c.nombre} <span className="opacity-70">({c.faqs.length})</span>
            </span>
          </button>
        ))}
      </div>

      <div id="panel-faq" role="tabpanel" aria-labelledby={`tab-${activa}`} className="mb-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={activa}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-3"
          >
            {categoria.faqs.map((faq, index) => {
              const abierta = openIndex === index;
              return (
                <motion.div
                  key={faq.pregunta}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.04 }}
                  className={`bg-white rounded-2xl border overflow-hidden transition-colors duration-300 ${
                    abierta ? 'border-primary-300 shadow-md' : 'border-neutral-200 hover:border-primary-200'
                  }`}
                >
                  <h2>
                    <button
                      onClick={() => setOpenIndex(abierta ? null : index)}
                      className="w-full text-left px-6 py-5 flex justify-between items-center gap-4"
                      aria-expanded={abierta}
                      aria-controls={`faq-${activa}-${index}`}
                    >
                      <span className="font-semibold text-base sm:text-lg text-neutral-900">{faq.pregunta}</span>
                      <motion.span
                        animate={{ rotate: abierta ? 45 : 0 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        className={`shrink-0 p-2 rounded-full ${abierta ? 'bg-primary-600 text-white' : 'bg-primary-50 text-primary-600'}`}
                      >
                        <Plus className="w-4 h-4" />
                      </motion.span>
                    </button>
                  </h2>
                  <AnimatePresence initial={false}>
                    {abierta && (
                      <motion.div
                        id={`faq-${activa}-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-5 text-neutral-600 leading-relaxed border-t border-neutral-100 pt-4">{faq.respuesta}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}

            {categoria.enlace && (
              <div className="text-center pt-4">
                <Link
                  href={categoria.enlace.href}
                  className="group inline-flex items-center gap-2 font-semibold text-primary-600 hover:text-primary-700"
                >
                  {categoria.enlace.texto}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl p-8 md:p-12 text-center text-white gradient-cta relative overflow-hidden shadow-xl"
      >
        <div className="relative z-10 flex flex-col items-center">
          <MessageCircle className="w-14 h-14 text-primary-200 mb-6" />
          <h2 className="text-3xl font-bold mb-4">¿Aún tienes dudas?</h2>
          <p className="text-primary-100 max-w-xl mx-auto mb-8 text-lg">
            Escríbenos y un especialista te orienta sobre el caso de tu bebé, tu hijo o tu familiar.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={empresaInfo.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary-800 hover:bg-neutral-100 px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:-translate-y-1 inline-flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" /> Escribir por WhatsApp
            </a>
            <Link
              href="/contacto"
              className="border-2 border-white/80 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-bold transition-all inline-flex items-center justify-center"
            >
              Otras formas de contacto
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
