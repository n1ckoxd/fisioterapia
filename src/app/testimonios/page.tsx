import { Metadata } from 'next';
import PageHeaderBanner from '@/components/ui/PageHeaderBanner';
import TestimoniosContent from '@/components/testimonios/TestimoniosContent';

export const metadata: Metadata = {
  title: 'Testimonios | Clínica FisioSphere',
  description: 'Descubre lo que nuestros pacientes dicen sobre nuestros tratamientos y servicios de fisioterapia.',
};

export default function TestimoniosPage() {
  return (
    <main className="min-h-screen bg-neutral-50 pb-20">
      {/* Banner Oficial Fisiosphere te acompaña */}
      <PageHeaderBanner
        bannerImage="/te-acompana-2.png"
        badge="Opiniones y Experiencias Reales"
        title={
          <>
            Testimonios de <span className="gradient-text">Nuestros Pacientes</span>
          </>
        }
        subtitle="La salud y recuperación de nuestros pacientes y sus familias es nuestra mayor prioridad. Lee sobre sus historias de bienestar con FisioSphere."
        breadcrumbs={[
          { label: 'Inicio', href: '/' },
          { label: 'Testimonios', href: '/testimonios' },
        ]}
      />
      
      <div className="pt-8">
        <TestimoniosContent />
      </div>
    </main>
  );
}
