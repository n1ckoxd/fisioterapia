import type { Metadata } from "next";
import { equipo, empresaInfo } from "@/lib/data";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import NosotrosContent from "@/components/nosotros/NosotrosContent";

export const metadata: Metadata = {
  title: "Sobre Nosotros",
  description:
    "Conoce al equipo de fisioterapeutas de FisioSphere. Más de 15 años de experiencia en fisioterapia y rehabilitación en Lima. Profesionales certificados.",
  openGraph: {
    title: "Sobre Nosotros | Clínica FisioSphere",
    description:
      "Conoce al equipo de fisioterapeutas de FisioSphere en Lima.",
  },
};

export default function NosotrosPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/" },
          { label: "Nosotros", href: "/nosotros" },
        ]}
      />
      <NosotrosContent equipo={equipo} empresaInfo={empresaInfo} />
    </>
  );
}
