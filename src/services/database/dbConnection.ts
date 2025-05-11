import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://hldizayggrgigcsbazwq.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhsZGl6YXlnZ3JnaWdjc2JhendxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY5MzAxMjAsImV4cCI6MjA2MjUwNjEyMH0.jO5lPN4Lh_2R98eRVncMx77CkA9qbUq7cmoL-XYom_Q';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
