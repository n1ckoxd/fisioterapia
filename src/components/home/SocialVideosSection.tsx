'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Sparkles, Play } from 'lucide-react';
import { empresaInfo } from '@/lib/data';

interface SocialVideo {
  id: string;
  platform: 'tiktok' | 'instagram';
  title: string;
  tag: string;
  embedUrl: string;
  originalUrl: string;
  account: string;
}

const videos: SocialVideo[] = [
  {
    id: 'tiktok-1',
    platform: 'tiktok',
    title: 'Fisioterapia y movilidad en acción',
    tag: 'Terapia Física',
    embedUrl: 'https://www.tiktok.com/embed/v2/7673318776837934356',
    originalUrl: 'https://www.tiktok.com/@fisiosphere.peru/video/7673318776837934356',
    account: '@fisiosphere.peru',
  },
  {
    id: 'instagram-1',
    platform: 'instagram',
    title: 'Reel: técnicas y atención personalizada',
    tag: 'Sesión en Vivo',
    embedUrl: 'https://www.instagram.com/reel/DbdksIoxnbW/embed/',
    originalUrl: 'https://www.instagram.com/reel/DbdksIoxnbW/',
    account: '@fisiosphere.peru',
  },
  {
    id: 'tiktok-2',
    platform: 'tiktok',
    title: 'Estimulación y neurodesarrollo infantil',
    tag: 'Pediatría & Salud',
    embedUrl: 'https://www.tiktok.com/embed/v2/7685459982417939733',
    originalUrl: 'https://www.tiktok.com/@fisiosphere.peru/video/7685459982417939733',
    account: '@fisiosphere.peru',
  },
];

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.52a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.87a8.28 8.28 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.3z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

const filtros = [
  { id: 'all', label: 'Todos los videos' },
  { id: 'tiktok', label: 'TikTok' },
  { id: 'instagram', label: 'Instagram Reels' },
] as const;

