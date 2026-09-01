'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Dumbbell, HeartPulse, Activity, Zap, Syringe, Hand, Activity as Spine, HandMetal, HeartPulse as Stethoscope, Baby, Brain, PersonStanding } from 'lucide-react';
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

export default function ServiciosSection() {
  const serviciosDestacados = servicios.filter(s => ['fisioterapia-pediatrica', 'terapia-psicopedagogica', 'fisioterapia-geriatrica'].includes(s.slug));
  const otrosServicios = servicios.filter(s => !['fisioterapia-pediatrica', 'terapia-psicopedagogica', 'fisioterapia-geriatrica'].includes(s.slug));

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Nuestros <span className="text-primary-600">Servicios</span>
          </motion.h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubre nuestra amplia gama de tratamientos especializados para mejorar tu calidad de vida.
          </p>
        </div>

        {/* Servicios Destacados */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {serviciosDestacados.map((servicio, index) => {
            const IconComponent = iconMap[servicio.icono] || HeartPulse;
            return (
              <motion.div 
                key={servicio.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-md overflow-hidden card-hover relative"
              >
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary-400 to-primary-600"></div>
                <div className="absolute top-4 right-4 bg-primary-100 text-primary-700 text-xs font-bold px-3 py-1 rounded-full">
                  Especialidad
                </div>
                <div className="p-8">
                  <div className="w-16 h-16 bg-primary-50 text-primary-600 rounded-full flex items-center justify-center mb-6 mt-2">
                    <IconComponent size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{servicio.nombre}</h3>
                  <p className="text-gray-600 mb-6 line-clamp-3">{servicio.descripcionCorta}</p>
                  <Link href={`/servicios/${servicio.slug}`} className="text-primary-600 font-semibold inline-flex items-center hover:text-primary-700 transition-colors">
                    Saber más <span className="ml-2">→</span>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Otros Servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {otrosServicios.map((servicio, index) => {
            const IconComponent = iconMap[servicio.icono] || HeartPulse;
            return (
              <motion.div 
                key={servicio.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-md border-t-4 border-t-neutral-200 overflow-hidden card-hover"
              >
                <div className="p-8">
                  <div className="w-16 h-16 bg-neutral-50 text-neutral-600 rounded-full flex items-center justify-center mb-6">
                    <IconComponent size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{servicio.nombre}</h3>
                  <p className="text-gray-600 mb-6 line-clamp-3">{servicio.descripcionCorta}</p>
                  <Link href={`/servicios/${servicio.slug}`} className="text-neutral-600 font-semibold inline-flex items-center hover:text-neutral-900 transition-colors">
                    Saber más <span className="ml-2">→</span>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
