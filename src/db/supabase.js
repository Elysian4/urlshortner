import {createClient} from "@supabase/supabase-js";

export const supabaseUrl = 'https://ahahhkeitrykikqenssg.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFoYWhoa2VpdHJ5a2lrcWVuc3NnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcwMjMzOTUsImV4cCI6MjA0MjU5OTM5NX0.5IFe3WsMDJdLvrvDk2RZfWBucXNSg6-nzsimZnBJfug';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
