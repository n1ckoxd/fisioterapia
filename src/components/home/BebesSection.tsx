'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Baby, CheckCircle2, AlertTriangle, ArrowRight, Home as HomeIcon } from 'lucide-react';
import { empresaInfo } from '@/lib/data';

// Hitos motores orientativos por etapa (cada bebé tiene su ritmo;
// en prematuros se usa la edad corregida).
const etapas = [
  {
    rango: '0 a 3 meses',
    titulo: 'Control de cabeza',
    emoji: '👶',
    hitos: [
      'Levanta la cabeza cuando está boca abajo (tummy time)',
      'Sigue con la mirada objetos y rostros',
      'Abre y cierra las manos, se las lleva a la boca',
      'Responde con sonrisas a la voz de mamá y papá',
    ],
    alertas: [
      'Siempre gira la cabeza hacia el mismo lado',
      'Cabeza aplanada en la parte de atrás o de un lado',
      'Manos casi siempre cerradas en puño',
    ],
  },
  {
    rango: '4 a 6 meses',
    titulo: 'Giros y apoyo',
    emoji: '🤸',
    hitos: [
      'Se apoya en antebrazos y luego en manos boca abajo',
      'Rueda de boca arriba a boca abajo y viceversa',
      'Agarra juguetes con ambas manos',
      'Se sienta con apoyo y mantiene el tronco',
    ],
    alertas: [
      'A los 4 meses aún no sostiene bien la cabeza',
      'No rueda hacia ningún lado a los 6 meses',
      'Se siente muy rígido o muy "flojito"',
    ],
  },
  {
    rango: '7 a 9 meses',
    titulo: 'Sentarse y arrastrarse',
    emoji: '🧸',
    hitos: [
      'Se sienta solo sin apoyo',
      'Se arrastra o empieza a gatear',
      'Pasa objetos de una mano a la otra',
      'Soporta peso en las piernas cuando lo sostienes',
    ],
    alertas: [
      'No se sienta sin ayuda a los 9 meses',
      'Usa mucho más un lado del cuerpo que el otro',
      'No intenta desplazarse de ninguna forma',
    ],
  },
  {
    rango: '10 a 12 meses',
    titulo: 'Gateo y primeros pasos',
    emoji: '👣',
    hitos: [
      'Gatea con coordinación de brazos y piernas',
      'Se pone de pie apoyándose en muebles',
      'Camina de lado sujetándose (marcha lateral)',
      'Hace pinza con el pulgar y el índice',
    ],
    alertas: [
      'No gatea ni se desplaza a los 12 meses',
      'No se pone de pie con apoyo',
      'Camina o se para siempre en puntitas',
    ],
  },
];

