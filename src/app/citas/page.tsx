import type { Metadata } from 'next';
import CitasContent from '@/components/citas/CitasContent';
import PageHeaderBanner from '@/components/ui/PageHeaderBanner';

export const metadata: Metadata = {
  title: 'Reservar Cita | Clínica FisioSphere',
  description: 'Reserva tu cita de fisioterapia fácilmente online. Elige el servicio, fecha y hora que mejor se adapte a ti.',
};

export default function CitasPage() {
  return (
    <main className="min-h-screen bg-neutral-50 pb-16">
      {/* Banner Oficial Fisiosphere te acompaña */}
      <PageHeaderBanner
        bannerImage="/te-acompana-2.png"
        badge="Reserva Rápida y Personalizada"
        title={
          <>
            Agenda tu <span className="gradient-text">Cita de Fisioterapia</span>
          </>
        }
        subtitle="Elige la especialidad, fecha y modalidad (a domicilio o consultorio acondicionado) que mejor se adapte a tus necesidades."
        breadcrumbs={[
          { label: 'Inicio', href: '/' },
          { label: 'Reservar Cita', href: '/citas' },
        ]}
      />

      <div className="container mx-auto px-4 pt-10">
        <CitasContent />
      </div>
    </main>
  );
}
