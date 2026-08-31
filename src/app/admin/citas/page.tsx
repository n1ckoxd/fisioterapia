import { createClient } from '@/utils/supabase/server';
import { Calendar as CalendarIcon, Clock, Phone, Mail, FileText, CheckCircle, XCircle } from 'lucide-react';

export const metadata = {
  title: 'Citas | Admin FisioSphere',
};

// Next.js invalida esta ruta de forma dinámica porque lee cookies
export const dynamic = 'force-dynamic';

export default async function AdminCitasPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let citas: any[] = [];
  let errorMsg = null;

  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('citas')
      .select('*')
      .order('fecha', { ascending: false })
      .order('hora', { ascending: false });

    if (error) {
      throw error;
    }
    
    if (data) {
      citas = data;
    }
  } catch (err: unknown) {
    errorMsg = 'No se pudieron cargar las citas. Verifica la conexión a Supabase o que las tablas existan.';
    console.error(err);
  }

  const getStatusBadge = (estado: string) => {
    switch (estado) {
      case 'confirmada':
        return <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800"><CheckCircle className="w-3 h-3"/> Confirmada</span>;
      case 'cancelada':
        return <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800"><XCircle className="w-3 h-3"/> Cancelada</span>;
      case 'completada':
        return <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">Completada</span>;
      default:
        return <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">Pendiente</span>;
    }
  };

  return (
    <div className="p-8">
      <div className="sm:flex sm:items-center sm:justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-neutral-900">Gestión de Citas</h1>
          <p className="mt-2 text-sm text-neutral-600">
            Un listado de todas las citas solicitadas a través de la página web.
          </p>
        </div>
      </div>

      {errorMsg ? (
        <div className="bg-red-50 text-red-600 p-4 rounded-xl border border-red-100">
          <p className="font-medium">{errorMsg}</p>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-sm border border-neutral-200 overflow-hidden">
          {citas.length === 0 ? (
            <div className="p-12 text-center">
              <CalendarIcon className="w-12 h-12 text-neutral-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-neutral-900">No hay citas</h3>
              <p className="text-neutral-500 mt-1">Aún no se han registrado citas en el sistema.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-neutral-200">
                <thead className="bg-neutral-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                      Fecha y Hora
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                      Paciente
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                      Servicio
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                      Estado
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-neutral-500 uppercase tracking-wider">
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-neutral-200">
                  {citas.map((cita) => (
                    <tr key={cita.id} className="hover:bg-neutral-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center text-sm text-neutral-900">
                          <CalendarIcon className="w-4 h-4 mr-2 text-neutral-400" />
                          <time dateTime={cita.fecha}>
                             {new Date(cita.fecha).toLocaleDateString("es-ES", {
                               day: "numeric", month: "short", year: "numeric"
                             })}
                          </time>
                        </div>
                        <div className="flex items-center text-sm text-neutral-500 mt-1">
                          <Clock className="w-4 h-4 mr-2 text-neutral-400" />
                          {cita.hora.substring(0, 5)}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 font-bold">
                            {cita.nombre.charAt(0).toUpperCase()}
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-neutral-900">{cita.nombre}</div>
                            <div className="text-sm text-neutral-500 flex items-center gap-3 mt-1">
                              <span className="flex items-center"><Phone className="w-3 h-3 mr-1"/> {cita.telefono}</span>
                              <span className="flex items-center"><Mail className="w-3 h-3 mr-1"/> {cita.email}</span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center text-sm text-neutral-900">
                           <FileText className="w-4 h-4 mr-2 text-neutral-400" />
                           <span className="capitalize">{cita.servicio.replace('-', ' ')}</span>
                        </div>
                        {cita.observaciones && (
                          <p className="text-xs text-neutral-500 mt-1 max-w-[200px] truncate" title={cita.observaciones}>
                            Nota: {cita.observaciones}
                          </p>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {getStatusBadge(cita.estado)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        {/* Aquí irían las acciones para confirmar/cancelar. 
                            Por ahora solo visualizamos. */}
                        <button className="text-primary-600 hover:text-primary-900 bg-primary-50 px-3 py-1 rounded-md transition-colors">
                          Gestionar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
