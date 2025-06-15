import { supabase } from '@services/database/dbConnection';

export async function signInUser(email: string, password: string) {
  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    throw new Error(error.message);
  }

  return true;
}
