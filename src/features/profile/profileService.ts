import { supabase } from '@/services/supabase/client';
import type { Profile } from '@/types';

const devProfile: Profile = {
  id: 'dev-user',
  full_name: 'Anthony',
  bio: '',
};

export const profileService = {
  fetch: async (userId: string): Promise<Profile | null> => {
    if (__DEV__) return devProfile;
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();
    if (error) throw error;
    return data;
  },

  update: async (userId: string, updates: Partial<Profile>): Promise<void> => {
    if (__DEV__) return;
    const { error } = await supabase
      .from('profiles')
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq('id', userId);
    if (error) throw error;
  },
};
