import { supabase } from '@services/database/dbConnection';

export async function getUser() {
  const { data, error } = await supabase.auth.getUser();

  if (error || !data.user) {
    return null;
  }

  return data.user;
}
