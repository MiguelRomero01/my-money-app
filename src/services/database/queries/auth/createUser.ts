import { supabase } from '@services/database/dbConnection';
import { putIdUser } from '../users/putIdUser';

export async function signUpUser(email: string, password: string) {
  const { error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  } else {
    putIdUser();
    return 'User registered successfully!';
  }
}
