import { Metadata } from 'next';
import PageHeaderBanner from '@/components/ui/PageHeaderBanner';
import TestimoniosContent from '@/components/testimonios/TestimoniosContent';

export const metadata: Metadata = {
  alternates: { canonical: "/testimonios" },
  title: 'Testimonios de Pacientes y Familias',
  description: 'Opiniones de familias que confiaron en FisioSphere: fisioterapia para bebés, niños, adulto mayor y psicología infantil a domicilio en Lima.',
};

export default function TestimoniosPage() {
  return (
    <div className="min-h-screen bg-neutral-50 pb-20">
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
    </div>
  );
}
