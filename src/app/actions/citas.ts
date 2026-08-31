'use server';

import { createClient } from '@/utils/supabase/server';

export async function submitCitaAction(prevState: unknown, formData: FormData) {
  const nombre = formData.get('nombre') as string;
  const telefono = formData.get('telefono') as string;
  const email = formData.get('email') as string;
  const servicio = formData.get('servicio') as string;
  const fecha = formData.get('fecha') as string;
  const hora = formData.get('hora') as string;
  const observaciones = (formData.get('observaciones') as string) || null;

  if (!nombre || !telefono || !email || !servicio || !fecha || !hora) {
    return { error: 'Faltan campos obligatorios', success: false };
  }

  try {
    const supabase = await createClient();
    
    const { error } = await supabase
      .from('citas')
      .insert([
        { 
          nombre, 
          telefono, 
          email, 
          servicio, 
          fecha, 
          hora, 
          observaciones 
        }
      ]);

    if (error) throw error;

    return { success: true, message: 'Cita solicitada correctamente. Nos pondremos en contacto pronto.' };
  } catch (error: unknown) {
    console.error('Error al guardar la cita:', error);
    return { error: (error as Error).message || 'Error al procesar la cita', success: false };
  }
}
