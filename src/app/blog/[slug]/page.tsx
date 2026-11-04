import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, Calendar, User, Clock, Tag, ArrowRight, BadgeCheck, ListOrdered } from "lucide-react";
import { articulos, imagenArticulo, formatearFecha, revisorArticulo } from "@/lib/blog-data";
import { servicios, empresaInfo } from "@/lib/data";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { ArticleSchema } from "@/components/seo/JsonLd";
import MarkdownContent, { indiceArticulo } from "@/components/blog/MarkdownContent";
import ReadingProgress from "@/components/blog/ReadingProgress";
import { Reveal } from "@/components/ui/Reveal";

// Generar rutas estáticas en build time (SSG)
export async function generateStaticParams() {
  return articulos.map((articulo) => ({
    slug: articulo.slug,
  }));
}

// Generar metadatos dinámicos para SEO
export async function generateMetadata(
  props: PageProps<"/blog/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const articulo = articulos.find((a) => a.slug === slug);

  if (!articulo) {
    return {
      title: "Artículo no encontrado",
    };
  }

  const imagen = imagenArticulo(articulo);

  return {
    title: articulo.titulo,
    description: articulo.descripcion,
    keywords: articulo.tags,
    alternates: {
      canonical: `/blog/${articulo.slug}`,
    },
    openGraph: {
      title: articulo.titulo,
      description: articulo.descripcion,
      type: "article",
      url: `${empresaInfo.url}/blog/${articulo.slug}`,
      publishedTime: articulo.fecha,
      authors: [articulo.autor],
      tags: articulo.tags,
      images: [{ url: imagen, alt: articulo.titulo }],
    },
  };
}

