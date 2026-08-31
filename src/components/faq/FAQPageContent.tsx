'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { faqsGenerales } from '@/lib/data';

export default function FAQPageContent() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="space-y-4 mb-16">
        {faqsGenerales.map((faq, index) => (
          <div 
            key={index}
            className="bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-sm transition-all duration-300 hover:border-primary-300 hover:shadow-md"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none"
              aria-expanded={openIndex === index}
            >
              <h3 className="font-semibold text-lg text-neutral-900 pr-4">
                {faq.pregunta}
              </h3>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="flex-shrink-0 text-primary-600 bg-primary-50 p-2 rounded-full"
              >
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 text-neutral-600 leading-relaxed border-t border-neutral-100 pt-3">
                    {faq.respuesta}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      <div className="bg-primary-900 rounded-3xl p-8 md:p-12 text-center text-white gradient-cta relative overflow-hidden shadow-xl">
        <div className="relative z-10 flex flex-col items-center">
          <MessageCircle className="w-16 h-16 text-primary-200 mb-6" />
          <h2 className="text-3xl font-bold mb-4">¿Aún tienes dudas?</h2>
          <p className="text-primary-100 max-w-xl mx-auto mb-8 text-lg">
            Si no encontraste la respuesta a tu pregunta, no dudes en contactarnos directamente. Nuestro equipo estará encantado de ayudarte.
          </p>
          <Link 
            href="/contacto"
            className="btn-primary bg-white text-primary-900 hover:bg-neutral-100 px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:-translate-y-1 inline-flex items-center gap-2"
          >
            Contáctanos ahora
          </Link>
        </div>
      </div>
    </section>
  );
}