export default function BebesSection() {
  const [activa, setActiva] = useState(0);
  const etapa = etapas[activa];

  return (
    <section
      id="bebes"
      className="relative py-20 overflow-hidden bg-gradient-to-b from-primary-50/60 via-white to-white"
      aria-labelledby="bebes-titulo"
    >
      {/* Burbujas decorativas animadas */}
      <div aria-hidden className="pointer-events-none absolute -top-10 -left-10 w-64 h-64 rounded-full bg-primary-200/40 blur-3xl animate-float" />
      <div aria-hidden className="pointer-events-none absolute top-1/3 -right-16 w-72 h-72 rounded-full bg-teal-200/40 blur-3xl animate-float [animation-delay:1.5s]" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Imagen + tarjetas flotantes */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-square sm:aspect-[4/3] lg:aspect-square rounded-[2rem] overflow-hidden shadow-2xl shadow-primary-900/20 ring-8 ring-white">
              <Image
                src="/bebe-desarrollo-motor-0-12-meses.jpg"
                alt="Fisioterapeuta de FisioSphere sonriendo a un bebé sentado durante una sesión de desarrollo motor y atención temprana"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-[center_30%]"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-6 left-4 sm:left-6 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 animate-float"
            >
              <span className="w-10 h-10 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center">
                <HomeIcon className="w-5 h-5" />
              </span>
              <div className="leading-tight">
                <p className="text-sm font-bold text-neutral-900">A domicilio</p>
                <p className="text-xs text-neutral-500">Sin tráfico ni estrés para tu bebé</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 animate-float [animation-delay:1s]"
            >
              <span className="w-10 h-10 rounded-xl bg-teal-100 text-teal-600 flex items-center justify-center">
                <Baby className="w-5 h-5" />
              </span>
              <div className="leading-tight">
                <p className="text-sm font-bold text-neutral-900">0 a 12 meses</p>
                <p className="text-xs text-neutral-500">Nuestra especialidad</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Texto + línea de tiempo interactiva */}
          <div className="lg:col-span-7">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-4"
            >
              <Baby className="w-4 h-4" /> Especialistas en bebés
            </motion.span>
            <motion.h2
              id="bebes-titulo"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight leading-tight mb-4"
            >
              Desarrollo motor y atención temprana para{' '}
              <span className="gradient-text">bebés de 0 a 12 meses</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-neutral-600 text-base sm:text-lg leading-relaxed mb-8"
            >
              El primer año es la etapa de mayor plasticidad cerebral. Revisa los hitos de tu bebé:
              si notas alguna señal de alerta, una evaluación a tiempo marca la diferencia.
            </motion.p>

            {/* Pestañas por etapa */}
            <div role="tablist" aria-label="Etapas del desarrollo del bebé" className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
              {etapas.map((e, i) => (
                <button
                  key={e.rango}
                  role="tab"
                  id={`tab-etapa-${i}`}
                  aria-selected={activa === i}
                  aria-controls="panel-etapa"
                  onClick={() => setActiva(i)}
                  className={`relative rounded-2xl px-3 py-3 text-left transition-colors border ${
                    activa === i
                      ? 'text-white border-transparent'
                      : 'bg-white text-neutral-700 border-neutral-200 hover:border-primary-300'
                  }`}
                >
                  {activa === i && (
                    <motion.span
                      layoutId="etapa-activa"
                      className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500 to-purple-600 shadow-lg shadow-primary-500/30"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative block text-lg leading-none mb-1">{e.emoji}</span>
                  <span className="relative block text-sm font-bold">{e.rango}</span>
                  <span className={`relative block text-xs ${activa === i ? 'text-white/80' : 'text-neutral-500'}`}>{e.titulo}</span>
                </button>
              ))}
            </div>

            <div id="panel-etapa" role="tabpanel" aria-labelledby={`tab-etapa-${activa}`} className="min-h-[260px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={etapa.rango}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                  <div className="bg-white rounded-2xl p-5 border border-neutral-100 shadow-sm">
                    <h3 className="font-bold text-neutral-900 mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-success" /> Lo esperado
                    </h3>
                    <ul className="space-y-2">
                      {etapa.hitos.map((h, i) => (
                        <motion.li
                          key={h}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.05 * i }}
                          className="text-sm text-neutral-600 flex gap-2"
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-success shrink-0" />
                          {h}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-amber-50/70 rounded-2xl p-5 border border-amber-100">
                    <h3 className="font-bold text-neutral-900 mb-3 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-warning" /> Señales para consultar
                    </h3>
                    <ul className="space-y-2">
                      {etapa.alertas.map((a, i) => (
                        <motion.li
                          key={a}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.05 * i + 0.1 }}
                          className="text-sm text-neutral-700 flex gap-2"
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-warning shrink-0" />
                          {a}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </AnimatePresence>
              <p className="text-xs text-neutral-400 mt-3">
                Hitos orientativos: cada bebé tiene su ritmo. En bebés prematuros se considera la edad corregida.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <Link
                href="/servicios/fisioterapia-bebes-estimulacion-temprana"
                className="btn-primary justify-center"
              >
                Ver desarrollo motor y atención temprana <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`https://wa.me/${empresaInfo.whatsapp}?text=${encodeURIComponent('Hola, quiero una evaluación de estimulación temprana para mi bebé')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp justify-center"
              >
                Pedir evaluación por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
