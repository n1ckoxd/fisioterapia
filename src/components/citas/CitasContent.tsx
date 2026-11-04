'use client';

import React, { useEffect, useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, MessageCircle, Info, Home as HomeIcon, Building2, Video } from 'lucide-react';
import { servicios, empresaInfo } from '@/lib/data';

// Fecha local de hoy en formato AAAA-MM-DD (para no permitir fechas pasadas).
const hoyISO = () => {
  const d = new Date();
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().slice(0, 10);
};

const modalidades = [
  { id: 'Domicilio', label: 'A domicilio', icon: HomeIcon },
  { id: 'Sede', label: `Sede ${empresaInfo.distrito}`, icon: Building2 },
  { id: 'Online', label: 'Online', icon: Video },
] as const;

const citaSchema = z.object({
  nombre: z.string().min(2, { message: 'El nombre debe tener al menos 2 caracteres' }),
  telefono: z.string().min(9, { message: 'El teléfono debe tener al menos 9 dígitos' }),
  email: z.string().email({ message: 'Correo electrónico inválido' }),
  servicio: z.string().min(1, { message: 'Por favor selecciona un servicio' }),
  modalidad: z.string().min(1, { message: 'Elige cómo prefieres la atención' }),
  distrito: z.string().optional(),
  fecha: z
    .string()
    .min(1, { message: 'Por favor selecciona una fecha' })
    .refine((f) => f >= hoyISO(), { message: 'Elige una fecha a partir de hoy' }),
  hora: z.string().min(1, { message: 'Por favor selecciona una hora' }),
  observaciones: z.string().optional(),
});

type CitaFormValues = z.infer<typeof citaSchema>;

const inputClase = (error?: unknown) =>
  `w-full px-4 py-3 rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-shadow ${
    error ? 'border-error focus:ring-error' : 'border-neutral-200'
  }`;

function MensajeError({ mensaje }: { mensaje?: string }) {
  return (
    <AnimatePresence>
      {mensaje && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="mt-1 text-sm text-error"
        >
          {mensaje}
        </motion.p>
      )}
    </AnimatePresence>
  );
}

