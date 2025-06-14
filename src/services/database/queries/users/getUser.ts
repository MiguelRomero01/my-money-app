import { supabase } from '@services/database/dbConnection';

export async function getUser() {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) {
    return 'User not found';
  }
  return user?.email;
}
