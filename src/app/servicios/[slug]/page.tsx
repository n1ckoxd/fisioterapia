import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicios, empresaInfo, equipo } from "@/lib/data";
import { articulosDeServicio, imagenArticulo } from "@/lib/blog-data";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { FAQSchema, ServiceSchema } from "@/components/seo/JsonLd";
import ServicioDetalle from "@/components/servicios/ServicioDetalle";

export async function generateStaticParams() {
  return servicios.map((servicio) => ({
    slug: servicio.slug,
  }));
}

export async function generateMetadata(
  props: PageProps<"/servicios/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const servicio = servicios.find((s) => s.slug === slug);

  if (!servicio) {
    return { title: "Servicio no encontrado" };
  }

  return {
    title: { absolute: servicio.metaTitle },
    description: servicio.metaDescription,
    keywords: servicio.keywords,
    openGraph: {
      title: servicio.metaTitle,
      description: servicio.metaDescription,
      url: `${empresaInfo.url}/servicios/${servicio.slug}`,
      type: "website",
      ...(servicio.imagen ? { images: [{ url: servicio.imagen, alt: servicio.imagenAlt ?? servicio.nombre }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: servicio.metaTitle,
      description: servicio.metaDescription,
    },
    alternates: {
      canonical: `${empresaInfo.url}/servicios/${servicio.slug}`,
    },
  };
}

export default async function ServicioPage(
  props: PageProps<"/servicios/[slug]">
) {
  const { slug } = await props.params;
  const servicio = servicios.find((s) => s.slug === slug);

  if (!servicio) {
    notFound();
  }

  const especialista = equipo.find((m) => m.slug === servicio.especialista);
  const articulos = articulosDeServicio(servicio.slug).map((a) => ({
    slug: a.slug,
    titulo: a.titulo,
    categoria: a.categoria,
    imagen: imagenArticulo(a),
    tiempoLectura: a.tiempoLectura,
  }));
  const otrasEspecialidades = servicios
    .filter((s) => s.imagen && s.slug !== servicio.slug)
    .map(({ slug, nombre, imagen, imagenAlt }) => ({ slug, nombre, imagen, imagenAlt }));

  return (
    <>
      <FAQSchema faqs={servicio.faqs} />
      <ServiceSchema servicio={servicio} />
      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/" },
          { label: "Servicios", href: "/servicios" },
          { label: servicio.nombre, href: `/servicios/${servicio.slug}` },
        ]}
      />
      <ServicioDetalle
        servicio={servicio}
        especialista={especialista}
        articulos={articulos}
        otrasEspecialidades={otrasEspecialidades}
      />
    </>
  );
}
