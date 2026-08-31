import { createClient } from '@/utils/supabase/server';
import { Mail, Calendar as CalendarIcon, Phone, CheckCircle, Info } from 'lucide-react';

export const metadata = {
  title: 'Mensajes | Admin FisioSphere',
};

export const dynamic = 'force-dynamic';

export default async function AdminMensajesPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let mensajes: any[] = [];
  let errorMsg = null;

  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('contactos')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      throw error;
    }
    
    if (data) {
      mensajes = data;
    }
  } catch (err: unknown) {
    errorMsg = 'No se pudieron cargar los mensajes. Verifica la conexión a Supabase.';
    console.error(err);
  }

  return (
    <div className="p-8">
      <div className="sm:flex sm:items-center sm:justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-neutral-900">Mensajes de Contacto</h1>
          <p className="mt-2 text-sm text-neutral-600">
            Mensajes enviados a través del formulario de la página de contacto.
          </p>
        </div>
      </div>

      {errorMsg ? (
        <div className="bg-red-50 text-red-600 p-4 rounded-xl border border-red-100">
          <p className="font-medium">{errorMsg}</p>
        </div>
      ) : (
        <div className="space-y-4">
          {mensajes.length === 0 ? (
            <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-12 text-center">
              <Mail className="w-12 h-12 text-neutral-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-neutral-900">No hay mensajes</h3>
              <p className="text-neutral-500 mt-1">Aún no se han recibido mensajes de contacto.</p>
            </div>
          ) : (
            mensajes.map((mensaje) => (
              <div 
                key={mensaje.id} 
                className={`bg-white rounded-xl shadow-sm border p-6 transition-all ${
                  mensaje.leido ? 'border-neutral-200 opacity-75' : 'border-primary-200 ring-1 ring-primary-100'
                }`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-12 w-12 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 font-bold text-lg">
                      {mensaje.nombre.charAt(0).toUpperCase()}
                    </div>
                    <div className="ml-4">
                      <div className="text-base font-bold text-neutral-900">{mensaje.nombre}</div>
                      <div className="text-sm text-neutral-500 flex items-center gap-4 mt-1">
                        <span className="flex items-center"><Mail className="w-3 h-3 mr-1.5"/> {mensaje.email}</span>
                        {mensaje.telefono && (
                          <span className="flex items-center"><Phone className="w-3 h-3 mr-1.5"/> {mensaje.telefono}</span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="text-right flex flex-col items-end">
                    <span className="text-xs font-medium text-neutral-500 flex items-center bg-neutral-50 px-3 py-1 rounded-full">
                      <CalendarIcon className="w-3 h-3 mr-1" />
                      {new Date(mensaje.created_at).toLocaleString("es-ES", {
                        day: "numeric", month: "short", hour: "2-digit", minute: "2-digit"
                      })}
                    </span>
                    {!mensaje.leido && (
                       <span className="mt-2 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                         Nuevo
                       </span>
                    )}
                  </div>
                </div>
                
                <div className="bg-neutral-50 rounded-lg p-4 text-neutral-700 whitespace-pre-wrap mt-4 text-sm leading-relaxed border border-neutral-100">
                  {mensaje.mensaje}
                </div>
                
                <div className="mt-4 flex justify-end gap-3">
                  <button className="text-sm font-medium text-primary-600 hover:text-primary-800 bg-primary-50 hover:bg-primary-100 px-4 py-2 rounded-lg transition-colors flex items-center">
                    {mensaje.leido ? (
                       <><Info className="w-4 h-4 mr-2" /> Marcar como no leído</>
                    ) : (
                       <><CheckCircle className="w-4 h-4 mr-2" /> Marcar como leído</>
                    )}
                  </button>
                  <a href={`mailto:${mensaje.email}`} className="text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 px-4 py-2 rounded-lg transition-colors">
                    Responder
                  </a>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
