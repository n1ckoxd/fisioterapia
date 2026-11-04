'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';
import { imagenArticulo, formatearFecha, type Articulo } from '@/lib/blog-data';

interface BlogListProps {
  articulos: Articulo[];
  categoriasBlog: string[];
}

// Normaliza para buscar sin importar tildes ni mayúsculas.
const normalizar = (t: string) =>
  t.toLowerCase().normalize('NFD').replace(/\p{M}/gu, '');

export default function BlogList({ articulos, categoriasBlog }: BlogListProps) {
  const [categoriaActiva, setCategoriaActiva] = useState('Todos');
  const [busqueda, setBusqueda] = useState('');

  const termino = normalizar(busqueda.trim());
  const articulosFiltrados = articulos.filter((a) => {
    if (categoriaActiva !== 'Todos' && a.categoria !== categoriaActiva) return false;
    if (!termino) return true;
    return normalizar([a.titulo, a.descripcion, ...a.tags].join(' ')).includes(termino);
  });

  // Sin filtros, el artículo más reciente se muestra en grande.
  const destacado = categoriaActiva === 'Todos' && !termino ? articulosFiltrados[0] : undefined;
  const resto = destacado ? articulosFiltrados.slice(1) : articulosFiltrados;

  const botonCategoria = (cat: string) => (
    <button
      key={cat}
      onClick={() => setCategoriaActiva(cat)}
      aria-pressed={categoriaActiva === cat}
      className={`relative shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
        categoriaActiva === cat ? 'text-white' : 'bg-neutral-100 text-neutral-600 hover:bg-primary-50 hover:text-primary-600'
      }`}
    >
      {categoriaActiva === cat && (
        <motion.span
          layoutId="categoria-blog"
          className="absolute inset-0 rounded-full bg-primary-600"
          transition={{ type: 'spring', stiffness: 400, damping: 32 }}
        />
      )}
      <span className="relative">{cat}</span>
    </button>
  );

  return (
    <>
      {/* Buscador y categorías */}
      <section className="py-8 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
            <input
              type="search"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              placeholder="Buscar: tortícolis, gateo, caídas, ansiedad..."
              aria-label="Buscar artículos"
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-neutral-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-neutral-700"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-3 pb-2">
            {botonCategoria('Todos')}
            {categoriasBlog.map(botonCategoria)}
          </div>
        </div>
      </section>

      {/* Artículos */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {articulosFiltrados.length > 0 ? (
            <>
            <AnimatePresence initial={false}>
              {destacado && (
                <motion.article
                  key={`destacado-${destacado.slug}`}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="group mb-10 grid grid-cols-1 lg:grid-cols-2 bg-white rounded-3xl overflow-hidden shadow-md border border-neutral-100 card-hover"
                >
                  <Link href={`/blog/${destacado.slug}`} className="relative min-h-[260px] lg:min-h-[340px] block overflow-hidden" tabIndex={-1} aria-hidden>
                    <Image
                      src={imagenArticulo(destacado)}
                      alt=""
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute top-4 left-4 bg-white/95 text-primary-700 text-xs font-bold px-3 py-1 rounded-full shadow">
                      ★ Más reciente
                    </span>
                  </Link>
                  <div className="p-8 lg:p-10 flex flex-col justify-center">
                    <span className="text-xs bg-primary-50 text-primary-700 px-3 py-1 rounded-full font-medium self-start mb-4">
                      {destacado.categoria}
                    </span>
                    <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-3 leading-tight">
                      <Link href={`/blog/${destacado.slug}`} className="hover:text-primary-600 transition-colors">
                        {destacado.titulo}
                      </Link>
                    </h2>
                    <p className="text-neutral-600 leading-relaxed mb-6">{destacado.descripcion}</p>
                    <div className="flex items-center justify-between text-sm text-neutral-400">
                      <time dateTime={destacado.fecha}>{formatearFecha(destacado.fecha)}</time>
                      <span>{destacado.tiempoLectura} de lectura</span>
                    </div>
                  </div>
                </motion.article>
              )}
            </AnimatePresence>
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {resto.map((articulo) => (
                  <motion.article
                    layout
                    key={articulo.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-neutral-100 card-hover flex flex-col"
                  >
                    <Link href={`/blog/${articulo.slug}`} className="relative h-48 block overflow-hidden" tabIndex={-1} aria-hidden>
                      <Image
                        src={imagenArticulo(articulo)}
                        alt=""
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </Link>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs bg-primary-50 text-primary-700 px-3 py-1 rounded-full font-medium">
                          {articulo.categoria}
                        </span>
                        <span className="text-xs text-neutral-400">
                          {articulo.tiempoLectura}
                        </span>
                      </div>
                      <h2 className="text-lg font-bold text-neutral-800 mb-2 line-clamp-2">
                        <Link
                          href={`/blog/${articulo.slug}`}
                          className="hover:text-primary-600 transition-colors"
                        >
                          {articulo.titulo}
                        </Link>
                      </h2>
                      <p className="text-neutral-500 text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
                        {articulo.descripcion}
                      </p>
                      <div className="flex items-center justify-between text-xs text-neutral-400 mt-auto pt-4 border-t border-neutral-100">
                        <span>{articulo.autor}</span>
                        <time dateTime={articulo.fecha}>{formatearFecha(articulo.fecha)}</time>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </motion.div>
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-neutral-500 text-lg">No se encontraron artículos.</p>
              <button
                onClick={() => {
                  setCategoriaActiva('Todos');
                  setBusqueda('');
                }}
                className="mt-4 text-primary-600 hover:text-primary-700 font-medium"
              >
                Ver todos los artículos
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
