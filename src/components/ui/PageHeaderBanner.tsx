'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export interface BreadcrumbItem {
  label: string;
  href: string;
}

interface PageHeaderBannerProps {
  title: string | React.ReactNode;
  subtitle?: string;
  badge?: string;
  bannerImage: '/te-acompana-1.png' | '/te-acompana-2.png' | string;
  breadcrumbs: BreadcrumbItem[];
  children?: React.ReactNode;
}

export default function PageHeaderBanner({
  title,
  subtitle,
  badge,
  bannerImage,
  breadcrumbs,
  children,
}: PageHeaderBannerProps) {
  return (
    <section className="relative w-full min-h-[360px] sm:min-h-[420px] md:min-h-[460px] lg:min-h-[500px] flex items-center justify-center overflow-hidden pt-28 sm:pt-32 pb-14 sm:pb-16">
      {/* =========================================================================
          1. IMAGEN DE FONDO
          La imagen cubre todo el fondo de forma panorámica y adaptable sin deformarse
         ========================================================================= */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bannerImage}
          alt="FisioSphere Centro Integral - Fisioterapia en Lima"
          fill
          priority
          sizes="100vw"
          className="w-full h-full object-cover object-center"
        />
        {/* =========================================================================
            2. CAPA OSCURA SEMITRANSPARENTE (OVERLAY)
            Oscurece la imagen para que el texto blanco, badges y gradientes resalten
           ========================================================================= */}
        <div className="absolute inset-0 bg-slate-950/75 bg-gradient-to-t from-slate-950/95 via-slate-950/70 to-slate-950/80 backdrop-blur-[1px]" />
      </div>

      {/* =========================================================================
          3. CONTENIDO SUPERPUESTO (ENCIMA DE LA CAPA OSCURA)
          Migas de pan, Badge, Título con gradiente y Subtítulo en texto blanco nítido
         ========================================================================= */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center">
        {/* Migas de pan (Breadcrumbs) en píldora de cristal */}
        <nav aria-label="Breadcrumb" className="mb-5">
          <ol className="inline-flex items-center flex-wrap justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-neutral-300 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 shadow-sm">
            {breadcrumbs.map((item, index) => {
              const isLast = index === breadcrumbs.length - 1;
              const isFirst = index === 0;
              return (
                <li key={item.href} className="inline-flex items-center gap-1.5 sm:gap-2">
                  {!isFirst && <ChevronRight className="w-3.5 h-3.5 text-neutral-400 shrink-0" />}
                  {isLast ? (
                    <span className="font-semibold text-white truncate max-w-[200px] sm:max-w-none" aria-current="page">
                      {item.label}
                    </span>
                  ) : (
                    <Link href={item.href} className="hover:text-teal-300 transition-colors truncate max-w-[150px] sm:max-w-none">
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>

        {/* Badge VIP o Categoría */}
        {badge && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/20 backdrop-blur-md text-teal-200 text-xs sm:text-sm font-semibold mb-4 border border-teal-400/30 shadow-lg shadow-black/20"
          >
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            <span>{badge}</span>
          </motion.div>
        )}

        {/* Título Principal de la Página */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] drop-shadow-md"
        >
          {title}
        </motion.h1>

        {/* Subtítulo Descriptivo */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-base sm:text-lg md:text-xl text-neutral-200 mt-4 max-w-3xl mx-auto leading-relaxed font-normal drop-shadow-sm"
          >
            {subtitle}
          </motion.p>
        )}

        {/* Contenido adicional opcional (Buscador, botones, etc.) */}
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="w-full mt-6"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}
