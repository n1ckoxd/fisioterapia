import Link from 'next/link';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { empresaInfo, servicios } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300 pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Información de la Empresa */}
          <div>
            <Link href="/" className="text-2xl font-bold text-white mb-6 block">
              {empresaInfo.nombre}
            </Link>
            <p className="mb-6 leading-relaxed text-neutral-400">
              Recupera tu movilidad y vive sin dolor. Somos especialistas en fisioterapia deportiva y traumatológica, brindando atención personalizada y de calidad.
            </p>
            <div className="flex space-x-4">
              {empresaInfo.redesSociales?.instagram && (
                <a href={empresaInfo.redesSociales.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Instagram">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                </a>
              )}
            </div>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-4">
              <li><Link href="/" className="hover:text-primary-400 transition-colors">Inicio</Link></li>
              <li><Link href="/nosotros" className="hover:text-primary-400 transition-colors">Nosotros</Link></li>
              <li><Link href="/testimonios" className="hover:text-primary-400 transition-colors">Testimonios</Link></li>
              <li><Link href="/blog" className="hover:text-primary-400 transition-colors">Blog</Link></li>
              <li><Link href="/contacto" className="hover:text-primary-400 transition-colors">Contacto</Link></li>
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Servicios</h3>
            <ul className="space-y-4">
              {servicios.slice(0, 6).map((servicio) => (
                <li key={servicio.slug}>
                  <Link href={`/servicios/${servicio.slug}`} className="hover:text-primary-400 transition-colors">
                    {servicio.nombre}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 text-primary-500 shrink-0" />
                <span>{empresaInfo.direccion}, {empresaInfo.ciudad}</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-primary-500 shrink-0" />
                <a href={`tel:${empresaInfo.telefono}`} className="hover:text-primary-400 transition-colors">
                  {empresaInfo.telefonoDisplay}
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-primary-500 shrink-0" />
                <a href={`mailto:${empresaInfo.email}`} className="hover:text-primary-400 transition-colors">
                  {empresaInfo.email}
                </a>
              </li>
              <li className="flex items-start">
                <Clock className="w-5 h-5 mr-3 mt-1 text-primary-500 shrink-0" />
                <span className="whitespace-pre-line">{empresaInfo.horario}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} {empresaInfo.nombreCompleto}. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link href="/privacidad" className="hover:text-white transition-colors">Política de Privacidad</Link>
            <Link href="/terminos" className="hover:text-white transition-colors">Términos de Servicio</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
