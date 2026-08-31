import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicios, empresaInfo } from "@/lib/data";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { FAQSchema } from "@/components/seo/JsonLd";
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
    title: servicio.metaTitle,
    description: servicio.metaDescription,
    openGraph: {
      title: servicio.metaTitle,
      description: servicio.metaDescription,
      url: `${empresaInfo.url}/servicios/${servicio.slug}`,
      type: "website",
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

  return (
    <>
      <FAQSchema faqs={servicio.faqs} />
      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/" },
          { label: "Servicios", href: "/servicios" },
          { label: servicio.nombre, href: `/servicios/${servicio.slug}` },
        ]}
      />
      <ServicioDetalle servicio={servicio} />
    </>
  );
}
