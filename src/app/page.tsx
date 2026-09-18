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

import SocialVideosSection from '@/components/home/SocialVideosSection';
import WelcomeFlyerModal from '@/components/ui/WelcomeFlyerModal';

export const metadata: Metadata = {
  title: 'Fisioterapia en Lima | Clínica FisioSphere - San Isidro',
  description: 'Clínica de fisioterapia y rehabilitación en Lima (San Isidro). Especialistas en fisioterapia pediátrica, geriátrica, terapia psicopedagógica y alivio del dolor.',
  openGraph: {
    title: 'Fisioterapia en Lima | Clínica FisioSphere',
    description: 'Especialistas en fisioterapia pediátrica, geriátrica, terapia psicopedagógica y rehabilitación física en Lima.',
    type: 'website',
    locale: 'es_PE',
    url: 'https://www.fisiosphere.pe'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clínica FisioSphere - Fisioterapia en Lima',
    description: 'Fisioterapia pediátrica, geriátrica, terapia psicopedagógica y rehabilitación física.'
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
      <SocialVideosSection />
      <TestimoniosSection />
      <FAQSection />
      <CTASection />
      <MapaSection />
      <WelcomeFlyerModal />
    </main>
  );
}
