'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FileText } from 'lucide-react';
import type { Articulo } from '@/lib/blog-data';

interface BlogListProps {
  articulos: Articulo[];
  categoriasBlog: string[];
}

export default function BlogList({ articulos, categoriasBlog }: BlogListProps) {
  const [categoriaActiva, setCategoriaActiva] = useState('Todos');

  const articulosFiltrados = categoriaActiva === 'Todos'
    ? articulos
    : articulos.filter(a => a.categoria === categoriaActiva);

  return (
    <>
      {/* Categorías */}
      <section className="py-8 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3 pb-2">
            <button
              onClick={() => setCategoriaActiva('Todos')}
              className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                categoriaActiva === 'Todos'
                  ? 'bg-primary-600 text-white'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-primary-50 hover:text-primary-600'
              }`}
            >
              Todos
            </button>
            {categoriasBlog.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoriaActiva(cat)}
                className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  categoriaActiva === cat
                    ? 'bg-primary-600 text-white'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-primary-50 hover:text-primary-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Artículos */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {articulosFiltrados.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articulosFiltrados.map((articulo) => (
                <article
                  key={articulo.slug}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm border border-neutral-100 card-hover"
                >
                  <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                    <FileText className="w-16 h-16 text-primary-400" />
                  </div>
                  <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
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
                      <time dateTime={articulo.fecha}>
                        {new Date(articulo.fecha).toLocaleDateString("es-ES", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </time>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-neutral-500 text-lg">No se encontraron artículos en esta categoría.</p>
              <button 
                onClick={() => setCategoriaActiva('Todos')}
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
