"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Award,
  Users,
  Heart,
  Target,
  Shield,
  GraduationCap,
  MessageCircle,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import type { MiembroEquipo } from "@/lib/data";

interface NosotrosContentProps {
  equipo: MiembroEquipo[];
  empresaInfo: {
    nombre: string;
    nombreCompleto: string;
    eslogan: string;
    whatsappLink?: string;
  };
}

const valores = [
  {
    icon: Heart,
    titulo: "Pasión por la salud",
    descripcion:
      "Cada paciente es nuestra prioridad. Nos dedicamos con empatía y vocación a mejorar tu calidad de vida.",
  },
  {
    icon: GraduationCap,
    titulo: "Formación continua",
    descripcion:
      "Nos mantenemos en constante actualización para ofrecer las técnicas más avanzadas y eficaces.",
  },
  {
    icon: Target,
    titulo: "Tratamiento personalizado",
    descripcion:
      "Diseñamos un plan terapéutico único para cada paciente, adaptado a sus objetivos y estilo de vida.",
  },
  {
    icon: Shield,
    titulo: "Ética y transparencia",
    descripcion:
      "Te explicamos cada paso del tratamiento con honestidad, estableciendo expectativas realistas.",
  },
  {
    icon: Award,
    titulo: "Calidad y calidez",
    descripcion:
      "Buscamos la excelencia en cada sesión, combinando rigor científico con cercanía y calidez humana.",
  },
  {
    icon: Users,
    titulo: "Enfoque integral",
    descripcion:
      "Abordamos la salud física y emocional de forma conjunta para lograr una recuperación completa.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function NosotrosContent({
  equipo,
  empresaInfo,
}: NosotrosContentProps) {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-100 text-primary-800 text-sm font-semibold mb-4 shadow-sm">
              <Sparkles size={16} className="text-primary-600" />
              <span>Vocación, Ciencia y Amor</span>
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Conoce a <span className="gradient-text">{empresaInfo.nombre}</span>
            </h1>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Somos un equipo multidisciplinario de fisioterapeutas y psicólogos comprometidos con el bienestar de tu familia. Brindamos atención personalizada a domicilio y en consultorios acondicionados en Lima.
            </p>
          </motion.div>
        </div>
      </section>

      {/* NUEVO: Equipo Destacado al Principio */}
      <section className="py-20 bg-white border-b border-neutral-100" id="especialistas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary-600 font-bold text-sm uppercase tracking-wider block mb-2">
              Nuestros Especialistas
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
              Profesionales Comprometidos con tu Recuperación
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto text-base sm:text-lg">
              Conoce a los licenciados que cuidarán de ti y de tus seres queridos con calidez humana y rigor clínico.
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {equipo.map((miembro) => (
              <motion.div
                key={miembro.nombre}
                variants={itemVariants}
                className="bg-white rounded-3xl overflow-hidden shadow-lg border border-neutral-200/80 card-hover flex flex-col justify-between"
              >
                <div>
                  {/* Foto del especialista con enlace */}
                  <Link
                    href={`/nosotros/${miembro.slug}`}
                    className="relative w-full aspect-[4/5] bg-neutral-100 overflow-hidden block group cursor-pointer"
                    title={`Ver perfil completo de ${miembro.nombre}`}
                  >
                    {miembro.foto ? (
                      <Image
                        src={miembro.foto}
                        alt={miembro.nombre}
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-primary-100 text-primary-600 text-4xl font-bold">
                        {miembro.nombre.slice(0, 2)}
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-6 text-white">
                      {miembro.modalidades && (
                        <div className="flex gap-2 flex-wrap mb-2">
                          {miembro.modalidades.map((m) => (
                            <span
                              key={m}
                              className="bg-white/95 text-neutral-900 text-[11px] font-bold px-2.5 py-0.5 rounded-full backdrop-blur-sm"
                            >
                              {m}
                            </span>
                          ))}
                        </div>
                      )}
                      <h3 className="text-2xl font-bold leading-tight drop-shadow-sm group-hover:text-primary-300 transition-colors">
                        {miembro.nombre}
                      </h3>
                      <p className="text-primary-200 text-sm font-medium drop-shadow-sm">
                        {miembro.cargo}
                      </p>
                      <span className="text-[11px] font-bold text-white/90 inline-flex items-center gap-1 mt-2 group-hover:translate-x-1 transition-transform">
                        Ver perfil completo <ArrowRight size={12} />
                      </span>
                    </div>
                  </Link>

                  {/* Cuerpo de la tarjeta */}
                  <div className="p-6 sm:p-7">
                    {miembro.frase && (
                      <blockquote className="text-xs font-semibold text-primary-700 bg-primary-50/80 border-l-4 border-primary-500 px-3 py-2 rounded-r-xl mb-4 italic">
                        &ldquo;{miembro.frase}&rdquo;
                      </blockquote>
                    )}
                    <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                      {miembro.descripcion}
                    </p>

                    <div className="mb-6">
                      <span className="text-xs font-bold text-neutral-800 uppercase tracking-wider block mb-2">
                        Áreas de Enfoque:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {miembro.especialidades.map((esp) => (
                          <span
                            key={esp}
                            className="text-xs bg-neutral-100 text-neutral-700 px-3 py-1 rounded-lg font-medium"
                          >
                            {esp}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Botones de acción */}
                <div className="p-6 pt-0 space-y-2.5">
                  <Link
                    href={`/nosotros/${miembro.slug}`}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-bold text-xs bg-primary-50 text-primary-700 hover:bg-primary-100 transition-colors"
                  >
                    Conoce más sobre su enfoque <ArrowRight size={14} />
                  </Link>
                  <a
                    href={`https://wa.me/51950332639?text=Hola%20FisioSphere,%20quisiera%20agendar%20una%20cita%20con%20${encodeURIComponent(
                      miembro.nombre
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all"
                  >
                    <MessageCircle size={18} />
                    Agendar Cita con {miembro.nombre.split(" ")[1] || miembro.nombre}
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Historia */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">
                Nuestra Misión
              </h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  <strong>{empresaInfo.nombreCompleto}</strong> nació con una misión clara: ofrecer fisioterapia y atención psicológica de calidad, personalizada y basada en la evidencia científica.
                </p>
                <p>
                  Sabemos lo complejo que es trasladar a un adulto mayor con dolor o a un niño pequeño por el intenso tráfico de Lima. Por eso desarrollamos nuestro <strong>Servicio a Domicilio VIP</strong> y nuestros <strong>consultorios acondicionados en puntos céntricos</strong> previa cita.
                </p>
                <p>
                  Nos guiamos por el principio de <em>&ldquo;con amor y ciencia&rdquo;</em>, garantizando que cada sesión sea cercana, motivadora y orientada a resultados reales y duraderos.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="bg-white rounded-3xl p-8 text-center shadow-sm border border-neutral-200">
                <div className="text-4xl font-bold text-primary-600 mb-2">+2000</div>
                <div className="text-neutral-600 font-medium">Pacientes Atendidos</div>
              </div>
              <div className="bg-white rounded-3xl p-8 text-center shadow-sm border border-neutral-200">
                <div className="text-4xl font-bold text-primary-600 mb-2">5</div>
                <div className="text-neutral-600 font-medium">Años de Experiencia</div>
              </div>
              <div className="bg-white rounded-3xl p-8 text-center shadow-sm border border-neutral-200">
                <div className="text-4xl font-bold text-primary-600 mb-2">98%</div>
                <div className="text-neutral-600 font-medium">Satisfacción</div>
              </div>
              <div className="bg-white rounded-3xl p-8 text-center shadow-sm border border-neutral-200">
                <div className="text-4xl font-bold text-primary-600 mb-2">3</div>
                <div className="text-neutral-600 font-medium">Especialistas Clave</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Nuestros Valores
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Los principios que guían nuestro trabajo diario con cada paciente y familia.
            </p>
          </div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {valores.map((valor) => (
              <motion.div
                key={valor.titulo}
                variants={itemVariants}
                className="bg-neutral-50 rounded-2xl p-8 shadow-sm card-hover border border-neutral-100"
              >
                <div className="w-14 h-14 rounded-xl bg-primary-100 flex items-center justify-center mb-5">
                  <valor.icon className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-neutral-800 mb-3">
                  {valor.titulo}
                </h3>
                <p className="text-neutral-500 leading-relaxed text-sm">
                  {valor.descripcion}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
