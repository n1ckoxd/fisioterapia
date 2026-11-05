'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Home as HomeIcon, ArrowRight } from 'lucide-react';
import { empresaInfo } from '@/lib/data';

interface EspecialidadItem {
  titulo: string;
  subtitulo: string;
  imagen: string;
  link: string;
  slug: string;
}

const especialidades: EspecialidadItem[] = [
  {
    titulo: 'Desarrollo Motor y Atención Temprana',
    subtitulo: 'Bebés de 0 a 12 meses: tortícolis, plagiocefalia, displasia de cadera y prematuros',
    imagen: '/bebe-desarrollo-motor-0-12-meses.jpg',
    link: '/servicios/fisioterapia-bebes-estimulacion-temprana',
    slug: 'fisioterapia-bebes-estimulacion-temprana',
  },
  {
    titulo: 'Fisioterapia Neurológica Pediátrica',
    subtitulo: 'Niños de 0 a 14 años: PCI, autismo (TEA), displasia de cadera y retraso motor',
    imagen: '/pediatrico.png',
    link: '/servicios/fisioterapia-pediatrica',
    slug: 'fisioterapia-pediatrica',
  },
  {
    titulo: 'Fisioterapia Geriátrica',
    subtitulo: 'Movilidad, equilibrio y prevención de caídas en el adulto mayor',
    imagen: '/geriatrico_nuevo.png',
    link: '/servicios/fisioterapia-geriatrica',
    slug: 'fisioterapia-geriatrica',
  },
  {
    titulo: 'Terapia Psicopedagógica',
    subtitulo: 'Dificultades de aprendizaje, TDAH y estimulación cognitiva',
    imagen: '/psicopedagogia.png',
    link: '/servicios/terapia-psicopedagogica',
    slug: 'terapia-psicopedagogica',
  },
  {
    titulo: 'Fisioterapia Traumatológica',
    subtitulo: 'Recuperación de lesiones, fracturas, esguinces y post-operatorios',
    imagen: '/traumatologia.png',
    link: '/servicios/fisioterapia-traumatologica',
    slug: 'fisioterapia-traumatologica',
  },
  {
    titulo: 'Fisioterapia Neurológica en Adultos',
    subtitulo: 'Rehabilitación tras ACV, Parkinson, neuropatías y movilidad',
    imagen: '/neurologico.png',
    link: '/servicios/fisioterapia-neurologica',
    slug: 'fisioterapia-neurologica',
  },
];

export default function EspecialidadesCircularesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-cyan-50/20 to-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabecera con casita (Atención a domicilio & consultorios) */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#00A8E8] tracking-tight mb-3"
          >
            Especialidades
          </motion.h2>

          {/* Divisor con casita centrado (Estilo Referencia) */}
          <div className="flex items-center justify-center gap-3 my-4">
            <div className="h-0.5 w-16 sm:w-24 bg-[#00A8E8]" />
            <div className="w-8 h-8 rounded-full border-2 border-[#00A8E8] flex items-center justify-center text-[#00A8E8] bg-white shadow-sm">
              <HomeIcon className="w-4 h-4" />
            </div>
            <div className="h-0.5 w-16 sm:w-24 bg-[#00A8E8]" />
          </div>

          <p className="text-neutral-600 text-base sm:text-lg mt-2">
            Tratamientos personalizados en la comodidad de tu hogar o en nuestra sede de {empresaInfo.distrito}, Lima.
          </p>
        </div>

        {/* Círculos de especialidades centrados y balanceados */}
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-10 sm:gap-10 md:gap-14 max-w-6xl mx-auto">
          {especialidades.map((item, index) => (
            <motion.div
              key={item.titulo}
              initial={{ opacity: 0, y: 40, scale: 0.85 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ type: 'spring', stiffness: 180, damping: 20, delay: (index % 3) * 0.1 }}
              className="flex flex-col items-center text-center group w-[calc(50%-0.5rem)] sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-2.5rem)] max-w-xs"
            >
              {/* Círculo con imagen propia, borde celeste y anillo que gira al pasar el mouse */}
              <div className="relative">
              <span
                aria-hidden
                className="absolute -inset-3 rounded-full border-2 border-dashed border-[#00A8E8]/50 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 animate-[spin_14s_linear_infinite]"
              />
              <Link
                href={item.link}
                className="relative w-36 h-36 sm:w-56 sm:h-56 rounded-full p-1 sm:p-1.5 border-[3px] sm:border-4 border-[#00A8E8] shadow-lg group-hover:border-primary-500 group-hover:shadow-cyan-400/40 group-hover:scale-105 transition-all duration-300 block overflow-hidden bg-white"
                title={`Ver detalles de ${item.titulo}`}
              >
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  <Image
                    src={item.imagen}
                    alt={`${item.titulo} a domicilio en Lima - FisioSphere`}
                    fill
                    sizes="(max-width: 640px) 144px, 224px"
                    className="object-cover object-[60%_center] group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay sutil al pasar el mouse */}
                  <div className="absolute inset-0 bg-[#00A8E8]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Link>
              </div>

              {/* Título de la especialidad */}
              <h3 className="mt-4 sm:mt-5 text-base sm:text-xl font-bold text-gray-900 group-hover:text-[#00A8E8] transition-colors leading-snug">
                {item.titulo}
              </h3>

              {/* Subtítulo / Descripción breve */}
              <p className="text-xs sm:text-sm text-neutral-500 mt-1 max-w-xs leading-relaxed">
                {item.subtitulo}
              </p>

              {/* Enlace o botón para consultar */}
              <Link
                href={item.link}
                className="mt-3 inline-flex items-center text-xs font-semibold text-[#00A8E8] group-hover:text-primary-600 transition-colors"
              >
                <span>Conocer tratamiento</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Banner CTA inferior de la sección */}
        <div className="mt-16 text-center">
          <a
            href={empresaInfo.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
          >
            <Image
              src="/whatt.png"
              alt="WhatsApp"
              width={20}
              height={20}
              className="w-5 h-5 object-contain"
            />
            <span>¿Tienes dudas sobre qué terapia necesitas? Escríbenos por WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
