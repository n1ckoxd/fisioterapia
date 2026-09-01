"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Dumbbell,
  HeartPulse,
  Activity,
  Zap,
  Syringe,
  Hand,
  Baby,
  Brain,
  PersonStanding,
  type LucideIcon,
} from "lucide-react";
import type { Servicio } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  Dumbbell,
  HeartPulse,
  Activity,
  Zap,
  Syringe,
  Hand,
  Baby,
  Brain,
  PersonStanding,
  Spine: Activity,
  HandMetal: Hand,
  Stethoscope: HeartPulse,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

interface ServiciosGridProps {
  servicios: Servicio[];
}

export default function ServiciosGrid({ servicios }: ServiciosGridProps) {
  const destacadosSlugs = [
    "fisioterapia-pediatrica",
    "terapia-psicopedagogica",
    "fisioterapia-geriatrica",
  ];

  const serviciosDestacados = servicios.filter((s) =>
    destacadosSlugs.includes(s.slug)
  );
  const otrosServicios = servicios.filter(
    (s) => !destacadosSlugs.includes(s.slug)
  );

  return (
    <div className="space-y-16">
      {/* Sección Especialidades Destacadas */}
      <div>
        <div className="flex items-center gap-3 mb-8">
          <span className="h-8 w-1.5 bg-primary-500 rounded-full"></span>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">
              Especialidades Principales
            </h2>
            <p className="text-neutral-500 text-sm mt-1">
              Nuestros programas especializados de alta demanda y atención personalizada
            </p>
          </div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {serviciosDestacados.map((servicio) => {
            const Icon = iconMap[servicio.icono] || Activity;
            return (
              <motion.div key={servicio.slug} variants={itemVariants}>
                <Link
                  href={`/servicios/${servicio.slug}`}
                  className="group block h-full"
                >
                  <div className="h-full bg-white rounded-2xl overflow-hidden card-hover shadow-md border-2 border-primary-200 relative transition-all duration-300 group-hover:border-primary-400">
                    <div className="h-2 bg-gradient-to-r from-primary-400 to-primary-600" />
                    <div className="absolute top-4 right-4 bg-primary-100 text-primary-700 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                      ★ Especialidad
                    </div>
                    <div className="p-8">
                      <div className="w-14 h-14 rounded-xl bg-primary-50 flex items-center justify-center mb-5 group-hover:bg-primary-100 transition-colors mt-2">
                        <Icon className="w-7 h-7 text-primary-600" />
                      </div>
                      <h3 className="text-xl font-bold text-neutral-800 mb-3 group-hover:text-primary-600 transition-colors">
                        {servicio.nombre}
                      </h3>
                      <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                        {servicio.descripcionCorta}
                      </p>
                      <span className="text-primary-600 font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                        Ver detalles del servicio →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Sección Otros Tratamientos */}
      <div>
        <div className="flex items-center gap-3 mb-8">
          <span className="h-8 w-1.5 bg-neutral-300 rounded-full"></span>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">
              Más Tratamientos y Terapias
            </h2>
            <p className="text-neutral-500 text-sm mt-1">
              Soluciones integrales para la recuperación funcional y alivio del dolor
            </p>
          </div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {otrosServicios.map((servicio) => {
            const Icon = iconMap[servicio.icono] || Activity;
            return (
              <motion.div key={servicio.slug} variants={itemVariants}>
                <Link
                  href={`/servicios/${servicio.slug}`}
                  className="group block h-full"
                >
                  <div className="h-full bg-white rounded-2xl overflow-hidden card-hover shadow-sm border border-neutral-100">
                    <div className="h-1.5 bg-gradient-to-r from-neutral-300 to-neutral-400 group-hover:from-primary-400 group-hover:to-primary-500 transition-all" />
                    <div className="p-8">
                      <div className="w-14 h-14 rounded-xl bg-neutral-50 flex items-center justify-center mb-5 group-hover:bg-primary-50 transition-colors">
                        <Icon className="w-7 h-7 text-neutral-600 group-hover:text-primary-600 transition-colors" />
                      </div>
                      <h3 className="text-xl font-bold text-neutral-800 mb-3 group-hover:text-primary-600 transition-colors">
                        {servicio.nombre}
                      </h3>
                      <p className="text-neutral-500 text-sm leading-relaxed mb-4">
                        {servicio.descripcionCorta}
                      </p>
                      <span className="text-primary-600 font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                        Saber más →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
