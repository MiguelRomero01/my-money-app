// putIdUser.ts
import { supabase } from '@services/database/dbConnection';
import { getUser } from './getUser';

export async function putIdUser() {
  const user = await getUser();

  if (!user) {
    console.error('Usuario no autenticado');
    return null;
  }

  const { data, error } = await supabase.from('users').insert([{ id: user.id }]);

  if (error) {
    console.error('Error al insertar usuario:', error.message);
    return null;
  }

  return data;
}
