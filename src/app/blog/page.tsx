import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Search } from "lucide-react";
import BlogList from "@/components/blog/BlogList";

export const metadata: Metadata = {
  title: "Blog de Fisioterapia",
  description:
    "Blog de fisioterapia con artículos sobre dolor lumbar, cervical, lesiones deportivas, ejercicios, consejos de salud y más. Información profesional y actualizada.",
  openGraph: {
    title: "Blog de Fisioterapia | Clínica FisioSphere",
    description:
      "Artículos profesionales sobre fisioterapia, rehabilitación y salud.",
  },
};

import { articulos, categoriasBlog } from "@/lib/blog-data";

export default function BlogPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/" },
          { label: "Blog", href: "/blog" },
        ]}
      />

      {/* Hero */}
      <section className="gradient-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Blog de <span className="gradient-text">Fisioterapia</span>
          </h1>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto mb-8">
            Artículos profesionales sobre fisioterapia, rehabilitación, ejercicio
            y salud. Información actualizada para cuidar de tu bienestar.
          </p>
          {/* Buscador placeholder */}
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
            <input
              type="text"
              placeholder="Buscar artículos..."
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-neutral-700"
            />
          </div>
        </div>
      </section>

      <BlogList articulos={articulos} categoriasBlog={categoriasBlog} />

      {/* CTA Suscripción */}
      <section className="gradient-cta py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Mantente informado
          </h2>
          <p className="text-lg text-primary-100 mb-8">
            Suscríbete a nuestro blog y recibe los últimos artículos sobre
            fisioterapia y salud directamente en tu correo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="flex-1 px-4 py-3 rounded-xl text-neutral-700 focus:outline-none focus:ring-2 focus:ring-primary-300"
            />
            <button className="bg-white text-primary-700 font-semibold px-6 py-3 rounded-xl hover:bg-primary-50 transition-all">
              Suscribirse
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
