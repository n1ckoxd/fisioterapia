'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, ArrowRight } from 'lucide-react';
import { faqsGenerales } from '@/lib/data';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-white" aria-labelledby="faq-titulo">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <motion.h2
            id="faq-titulo"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            Preguntas <span className="text-primary-600">Frecuentes</span>
          </motion.h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Resolvemos tus dudas más comunes sobre nuestros servicios y tratamientos.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqsGenerales.map((faq, index) => {
            const abierta = openIndex === index;
            return (
              <motion.div
                key={faq.pregunta}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className={`rounded-2xl border transition-colors duration-300 ${
                  abierta ? 'bg-primary-50/50 border-primary-200 shadow-sm' : 'bg-gray-50 border-transparent hover:bg-gray-100'
                }`}
              >
                <h3>
                  <button
                    onClick={() => setOpenIndex(abierta ? null : index)}
                    aria-expanded={abierta}
                    aria-controls={`faq-respuesta-${index}`}
                    id={`faq-pregunta-${index}`}
                    className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left"
                  >
                    <span className="font-semibold text-base sm:text-lg text-gray-900">{faq.pregunta}</span>
                    <motion.span
                      animate={{ rotate: abierta ? 45 : 0 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                        abierta ? 'bg-primary-600 text-white' : 'bg-white text-primary-600 shadow-sm'
                      }`}
                    >
                      <Plus className="w-4 h-4" />
                    </motion.span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {abierta && (
                    <motion.div
                      id={`faq-respuesta-${index}`}
                      role="region"
                      aria-labelledby={`faq-pregunta-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 sm:px-6 pb-6 text-gray-600 leading-relaxed">{faq.respuesta}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/preguntas-frecuentes"
            className="group inline-flex items-center gap-2 font-semibold text-primary-600 hover:text-primary-700"
          >
            Ver todas las preguntas por especialidad
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
