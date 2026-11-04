"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  CheckCircle,
  CheckCircle2,
  Clock,
  Plus,
  Calendar,
  MessageCircle,
  ArrowRight,
  Home as HomeIcon,
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
import type { Servicio, MiembroEquipo } from "@/lib/data";
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

const EASE = [0.22, 1, 0.36, 1] as const;

const contenedor: Variants = {
  oculto: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const item: Variants = {
  oculto: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

export interface ArticuloResumen {
  slug: string;
  titulo: string;
  categoria: string;
  imagen: string;
  tiempoLectura: string;
}

interface ServicioDetalleProps {
  servicio: Servicio;
  especialista?: MiembroEquipo;
  articulos: ArticuloResumen[];
  otrasEspecialidades: Pick<Servicio, "slug" | "nombre" | "imagen" | "imagenAlt">[];
}

export default function ServicioDetalle({ servicio, especialista, articulos, otrasEspecialidades }: ServicioDetalleProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const Icon = iconMap[servicio.icono] || Activity;
  const whatsappServicio = `https://wa.me/${empresaInfo.whatsapp}?text=${encodeURIComponent(
    `Hola, quisiera información sobre ${servicio.nombre}.`
  )}`;
  const citaServicio = `/citas?servicio=${servicio.slug}`;

  return (
    <article>
      {/* Hero del servicio */}
      <section className="gradient-hero py-16 sm:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={servicio.imagen ? "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" : ""}>
            <motion.div className="max-w-4xl" variants={contenedor} initial="oculto" animate="visible">
              <motion.div
                variants={{
                  oculto: { opacity: 0, scale: 0.5, rotate: -15 },
                  visible: { opacity: 1, scale: 1, rotate: 0, transition: { type: "spring", stiffness: 260, damping: 16 } },
                }}
                className="w-16 h-16 rounded-2xl bg-primary-100 flex items-center justify-center mb-6"
              >
                <Icon className="w-8 h-8 text-primary-600" />
              </motion.div>
              <motion.h1 variants={item} className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
                {servicio.nombre}
              </motion.h1>
              <motion.p variants={item} className="text-lg text-neutral-600 leading-relaxed mb-6">
                {servicio.descripcionLarga}
              </motion.p>
              <motion.ul variants={item} className="flex flex-wrap gap-2 mb-8 text-sm">
                <li className="inline-flex items-center gap-1.5 bg-white border border-neutral-200 rounded-full px-3 py-1.5 text-neutral-700">
                  <HomeIcon className="w-4 h-4 text-primary-600" /> A domicilio en Lima
                </li>
                <li className="inline-flex items-center gap-1.5 bg-white border border-neutral-200 rounded-full px-3 py-1.5 text-neutral-700">
                  <CheckCircle2 className="w-4 h-4 text-primary-600" /> Sede en {empresaInfo.distrito}
                </li>
                <li className="inline-flex items-center gap-1.5 bg-white border border-neutral-200 rounded-full px-3 py-1.5 text-neutral-700">
                  <Clock className="w-4 h-4 text-primary-600" /> Previa cita
                </li>
              </motion.ul>
              <motion.div variants={item} className="flex flex-col sm:flex-row gap-4">
                <Link href={citaServicio} className="btn-primary justify-center">
                  <Calendar className="w-5 h-5" />
                  Reservar Cita
                </Link>
                <a href={whatsappServicio} target="_blank" rel="noopener noreferrer" className="btn-whatsapp justify-center">
                  <MessageCircle className="w-5 h-5" />
                  Consultar por WhatsApp
                </a>
              </motion.div>
            </motion.div>

            {servicio.imagen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.92, rotate: 2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
                className="relative"
              >
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl ring-8 ring-white">
                  <Image
                    src={servicio.imagen}
                    alt={servicio.imagenAlt ?? servicio.nombre}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                {especialista && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    className="absolute -bottom-6 left-4 sm:left-6 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 animate-float"
                  >
                    {especialista.foto && (
                      <span className="relative w-11 h-11 rounded-full overflow-hidden ring-2 ring-primary-100">
                        <Image src={especialista.foto} alt="" fill sizes="44px" className="object-cover object-top" />
                      </span>
                    )}
                    <span className="leading-tight">
                      <span className="block text-sm font-bold text-neutral-900">{especialista.nombre}</span>
                      <span className="block text-xs text-neutral-500">{especialista.tituloProfesional}</span>
                    </span>
                  </motion.div>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* ¿Qué tratamos? */}
      {servicio.condiciones && servicio.condiciones.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-neutral-900 mb-3">¿Qué tratamos?</h2>
              <p className="text-neutral-600 max-w-2xl mx-auto">
                Motivos de consulta frecuentes en {servicio.nombre.toLowerCase()}. Si no ves el tuyo, escríbenos y te orientamos.
              </p>
            </motion.div>
            <motion.ul
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
              variants={contenedor}
              initial="oculto"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
            >
              {servicio.condiciones.map((condicion) => (
                <motion.li
                  key={condicion}
                  variants={item}
                  className="group flex items-start gap-3 p-5 rounded-2xl bg-primary-50/50 border border-primary-100 hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <span className="w-8 h-8 rounded-lg bg-white text-primary-600 flex items-center justify-center shrink-0 shadow-sm group-hover:bg-primary-600 group-hover:text-white transition-colors">
                    <CheckCircle2 className="w-4 h-4" />
                  </span>
                  <span className="text-sm font-medium text-neutral-800 leading-snug">{condicion}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </section>
      )}

      {/* Beneficios */}
      <section className="py-20 section-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-neutral-900 mb-12 text-center"
          >
            Beneficios del tratamiento
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={contenedor}
            initial="oculto"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {servicio.beneficios.map((beneficio) => (
              <motion.div
                key={beneficio}
                variants={item}
                className="flex items-start gap-4 p-6 bg-white rounded-xl border border-neutral-100 shadow-sm card-hover"
              >
                <CheckCircle className="w-6 h-6 text-success shrink-0 mt-0.5" />
                <p className="text-neutral-700 font-medium">{beneficio}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tratamiento y duración */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: EASE }}
            >
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">¿Cómo es el tratamiento?</h2>
              <p className="text-neutral-600 leading-relaxed text-lg">{servicio.tratamiento}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: EASE }}
            >
              <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 shadow-sm border border-primary-100">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-primary-600" />
                  <h3 className="text-xl font-bold text-neutral-900">Duración del tratamiento</h3>
                </div>
                <p className="text-neutral-600 leading-relaxed">{servicio.duracion}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Especialista */}
      {especialista && (
        <section className="py-20 section-light">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: EASE }}
              className="bg-white rounded-3xl shadow-lg border border-neutral-100 overflow-hidden grid grid-cols-1 md:grid-cols-5"
            >
              {especialista.foto && (
                <div className="relative md:col-span-2 aspect-[4/5] md:aspect-auto min-h-[320px]">
                  <Image
                    src={especialista.foto}
                    alt={especialista.nombre}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover object-top"
                  />
                </div>
              )}
              <div className={`p-8 sm:p-10 ${especialista.foto ? "md:col-span-3" : "md:col-span-5"}`}>
                <p className="text-sm font-semibold text-primary-600 mb-1">Te atiende</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">{especialista.nombre}</h2>
                <p className="text-neutral-500 mb-4">{especialista.cargo}</p>
                <p className="text-neutral-600 leading-relaxed mb-6">{especialista.descripcion}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {especialista.especialidades.slice(0, 4).map((e) => (
                    <span key={e} className="text-xs bg-neutral-100 text-neutral-700 px-3 py-1 rounded-lg font-medium">
                      {e}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href={`/nosotros/${especialista.slug}`} className="btn-secondary justify-center">
                    Ver perfil completo
                  </Link>
                  <Link href={citaServicio} className="btn-primary justify-center">
                    <Calendar className="w-5 h-5" /> Agendar
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Preguntas frecuentes del servicio */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-neutral-900 mb-12 text-center">Preguntas frecuentes</h2>
          <div className="space-y-3">
            {servicio.faqs.map((faq, index) => {
              const abierta = openFaq === index;
              return (
                <motion.div
                  key={faq.pregunta}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className={`rounded-2xl border overflow-hidden transition-colors ${
                    abierta ? "border-primary-200 bg-primary-50/40" : "border-neutral-200 bg-white"
                  }`}
                >
                  <h3>
                    <button
                      onClick={() => setOpenFaq(abierta ? null : index)}
                      aria-expanded={abierta}
                      aria-controls={`servicio-faq-${index}`}
                      className="w-full flex items-center justify-between gap-4 p-6 text-left"
                    >
                      <span className="font-semibold text-neutral-800">{faq.pregunta}</span>
                      <motion.span
                        animate={{ rotate: abierta ? 45 : 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                          abierta ? "bg-primary-600 text-white" : "bg-primary-50 text-primary-600"
                        }`}
                      >
                        <Plus className="w-4 h-4" />
                      </motion.span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {abierta && (
                      <motion.div
                        id={`servicio-faq-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: EASE }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 text-neutral-600 leading-relaxed">{faq.respuesta}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Artículos relacionados */}
      {articulos.length > 0 && (
        <section className="py-20 section-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
              <h2 className="text-3xl font-bold text-neutral-900">Guías relacionadas</h2>
              <Link href="/blog" className="group inline-flex items-center gap-2 font-semibold text-primary-600 hover:text-primary-700">
                Ver el blog <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={contenedor}
              initial="oculto"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
            >
              {articulos.map((a) => (
                <motion.div key={a.slug} variants={item}>
                  <Link
                    href={`/blog/${a.slug}`}
                    className="group block h-full bg-white rounded-2xl overflow-hidden border border-neutral-100 shadow-sm card-hover"
                  >
                    <div className="relative h-44 overflow-hidden">
                      <Image
                        src={a.imagen}
                        alt=""
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-5">
                      <span className="text-xs font-semibold text-primary-600">
                        {a.categoria} · {a.tiempoLectura}
                      </span>
                      <h3 className="font-bold text-neutral-800 mt-1 line-clamp-2 group-hover:text-primary-600 transition-colors">
                        {a.titulo}
                      </h3>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Otras especialidades */}
      {otrasEspecialidades.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-8 text-center">Otras especialidades</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {otrasEspecialidades.map((o, i) => (
                <motion.div
                  key={o.slug}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, type: "spring", stiffness: 260, damping: 20 }}
                >
                  <Link
                    href={`/servicios/${o.slug}`}
                    className="group flex items-center gap-3 pl-2 pr-5 py-2 rounded-full bg-neutral-50 border border-neutral-200 hover:border-primary-300 hover:bg-primary-50 hover:-translate-y-0.5 transition-all"
                  >
                    {o.imagen && (
                      <span className="relative w-10 h-10 rounded-full overflow-hidden">
                        <Image src={o.imagen} alt="" fill sizes="40px" className="object-cover" />
                      </span>
                    )}
                    <span className="text-sm font-semibold text-neutral-800 group-hover:text-primary-700">{o.nombre}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="gradient-cta py-16 relative overflow-hidden">
        <motion.div
          aria-hidden
          className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/10 blur-3xl"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">¿Listo para dar el primer paso?</h2>
          <p className="text-lg text-primary-100 mb-8">
            Reserva tu evaluación de {servicio.nombre.toLowerCase()} a domicilio o en nuestra sede de {empresaInfo.distrito}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={citaServicio}
              className="inline-flex items-center justify-center gap-2 bg-white text-primary-700 font-semibold px-8 py-3 rounded-xl hover:bg-primary-50 hover:-translate-y-0.5 transition-all"
            >
              <Calendar className="w-5 h-5" />
              Reservar Cita
            </Link>
            <a
              href={whatsappServicio}
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
