import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vgtjtmfewauactbivjvl.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZndGp0bWZld2F1YWN0Yml2anZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU4NzAwNTIsImV4cCI6MjA2MTQ0NjA1Mn0._g1JXjVRpdgboxq22YXKobY0D6Ga9cLTuxpTgetPlG4';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
