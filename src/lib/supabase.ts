import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Default Supabase project credentials provided for Run To Win Healthcare
const DEFAULT_SUPABASE_URL = 'https://haoywlssgsdsbqkkgujo.supabase.co';
const DEFAULT_SUPABASE_ANON_KEY = 'sb_publishable_MDBRf4SpiSjROm_-j7PErw_IefToHYy';

let supabaseClient: SupabaseClient | null = null;

export const getSupabaseClient = (): SupabaseClient => {
  if (!supabaseClient) {
    const url = import.meta.env.VITE_SUPABASE_URL || DEFAULT_SUPABASE_URL;
    const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || DEFAULT_SUPABASE_ANON_KEY;
    
    supabaseClient = createClient(url, anonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
      },
    });
  }
  return supabaseClient;
};

export interface StoredAppointment {
  id?: string;
  appointment_id: string;
  patient_name: string;
  phone: string;
  email?: string;
  service_type: string;
  body_part?: string;
  mumbai_area?: string;
  address?: string;
  preferred_date: string;
  preferred_time: string;
  symptoms?: string;
  previous_surgery?: boolean;
  status?: string;
  created_at?: string;
}

/**
 * Direct client-side helper to record appointment in Supabase
 */
export async function saveAppointmentToSupabase(appointment: StoredAppointment) {
  try {
    const client = getSupabaseClient();
    const { data, error } = await client
      .from('appointments')
      .insert([
        {
          appointment_id: appointment.appointment_id,
          patient_name: appointment.patient_name,
          phone: appointment.phone,
          email: appointment.email || null,
          service_type: appointment.service_type,
          body_part: appointment.body_part || null,
          mumbai_area: appointment.mumbai_area || null,
          address: appointment.address || null,
          preferred_date: appointment.preferred_date,
          preferred_time: appointment.preferred_time,
          symptoms: appointment.symptoms || null,
          previous_surgery: Boolean(appointment.previous_surgery),
          status: appointment.status || 'Pending Confirmation',
          created_at: new Date().toISOString(),
        }
      ])
      .select();

    if (error) {
      console.warn('Supabase insertion notice:', error.message);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (err: any) {
    console.warn('Supabase client error:', err.message);
    return { success: false, error: err.message };
  }
}
