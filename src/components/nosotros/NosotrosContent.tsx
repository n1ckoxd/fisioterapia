"use client";

import { motion } from "framer-motion";
import {
  Award,
  Users,
  Heart,
  Target,
  Shield,
  GraduationCap,
} from "lucide-react";
import type { MiembroEquipo } from "@/lib/data";

interface NosotrosContentProps {
  equipo: MiembroEquipo[];
  empresaInfo: {
    nombre: string;
    nombreCompleto: string;
    eslogan: string;
  };
}

const valores = [
  {
    icon: Heart,
    titulo: "Pasión por la salud",
    descripcion:
      "Cada paciente es nuestra prioridad. Nos dedicamos con pasión a mejorar tu calidad de vida.",
  },
  {
    icon: Award,
    titulo: "Excelencia profesional",
    descripcion:
      "Formación continua y las técnicas más avanzadas para ofrecerte los mejores resultados.",
  },
  {
    icon: Users,
    titulo: "Atención personalizada",
    descripcion:
      "Cada persona es única. Diseñamos planes de tratamiento adaptados a tus necesidades.",
  },
  {
    icon: Target,
    titulo: "Resultados medibles",
    descripcion:
      "Establecemos objetivos claros y realizamos un seguimiento continuo de tu evolución.",
  },
  {
    icon: Shield,
    titulo: "Confianza y transparencia",
    descripcion:
      "Te informamos en todo momento sobre tu diagnóstico, tratamiento y evolución.",
  },
  {
    icon: GraduationCap,
    titulo: "Formación continua",
    descripcion:
      "Nuestro equipo se actualiza constantemente con los últimos avances en fisioterapia.",
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
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
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Conoce a <span className="gradient-text">{empresaInfo.nombre}</span>
            </h1>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Somos un equipo de fisioterapeutas apasionados por la salud y el
              bienestar. Con más de 15 años de experiencia, nos dedicamos a
              ayudar a nuestros pacientes a recuperar su calidad de vida
              mediante tratamientos personalizados y basados en la evidencia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Historia */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">
                Nuestra Historia
              </h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  {empresaInfo.nombreCompleto} nació en 2009 con una misión
                  clara: ofrecer fisioterapia de calidad, personalizada y
                  basada en la última evidencia científica.
                </p>
                <p>
                  Desde entonces, hemos atendido a más de 2.000 pacientes,
                  ayudándoles a superar lesiones, dolor crónico y problemas
                  musculoesqueléticos. Nuestro compromiso con la excelencia nos
                  ha permitido crecer y convertirnos en una referencia en
                  fisioterapia en Lima.
                </p>
                <p>
                  Hoy contamos con un equipo multidisciplinar de
                  fisioterapeutas especializados, equipos de última generación y
                  unas instalaciones modernas y acogedoras diseñadas para tu
                  comodidad.
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
              <div className="bg-primary-50 rounded-2xl p-8 text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  +2000
                </div>
                <div className="text-neutral-600 font-medium">Pacientes</div>
              </div>
              <div className="bg-primary-50 rounded-2xl p-8 text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  +15
                </div>
                <div className="text-neutral-600 font-medium">
                  Años de experiencia
                </div>
              </div>
              <div className="bg-primary-50 rounded-2xl p-8 text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  98%
                </div>
                <div className="text-neutral-600 font-medium">
                  Satisfacción
                </div>
              </div>
              <div className="bg-primary-50 rounded-2xl p-8 text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  10
                </div>
                <div className="text-neutral-600 font-medium">Servicios</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="section-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Nuestros Valores
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Los principios que guían nuestro trabajo diario y nos permiten
              ofrecer la mejor atención a cada paciente.
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
                className="bg-white rounded-2xl p-8 shadow-sm card-hover"
              >
                <div className="w-14 h-14 rounded-xl bg-primary-50 flex items-center justify-center mb-5">
                  <valor.icon className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-neutral-800 mb-3">
                  {valor.titulo}
                </h3>
                <p className="text-neutral-500 leading-relaxed">
                  {valor.descripcion}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Equipo */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Nuestro Equipo
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Profesionales cualificados y apasionados por la fisioterapia,
              comprometidos con tu recuperación.
            </p>
          </div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {equipo.map((miembro) => (
              <motion.div
                key={miembro.nombre}
                variants={itemVariants}
                className="bg-white rounded-2xl overflow-hidden shadow-sm card-hover border border-neutral-100"
              >
                <div className="h-3 bg-gradient-to-r from-primary-500 to-primary-600" />
                <div className="p-8">
                  <div className="w-20 h-20 rounded-full bg-primary-100 flex items-center justify-center mb-6 mx-auto">
                    <span className="text-2xl font-bold text-primary-600">
                      {miembro.nombre
                        .split(" ")
                        .map((n) => n[0])
                        .slice(0, 2)
                        .join("")}
                    </span>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-neutral-800 mb-1">
                      {miembro.nombre}
                    </h3>
                    <p className="text-primary-600 font-medium mb-4">
                      {miembro.cargo}
                    </p>
                    <p className="text-neutral-500 text-sm leading-relaxed mb-4">
                      {miembro.descripcion}
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {miembro.especialidades.map((esp) => (
                        <span
                          key={esp}
                          className="text-xs bg-primary-50 text-primary-700 px-3 py-1 rounded-full font-medium"
                        >
                          {esp}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
