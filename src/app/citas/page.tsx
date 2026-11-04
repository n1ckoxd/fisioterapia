import type { Metadata } from 'next';
import CitasContent from '@/components/citas/CitasContent';
import PageHeaderBanner from '@/components/ui/PageHeaderBanner';

export const metadata: Metadata = {
  alternates: { canonical: "/citas" },
  title: 'Reservar Cita de Fisioterapia a Domicilio',
  description: 'Reserva tu cita de fisioterapia en Lima: a domicilio o en nuestra sede de Jesús María. Elige el servicio, la fecha y la hora, y te confirmamos por WhatsApp.',
};

export default function CitasPage() {
  return (
    <div className="min-h-screen bg-neutral-50 pb-16">
      {/* Banner Oficial Fisiosphere te acompaña */}
      <PageHeaderBanner
        bannerImage="/te-acompana-2.png"
        badge="Reserva Rápida y Personalizada"
        title={
          <>
            Agenda tu <span className="gradient-text">Cita de Fisioterapia</span>
          </>
        }
        subtitle="Elige la especialidad, la fecha y la modalidad (a domicilio, en sede u online) que mejor se adapte a tu familia."
        breadcrumbs={[
          { label: 'Inicio', href: '/' },
          { label: 'Reservar Cita', href: '/citas' },
        ]}
      />

      <div className="container mx-auto px-4 pt-10">
        <CitasContent />
      </div>
    </div>
  );
}
