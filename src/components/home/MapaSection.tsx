'use client';

import { motion } from 'framer-motion';
import { Home as HomeIcon, Building2, MapPin, MessageCircle, Clock, CheckCircle2, Navigation, Phone } from 'lucide-react';
import { empresaInfo } from '@/lib/data';

const EASE = [0.22, 1, 0.36, 1] as const;

export default function MapaSection() {
  const distritos = empresaInfo.distritosCobertura;

  return (
    <section className="py-20 bg-white" id="cobertura" aria-labelledby="cobertura-titulo">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-100 text-primary-800 text-sm font-semibold mb-4">
            <MapPin size={16} /> Cobertura y modalidades
          </span>
          <h2 id="cobertura-titulo" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            ¿Cómo y dónde te atendemos en <span className="gradient-text">Lima</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nos adaptamos a tu familia: terapia a domicilio en tu hogar o en nuestra sede de {empresaInfo.distrito}, previa cita.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-7xl mx-auto items-stretch">
          <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
            {/* A domicilio */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: EASE }}
              className="p-6 sm:p-8 bg-gradient-to-br from-primary-50/70 to-white rounded-3xl border border-primary-100 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-500 text-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md">
                  <HomeIcon size={24} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <h3 className="text-xl font-bold text-gray-900">Fisioterapia a domicilio</h3>
                    <span className="bg-accent/20 text-teal-800 text-xs font-bold px-2.5 py-0.5 rounded-full">Más solicitado</span>
                  </div>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-3">
                    Pensado para <strong>padres con bebés y niños pequeños</strong> y <strong>familiares de adultos mayores</strong>.
                    Evitas el tráfico y el estrés del traslado: vamos a tu casa con todo el material necesario.
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-primary-700">
                    <span className="inline-flex items-center gap-1"><CheckCircle2 size={14} /> Sin desplazamientos</span>
                    <span className="inline-flex items-center gap-1"><CheckCircle2 size={14} /> Equipamiento completo</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Sede */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
              className="p-6 sm:p-8 bg-neutral-50 rounded-3xl border border-neutral-200/80 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white text-neutral-800 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm border border-neutral-200">
                  <Building2 size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Sede en {empresaInfo.distrito}</h3>
                  <address className="not-italic text-gray-700 font-medium">{empresaInfo.calle}, {empresaInfo.distrito}, Lima</address>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mt-1">
                    Consultorio privado y equipado, con atención previa cita.
                  </p>
                  <a
                    href={empresaInfo.googleMapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 hover:text-primary-700"
                  >
                    <Navigation size={15} /> Cómo llegar
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Distritos */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
              className="p-6 bg-white rounded-3xl border border-neutral-100 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <MapPin size={18} className="text-primary-600" />
                <h3 className="font-bold text-gray-900 text-sm">Distritos donde atendemos a domicilio:</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {distritos.map((distrito, i) => (
                  <motion.li
                    key={distrito}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.04, type: 'spring', stiffness: 300, damping: 20 }}
                    className="bg-neutral-100 hover:bg-primary-50 hover:text-primary-700 text-neutral-700 text-xs font-medium px-3 py-1.5 rounded-xl transition-colors"
                  >
                    {distrito}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* WhatsApp */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a
                href={empresaInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full justify-center gap-3 py-4 text-base sm:text-lg shadow-lg hover:shadow-xl"
              >
                <MessageCircle size={22} />
                Coordinar cita a domicilio o en sede
              </a>
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 mt-3 text-xs text-gray-500">
                <span className="inline-flex items-center gap-1"><Clock size={14} /> {empresaInfo.horario}</span>
                <a href={`tel:${empresaInfo.telefonoTel}`} className="inline-flex items-center gap-1 hover:text-primary-600">
                  <Phone size={14} /> {empresaInfo.telefonoDisplay}
                </a>
              </div>
            </motion.div>
          </div>

          {/* Mapa */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: EASE }}
            className="lg:col-span-6 h-[460px] lg:h-auto min-h-[420px] w-full rounded-3xl overflow-hidden shadow-lg border border-gray-200 relative"
          >
            <iframe
              src={empresaInfo.googleMapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Mapa de la sede de FisioSphere en ${empresaInfo.direccion}`}
            />
            <div className="absolute top-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-md border border-neutral-200 text-sm">
              <div className="flex items-center gap-2 mb-1">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-success opacity-60 animate-ping" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-success" />
                </span>
                <span className="font-bold text-neutral-900">{empresaInfo.nombre} · {empresaInfo.distrito}</span>
              </div>
              <p className="text-xs text-neutral-600">{empresaInfo.direccion} · Atención a domicilio en toda Lima.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
