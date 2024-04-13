import { createClient } from "@supabase/supabase-js";

const URL = "https://vaqciexjrfpiqdjsxmuk.supabase.co";
const API_KEY ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZhcWNpZXhqcmZwaXFkanN4bXVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI3MjU0NTEsImV4cCI6MjAyODMwMTQ1MX0.cFVDNMmdm5L2xns_8ZSsXr5RF9fyWzhO7uUfID8kz_A";

export const supabase = createClient (URL, API_KEY);