export default function SocialVideosSection() {
  const [activePlatform, setActivePlatform] = useState<'all' | 'tiktok' | 'instagram'>('all');
  // Los reproductores de TikTok/Instagram son pesados: solo se cargan al pulsar "reproducir".
  const [cargados, setCargados] = useState<string[]>([]);

  const filteredVideos = activePlatform === 'all' ? videos : videos.filter((v) => v.platform === activePlatform);

  return (
    <section className="py-20 bg-neutral-50 border-y border-neutral-200/60" id="videos" aria-labelledby="videos-titulo">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-100 text-primary-800 text-sm font-semibold mb-4 shadow-sm">
            <Sparkles size={16} className="text-primary-600" />
            <span>FisioSphere en Acción</span>
          </div>
          <h2 id="videos-titulo" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Mira cómo trabajamos en <span className="gradient-text">nuestras redes</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Técnicas de estimulación, ejercicios y consejos de salud de nuestro equipo.
          </p>

          {/* Filtros con indicador animado */}
          <div className="inline-flex flex-wrap justify-center items-center gap-1 mt-8 p-1 rounded-full bg-white border border-gray-200 shadow-sm">
            {filtros.map((f) => (
              <button
                key={f.id}
                onClick={() => setActivePlatform(f.id)}
                aria-pressed={activePlatform === f.id}
                className={`relative px-4 sm:px-5 py-2 rounded-full text-sm font-semibold flex items-center gap-2 transition-colors ${
                  activePlatform === f.id ? 'text-white' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {activePlatform === f.id && (
                  <motion.span
                    layoutId="filtro-videos"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-600 to-purple-600 shadow-md"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative flex items-center gap-2">
                  {f.id === 'tiktok' && <TikTokIcon className="w-4 h-4" />}
                  {f.id === 'instagram' && <InstagramIcon className="w-4 h-4" />}
                  {f.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <AnimatePresence mode="popLayout" initial={false}>
            {filteredVideos.map((video, i) => {
              const cargado = cargados.includes(video.id);
              const esTikTok = video.platform === 'tiktok';
              return (
                <motion.article
                  layout
                  key={video.id}
                  initial={{ opacity: 0, y: 30, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-60px' }}
                  exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-white rounded-3xl overflow-hidden shadow-md border border-neutral-200/80 flex flex-col"
                >
                  <div className="p-4 border-b border-neutral-100 flex items-center justify-between bg-gradient-to-r from-neutral-50 to-white">
                    <div className="flex items-center gap-2">
                      <span
                        className={`w-8 h-8 rounded-full text-white flex items-center justify-center ${
                          esTikTok ? 'bg-black' : 'bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600'
                        }`}
                      >
                        {esTikTok ? <TikTokIcon className="w-4 h-4" /> : <InstagramIcon className="w-4 h-4" />}
                      </span>
                      <div>
                        <span className="font-bold text-xs text-neutral-800 block leading-tight">{video.account}</span>
                        <span className="text-[11px] text-neutral-500">{esTikTok ? 'TikTok' : 'Instagram Reel'}</span>
                      </div>
                    </div>
                    <span className="bg-primary-50 text-primary-700 text-[11px] font-bold px-2.5 py-1 rounded-full">{video.tag}</span>
                  </div>

                  <div className="relative w-full h-[540px] bg-neutral-900 overflow-hidden">
                    {cargado ? (
                      <iframe
                        src={video.embedUrl}
                        className="w-full h-full border-0"
                        allowFullScreen
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                        title={video.title}
                      />
                    ) : (
                      <button
                        onClick={() => setCargados((c) => [...c, video.id])}
                        className={`group absolute inset-0 w-full h-full flex flex-col items-center justify-center gap-5 text-white ${
                          esTikTok
                            ? 'bg-[radial-gradient(circle_at_30%_20%,#25F4EE33,transparent_45%),radial-gradient(circle_at_70%_80%,#FE2C5533,transparent_45%),#0b0b0f]'
                            : 'bg-gradient-to-br from-yellow-500/90 via-pink-600 to-purple-700'
                        }`}
                        aria-label={`Reproducir video: ${video.title}`}
                      >
                        <Image src="/logo-fisiosphere.png" alt="" width={320} height={167} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/5 h-auto opacity-15 pointer-events-none" aria-hidden />
                        <motion.span
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="relative w-20 h-20 rounded-full bg-white/95 text-neutral-900 flex items-center justify-center shadow-2xl"
                        >
                          <span className="absolute inset-0 rounded-full bg-white/60 fab-ring" aria-hidden />
                          <Play className="relative w-8 h-8 ml-1 fill-current" />
                        </motion.span>
                        <span className="relative px-6 text-center">
                          <span className="block font-bold text-lg leading-snug">{video.title}</span>
                          <span className="block text-sm text-white/70 mt-1">Toca para reproducir</span>
                        </span>
                      </button>
                    )}
                  </div>

                  <div className="p-4 bg-white flex items-center justify-between border-t border-neutral-100">
                    <h3 className="font-semibold text-sm text-neutral-800 line-clamp-1">{video.title}</h3>
                    <a
                      href={video.originalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-primary-600 hover:text-primary-700 transition-colors flex-shrink-0"
                    >
                      Abrir app <ExternalLink size={12} />
                    </a>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Llamado a seguir en redes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 max-w-4xl mx-auto bg-gradient-to-r from-primary-600 via-primary-500 to-accent rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div>
            <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-3">Comunidad FisioSphere</span>
            <h3 className="text-2xl sm:text-3xl font-bold mb-2">¡Síguenos y no te pierdas nuestros tips!</h3>
            <p className="text-white/90 text-sm sm:text-base">Ejercicios guiados, casos reales y consejos de neurodesarrollo.</p>
          </div>

          <div className="flex items-center gap-3 flex-wrap justify-center sm:justify-end flex-shrink-0">
            <a
              href={empresaInfo.redesSociales.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black hover:bg-neutral-900 text-white px-5 py-2.5 rounded-xl font-semibold text-sm flex items-center gap-2 shadow-md transition-transform hover:-translate-y-0.5"
            >
              <TikTokIcon className="w-4 h-4" />
              TikTok
            </a>
            <a
              href={empresaInfo.redesSociales.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary-700 hover:bg-neutral-100 px-5 py-2.5 rounded-xl font-semibold text-sm flex items-center gap-2 shadow-md transition-transform hover:-translate-y-0.5"
            >
              <InstagramIcon className="w-4 h-4" />
              Instagram
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
