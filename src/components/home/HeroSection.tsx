'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, MessageCircle } from 'lucide-react';
import { empresaInfo } from '@/lib/data';

export default function HeroSection() {
  const stats = [
    { value: '+2000', label: 'Pacientes' },
    { value: '+5', label: 'Años de Experiencia' },
    { value: '+98%', label: 'Satisfacción' },
    { value: '10', label: 'Servicios' }
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center gradient-hero overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float animation-delay-2000" />
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-800 text-sm font-semibold mb-6 border border-primary-200 shadow-sm"
          >
            <span className="flex h-2 w-2 rounded-full bg-primary-500 animate-pulse"></span>
            🏡 Servicio a Domicilio VIP & Consultorios Acondicionados en Lima
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight"
          >
            Fisioterapia Profesional en <span className="gradient-text">Lima</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Especialistas en <strong>fisioterapia pediátrica, geriátrica y terapia psicopedagógica</strong>. Llevamos la atención terapéutica directamente a tu hogar para evitarte el tráfico y estrés de traslados, o te atendemos en consultorios acondicionados en puntos céntricos previa cita.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/citas" className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2 text-lg px-8 py-4">
              <Calendar size={24} />
              Reservar Cita
            </Link>
            <a href={empresaInfo.whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-whatsapp w-full sm:w-auto flex items-center justify-center gap-2 text-lg px-8 py-4">
              <MessageCircle size={24} />
              WhatsApp
            </a>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 glass rounded-2xl p-8 max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <h3 className="text-4xl font-bold text-primary-600 mb-2">{stat.value}</h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
