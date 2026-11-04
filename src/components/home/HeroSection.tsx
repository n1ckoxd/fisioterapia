'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, type Variants } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { empresaInfo, servicios } from '@/lib/data';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

// =========================================================================
// 📸 CARRUSEL DE IMÁGENES DE FONDO (fácilmente reemplazables)
// Cada imagen rota automáticamente cada 6 segundos con un zoom lento.
// =========================================================================
export const heroImages = [
  { url: '/1.png', alt: 'Equipo de especialistas de FisioSphere en Lima' },
  { url: '/3.png', alt: 'Estimulación temprana con un bebé en una sesión de fisioterapia' },
  { url: '/2.png', alt: 'Terapia física y rehabilitación a domicilio en Lima' },
  { url: '/4.png', alt: 'Fisioterapia geriátrica para el adulto mayor a domicilio' },
];

const INTERVALO = 6000;
const EASE = [0.22, 1, 0.36, 1] as const;

const contenedor: Variants = {
  oculto: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item: Variants = {
  oculto: { opacity: 0, y: 24, filter: 'blur(6px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: EASE } },
};

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [reinicio, setReinicio] = useState(0);

  const irA = useCallback((index: number) => {
    setCurrentSlide((index + heroImages.length) % heroImages.length);
    setReinicio((r) => r + 1); // reinicia el temporizador tras una acción manual
  }, []);

  // Rotación automática; se pausa cuando la pestaña no está visible.
  useEffect(() => {
    const timer = setInterval(() => {
      if (document.visibilityState === 'visible') {
        setCurrentSlide((prev) => (prev + 1) % heroImages.length);
      }
    }, INTERVALO);
    return () => clearInterval(timer);
  }, [reinicio]);

  const stats = [
    { value: '+2000', label: 'Pacientes' },
    { value: '+5', label: 'Años de experiencia' },
    { value: '98%', label: 'Satisfacción' },
    { value: String(servicios.length), label: 'Servicios' },
  ];

  return (
    <motion.section
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden touch-pan-y"
      aria-label="Presentación"
      onPanEnd={(_, info) => {
        // Deslizar con el dedo cambia de imagen (solo gestos horizontales claros)
        if (Math.abs(info.offset.x) > 70 && Math.abs(info.offset.x) > Math.abs(info.offset.y)) {
          irA(currentSlide + (info.offset.x < 0 ? 1 : -1));
        }
      }}
    >
      {/* 1. Fondo: fundido cruzado con zoom lento (efecto Ken Burns) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {heroImages.map((image, index) => {
          const isActive = index === currentSlide;
          return (
            <motion.div
              key={image.url}
              className="absolute inset-0"
              initial={false}
              animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 1.12 }}
              transition={{
                opacity: { duration: 1.4, ease: 'easeInOut' },
                scale: isActive ? { duration: INTERVALO / 1000 + 1.5, ease: 'linear' } : { duration: 1.4 },
              }}
              aria-hidden={!isActive}
            >
              <Image
                src={image.url}
                alt={image.alt}
                fill
                priority={index === 0}
                className="object-cover object-center"
                sizes="100vw"
              />
            </motion.div>
          );
        })}
      </div>

      {/* 2. Capa oscura para que el texto resalte */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950/85 z-10" />
      <div aria-hidden className="pointer-events-none absolute -bottom-32 -left-24 w-[28rem] h-[28rem] rounded-full bg-primary-600/25 blur-3xl z-10" />
      <div aria-hidden className="pointer-events-none absolute -top-24 -right-24 w-[26rem] h-[26rem] rounded-full bg-teal-500/20 blur-3xl z-10" />

      {/* Flechas del carrusel */}
      <button
        onClick={() => irA(currentSlide - 1)}
        aria-label="Imagen anterior"
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-md border border-white/20 text-white items-center justify-center transition-all hover:scale-110 shadow-lg"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={() => irA(currentSlide + 1)}
        aria-label="Siguiente imagen"
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-md border border-white/20 text-white items-center justify-center transition-all hover:scale-110 shadow-lg"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* 3. Contenido central con entrada escalonada */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-20 relative pt-28 pb-14">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={contenedor}
          initial="oculto"
          animate="visible"
        >
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/25 text-teal-200 text-xs sm:text-sm font-semibold mb-6 shadow-lg shadow-black/20"
          >
            <span className="flex h-2 w-2 rounded-full bg-teal-400 animate-pulse" />
            <span>🏡 A domicilio en Lima · Sede en {empresaInfo.distrito}</span>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight leading-[1.08]"
          >
            Fisioterapia a Domicilio en{' '}
            <span className="hero-shine bg-gradient-to-r from-teal-300 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
              Lima
            </span>
            <span className="block text-2xl sm:text-3xl md:text-4xl font-bold text-white/90 mt-3">
              para bebés, niños y adultos mayores
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-base sm:text-lg md:text-xl text-neutral-200 mb-10 max-w-3xl mx-auto leading-relaxed font-normal"
          >
            Especialistas en{' '}
            <strong className="text-white font-semibold">estimulación temprana para bebés de 0 a 12 meses</strong>,
            fisioterapia pediátrica, geriátrica y psicología infantil. Llevamos la terapia a tu hogar para
            evitarte el tráfico y el estrés de Lima, o te atendemos en nuestra sede, previa cita.
          </motion.p>

          {/* Botones de acción */}
          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <Link
              href="/citas"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-white text-base md:text-lg bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-xl shadow-purple-900/40 hover:shadow-purple-700/60 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
            >
              <Calendar className="w-5 h-5 text-purple-200 group-hover:rotate-[-8deg] transition-transform" />
              <span>Reservar Cita</span>
            </Link>
            <a
              href={empresaInfo.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-white text-base md:text-lg bg-[#25D366] hover:bg-[#20BD5A] shadow-xl shadow-green-950/40 hover:shadow-green-600/60 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
            >
              <Image src="/whatt.png" alt="" width={26} height={26} className="w-6 h-6 object-contain" />
              <span>WhatsApp</span>
            </a>
          </motion.div>

          <motion.p variants={item} className="flex items-center justify-center gap-1.5 text-sm text-neutral-300 mb-8">
            <MapPin className="w-4 h-4 text-teal-300" />
            Sede: {empresaInfo.direccion}
          </motion.p>

          {/* Indicadores del carrusel con barra de progreso */}
          <motion.div variants={item} className="flex items-center justify-center gap-2 mb-10">
            {heroImages.map((img, idx) => (
              <button
                key={img.url}
                onClick={() => irA(idx)}
                aria-label={`Ver imagen ${idx + 1}`}
                aria-current={idx === currentSlide}
                className={`relative h-2.5 rounded-full overflow-hidden transition-all duration-300 ${
                  idx === currentSlide ? 'w-10 bg-white/25' : 'w-2.5 bg-white/40 hover:bg-white/70'
                }`}
              >
                {idx === currentSlide && (
                  <motion.span
                    key={`${currentSlide}-${reinicio}`}
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-teal-400 to-emerald-400"
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: INTERVALO / 1000, ease: 'linear' }}
                  />
                )}
              </button>
            ))}
          </motion.div>
        </motion.div>

        {/* 4. Tarjeta de estadísticas */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.75, ease: EASE }}
          className="w-full bg-white/95 backdrop-blur-xl border border-white/60 shadow-2xl rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center group md:border-r border-neutral-100 md:last:border-r-0">
                <p className="text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-indigo-600 mb-1.5 group-hover:scale-105 transition-transform">
                  <AnimatedCounter valor={stat.value} />
                </p>
                <p className="text-neutral-700 font-semibold text-xs sm:text-sm md:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
