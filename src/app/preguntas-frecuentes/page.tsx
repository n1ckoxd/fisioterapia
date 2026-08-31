import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { FAQSchema } from '@/components/seo/JsonLd';
import { faqsGenerales } from '@/lib/data';
import FAQPageContent from '@/components/faq/FAQPageContent';

export const metadata: Metadata = {
  title: 'Preguntas Frecuentes | Clínica de Fisioterapia',
  description: 'Respuestas a las dudas más comunes sobre nuestros tratamientos, citas y servicios de fisioterapia.',
};

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-neutral-50 pb-20">
      <FAQSchema faqs={faqsGenerales} />
      
      <div className="pt-24 pb-8 bg-white border-b border-neutral-100">
        <div className="container mx-auto px-4">
          <Breadcrumbs 
            items={[
              { label: 'Inicio', href: '/' },
              { label: 'Preguntas Frecuentes', href: '/preguntas-frecuentes' }
            ]} 
          />
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mt-6 mb-4">
            Preguntas Frecuentes
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl">
            Resolvemos tus dudas principales para que vengas a tu sesión con total tranquilidad.
          </p>
        </div>
      </div>
      
      <FAQPageContent />
    </main>
  );
}
