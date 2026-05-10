import { supabase } from '@/services/supabase/client';
import type { Profile } from '@/types';

export const profileService = {
  fetch: async (userId: string): Promise<Profile | null> => {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();
    if (error) throw error;
    return data;
  },

  update: async (userId: string, updates: Partial<Profile>): Promise<void> => {
    const { error } = await supabase
      .from('profiles')
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq('id', userId);
    if (error) throw error;
  },
};
