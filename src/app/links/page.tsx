import Link from 'next/link';
import { Metadata } from 'next';

// Forzamos los metadatos con la dirección URL directa y completa de la imagen
export const metadata: Metadata = {
  title: 'FisioSphere | Reserva tu cita',
  description: 'Atención en consultorio y a domicilio. Fisioterapia y Rehabilitación.',
  openGraph: {
    title: 'FisioSphere | Reserva tu cita',
    description: 'Atención en consultorio y a domicilio. Fisioterapia y Rehabilitación.',
    url: 'https://fisiosphere.netlify.app/links',
    siteName: 'FisioSphere',
    images: [
      {
        url: 'https://fisiosphere.netlify.app/portadalinks.png', // URL absoluta directa
        width: 1200,
        height: 630,
        alt: 'FisioSphere Portada',
      },
    ],
    locale: 'es_PE',
    type: 'website',
  },
};

export default function LinksPage() {
  return (
    <>
      <style>{`
        header, footer, nav { display: none !important; }
      `}</style>

      <div className="min-h-screen bg-black text-white flex justify-center pb-12 w-full pt-6">
        <div className="w-full max-w-md text-center px-4">
          
          {/* Portada */}
          <div className="relative w-full h-44 rounded-2xl overflow-hidden bg-zinc-800 border border-zinc-800">
            <img 
              src="/portadalinks.png" 
              alt="FisioSphere Portada" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Logo */}
          <div className="-mt-12 mb-4 flex justify-center relative z-10">
            <div className="w-24 h-24 rounded-full border-4 border-black overflow-hidden bg-zinc-900 shadow-xl">
              <img 
                src="/logo.jpg" 
                alt="FisioSphere Logo" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Información */}
          <h1 className="text-2xl font-bold tracking-tight mb-2">FisioSphere</h1>
          
          <p className="text-sm text-zinc-300 px-4 leading-relaxed mb-3">
            Servicio de Fisioterapia y Terapia Física Integral. Atención profesional para tu salud y bienestar físico: rehabilitación, terapia del dolor y recuperación motora.
          </p>
          
          <p className="text-xs text-zinc-400 mb-2">
            📍 Atención en consultorio y a domicilio.
          </p>

          <p className="text-sm font-semibold text-white mb-6 flex items-center justify-center gap-1">
            .Whatsapp 📲 950336239
          </p>

          {/* Botones */}
          <div className="space-y-3">
            <a
              href="https://wa.me/51950336239"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full py-3.5 px-6 bg-white text-black font-bold text-sm rounded-full transition-transform active:scale-95 shadow-md"
            >
              WHATSAPP (Agendar Cita)
            </a>

            <a
              href="https://instagram.com/Fisiosphere.peru"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full py-3.5 px-6 bg-white text-black font-bold text-sm rounded-full transition-transform active:scale-95 shadow-md"
            >
              INSTAGRAM
            </a>

            <Link
              href="/"
              className="flex items-center justify-center w-full py-3.5 px-6 bg-white text-black font-bold text-sm rounded-full transition-transform active:scale-95 shadow-md"
            >
              SITIO WEB OFICIAL
            </Link>

            <a
              href="https://wa.me/51950336239?text=Hola,%20deseo%20informacion%20sobre%20terapia%20a%20domicilio"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full py-3.5 px-6 bg-white text-black font-bold text-sm rounded-full transition-transform active:scale-95 shadow-md"
            >
              TERAPIA A DOMICILIO
            </a>
          </div>

        </div>
      </div>
    </>
  );
}