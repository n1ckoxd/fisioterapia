import type { Metadata } from 'next';
import ContactoContent from '@/components/contacto/ContactoContent';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Contacto | Clínica de Fisioterapia',
  description: 'Ponte en contacto con nuestra clínica de fisioterapia. Estamos aquí para ayudarte a mejorar tu salud y bienestar.',
};

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-neutral-50 py-12">
      <div className="container mx-auto px-4">
        <Breadcrumbs 
          items={[
            { label: 'Inicio', href: '/' },
            { label: 'Contacto', href: '/contacto' },
          ]} 
        />
        <div className="mt-8 text-center mb-12">
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">Contáctanos</h1>
          <p className="text-neutral-600 max-w-2xl mx-auto">Estamos listos para ayudarte. Envíanos un mensaje o visítanos.</p>
        </div>
          <ContactoContent />
      </div>
    </main>
  );
}
