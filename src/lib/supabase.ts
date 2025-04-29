import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://eemwdgvywfjdvvhewglt.supabase.co'; // replace with your URL
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVlbXdkZ3Z5d2ZqZHZ2aGV3Z2x0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU5MjkzMzIsImV4cCI6MjA2MTUwNTMzMn0.WDZg5jLJo-XrbgaiX8A5OmamqyKk5Rdawthiku10faE'; // replace with your key

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
