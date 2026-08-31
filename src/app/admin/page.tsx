import { Users, Calendar as CalendarIcon, MessageSquare, FileText } from 'lucide-react';

export const metadata = {
  title: 'Panel de Administración | FisioSphere',
};

export default async function AdminDashboardPage() {
  // En un caso real, obtendríamos las estadísticas desde la DBSupabase aquí
  // const { count: citasCount } = await supabase.from('citas').select('*', { count: 'exact', head: true });
  
  const stats = [
    { name: 'Citas Hoy', value: '4', icon: CalendarIcon, change: '+12%', changeType: 'positive' },
    { name: 'Nuevos Pacientes', value: '12', icon: Users, change: '+4.5%', changeType: 'positive' },
    { name: 'Mensajes Sin Leer', value: '3', icon: MessageSquare, change: 'Urgent', changeType: 'negative' },
    { name: 'Artículos Publicados', value: '12', icon: FileText, change: '+2', changeType: 'positive' },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-neutral-900">Dashboard General</h1>
        <p className="text-neutral-500 mt-1">Bienvenido al panel de administración de FisioSphere.</p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.name}
              className="relative overflow-hidden rounded-xl bg-white px-4 pt-5 pb-12 shadow sm:px-6 sm:pt-6 border border-neutral-100"
            >
              <dt>
                <div className="absolute rounded-md bg-primary-50 p-3">
                  <Icon className="h-6 w-6 text-primary-600" aria-hidden="true" />
                </div>
                <p className="ml-16 truncate text-sm font-medium text-neutral-500">
                  {item.name}
                </p>
              </dt>
              <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
                <p className="text-2xl font-semibold text-neutral-900">
                  {item.value}
                </p>
                <p
                  className={`ml-2 flex items-baseline text-sm font-semibold ${
                    item.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {item.change}
                </p>
              </dd>
            </div>
          );
        })}
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Últimas Citas */}
        <div className="bg-white rounded-xl shadow border border-neutral-100 overflow-hidden">
          <div className="px-6 py-5 border-b border-neutral-200 flex justify-between items-center">
            <h3 className="text-lg font-medium text-neutral-900">Citas Recientes</h3>
            <span className="text-sm text-primary-600 font-medium cursor-pointer">Ver todas</span>
          </div>
          <div className="p-6 text-center text-neutral-500">
            {/* Aquí iría la lista real obtenida de Supabase */}
            <CalendarIcon className="w-12 h-12 mx-auto text-neutral-300 mb-3" />
            <p>Conectando con la base de datos de Supabase...</p>
            <p className="text-sm mt-2">Próximamente se mostrarán las citas reales aquí.</p>
          </div>
        </div>

        {/* Últimos Mensajes */}
        <div className="bg-white rounded-xl shadow border border-neutral-100 overflow-hidden">
          <div className="px-6 py-5 border-b border-neutral-200 flex justify-between items-center">
            <h3 className="text-lg font-medium text-neutral-900">Nuevos Mensajes</h3>
            <span className="text-sm text-primary-600 font-medium cursor-pointer">Ver todos</span>
          </div>
          <div className="p-6 text-center text-neutral-500">
             {/* Aquí iría la lista real obtenida de Supabase */}
            <MessageSquare className="w-12 h-12 mx-auto text-neutral-300 mb-3" />
            <p>Conectando con la base de datos de Supabase...</p>
            <p className="text-sm mt-2">Próximamente se mostrarán los mensajes reales aquí.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
