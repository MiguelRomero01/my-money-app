import { supabase } from '@services/database/dbConnection';

export async function signUpUser(email: string, password: string) {
  const { error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }
  // if (error.message.includes('User already registered')) {
  //   return 'User already registered.';
  // } else if (error.status === 400) {
  //   return 'Please use a valid domain email.';
  // }
  // return 'An error occurred while signing up.';

  return 'User registered successfully!';
}
