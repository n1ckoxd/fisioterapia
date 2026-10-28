import type { Metadata } from 'next';
import ContactoContent from '@/components/contacto/ContactoContent';
import PageHeaderBanner from '@/components/ui/PageHeaderBanner';

export const metadata: Metadata = {
  title: 'Contacto | Clínica FisioSphere',
  description: 'Ponte en contacto con nuestra clínica de fisioterapia. Estamos aquí para ayudarte a mejorar tu salud y bienestar.',
};

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-neutral-50 pb-16">
      {/* Banner Oficial Fisiosphere te acompaña */}
      <PageHeaderBanner
        bannerImage="/te-acompana-1.png"
        badge="Atención Inmediata en Lima"
        title={
          <>
            Ponte en <span className="gradient-text">Contacto con Nosotros</span>
          </>
        }
        subtitle="Estamos listos para atenderte a domicilio o en consultorios acondicionados en puntos céntricos. Envíanos un mensaje o escríbenos por WhatsApp."
        breadcrumbs={[
          { label: 'Inicio', href: '/' },
          { label: 'Contacto', href: '/contacto' },
        ]}
      />

      <div className="container mx-auto px-4 pt-12">
        <ContactoContent />
      </div>
    </main>
  );
}
