import { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import EspecialidadesCircularesSection from '@/components/home/EspecialidadesCircularesSection';
import BeneficiosSection from '@/components/home/BeneficiosSection';
import ServiciosSection from '@/components/home/ServiciosSection';
import TestimoniosSection from '@/components/home/TestimoniosSection';
import FAQSection from '@/components/home/FAQSection';
import CTASection from '@/components/home/CTASection';
import MapaSection from '@/components/home/MapaSection';
import { LocalBusinessSchema } from '@/components/seo/JsonLd';

import SocialVideosSection from '@/components/home/SocialVideosSection';
import BebesSection from '@/components/home/BebesSection';
import CoberturaMarquee from '@/components/home/CoberturaMarquee';
import ComoFuncionaSection from '@/components/home/ComoFuncionaSection';
import BlogPreviewSection from '@/components/home/BlogPreviewSection';
import WelcomeFlyerModal from '@/components/ui/WelcomeFlyerModal';

export const metadata: Metadata = {
  title: { absolute: 'Fisioterapia para Bebés a Domicilio en Lima | Estimulación Temprana - FisioSphere' },
  description: 'Fisioterapia del desarrollo motor y atención temprana para bebés de 0 a 12 meses a domicilio en Lima. Fisioterapia neurológica pediátrica (0 a 14 años): PCI, autismo y displasia de cadera. También geriatría y psicología infantil.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Fisioterapia para Bebés a Domicilio en Lima | FisioSphere',
    description: 'Desarrollo motor y atención temprana para bebés de 0 a 12 meses, fisioterapia neurológica pediátrica (0 a 14 años), geriátrica y psicología infantil a domicilio en Lima.',
    type: 'website',
    locale: 'es_PE',
    url: '/'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fisioterapia para Bebés a Domicilio en Lima | FisioSphere',
    description: 'Desarrollo motor y atención temprana para bebés, fisioterapia neurológica pediátrica, geriátrica y psicología infantil.'
  }
};

export default function Home() {
  return (
    <>
      <LocalBusinessSchema />
      
      <HeroSection />
      <CoberturaMarquee />
      <BebesSection />
      <EspecialidadesCircularesSection />
      <ComoFuncionaSection />
      <BeneficiosSection />
      <TestimoniosSection />
      <BlogPreviewSection />
      <ServiciosSection />
      <SocialVideosSection />
      <FAQSection />
      <CTASection />
      <MapaSection />
      <WelcomeFlyerModal />
    </>
  );
}
