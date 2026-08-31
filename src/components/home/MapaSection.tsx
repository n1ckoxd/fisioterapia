import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { empresaInfo } from '@/lib/data';

export default function MapaSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Encuéntranos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Visítanos en nuestra clínica, estamos para ayudarte.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-center">
          {/* Info */}
          <div className="space-y-8 p-8 bg-gray-50 rounded-3xl">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">Dirección</h3>
                <p className="text-gray-600">{empresaInfo.direccion}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">Teléfono</h3>
                <p className="text-gray-600">{empresaInfo.telefonoDisplay}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">Correo Electrónico</h3>
                <p className="text-gray-600">{empresaInfo.email}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">Horario</h3>
                <p className="text-gray-600">{empresaInfo.horario}</p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-[500px] w-full rounded-3xl overflow-hidden shadow-lg border border-gray-100">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.604245648554!2d-3.7037901846039535!3d40.41677537936495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42287c10b7bdfd%3A0x6b4495e5b30b42c6!2sPuerta%20del%20Sol!5e0!3m2!1ses!2ses!4v1680190538964!5m2!1ses!2ses" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
