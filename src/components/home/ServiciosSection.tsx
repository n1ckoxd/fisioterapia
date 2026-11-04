'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Dumbbell, HeartPulse, Activity, Zap, Syringe, Hand, Activity as Spine, HandMetal, HeartPulse as Stethoscope, Baby, Brain, PersonStanding } from 'lucide-react';
import { servicios } from '@/lib/data';

import type { ElementType } from 'react';
const iconMap: Record<string, ElementType> = {
  Dumbbell,
  HeartPulse,
  Activity,
  Zap,
  Syringe,
  Hand,
  Baby,
  Brain,
  PersonStanding,
  Spine,
  HandMetal,
  Stethoscope
};

// Las especialidades con foto ya aparecen arriba en círculos; aquí, el resto de tratamientos.
export default function ServiciosSection() {
  const otrosServicios = servicios.filter((s) => !s.imagen);

  return (
    <section className="py-20 bg-white" aria-labelledby="tratamientos-titulo">
      <div className="container mx-auto px-4 max-w-5xl text-center">
        <motion.h2
          id="tratamientos-titulo"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
        >
          Más tratamientos de <span className="text-primary-600">fisioterapia</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="text-lg text-gray-600 max-w-2xl mx-auto mb-10"
        >
          Para dolor, lesiones y recuperación en adultos, también a domicilio.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-3">
          {otrosServicios.map((servicio, index) => {
            const IconComponent = iconMap[servicio.icono] || HeartPulse;
            return (
              <motion.div
                key={servicio.slug}
                initial={{ opacity: 0, scale: 0.85, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 300, damping: 22, delay: index * 0.04 }}
              >
                <Link
                  href={`/servicios/${servicio.slug}`}
                  title={servicio.descripcionCorta}
                  className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-neutral-50 border border-neutral-200 text-sm font-medium text-neutral-700 hover:bg-primary-50 hover:border-primary-300 hover:text-primary-700 hover:-translate-y-0.5 hover:shadow-md transition-all"
                >
                  <IconComponent size={16} className="group-hover:scale-110 transition-transform" />
                  {servicio.nombre}
                </Link>
              </motion.div>
            );
          })}
        </div>

        <Link
          href="/servicios"
          className="group mt-10 inline-flex items-center gap-2 font-semibold text-primary-600 hover:text-primary-700"
        >
          Ver todos los servicios
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
