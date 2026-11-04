import { Metadata } from 'next';
import { FAQSchema } from '@/components/seo/JsonLd';
import { faqsGenerales, servicios } from '@/lib/data';
import FAQPageContent, { type CategoriaFAQ } from '@/components/faq/FAQPageContent';
import PageHeaderBanner from '@/components/ui/PageHeaderBanner';

export const metadata: Metadata = {
  alternates: { canonical: "/preguntas-frecuentes" },
  title: 'Preguntas Frecuentes sobre Fisioterapia a Domicilio',
  description:
    'Respuestas sobre fisioterapia para bebés de 0 a 12 meses, niños, adulto mayor y psicología infantil: citas, sesiones a domicilio en Lima, duración, precios y más.',
};

const faqsDe = (...slugs: string[]) =>
  slugs.flatMap((slug) => servicios.find((s) => s.slug === slug)?.faqs ?? []);

const categorias: CategoriaFAQ[] = [
  { id: 'general', nombre: 'General', faqs: faqsGenerales },
  {
    id: 'bebes',
    nombre: 'Bebés 0-12 meses',
    faqs: faqsDe('fisioterapia-bebes-estimulacion-temprana'),
    enlace: { href: '/servicios/fisioterapia-bebes-estimulacion-temprana', texto: 'Ver fisioterapia para bebés' },
  },
  {
    id: 'ninos',
    nombre: 'Niños y aprendizaje',
    faqs: faqsDe('fisioterapia-pediatrica', 'terapia-psicopedagogica'),
    enlace: { href: '/servicios/terapia-psicopedagogica', texto: 'Ver psicología infantil y psicopedagogía' },
  },
  {
    id: 'adulto-mayor',
    nombre: 'Adulto mayor',
    faqs: faqsDe('fisioterapia-geriatrica', 'fisioterapia-neurologica'),
    enlace: { href: '/servicios/fisioterapia-geriatrica', texto: 'Ver fisioterapia geriátrica' },
  },
  {
    id: 'lesiones',
    nombre: 'Lesiones y dolor',
    faqs: faqsDe('fisioterapia-traumatologica', 'dolor-lumbar', 'rehabilitacion-postoperatoria'),
    enlace: { href: '/servicios', texto: 'Ver todos los servicios' },
  },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-neutral-50 pb-20">
      {/* Solo las preguntas generales llevan schema aquí: las de cada servicio ya lo tienen en su página. */}
      <FAQSchema faqs={faqsGenerales} />

      <PageHeaderBanner
        bannerImage="/te-acompana-1.png"
        badge="Resolvemos tus dudas"
        title={
          <>
            Preguntas <span className="gradient-text">Frecuentes</span>
          </>
        }
        subtitle="Todo lo que necesitas saber antes de tu primera sesión: a domicilio en Lima o en nuestra sede de Jesús María."
        breadcrumbs={[
          { label: 'Inicio', href: '/' },
          { label: 'Preguntas Frecuentes', href: '/preguntas-frecuentes' },
        ]}
      />

      <FAQPageContent categorias={categorias} />
    </div>
  );
}
