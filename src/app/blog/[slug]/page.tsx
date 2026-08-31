import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, Calendar, User, Clock, Tag } from "lucide-react";
import { articulos } from "@/lib/blog-data";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

// Generar rutas estáticas en build time (SSG)
export async function generateStaticParams() {
  return articulos.map((articulo) => ({
    slug: articulo.slug,
  }));
}

// Generar metadatos dinámicos para SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const articulo = articulos.find((a) => a.slug === slug);

  if (!articulo) {
    return {
      title: "Artículo no encontrado | Clínica FisioSphere",
    };
  }

  return {
    title: `${articulo.titulo} | Blog FisioSphere`,
    description: articulo.descripcion,
    openGraph: {
      title: articulo.titulo,
      description: articulo.descripcion,
      type: "article",
      publishedTime: articulo.fecha,
      authors: [articulo.autor],
      tags: articulo.tags,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const articulo = articulos.find((a) => a.slug === slug);

  if (!articulo) {
    notFound();
  }

  // Parsear markdown simple (simulación para contenido con ## y viñetas)
  // En una app real usaríamos react-markdown o marked
  const renderContent = (content: string) => {
    const paragraphs = content.split('\n\n');
    return paragraphs.map((paragraph, index) => {
      if (paragraph.startsWith('## ')) {
        return <h2 key={index} className="text-2xl font-bold text-neutral-800 mt-8 mb-4">{paragraph.replace('## ', '')}</h2>;
      }
      if (paragraph.startsWith('### ')) {
        return <h3 key={index} className="text-xl font-bold text-neutral-800 mt-6 mb-3">{paragraph.replace('### ', '')}</h3>;
      }
      if (paragraph.includes('**')) {
        // Simple bold parser
        const parts = paragraph.split(/(\*\*.*?\*\*)/g);
        return (
          <p key={index} className="text-neutral-600 mb-4 leading-relaxed">
            {parts.map((part, i) => {
              if (part.startsWith('**') && part.endsWith('**')) {
                return <strong key={i} className="text-neutral-900 font-semibold">{part.slice(2, -2)}</strong>;
              }
              return part;
            })}
          </p>
        );
      }
      if (paragraph.startsWith('- ')) {
        const items = paragraph.split('\n').filter(i => i.trim());
        return (
          <ul key={index} className="list-disc pl-5 mb-4 text-neutral-600 space-y-2">
            {items.map((item, i) => (
              <li key={i}>{item.replace('- ', '')}</li>
            ))}
          </ul>
        );
      }
      if (paragraph.startsWith('1. ')) {
        const items = paragraph.split('\n').filter(i => i.trim());
        return (
          <ol key={index} className="list-decimal pl-5 mb-4 text-neutral-600 space-y-2">
            {items.map((item, i) => {
               // Remove numbers and dot at start
               const text = item.replace(/^\d+\.\s/, '');
               return <li key={i}>{text}</li>;
            })}
          </ol>
        );
      }
      if (paragraph.startsWith('|')) {
        // Simple table rendering placeholder
         return (
            <div key={index} className="overflow-x-auto mb-6">
              <table className="w-full text-left border-collapse">
                 <tbody className="divide-y divide-neutral-200">
                    <tr className="bg-neutral-50"><td className="p-3 text-neutral-600 text-sm">Tabla ilustrativa</td></tr>
                 </tbody>
              </table>
            </div>
         );
      }
      
      // Default paragraph
      return <p key={index} className="text-neutral-600 mb-4 leading-relaxed">{paragraph}</p>;
    });
  };

  return (
    <>
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
          <header className="mb-12">
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
                <time dateTime={articulo.fecha}>
                  {new Date(articulo.fecha).toLocaleDateString("es-ES", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{articulo.tiempoLectura}</span>
              </div>
            </div>
          </header>

          {/* Contenido principal */}
          <div className="prose prose-lg max-w-none">
            {renderContent(articulo.contenido)}
          </div>

          {/* Footer del artículo - Tags */}
          <footer className="mt-16 pt-8 border-t border-neutral-200">
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

      {/* CTA Section */}
      <section className="bg-primary-50 py-16 mt-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">¿Necesitas ayuda con tu recuperación?</h2>
          <p className="text-lg text-neutral-600 mb-8">
            Nuestros fisioterapeutas expertos pueden evaluar tu caso y diseñar un plan de tratamiento personalizado.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/citas" className="btn-primary">
              Reservar Cita
            </Link>
            <Link href="/contacto" className="btn-secondary bg-white text-primary-600 border-primary-200">
              Contactar
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
