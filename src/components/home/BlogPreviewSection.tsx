import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Clock } from 'lucide-react';
import { articulos, imagenArticulo, revisorArticulo } from '@/lib/blog-data';
import { Reveal, Stagger, StaggerItem } from '@/components/ui/Reveal';

// Últimas guías del blog en la home: dan enlaces internos a los artículos.
export default function BlogPreviewSection() {
  const recientes = articulos.slice(0, 3);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-primary-50/40" aria-labelledby="guias-titulo">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <span className="text-primary-600 font-bold text-sm uppercase tracking-wider block mb-2">Blog FisioSphere</span>
            <h2 id="guias-titulo" className="text-3xl sm:text-4xl font-bold text-neutral-900">
              Guías para cuidar a <span className="gradient-text">tu familia</span>
            </h2>
            <p className="text-neutral-600 mt-3 max-w-2xl">
              Desarrollo del bebé, adulto mayor y psicología infantil, explicado por nuestro equipo.
            </p>
          </div>
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 font-semibold text-primary-600 hover:text-primary-700 shrink-0"
          >
            Ver todas las guías
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Reveal>

        <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recientes.map((a) => {
            const revisor = revisorArticulo(a);
            return (
              <StaggerItem key={a.slug}>
                <Link
                  href={`/blog/${a.slug}`}
                  className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-neutral-100 shadow-sm card-hover"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={imagenArticulo(a)}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <span className="absolute top-3 left-3 bg-white/95 backdrop-blur text-primary-700 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                      {a.categoria}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-lg font-bold text-neutral-900 leading-snug mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                      {a.titulo}
                    </h3>
                    <p className="text-sm text-neutral-500 line-clamp-2 mb-4 flex-1">{a.descripcion}</p>
                    <div className="flex items-center justify-between text-xs text-neutral-400 pt-4 border-t border-neutral-100">
                      <span className="truncate">{revisor ? `Revisado por ${revisor.nombre}` : a.autor}</span>
                      <span className="flex items-center gap-1 shrink-0">
                        <Clock className="w-3.5 h-3.5" /> {a.tiempoLectura}
                      </span>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
