import type { Metadata } from "next";
import { equipo, empresaInfo } from "@/lib/data";
import NosotrosContent from "@/components/nosotros/NosotrosContent";

export const metadata: Metadata = {
  alternates: { canonical: "/nosotros" },
  title: "Equipo de Fisioterapeutas y Psicóloga en Lima",
  description:
    "Conoce al equipo de FisioSphere: licenciados en Terapia Física y Rehabilitación y psicóloga clínica. A domicilio en Lima y sede en Jesús María.",
  openGraph: {
    title: "Sobre Nosotros | Clínica FisioSphere",
    description:
      "Conoce al equipo de fisioterapeutas de FisioSphere en Lima.",
  },
};

export default function NosotrosPage() {
  return <NosotrosContent equipo={equipo} empresaInfo={empresaInfo} />;
}
