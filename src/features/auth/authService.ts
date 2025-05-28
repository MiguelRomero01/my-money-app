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
  const { error } = await supabase.auth.signUp({ email, password });

  if (error) {
    if (error.message.includes('User already registered')) {
      throw new Error('User already registered.');
    } else if (error.status === 400) {
      throw new Error('Please use a valid domain email.');
    }
    throw new Error('An error occurred while signing up.');
  }

  return '¡Registro exitoso!';
}
