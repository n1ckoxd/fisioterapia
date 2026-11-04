'use client';

import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { MessageCircle, ClipboardCheck, Sparkles, HeartHandshake } from 'lucide-react';
import { empresaInfo } from '@/lib/data';

const pasos = [
  {
    icon: MessageCircle,
    titulo: 'Nos escribes',
    texto: 'Cuéntanos por WhatsApp o en el formulario qué necesita tu bebé, tu hijo o tu familiar. Coordinamos día, hora y modalidad.',
  },
  {
    icon: ClipboardCheck,
    titulo: 'Evaluación inicial',
    texto: `Un especialista evalúa a domicilio o en nuestra sede de ${empresaInfo.distrito}: desarrollo, movilidad, dolor y objetivos de la familia.`,
  },
  {
    icon: Sparkles,
    titulo: 'Plan personalizado',
    texto: 'Diseñamos sesiones a la medida, con objetivos claros, frecuencia recomendada y técnicas adaptadas a cada edad.',
  },
  {
    icon: HeartHandshake,
    titulo: 'Seguimiento en casa',
    texto: 'Te enseñamos ejercicios y pautas sencillas para continuar el avance entre sesiones y medimos el progreso.',
  },
];

export default function ComoFuncionaSection() {
  const ref = useRef<HTMLDivElement>(null);
  // La línea que une los pasos se dibuja a medida que la sección avanza en pantalla.
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 80%', 'end 60%'] });
  const progreso = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1]), { stiffness: 120, damping: 30 });

  return (
    <section className="py-20 bg-white relative overflow-hidden" aria-labelledby="como-funciona-titulo">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-primary-600 font-bold text-sm uppercase tracking-wider mb-2"
          >
            Así de simple
          </motion.span>
          <motion.h2
            id="como-funciona-titulo"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4"
          >
            ¿Cómo funciona la <span className="gradient-text">terapia a domicilio</span>?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-neutral-600 max-w-2xl mx-auto"
          >
            Desde el primer mensaje hasta el alta, te acompañamos en cada paso.
          </motion.p>
        </div>

        <div ref={ref} className="relative">
          {/* Línea de progreso: horizontal en escritorio, vertical en móvil */}
          <div aria-hidden className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-1 rounded-full bg-neutral-100">
            <motion.div style={{ scaleX: progreso }} className="h-full origin-left rounded-full bg-gradient-to-r from-primary-500 via-purple-500 to-teal-400" />
          </div>
          <div aria-hidden className="lg:hidden absolute top-2 bottom-2 left-8 w-1 rounded-full bg-neutral-100">
            <motion.div style={{ scaleY: progreso }} className="w-full h-full origin-top rounded-full bg-gradient-to-b from-primary-500 via-purple-500 to-teal-400" />
          </div>

          <ol className="relative grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-6">
            {pasos.map((paso, i) => (
              <motion.li
                key={paso.titulo}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="flex lg:flex-col items-start lg:items-center gap-5 lg:gap-0 lg:text-center"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -20 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 260, damping: 15, delay: 0.15 + i * 0.12 }}
                  className="relative z-10 shrink-0 w-16 h-16 rounded-2xl bg-white border-2 border-primary-200 shadow-lg shadow-primary-500/10 flex items-center justify-center lg:mb-5"
                >
                  <paso.icon className="w-7 h-7 text-primary-600" />
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-br from-primary-500 to-purple-600 text-white text-xs font-bold flex items-center justify-center shadow">
                    {i + 1}
                  </span>
                </motion.div>
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">{paso.titulo}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">{paso.texto}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
