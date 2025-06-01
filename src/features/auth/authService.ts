import { supabase } from '@services/database/dbConnection';

export async function signUpUser(email: string, password: string) {
  const { error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }

  return 'User registered successfully!';
}

export async function signInUser(email: string, password: string) {
  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    if (error.status === 400) {
      throw new Error('Email or password is incorrect');
    }
    throw new Error(error.message);
  }

  return true;
}
