"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Clock,
  ChevronDown,
  Calendar,
  MessageCircle,
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
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import type { Servicio } from "@/lib/data";
import { empresaInfo } from "@/lib/data";

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

interface ServicioDetalleProps {
  servicio: Servicio;
}

export default function ServicioDetalle({ servicio }: ServicioDetalleProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const Icon = iconMap[servicio.icono] || Activity;

  return (
    <article>
      {/* Hero del servicio */}
      <section className="gradient-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary-100 flex items-center justify-center mb-6">
              <Icon className="w-8 h-8 text-primary-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              {servicio.nombre}
            </h1>
            <p className="text-lg text-neutral-600 leading-relaxed mb-8">
              {servicio.descripcionLarga}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/citas" className="btn-primary">
                <Calendar className="w-5 h-5" />
                Reservar Cita
              </Link>
              <a
                href={empresaInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-neutral-900 mb-12 text-center">
              Beneficios del tratamiento
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicio.beneficios.map((beneficio, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="flex items-start gap-4 p-6 bg-white rounded-xl border border-neutral-100 shadow-sm card-hover"
                >
                  <CheckCircle className="w-6 h-6 text-success shrink-0 mt-0.5" />
                  <p className="text-neutral-700 font-medium">{beneficio}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tratamiento y Duración */}
      <section className="section-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">
                ¿Cómo es el tratamiento?
              </h2>
              <p className="text-neutral-600 leading-relaxed text-lg">
                {servicio.tratamiento}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-100">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-primary-600" />
                  <h3 className="text-xl font-bold text-neutral-900">
                    Duración del tratamiento
                  </h3>
                </div>
                <p className="text-neutral-600 leading-relaxed">
                  {servicio.duracion}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Preguntas frecuentes del servicio */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-neutral-900 mb-12 text-center">
            Preguntas frecuentes
          </h2>
          <div className="space-y-4">
            {servicio.faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-neutral-200 overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenFaq(openFaq === index ? null : index)
                  }
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-neutral-50 transition-colors"
                >
                  <span className="font-semibold text-neutral-800 pr-4">
                    {faq.pregunta}
                  </span>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-neutral-400 shrink-0" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-neutral-600 leading-relaxed">
                        {faq.respuesta}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-cta py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            ¿Te gustaría probar nuestro servicio de {servicio.nombre.toLowerCase()}?
          </h2>
          <p className="text-lg text-primary-100 mb-8">
            Reserva tu primera consulta y comienza tu camino hacia la
            recuperación
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/citas"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary-700 font-semibold px-8 py-3 rounded-xl hover:bg-primary-50 transition-all"
            >
              <Calendar className="w-5 h-5" />
              Reservar Cita
            </Link>
            <a
              href={empresaInfo.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-8 py-3 rounded-xl hover:bg-white/10 transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </article>
  );
}
