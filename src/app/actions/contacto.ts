'use server';

import { createClient } from '@/utils/supabase/server';

export async function submitContactoAction(prevState: unknown, formData: FormData) {
  const nombre = formData.get('nombre') as string;
  const email = formData.get('email') as string;
  const telefono = (formData.get('telefono') as string) || null;
  const mensaje = formData.get('mensaje') as string;

  if (!nombre || !email || !mensaje) {
    return { error: 'Faltan campos obligatorios', success: false };
  }

  try {
    const supabase = await createClient();
    
    const { error } = await supabase
      .from('contactos')
      .insert([
        { nombre, email, telefono, mensaje }
      ]);

    if (error) throw error;

    return { success: true, message: 'Mensaje enviado correctamente' };
  } catch (error: unknown) {
    console.error('Error al guardar el mensaje de contacto:', error);
    return { error: (error as Error).message || 'Error al procesar el mensaje', success: false };
  }
}
