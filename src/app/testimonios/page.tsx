import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import TestimoniosContent from '@/components/testimonios/TestimoniosContent';

export const metadata: Metadata = {
  title: 'Testimonios | Clínica de Fisioterapia',
  description: 'Descubre lo que nuestros pacientes dicen sobre nuestros tratamientos y servicios de fisioterapia.',
};

export default function TestimoniosPage() {
  return (
    <main className="min-h-screen bg-neutral-50 pb-20">
      <div className="pb-8 bg-white border-b border-neutral-100">
        <div className="container mx-auto px-4">
          <Breadcrumbs 
            items={[
              { label: 'Inicio', href: '/' },
              { label: 'Testimonios', href: '/testimonios' }
            ]} 
          />
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mt-6 mb-4">
              Testimonios de Pacientes
            </h1>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              La salud y recuperación de nuestros pacientes es nuestra mayor prioridad. Lee sobre sus experiencias con nosotros.
            </p>
          </div>
        </div>
      </div>
      
      <TestimoniosContent />
    </main>
  );
}