export default async function BlogPostPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const articulo = articulos.find((a) => a.slug === slug);

  if (!articulo) {
    notFound();
  }

  const imagen = imagenArticulo(articulo);
  const revisor = revisorArticulo(articulo);
  const indice = indiceArticulo(articulo.contenido);
  const servicio = servicios.find((s) => s.slug === articulo.servicioRelacionado);
  const relacionados = [
    ...articulos.filter((a) => a.slug !== articulo.slug && a.categoria === articulo.categoria),
    ...articulos.filter((a) => a.slug !== articulo.slug && a.categoria !== articulo.categoria),
  ].slice(0, 3);

  return (
    <>
      <ReadingProgress />
      <ArticleSchema article={{ ...articulo, imagen }} revisor={revisor} />
      <div className="bg-neutral-50 pt-8 pb-12">
        <Breadcrumbs
          items={[
            { label: "Inicio", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: articulo.titulo, href: `/blog/${articulo.slug}` },
          ]}
        />

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium mb-8 transition-colors"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Volver al blog
          </Link>

          {/* Header del artículo */}
          <header className="mb-10">
            <div className="flex items-center gap-3 mb-6 flex-wrap">
              <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-semibold">
                {articulo.categoria}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
              {articulo.titulo}
            </h1>

            <p className="text-xl text-neutral-500 mb-8 leading-relaxed">
              {articulo.descripcion}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-500 border-t border-b border-neutral-200 py-4">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span className="font-medium text-neutral-700">{articulo.autor}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <time dateTime={articulo.fecha}>{formatearFecha(articulo.fecha)}</time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{articulo.tiempoLectura}</span>
              </div>
            </div>

            {revisor && (
              <Link
                href={`/nosotros/${revisor.slug}`}
                className="mt-5 flex items-center gap-4 rounded-2xl bg-white border border-neutral-200 p-4 hover:border-primary-300 transition-colors group"
              >
                {revisor.foto && (
                  <span className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 ring-2 ring-primary-100">
                    <Image src={revisor.foto} alt={revisor.nombre} fill sizes="56px" className="object-cover object-top" />
                  </span>
                )}
                <span className="text-sm leading-snug">
                  <span className="flex items-center gap-1.5 text-neutral-500">
                    <BadgeCheck className="w-4 h-4 text-success" /> Contenido revisado por
                  </span>
                  <span className="block font-bold text-neutral-900 group-hover:text-primary-600 transition-colors">{revisor.nombre}</span>
                  <span className="block text-neutral-500">{revisor.tituloProfesional}</span>
                </span>
              </Link>
            )}
          </header>

          <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-lg mb-10">
            <Image
              src={imagen}
              alt={articulo.titulo}
              fill
              priority
              sizes="(max-width: 896px) 100vw, 896px"
              className="object-cover"
            />
          </div>

          {/* Índice del artículo */}
          {indice.length > 2 && (
            <nav aria-label="En este artículo" className="mb-10 rounded-2xl bg-white border border-neutral-200 p-6">
              <p className="flex items-center gap-2 font-bold text-neutral-900 mb-3">
                <ListOrdered className="w-5 h-5 text-primary-600" /> En este artículo
              </p>
              <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
                {indice.map((h, n) => (
                  <li key={h.id}>
                    <a href={`#${h.id}`} className="flex gap-2 text-neutral-600 hover:text-primary-600 transition-colors">
                      <span className="text-primary-500 font-semibold">{n + 1}.</span>
                      {h.texto}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          )}

          {/* Contenido principal */}
          <div className="text-lg">
            <MarkdownContent content={articulo.contenido} />
          </div>

          {/* Servicio relacionado */}
          {servicio && (
            <Reveal>
            <aside className="mt-12 rounded-3xl overflow-hidden bg-white border border-primary-100 shadow-sm grid grid-cols-1 sm:grid-cols-3">
              {servicio.imagen && (
                <div className="relative h-48 sm:h-auto">
                  <Image src={servicio.imagen} alt={servicio.imagenAlt ?? servicio.nombre} fill sizes="(max-width: 640px) 100vw, 300px" className="object-cover" />
                </div>
              )}
              <div className={`p-6 sm:p-8 ${servicio.imagen ? "sm:col-span-2" : "sm:col-span-3"}`}>
                <p className="text-sm font-semibold text-primary-600 mb-1">Servicio relacionado</p>
                <h2 className="text-2xl font-bold text-neutral-900 mb-2">{servicio.nombre}</h2>
                <p className="text-neutral-600 mb-5">{servicio.descripcionCorta}</p>
                <Link href={`/servicios/${servicio.slug}`} className="btn-primary">
                  Conocer el servicio <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </aside>
            </Reveal>
          )}

          {/* Footer del artículo - Tags */}
          <footer className="mt-12 pt-8 border-t border-neutral-200">
            <div className="flex items-center gap-4 flex-wrap">
              <span className="font-semibold text-neutral-900 flex items-center gap-2">
                <Tag className="w-4 h-4" /> Etiquetas:
              </span>
              {articulo.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-neutral-100 text-neutral-600 px-3 py-1 rounded-md text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </footer>
        </article>
      </div>

      {/* Artículos relacionados */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-8 text-center">También te puede interesar</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relacionados.map((a) => (
              <Link key={a.slug} href={`/blog/${a.slug}`} className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-neutral-100 card-hover">
                <div className="relative h-40 overflow-hidden">
                  <Image src={imagenArticulo(a)} alt="" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-5">
                  <span className="text-xs text-primary-600 font-semibold">{a.categoria}</span>
                  <h3 className="font-bold text-neutral-800 mt-1 group-hover:text-primary-600 transition-colors line-clamp-2">{a.titulo}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">¿Necesitas ayuda con tu caso?</h2>
          <p className="text-lg text-neutral-600 mb-8">
            Nuestros especialistas pueden evaluarte a domicilio o en nuestra sede de {empresaInfo.direccion} y diseñar un plan personalizado.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/citas" className="btn-primary justify-center">
              Reservar Cita
            </Link>
            <a href={empresaInfo.whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-whatsapp justify-center">
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
