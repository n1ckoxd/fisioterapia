'use client';

import { Home as HomeIcon, Building2, MapPin, MessageCircle, Clock, CheckCircle2 } from 'lucide-react';
import { empresaInfo } from '@/lib/data';

export default function MapaSection() {
  const distritos = [
    'San Isidro',
    'Miraflores',
    'Santiago de Surco',
    'San Borja',
    'La Molina',
    'Jesús María',
    'Magdalena del Mar',
    'Lince',
    'San Miguel',
  ];

  return (
    <section className="py-20 bg-white" id="cobertura">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-100 text-primary-800 text-sm font-semibold mb-4">
            <MapPin size={16} /> Cobertura y Modalidades
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            ¿Cómo y dónde te atendemos en <span className="gradient-text">Lima</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nos adaptamos a tu comodidad: servicio terapéutico a domicilio VIP en tu hogar o en consultorios acondicionados céntricos previa cita.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-7xl mx-auto items-stretch">
          {/* Modalidades Info */}
          <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
            {/* Tarjeta 1: A Domicilio VIP */}
            <div className="p-6 sm:p-8 bg-gradient-to-br from-primary-50/70 to-white rounded-3xl border border-primary-100 shadow-sm relative overflow-hidden">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-500 text-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md">
                  <HomeIcon size={24} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <h3 className="text-xl font-bold text-gray-900">Servicio a Domicilio VIP</h3>
                    <span className="bg-accent/20 text-teal-800 text-xs font-bold px-2.5 py-0.5 rounded-full">
                      Más Solicitado
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-3">
                    Pensado especialmente para <strong>padres con niños pequeños</strong> y <strong>familiares de adultos mayores</strong>. Les evita el tráfico pesado de Lima y el estrés del traslado. Nuestro equipo asiste a tu hogar con todos los implementos y camillas necesarias para una sesión completa.
                  </p>
                  <div className="flex items-center gap-4 text-xs font-medium text-primary-700">
                    <span className="inline-flex items-center gap-1">
                      <CheckCircle2 size={14} /> Sin desplazamientos
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <CheckCircle2 size={14} /> Equipamiento completo
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tarjeta 2: Consultorios Acondicionados */}
            <div className="p-6 sm:p-8 bg-neutral-50 rounded-3xl border border-neutral-200/80 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white text-neutral-800 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm border border-neutral-200">
                  <Building2 size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Consultorios Acondicionados</h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    Si prefieres una atención externa, disponemos de consultorios privados, confortables y completamente equipados en <strong>puntos céntricos de Lima</strong> previa coordinación de cita.
                  </p>
                </div>
              </div>
            </div>

            {/* Tarjeta 3: Distritos de Cobertura */}
            <div className="p-6 bg-white rounded-3xl border border-neutral-100 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <MapPin size={18} className="text-primary-600" />
                <h4 className="font-bold text-gray-900 text-sm">Zonas de Cobertura en Lima Metropolitana:</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {distritos.map((distrito) => (
                  <span
                    key={distrito}
                    className="bg-neutral-100 text-neutral-700 text-xs font-medium px-3 py-1.5 rounded-xl"
                  >
                    {distrito}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA WhatsApp directo */}
            <div>
              <a
                href={empresaInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full flex items-center justify-center gap-3 py-4 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                <MessageCircle size={22} />
                Coordinar Cita a Domicilio o Consultorio
              </a>
              <div className="flex items-center justify-center gap-6 mt-3 text-xs text-gray-500">
                <span className="inline-flex items-center gap-1">
                  <Clock size={14} /> {empresaInfo.horario}
                </span>
                <span>📞 {empresaInfo.telefonoDisplay}</span>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-6 h-[460px] lg:h-auto min-h-[420px] w-full rounded-3xl overflow-hidden shadow-lg border border-gray-200 relative">
            <iframe
              src={empresaInfo.googleMapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Área de Cobertura FisioSphere Lima"
            />
            {/* Card flotante en el mapa */}
            <div className="absolute top-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-md border border-neutral-200 text-sm">
              <div className="flex items-center gap-2 mb-1">
                <span className="flex h-2 w-2 rounded-full bg-success"></span>
                <span className="font-bold text-neutral-900">Cobertura Activa</span>
              </div>
              <p className="text-xs text-neutral-600">
                Atendemos en Lima Metropolitana: visitas a domicilio y consultorios previa cita.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