export default function CitasContent() {
  const [enviada, setEnviada] = useState<CitaFormValues | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    control,
  } = useForm<CitaFormValues>({
    resolver: zodResolver(citaSchema),
    defaultValues: { modalidad: 'Domicilio' },
  });

  const modalidad = useWatch({ control, name: 'modalidad' });

  // Fecha mínima y servicio preseleccionado (?servicio=slug) al entrar desde una página de servicio.
  useEffect(() => {
    document.getElementById('fecha')?.setAttribute('min', hoyISO());
    const slug = new URLSearchParams(window.location.search).get('servicio');
    if (slug && servicios.some((s) => s.slug === slug)) {
      setValue('servicio', slug);
    }
  }, [setValue]);

  const onSubmit = async (data: CitaFormValues) => {
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const detalle = [
        `Modalidad: ${data.modalidad}`,
        data.distrito ? `Distrito: ${data.distrito}` : '',
        data.observaciones ?? '',
      ]
        .filter(Boolean)
        .join(' | ');

      const formData = new FormData();
      formData.append('nombre', data.nombre);
      formData.append('telefono', data.telefono);
      formData.append('email', data.email);
      formData.append('servicio', data.servicio);
      formData.append('fecha', data.fecha);
      formData.append('hora', data.hora);
      formData.append('observaciones', detalle);

      const { submitCitaAction } = await import('@/app/actions/citas');
      const result = await submitCitaAction(null, formData);

      if (result.error) {
        setSubmitError('No pudimos registrar tu solicitud. Inténtalo de nuevo o escríbenos por WhatsApp.');
      } else {
        setEnviada(data);
        reset({ modalidad: 'Domicilio' });
      }
    } catch {
      setSubmitError('Ocurrió un error inesperado al solicitar la cita. Escríbenos por WhatsApp y te ayudamos.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const nombreServicio = (slug: string) => servicios.find((s) => s.slug === slug)?.nombre ?? slug;
  const whatsappConfirmacion = enviada
    ? `https://wa.me/${empresaInfo.whatsapp}?text=${encodeURIComponent(
        `Hola, acabo de solicitar una cita en la web: ${nombreServicio(enviada.servicio)} (${enviada.modalidad}) el ${enviada.fecha} a las ${enviada.hora}. Mi nombre es ${enviada.nombre}.`
      )}`
    : empresaInfo.whatsappLink;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Formulario */}
      <motion.div
        className="lg:col-span-2 bg-white p-6 sm:p-8 rounded-2xl shadow-md border border-neutral-100"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <AnimatePresence mode="wait">
          {enviada ? (
            <motion.div
              key="exito"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center py-14 text-center"
            >
              <motion.span
                initial={{ scale: 0, rotate: -45 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 260, damping: 14, delay: 0.1 }}
              >
                <CheckCircle className="w-20 h-20 text-success mb-6" />
              </motion.span>
              <h2 className="text-3xl font-bold text-neutral-900 mb-4">¡Solicitud recibida!</h2>
              <p className="text-lg text-neutral-600 mb-8 max-w-md">
                Te contactaremos para confirmar la disponibilidad. Si quieres una respuesta más rápida, confírmala por WhatsApp.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href={whatsappConfirmacion} target="_blank" rel="noopener noreferrer" className="btn-whatsapp justify-center">
                  <MessageCircle className="w-5 h-5" /> Confirmar por WhatsApp
                </a>
                <button
                  onClick={() => setEnviada(null)}
                  className="px-6 py-3 rounded-xl font-medium text-primary-600 bg-primary-50 hover:bg-primary-100 transition-colors border border-primary-200"
                >
                  Reservar otra cita
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.form
              key="formulario"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6"
              noValidate
            >
              {/* Modalidad */}
              <fieldset>
                <legend className="block text-sm font-medium text-neutral-700 mb-2">¿Cómo prefieres la atención? *</legend>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {modalidades.map((m) => {
                    const activa = modalidad === m.id;
                    return (
                      <label
                        key={m.id}
                        className={`relative flex items-center gap-3 px-4 py-3 rounded-xl border cursor-pointer transition-all ${
                          activa ? 'border-primary-500 bg-primary-50 shadow-sm' : 'border-neutral-200 hover:border-primary-300'
                        }`}
                      >
                        <input type="radio" value={m.id} {...register('modalidad')} className="sr-only" />
                        <m.icon className={`w-5 h-5 ${activa ? 'text-primary-600' : 'text-neutral-500'}`} />
                        <span className={`text-sm font-semibold ${activa ? 'text-primary-700' : 'text-neutral-700'}`}>{m.label}</span>
                        {activa && (
                          <motion.span
                            layoutId="modalidad-activa"
                            className="absolute inset-0 rounded-xl ring-2 ring-primary-500 pointer-events-none"
                            transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                          />
                        )}
                      </label>
                    );
                  })}
                </div>
                <MensajeError mensaje={errors.modalidad?.message} />
              </fieldset>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-neutral-700 mb-1">
                    Nombre completo *
                  </label>
                  <input id="nombre" type="text" autoComplete="name" placeholder="Ej. Juan Pérez" className={inputClase(errors.nombre)} {...register('nombre')} />
                  <MensajeError mensaje={errors.nombre?.message} />
                </div>

                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium text-neutral-700 mb-1">
                    Teléfono / WhatsApp *
                  </label>
                  <input id="telefono" type="tel" autoComplete="tel" placeholder="9XX XXX XXX" className={inputClase(errors.telefono)} {...register('telefono')} />
                  <MensajeError mensaje={errors.telefono?.message} />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                    Correo electrónico *
                  </label>
                  <input id="email" type="email" autoComplete="email" placeholder="tu@email.com" className={inputClase(errors.email)} {...register('email')} />
                  <MensajeError mensaje={errors.email?.message} />
                </div>

                <div className={modalidad === 'Domicilio' ? '' : 'md:col-span-2'}>
                  <label htmlFor="servicio" className="block text-sm font-medium text-neutral-700 mb-1">
                    Servicio de interés *
                  </label>
                  <select id="servicio" className={inputClase(errors.servicio)} {...register('servicio')}>
                    <option value="">Selecciona un servicio</option>
                    {servicios.map((s) => (
                      <option key={s.slug} value={s.slug}>
                        {s.nombre}
                      </option>
                    ))}
                  </select>
                  <MensajeError mensaje={errors.servicio?.message} />
                </div>

                <AnimatePresence initial={false}>
                  {modalidad === 'Domicilio' && (
                    <motion.div
                      key="distrito"
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 12 }}
                    >
                      <label htmlFor="distrito" className="block text-sm font-medium text-neutral-700 mb-1">
                        Distrito
                      </label>
                      <select id="distrito" className={inputClase()} {...register('distrito')}>
                        <option value="">Selecciona tu distrito</option>
                        {empresaInfo.distritosCobertura.map((d) => (
                          <option key={d} value={d}>
                            {d}
                          </option>
                        ))}
                        <option value="Otro">Otro distrito</option>
                      </select>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div>
                  <label htmlFor="fecha" className="block text-sm font-medium text-neutral-700 mb-1">
                    Fecha preferida *
                  </label>
                  <input id="fecha" type="date" className={inputClase(errors.fecha)} {...register('fecha')} />
                  <MensajeError mensaje={errors.fecha?.message} />
                </div>

                <div>
                  <label htmlFor="hora" className="block text-sm font-medium text-neutral-700 mb-1">
                    Hora preferida *
                  </label>
                  <input id="hora" type="time" min="08:00" max="21:00" className={inputClase(errors.hora)} {...register('hora')} />
                  <p className="mt-1 text-xs text-neutral-500">Lun a Vie 8:00–21:00 · Sáb 9:00–14:00</p>
                  <MensajeError mensaje={errors.hora?.message} />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="observaciones" className="block text-sm font-medium text-neutral-700 mb-1">
                    Cuéntanos brevemente el motivo (opcional)
                  </label>
                  <textarea
                    id="observaciones"
                    rows={3}
                    placeholder="Ej. Mi bebé de 4 meses siempre gira la cabeza hacia el mismo lado..."
                    className={inputClase()}
                    {...register('observaciones')}
                  ></textarea>
                </div>
              </div>

              <AnimatePresence>
                {submitError && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    role="alert"
                    className="bg-red-50 text-red-600 p-3 rounded-xl text-sm"
                  >
                    {submitError}
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary justify-center py-4 text-lg shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Solicitando...' : 'Solicitar Cita'}
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Panel lateral */}
      <motion.div
        className="lg:col-span-1 space-y-6"
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="bg-gradient-to-br from-[#128C7E] to-[#075E54] p-6 rounded-2xl shadow-md text-white">
          <div className="flex items-center space-x-3 mb-4">
            <MessageCircle className="w-8 h-8" />
            <h2 className="text-xl font-bold">¿Prefieres WhatsApp?</h2>
          </div>
          <p className="mb-6 text-white/90">Reserva o haz consultas rápidas directamente por WhatsApp.</p>
          <a
            href={empresaInfo.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-white text-[#128C7E] font-bold py-3 rounded-xl hover:bg-neutral-50 transition-colors"
          >
            Escribir por WhatsApp
          </a>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-100">
          <div className="flex items-center space-x-2 mb-4 text-primary-600">
            <Info className="w-6 h-6" />
            <h2 className="text-lg font-bold text-neutral-900">Información importante</h2>
          </div>
          <ul className="space-y-4 text-sm text-neutral-600">
            <li>
              <strong className="block text-neutral-800">Horario de atención:</strong>
              {empresaInfo.horario}
            </li>
            <li>
              <strong className="block text-neutral-800">Sede:</strong>
              {empresaInfo.direccion}, {empresaInfo.ciudad}
            </li>
            <li>
              <strong className="block text-neutral-800">A domicilio:</strong>
              {empresaInfo.distritosCobertura.slice(0, 6).join(', ')} y más distritos de Lima.
            </li>
            <li>
              <strong className="block text-neutral-800">Cancelaciones:</strong>
              Avísanos con al menos 24 horas de anticipación si no puedes asistir.
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
