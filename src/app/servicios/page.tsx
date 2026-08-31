import type { Metadata } from "next";
import Link from "next/link";
import { servicios } from "@/lib/data";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import ServiciosGrid from "@/components/servicios/ServiciosGrid";

export const metadata: Metadata = {
  title: "Servicios de Fisioterapia",
  description:
    "Descubre todos nuestros servicios de fisioterapia: deportiva, rehabilitación, dolor lumbar, cervical, punción seca, masoterapia, electroterapia y más.",
  openGraph: {
    title: "Servicios de Fisioterapia | Clínica FisioSphere",
    description:
      "Descubre todos nuestros servicios de fisioterapia especializados en Lima.",
  },
};

export default function ServiciosPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/" },
          { label: "Servicios", href: "/servicios" },
        ]}
      />

      {/* Hero */}
      <section className="gradient-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Nuestros{" "}
            <span className="gradient-text">Servicios de Fisioterapia</span>
          </h1>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Ofrecemos una amplia gama de tratamientos especializados para
            ayudarte a recuperar tu bienestar. Cada servicio está diseñado para
            abordar tus necesidades específicas con las técnicas más avanzadas.
          </p>
        </div>
      </section>

      {/* Grid de servicios */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiciosGrid servicios={servicios} />
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-cta py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            ¿No sabes qué servicio necesitas?
          </h2>
          <p className="text-lg text-primary-100 mb-8">
            No te preocupes, nuestro equipo te asesorará para encontrar el
            tratamiento más adecuado para ti.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary-700 font-semibold px-8 py-3 rounded-xl hover:bg-primary-50 transition-all"
            >
              Consúltanos
            </Link>
            <Link
              href="/citas"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-8 py-3 rounded-xl hover:bg-white/10 transition-all"
            >
              Reservar Cita
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
