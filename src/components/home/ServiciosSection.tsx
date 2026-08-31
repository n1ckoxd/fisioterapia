'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Dumbbell, HeartPulse, Activity, Zap, Syringe, Hand, Activity as Spine, HandMetal, HeartPulse as Stethoscope } from 'lucide-react';
import { servicios } from '@/lib/data';

import type { ElementType } from 'react';
const iconMap: Record<string, ElementType> = {
  Dumbbell,
  HeartPulse,
  Activity,
  Zap,
  Syringe,
  Hand,
  Spine,
  HandMetal,
  Stethoscope
};

export default function ServiciosSection() {
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {servicios.map((servicio, index) => {
            const IconComponent = iconMap[servicio.icono] || HeartPulse;
            return (
              <motion.div 
                key={servicio.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-md border-t-4 border-t-primary-500 overflow-hidden card-hover"
              >
                <div className="p-8">
                  <div className="w-16 h-16 bg-primary-50 text-primary-600 rounded-full flex items-center justify-center mb-6">
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
      </div>
    </section>
  );
}
