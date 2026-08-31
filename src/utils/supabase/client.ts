import { createBrowserClient } from '@supabase/ssr';

export function createClient() {
  // Verificamos si las variables existen para que no rompa la compilación si el usuario aún no las ha configurado
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://xxxxxxxxxxxxxxxxxxxx.supabase.co';
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.dummy';

  return createBrowserClient(supabaseUrl, supabaseAnonKey);
}
