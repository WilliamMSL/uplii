import { useEffect } from 'react';
import { supabase } from '@/services/supabase/client';
import { useAuthStore } from '@/features/auth/authStore';

export function useSession() {
  const { setSession } = useAuthStore();

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setSession(data.session));

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);
}
