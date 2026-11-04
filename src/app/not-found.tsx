import type { Metadata } from "next";
import Link from "next/link";
import { Home, Baby, PersonStanding, BookOpen, MessageCircle } from "lucide-react";
import { empresaInfo } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Página no encontrada",
  robots: { index: false, follow: true },
};

const atajos = [
  { href: "/servicios/fisioterapia-bebes-estimulacion-temprana", label: "Fisioterapia para bebés", icon: Baby },
  { href: "/servicios/fisioterapia-geriatrica", label: "Adulto mayor", icon: PersonStanding },
  { href: "/blog", label: "Guías del blog", icon: BookOpen },
  { href: "/", label: "Inicio", icon: Home },
];

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-4 pt-32 pb-20 bg-gradient-to-b from-primary-50/60 to-white">
      <div className="max-w-2xl text-center">
        <Reveal escala={0.9}>
          <p className="text-8xl sm:text-9xl font-black gradient-text leading-none mb-4">404</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">No encontramos esta página</h1>
          <p className="text-lg text-neutral-600 mb-10">
            Puede que el enlace haya cambiado. Estos accesos te pueden ayudar:
          </p>
        </Reveal>
        <Reveal delay={0.2} className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
          {atajos.map((atajo) => (
            <Link
              key={atajo.href}
              href={atajo.href}
              className="group flex items-center gap-3 p-4 rounded-2xl bg-white border border-neutral-200 hover:border-primary-300 hover:shadow-md hover:-translate-y-0.5 transition-all text-left"
            >
              <span className="w-10 h-10 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center group-hover:bg-primary-600 group-hover:text-white transition-colors">
                <atajo.icon className="w-5 h-5" />
              </span>
              <span className="font-semibold text-neutral-800">{atajo.label}</span>
            </Link>
          ))}
        </Reveal>
        <Reveal delay={0.3}>
          <a href={empresaInfo.whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
            <MessageCircle className="w-5 h-5" /> ¿Necesitas ayuda? Escríbenos
          </a>
        </Reveal>
      </div>
    </section>
  );
}
