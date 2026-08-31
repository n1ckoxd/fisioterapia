import type { Metadata } from 'next';
import CitasContent from '@/components/citas/CitasContent';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Reservar Cita | Clínica de Fisioterapia',
  description: 'Reserva tu cita de fisioterapia fácilmente online. Elige el servicio, fecha y hora que mejor se adapte a ti.',
};

export default function CitasPage() {
  return (
    <main className="min-h-screen bg-neutral-50 pb-12">
      <div className="container mx-auto px-4 pt-6 pb-2">
        <Breadcrumbs 
          items={[
            { label: 'Inicio', href: '/' },
            { label: 'Reservar Cita', href: '/citas' },
          ]} 
        />
      </div>
      <CitasContent />
    </main>
  );
}
