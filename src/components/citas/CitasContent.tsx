'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { CheckCircle, MessageCircle, Info } from 'lucide-react';
import { servicios, empresaInfo } from '@/lib/data';

const citaSchema = z.object({
  nombre: z.string().min(2, { message: 'El nombre debe tener al menos 2 caracteres' }),
  telefono: z.string().min(9, { message: 'El teléfono debe tener al menos 9 caracteres' }),
  email: z.string().email({ message: 'Correo electrónico inválido' }),
  servicio: z.string().min(1, { message: 'Por favor selecciona un servicio' }),
  fecha: z.string().min(1, { message: 'Por favor selecciona una fecha' }),
  hora: z.string().min(1, { message: 'Por favor selecciona una hora' }),
  observaciones: z.string().optional(),
});

type CitaFormValues = z.infer<typeof citaSchema>;

export default function CitasContent() {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CitaFormValues>({
    resolver: zodResolver(citaSchema),
  });

  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: CitaFormValues) => {
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const formData = new FormData();
      formData.append('nombre', data.nombre);
      formData.append('telefono', data.telefono);
      formData.append('email', data.email);
      formData.append('servicio', data.servicio);
      formData.append('fecha', data.fecha);
      formData.append('hora', data.hora);
      if (data.observaciones) {
        formData.append('observaciones', data.observaciones);
      }

      const { submitCitaAction } = await import('@/app/actions/citas');
      const result = await submitCitaAction(null, formData);

      if (result.error) {
        setSubmitError(result.error);
      } else {
        setIsSuccess(true);
        reset();
      }
    } catch {
      setSubmitError('Ocurrió un error inesperado al solicitar la cita.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-900 to-primary-700 pt-32 pb-16 mb-12">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Reserva tu Cita
          </motion.h1>
          <motion.p 
            className="text-primary-100 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Da el primer paso hacia tu recuperación. Rellena el formulario y nos pondremos en contacto contigo para confirmar tu cita.
          </motion.p>
        </div>
      </section>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Form Area */}
          <motion.div 
            className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-md border border-neutral-100"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <CheckCircle className="w-20 h-20 text-success mb-6" />
                <h2 className="text-3xl font-bold text-neutral-900 mb-4">¡Solicitud recibida!</h2>
                <p className="text-lg text-neutral-600 mb-8 max-w-md">
                  Hemos recibido tu solicitud de cita. Nos pondremos en contacto contigo a la brevedad para confirmar la disponibilidad.
                </p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="px-6 py-2 rounded-lg font-medium text-primary-600 bg-primary-50 hover:bg-primary-100 transition-colors border border-primary-200"
                >
                  Reservar otra cita
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Nombre */}
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-neutral-700 mb-1">
                      Nombre completo *
                    </label>
                    <input
                      id="nombre"
                      type="text"
                      placeholder="Ej. Juan Pérez"
                      className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-primary-500 transition-shadow ${
                        errors.nombre ? 'border-error focus:ring-error' : 'border-neutral-200'
                      }`}
                      {...register('nombre')}
                    />
                    {errors.nombre && <p className="mt-1 text-sm text-error">{errors.nombre.message}</p>}
                  </div>

                  {/* Teléfono */}
                  <div>
                    <label htmlFor="telefono" className="block text-sm font-medium text-neutral-700 mb-1">
                      Teléfono *
                    </label>
                    <input
                      id="telefono"
                      type="tel"
                      placeholder="Tu número de contacto"
                      className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-primary-500 transition-shadow ${
                        errors.telefono ? 'border-error focus:ring-error' : 'border-neutral-200'
                      }`}
                      {...register('telefono')}
                    />
                    {errors.telefono && <p className="mt-1 text-sm text-error">{errors.telefono.message}</p>}
                  </div>

                  {/* Email */}
                  <div className="md:col-span-2">
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                      Correo electrónico *
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                      className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-primary-500 transition-shadow ${
                        errors.email ? 'border-error focus:ring-error' : 'border-neutral-200'
                      }`}
                      {...register('email')}
                    />
                    {errors.email && <p className="mt-1 text-sm text-error">{errors.email.message}</p>}
                  </div>

                  {/* Servicio */}
                  <div className="md:col-span-2">
                    <label htmlFor="servicio" className="block text-sm font-medium text-neutral-700 mb-1">
                      Servicio de interés *
                    </label>
                    <select
                      id="servicio"
                      className={`w-full px-4 py-3 rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-shadow ${
                        errors.servicio ? 'border-error focus:ring-error' : 'border-neutral-200'
                      }`}
                      {...register('servicio')}
                    >
                      <option value="">Selecciona un servicio</option>
                      {servicios.map((s) => (
                        <option key={s.slug} value={s.slug}>
                          {s.nombre}
                        </option>
                      ))}
                    </select>
                    {errors.servicio && <p className="mt-1 text-sm text-error">{errors.servicio.message}</p>}
                  </div>

                  {/* Fecha */}
                  <div>
                    <label htmlFor="fecha" className="block text-sm font-medium text-neutral-700 mb-1">
                      Fecha preferida *
                    </label>
                    <input
                      id="fecha"
                      type="date"
                      className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-primary-500 transition-shadow ${
                        errors.fecha ? 'border-error focus:ring-error' : 'border-neutral-200'
                      }`}
                      {...register('fecha')}
                    />
                    {errors.fecha && <p className="mt-1 text-sm text-error">{errors.fecha.message}</p>}
                  </div>

                  {/* Hora */}
                  <div>
                    <label htmlFor="hora" className="block text-sm font-medium text-neutral-700 mb-1">
                      Hora preferida *
                    </label>
                    <input
                      id="hora"
                      type="time"
                      className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-primary-500 transition-shadow ${
                        errors.hora ? 'border-error focus:ring-error' : 'border-neutral-200'
                      }`}
                      {...register('hora')}
                    />
                    {errors.hora && <p className="mt-1 text-sm text-error">{errors.hora.message}</p>}
                  </div>

                  {/* Observaciones */}
                  <div className="md:col-span-2">
                    <label htmlFor="observaciones" className="block text-sm font-medium text-neutral-700 mb-1">
                      Observaciones (Opcional)
                    </label>
                    <textarea
                      id="observaciones"
                      rows={3}
                      placeholder="Detalles adicionales, dolencias específicas..."
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-shadow"
                      {...register('observaciones')}
                    ></textarea>
                  </div>
                </div>

                {submitError && (
                  <div className="md:col-span-2 bg-red-50 text-red-600 p-3 rounded-xl text-sm mb-4">
                    {submitError}
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary py-4 rounded-xl font-bold text-white bg-primary-600 hover:bg-primary-700 text-lg shadow-md transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? 'Solicitando...' : 'Solicitar Cita'}
                </button>
              </form>
            )}
          </motion.div>

          {/* Side Panel */}
          <motion.div 
            className="lg:col-span-1 space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {/* WhatsApp Card */}
            <div className="bg-gradient-to-br from-[#128C7E] to-[#075E54] p-6 rounded-2xl shadow-md text-white">
              <div className="flex items-center space-x-3 mb-4">
                <MessageCircle className="w-8 h-8" />
                <h3 className="text-xl font-bold">¿Prefieres WhatsApp?</h3>
              </div>
              <p className="mb-6 text-white/90">
                También puedes reservar tu cita o hacer consultas rápidas directamente por WhatsApp.
              </p>
              <a 
                href={empresaInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-white text-[#128C7E] font-bold py-3 rounded-xl hover:bg-neutral-50 transition-colors"
              >
                Escribir por WhatsApp
              </a>
            </div>

            {/* Info Card */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-100">
              <div className="flex items-center space-x-2 mb-4 text-primary-600">
                <Info className="w-6 h-6" />
                <h3 className="text-lg font-bold text-neutral-900">Información Importante</h3>
              </div>
              <ul className="space-y-4 text-sm text-neutral-600">
                <li>
                  <strong className="block text-neutral-800">Horario de atención:</strong>
                  {empresaInfo.horario}
                </li>
                <li>
                  <strong className="block text-neutral-800">Ubicación:</strong>
                  {empresaInfo.direccion}, {empresaInfo.ciudad}
                </li>
                <li>
                  <strong className="block text-neutral-800">Cancelaciones:</strong>
                  Por favor, avisa con al menos 24h de antelación si no puedes asistir.
                </li>
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </>
  );
}
