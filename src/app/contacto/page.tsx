import type { Metadata } from 'next';
import ContactoContent from '@/components/contacto/ContactoContent';
import PageHeaderBanner from '@/components/ui/PageHeaderBanner';
import { LocalBusinessSchema } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  alternates: { canonical: "/contacto" },
  title: 'Contacto y Ubicación en Jesús María',
  description: 'Contacta a FisioSphere: WhatsApp 950 332 639, sede en Av. General Garzón 2318, Jesús María, y atención a domicilio en Lima. Horario de lunes a sábado.',
};

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-neutral-50 pb-16">
      <LocalBusinessSchema />
      {/* Banner Oficial Fisiosphere te acompaña */}
      <PageHeaderBanner
        bannerImage="/te-acompana-1.png"
        badge="Atención Inmediata en Lima"
        title={
          <>
            Ponte en <span className="gradient-text">Contacto con Nosotros</span>
          </>
        }
        subtitle="Te atendemos a domicilio en Lima o en nuestra sede de Av. General Garzón 2318, Jesús María. Escríbenos por WhatsApp o envíanos un mensaje."
        breadcrumbs={[
          { label: 'Inicio', href: '/' },
          { label: 'Contacto', href: '/contacto' },
        ]}
      />

      <div className="container mx-auto px-4 pt-12">
        <ContactoContent />
      </div>
    </div>
  );
}
