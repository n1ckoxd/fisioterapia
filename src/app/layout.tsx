import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { Analytics } from "@/components/seo/Analytics";
import { SiteSchema } from "@/components/seo/JsonLd";
import PageTransition from "@/components/ui/PageTransition";
import { empresaInfo } from "@/lib/data";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(empresaInfo.url),
  title: {
    default: "FisioSphere | Fisioterapia a Domicilio en Lima para Bebés, Niños y Adultos Mayores",
    template: "%s | Clínica FisioSphere",
  },
  description:
    "Fisioterapia a domicilio en Lima especializada en bebés de 0 a 12 meses: estimulación temprana, tortícolis y plagiocefalia. También fisioterapia pediátrica, geriátrica, neurológica y psicología infantil. Sede en Jesús María.",
  keywords: [
    "fisioterapia para bebés Lima",
    "estimulación temprana a domicilio Lima",
    "fisioterapia a domicilio Lima",
    "fisioterapia pediátrica Lima",
    "fisioterapia geriátrica a domicilio",
    "terapia física adulto mayor Lima",
    "psicología infantil Lima",
    "terapia psicopedagógica Lima",
    "fisioterapia Jesús María",
    "fisioterapia neurológica Lima",
    "tortícolis congénita bebé",
    "plagiocefalia bebé",
  ],
  authors: [{ name: "Clínica FisioSphere" }],
  creator: "Clínica FisioSphere",
  publisher: "Clínica FisioSphere",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: empresaInfo.url,
    siteName: "Clínica FisioSphere",
    title: "FisioSphere | Fisioterapia a Domicilio en Lima",
    description:
      "Fisioterapia a domicilio en Lima para bebés de 0 a 12 meses, niños y adultos mayores. Estimulación temprana, neurodesarrollo y psicología infantil.",
  },
  twitter: {
    card: "summary_large_image",
    title: "FisioSphere | Fisioterapia a Domicilio en Lima",
    description:
      "Fisioterapia para bebés, niños y adultos mayores a domicilio en Lima.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION } }
    : {}),
  category: "health",
};

export const viewport: Viewport = {
  themeColor: "#C026D3",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es-PE"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col">
        <a href="#contenido" className="skip-link">Saltar al contenido</a>
        <SiteSchema />
        <Header />
        <main id="contenido" className="flex-1">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  );
}
