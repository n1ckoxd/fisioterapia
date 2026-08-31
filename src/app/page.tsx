import { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import BeneficiosSection from '@/components/home/BeneficiosSection';
import ServiciosSection from '@/components/home/ServiciosSection';
import TestimoniosSection from '@/components/home/TestimoniosSection';
import FAQSection from '@/components/home/FAQSection';
import CTASection from '@/components/home/CTASection';
import MapaSection from '@/components/home/MapaSection';
import { LocalBusinessSchema, FAQSchema } from '@/components/seo/JsonLd';
import { faqsGenerales } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Fisioterapia Profesional en Lima | Clínica FisioSphere',
  description: 'Clínica de fisioterapia en Lima especializada en tratamiento del dolor, rehabilitación deportiva y osteopatía. Recupera tu bienestar con FisioSphere.',
  openGraph: {
    title: 'Fisioterapia Profesional en Lima | Clínica FisioSphere',
    description: 'Recupera tu movilidad y dile adiós al dolor con nuestros tratamientos personalizados.',
    type: 'website',
    locale: 'es_ES',
    url: 'https://fisiosphere.pe'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clínica FisioSphere - Fisioterapia en Lima',
    description: 'Tratamientos personalizados para tu recuperación.'
  }
};

export default function Home() {
  return (
    <main>
      <LocalBusinessSchema />
      <FAQSchema faqs={faqsGenerales} />
      
      <HeroSection />
      <BeneficiosSection />
      <ServiciosSection />
      <TestimoniosSection />
      <FAQSection />
      <CTASection />
      <MapaSection />
    </main>
  );
}
