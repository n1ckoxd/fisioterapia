'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { empresaInfo } from '@/lib/data';

// =========================================================================
// 📸 CARRUSEL DE IMÁGENES DE FONDO (Fácilmente reemplazables)
// Puedes cambiar o añadir URLs en este array en cualquier momento.
// Cada imagen rota automáticamente cada 5 segundos.
// =========================================================================
export const heroImages = [
  {
    url: '/1.png',
    alt: 'Equipo de Especialistas FisioSphere en Lima',
  },
  {
    url: '/2.png',
    alt: 'Terapia Física y Rehabilitación a Domicilio en Lima',
  },
  {
    url: '/3.png',
    alt: 'Fisioterapia Pediátrica y Estimulación Temprana',
  },
  {
    url: '/4.png',
    alt: 'Fisioterapia Geriátrica y Adulto Mayor a Domicilio',
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Rotación automática cada 5 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const stats = [
    { value: '+2000', label: 'Pacientes' },
    { value: '+5', label: 'Años de Experiencia' },
    { value: '+98%', label: 'Satisfacción' },
    { value: '10', label: 'Servicios' },
  ];

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
      {/* =========================================================================
          1. FONDO ROTATIVO (CARRUSEL DE IMÁGENES GRANDES)
          Adaptable sin deformarse con object-cover y object-center
         ========================================================================= */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {heroImages.map((image, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={image.url}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10 scale-105' : 'opacity-0 z-0 scale-100'
              } transition-transform duration-[7000ms]`}
            >
              <Image
                src={image.url}
                alt={image.alt}
                fill
                priority={index === 0}
                className="w-full h-full object-cover object-center"
                sizes="100vw"
              />
            </div>
          );
        })}
      </div>

      {/* =========================================================================
          2. OVERLAY (CAPA OSCURA SEMITRANSPARENTE)
          Permite que el texto blanco, gradientes y botones resalten con total nitidez
         ========================================================================= */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/65 to-slate-950/85 z-10" />

      {/* Botones de navegación manual del carrusel (ocultos en pantallas muy pequeñas) */}
      <button
        onClick={prevSlide}
        aria-label="Imagen anterior"
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-md border border-white/20 text-white items-center justify-center transition-all hover:scale-110 shadow-lg"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        aria-label="Siguiente imagen"
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-md border border-white/20 text-white items-center justify-center transition-all hover:scale-110 shadow-lg"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* =========================================================================
          3. CONTENIDO CENTRAL
          Texto centrado, título con gradiente en 'Lima', botones de acción y estadísticas
         ========================================================================= */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-20 relative pt-28 pb-14">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge de servicio VIP */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/25 text-teal-200 text-xs sm:text-sm font-semibold mb-6 shadow-lg shadow-black/20"
          >
            <span className="flex h-2 w-2 rounded-full bg-teal-400 animate-pulse" />
            <span>🏡 Servicio a Domicilio VIP & Consultorios Acondicionados en Lima</span>
          </motion.div>

          {/* Título Principal con gradiente en "Lima" */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight leading-[1.12]"
          >
            Fisioterapia Profesional en{' '}
            <span className="bg-gradient-to-r from-teal-300 via-cyan-400 to-emerald-300 bg-clip-text text-transparent drop-shadow-sm">
              Lima
            </span>
          </motion.h1>

          {/* Subtítulo descriptivo */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-neutral-200 mb-10 max-w-3xl mx-auto leading-relaxed font-normal"
          >
            Especialistas en{' '}
            <strong className="text-white font-semibold">
              fisioterapia pediátrica, geriátrica y terapia psicopedagógica
            </strong>
            . Llevamos la atención terapéutica personalizada a la comodidad de tu hogar para
            evitarte el tráfico y estrés de Lima, o te atendemos en consultorios acondicionados en
            puntos céntricos previa cita.
          </motion.p>

          {/* =========================================================================
              4. BOTONES DE ACCIÓN (Morado para Reservar Cita, Verde para WhatsApp)
             ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          >
            {/* Botón Morado: Reservar Cita */}
            <Link
              href="/citas"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-white text-base md:text-lg bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-xl shadow-purple-900/40 hover:shadow-purple-700/60 transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
            >
              <Calendar className="w-5 h-5 text-purple-200" />
              <span>Reservar Cita</span>
            </Link>

            {/* Botón Verde: WhatsApp con icono whatt.png */}
            <a
              href={empresaInfo.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-white text-base md:text-lg bg-[#25D366] hover:bg-[#20BD5A] shadow-xl shadow-green-950/40 hover:shadow-green-600/60 transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
            >
              <Image
                src="/whatt.png"
                alt="WhatsApp"
                width={26}
                height={26}
                className="w-6 h-6 object-contain"
              />
              <span>WhatsApp</span>
            </a>
          </motion.div>

          {/* Indicadores de diapositiva (dots) */}
          <div className="flex items-center justify-center gap-2 mb-10">
            {heroImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                aria-label={`Ver imagen ${idx + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  idx === currentSlide
                    ? 'w-8 h-2.5 bg-gradient-to-r from-teal-400 to-emerald-400'
                    : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>

        {/* =========================================================================
            5. TARJETA DE ESTADÍSTICAS (SUPERPUESTA CON EFECTO GLASSMORPHISM)
            Contiene los 4 datos clave: +2000 Pacientes, +5 Años, +98% Satisfacción, 10 Servicios
           ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-full bg-white/95 backdrop-blur-xl border border-white/60 shadow-2xl rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group border-r border-neutral-100 last:border-r-0"
              >
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-indigo-600 mb-1.5 group-hover:scale-105 transition-transform">
                  {stat.value}
                </h3>
                <p className="text-neutral-700 font-semibold text-xs sm:text-sm md:text-base">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
