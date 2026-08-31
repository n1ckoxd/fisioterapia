'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react';
import { empresaInfo } from '@/lib/data';

const contactSchema = z.object({
  nombre: z.string().min(2, { message: 'El nombre debe tener al menos 2 caracteres' }),
  email: z.string().email({ message: 'Correo electrónico inválido' }),
  telefono: z.string().min(9, { message: 'El teléfono debe tener al menos 9 caracteres' }),
  mensaje: z.string().min(10, { message: 'El mensaje debe tener al menos 10 caracteres' }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactoContent() {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const formData = new FormData();
      formData.append('nombre', data.nombre);
      formData.append('email', data.email);
      formData.append('telefono', data.telefono);
      formData.append('mensaje', data.mensaje);

      // Importar on demand para evitar problemas si el Server Action requiere el server environment
      const { submitContactoAction } = await import('@/app/actions/contacto');
      const result = await submitContactoAction(null, formData);

      if (result.error) {
        setSubmitError(result.error);
      } else {
        setIsSuccess(true);
        reset();
        setTimeout(() => setIsSuccess(false), 5000);
      }
    } catch {
      setSubmitError('Ocurrió un error inesperado al enviar el mensaje.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Columna Izquierda: Información de Contacto */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100 h-full">
          <h2 className="text-2xl font-bold text-neutral-900 mb-6">Información de la Clínica</h2>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-primary-50 p-3 rounded-full text-primary-600">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900">Dirección</h3>
                <p className="text-neutral-600">{empresaInfo.direccion}</p>
                <p className="text-neutral-600">{empresaInfo.ciudad}</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-primary-50 p-3 rounded-full text-primary-600">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900">Teléfono</h3>
                <p className="text-neutral-600">{empresaInfo.telefonoDisplay}</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-primary-50 p-3 rounded-full text-primary-600">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900">Email</h3>
                <p className="text-neutral-600">{empresaInfo.email}</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-primary-50 p-3 rounded-full text-primary-600">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900">Horario</h3>
                <p className="text-neutral-600">{empresaInfo.horario}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Columna Derecha: Formulario */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100">
          <h2 className="text-2xl font-bold text-neutral-900 mb-6">Envíanos un mensaje</h2>

          {isSuccess ? (
            <div className="flex flex-col items-center justify-center py-12 text-center h-full">
              <CheckCircle className="w-16 h-16 text-success mb-4" />
              <h3 className="text-xl font-bold text-neutral-900 mb-2">¡Mensaje enviado con éxito!</h3>
              <p className="text-neutral-600">Nos pondremos en contacto contigo lo antes posible.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-neutral-700 mb-1">
                  Nombre completo
                </label>
                <input
                  id="nombre"
                  type="text"
                  placeholder="Tu nombre"
                  className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-primary-500 transition-shadow ${
                    errors.nombre ? 'border-error focus:ring-error' : 'border-neutral-200'
                  }`}
                  {...register('nombre')}
                />
                {errors.nombre && (
                  <p className="mt-1 text-sm text-error">{errors.nombre.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                  Correo electrónico
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
                {errors.email && (
                  <p className="mt-1 text-sm text-error">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="telefono" className="block text-sm font-medium text-neutral-700 mb-1">
                  Teléfono
                </label>
                <input
                  id="telefono"
                  type="tel"
                  placeholder="Tu número de teléfono"
                  className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-primary-500 transition-shadow ${
                    errors.telefono ? 'border-error focus:ring-error' : 'border-neutral-200'
                  }`}
                  {...register('telefono')}
                />
                {errors.telefono && (
                  <p className="mt-1 text-sm text-error">{errors.telefono.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-neutral-700 mb-1">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  rows={4}
                  placeholder="¿En qué podemos ayudarte?"
                  className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-primary-500 transition-shadow ${
                    errors.mensaje ? 'border-error focus:ring-error' : 'border-neutral-200'
                  }`}
                  {...register('mensaje')}
                ></textarea>
                {errors.mensaje && (
                  <p className="mt-1 text-sm text-error">{errors.mensaje.message}</p>
                )}
              </div>

              {submitError && (
                <div className="bg-red-50 text-red-600 p-3 rounded-xl text-sm mb-4">
                  {submitError}
                </div>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary px-6 py-3 rounded-xl font-semibold text-white bg-primary-600 hover:bg-primary-700 transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
              </button>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
}
