import Link from 'next/link';

export default function LinksPage() {
  return (
    <div className="min-h-screen bg-black text-white flex justify-center pb-12">
      <div className="w-full max-w-md text-center">
        
        {/* 1. Portada Superior */}
        <div className="relative w-full h-44 rounded-b-2xl overflow-hidden bg-zinc-800">
          <img 
            src="/banner.jpg" 
            alt="FisioSphere Portada" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* 2. Logo Circular */}
        <div className="-mt-12 mb-4 flex justify-center">
          <div className="w-24 h-24 rounded-full border-4 border-black overflow-hidden bg-zinc-900 shadow-xl">
            <img 
              src="/logo.jpg" 
              alt="FisioSphere Logo" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* 3. Información / Bio */}
        <h1 className="text-2xl font-bold tracking-tight mb-2">FisioSphere</h1>
        
        <p className="text-sm text-zinc-300 px-6 leading-relaxed mb-3">
          Servicio de Fisioterapia y Terapia Física Integral. Atención profesional para tu salud y bienestar físico: rehabilitación, terapia del dolor y recuperación motora.
        </p>
        
        <p className="text-xs text-zinc-400 mb-2">
          📍 Atención en consultorio y a domicilio.
        </p>

        <p className="text-sm font-semibold text-white mb-6 flex items-center justify-center gap-1">
          .Whatsapp 📲 950336239
        </p>

        {/* 4. Botones Cápsula Blancos */}
        <div className="px-6 space-y-3">
          
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
  );
}