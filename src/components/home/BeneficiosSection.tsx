'use client';

import { motion } from 'framer-motion';
import { Award, UserCheck, Cpu, TrendingUp, Heart, MapPin } from 'lucide-react';

const beneficios = [
  {
    icon: Award,
    title: 'Profesionales Certificados',
    description: 'Nuestro equipo cuenta con amplia formación y experiencia en diversas especialidades.'
  },
  {
    icon: UserCheck,
    title: 'Tratamiento Personalizado',
    description: 'Evaluamos cada caso de forma individual para ofrecer la mejor solución a tus necesidades.'
  },
  {
    icon: Cpu,
    title: 'Tecnología Avanzada',
    description: 'Disponemos de equipos de última generación para acelerar tu recuperación.'
  },
  {
    icon: TrendingUp,
    title: 'Resultados Probados',
    description: 'Miles de pacientes satisfechos avalan la eficacia de nuestros tratamientos.'
  },
  {
    icon: Heart,
    title: 'Atención Integral',
    description: 'Nos preocupamos por tu bienestar general, no solo por el síntoma.'
  },
  {
    icon: MapPin,
    title: 'Ubicación Céntrica',
    description: 'Instalaciones modernas y accesibles en el corazón de Lima.'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export default function BeneficiosSection() {
  return (
    <section className="py-20 section-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            ¿Por qué elegir <span className="text-primary-600">FisioSphere?</span>
          </motion.h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Nos distinguimos por nuestro compromiso con tu salud y bienestar, ofreciendo un servicio de excelencia.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {beneficios.map((beneficio, index) => (
            <motion.div key={index} variants={itemVariants} className="bg-white p-8 rounded-2xl shadow-sm card-hover border border-gray-100">
              <div className="w-14 h-14 bg-primary-50 text-primary-600 rounded-xl flex items-center justify-center mb-6">
                <beneficio.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{beneficio.title}</h3>
              <p className="text-gray-600">{beneficio.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
