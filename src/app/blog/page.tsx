import type { Metadata } from "next";
import BlogList from "@/components/blog/BlogList";
import PageHeaderBanner from "@/components/ui/PageHeaderBanner";
import { articulos, categoriasBlog } from "@/lib/blog-data";
import { empresaInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog de Fisioterapia, Bebés y Adulto Mayor",
  description:
    "Guías prácticas sobre el desarrollo del bebé de 0 a 12 meses, estimulación temprana, tortícolis, plagiocefalia, adulto mayor, psicología infantil y dolor de espalda. Escrito por el equipo de FisioSphere.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog de Fisioterapia | Clínica FisioSphere",
    description:
      "Artículos profesionales sobre fisioterapia, rehabilitación y salud.",
  },
};

export default function BlogPage() {
  return (
    <>
      {/* Banner Oficial Fisiosphere te acompaña */}
      <PageHeaderBanner
        bannerImage="/te-acompana-1.png"
        badge="Consejos, Salud & Rehabilitación"
        title={
          <>
            Blog de <span className="gradient-text">Fisioterapia y Bienestar</span>
          </>
        }
        subtitle="Guías prácticas sobre el desarrollo de tu bebé, el cuidado del adulto mayor, la psicología infantil y el alivio del dolor."
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Blog", href: "/blog" },
        ]}
      >
      </PageHeaderBanner>

      <BlogList articulos={articulos} categoriasBlog={categoriasBlog} />

      {/* CTA consulta */}
      <section className="gradient-cta py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            ¿Tienes una duda sobre tu caso?
          </h2>
          <p className="text-lg text-primary-100 mb-8">
            Escríbenos por WhatsApp y un especialista te orienta sin compromiso.
          </p>
          <a
            href={empresaInfo.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white text-primary-700 font-semibold px-8 py-3 rounded-xl hover:bg-primary-50 transition-all"
          >
            Escribir por WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
