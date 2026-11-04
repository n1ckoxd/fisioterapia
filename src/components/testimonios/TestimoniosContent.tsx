'use client';

import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';
import { Star, Quote, Calendar, MessageCircle } from 'lucide-react';
import { testimonios, empresaInfo } from '@/lib/data';
import { formatearFecha } from '@/lib/blog-data';

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const iniciales = (nombre: string) =>
  nombre
    .split(' ')
    .slice(0, 2)
    .map((p) => p[0])
    .join('');

export default function TestimoniosContent() {
  return (
    <section className="container mx-auto px-4 py-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        className="columns-1 md:columns-2 lg:columns-3 gap-8 [&>*]:mb-8"
      >
        {testimonios.map((t) => (
          <motion.figure
            key={t.id}
            variants={itemVariants}
            className="break-inside-avoid bg-white rounded-2xl p-8 shadow-sm border border-neutral-100 card-hover relative"
          >
            <Quote className="absolute top-6 right-6 w-10 h-10 text-primary-100" aria-hidden />
            <div className="flex gap-1 mb-4" aria-label={`${t.estrellas} de 5 estrellas`}>
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${i < t.estrellas ? 'text-yellow-400 fill-yellow-400' : 'text-neutral-300'}`}
                />
              ))}
            </div>

            <blockquote className="text-gray-700 italic mb-6 leading-relaxed">&ldquo;{t.texto}&rdquo;</blockquote>

            <figcaption className="flex items-center gap-3 border-t border-neutral-100 pt-4">
              <span className="w-11 h-11 rounded-full bg-gradient-to-br from-primary-500 to-purple-600 text-white font-bold flex items-center justify-center shrink-0">
                {iniciales(t.nombre)}
              </span>
              <span className="min-w-0">
                <span className="block font-bold text-neutral-900 truncate">{t.nombre}</span>
                <span className="flex flex-wrap items-center gap-x-2 text-sm">
                  <span className="text-primary-600">{t.servicio}</span>
                  <span className="text-neutral-400">· {formatearFecha(t.fecha)}</span>
                </span>
              </span>
            </figcaption>
          </motion.figure>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-8 rounded-3xl gradient-cta text-white text-center p-10 shadow-xl"
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-3">¿Quieres ser nuestra próxima historia?</h2>
        <p className="text-primary-100 mb-8 max-w-xl mx-auto">
          Agenda una evaluación a domicilio o en nuestra sede de {empresaInfo.distrito}.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/citas"
            className="inline-flex items-center justify-center gap-2 bg-white text-primary-700 font-bold px-8 py-3 rounded-xl hover:bg-primary-50 hover:-translate-y-0.5 transition-all"
          >
            <Calendar className="w-5 h-5" /> Reservar Cita
          </Link>
          <a
            href={empresaInfo.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-8 py-3 rounded-xl hover:bg-white/10 transition-all"
          >
            <MessageCircle className="w-5 h-5" /> WhatsApp
          </a>
        </div>
      </motion.div>
    </section>
  );
}
