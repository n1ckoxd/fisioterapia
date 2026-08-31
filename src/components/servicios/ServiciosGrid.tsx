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
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {servicios.map((servicio) => {
        const Icon = iconMap[servicio.icono] || Activity;
        return (
          <motion.div key={servicio.slug} variants={itemVariants}>
            <Link
              href={`/servicios/${servicio.slug}`}
              className="group block h-full"
            >
              <div className="h-full bg-white rounded-2xl overflow-hidden card-hover shadow-sm border border-neutral-100">
                <div className="h-1.5 bg-gradient-to-r from-primary-500 to-primary-600" />
                <div className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-primary-50 flex items-center justify-center mb-5 group-hover:bg-primary-100 transition-colors">
                    <Icon className="w-7 h-7 text-primary-600" />
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
  );
}
