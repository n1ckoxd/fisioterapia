import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { Analytics } from "@/components/seo/Analytics";

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
  metadataBase: new URL("https://www.fisiosphere.pe"),
  title: {
    default: "Clínica de Fisioterapia FisioSphere | Lima",
    template: "%s | Clínica FisioSphere",
  },
  description:
    "Clínica de fisioterapia en Lima. Tratamientos personalizados de fisioterapia deportiva, rehabilitación, dolor lumbar, cervical y más. Reserva tu cita.",
  keywords: [
    "fisioterapia Lima",
    "fisioterapeuta Lima",
    "clínica fisioterapia",
    "rehabilitación",
    "dolor lumbar",
    "dolor cervical",
    "fisioterapia deportiva",
    "punción seca",
    "terapia manual",
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
    locale: "es_ES",
    url: "https://www.fisiosphere.pe",
    siteName: "Clínica FisioSphere",
    title: "Clínica de Fisioterapia FisioSphere | Lima",
    description:
      "Clínica de fisioterapia en Lima. Tratamientos personalizados de fisioterapia deportiva, rehabilitación, dolor lumbar, cervical y más.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clínica de Fisioterapia FisioSphere | Lima",
    description:
      "Clínica de fisioterapia en Lima. Tratamientos personalizados.",
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
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  );
}
