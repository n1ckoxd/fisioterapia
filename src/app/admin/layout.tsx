import { redirect } from 'next/navigation';
import Link from 'next/link';
import { LayoutDashboard, Users, Calendar, FileText, Settings, LogOut, MessageSquare } from 'lucide-react';
import { createClient } from '@/utils/supabase/server';
import { logoutAction } from '@/app/actions/auth';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  const navigation = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'Citas', href: '/admin/citas', icon: Calendar },
    { name: 'Mensajes', href: '/admin/mensajes', icon: MessageSquare },
    { name: 'Blog', href: '/admin/blog', icon: FileText },
    { name: 'Pacientes', href: '/admin/pacientes', icon: Users },
    { name: 'Configuración', href: '/admin/configuracion', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-neutral-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-neutral-200 hidden md:flex md:flex-col fixed inset-y-0">
        <div className="flex items-center justify-center h-16 border-b border-neutral-200">
          <Link href="/" className="text-xl font-bold text-primary-600">
            FisioSphere Admin
          </Link>
        </div>
        <div className="flex-1 overflow-y-auto py-4">
          <nav className="px-3 space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-neutral-700 hover:text-primary-600 hover:bg-primary-50 transition-colors"
                >
                  <Icon className="mr-3 h-5 w-5 flex-shrink-0" />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="p-4 border-t border-neutral-200">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold">
              {user.email?.charAt(0).toUpperCase() || 'A'}
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-neutral-700 truncate max-w-[150px]">{user.email}</p>
            </div>
          </div>
          <form action={logoutAction}>
            <button
              type="submit"
              className="flex w-full items-center px-3 py-2 text-sm font-medium rounded-md text-red-600 hover:bg-red-50 transition-colors"
            >
              <LogOut className="mr-3 h-5 w-5 flex-shrink-0" />
              Cerrar Sesión
            </button>
          </form>
        </div>
      </aside>

      {/* Main content */}
      <div className="md:pl-64 flex flex-col flex-1">
        <main className="flex-1 pb-8">
          {children}
        </main>
      </div>
    </div>
  );
}
