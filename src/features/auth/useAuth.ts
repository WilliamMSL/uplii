import { useAuthStore } from './authStore';
import { authService } from './authService';
import type { Credentials } from '@/types';

export function useAuth() {
  const { user, session, loading, error, setSession, setLoading, setError, reset } = useAuthStore();

  const signIn = async (credentials: Credentials): Promise<boolean> => {
    setLoading(true);
    setError(null);
    const { data, error: err } = await authService.signIn(credentials);
    if (err) { setError(err.message); setLoading(false); return false; }
    setSession(data.session);
    setLoading(false);
    return true;
  };

  const signUp = async (credentials: Credentials): Promise<boolean> => {
    setLoading(true);
    setError(null);
    const { data, error: err } = await authService.signUp(credentials);
    if (err) { setError(err.message); setLoading(false); return false; }
    setSession(data.session);
    setLoading(false);
    return true;
  };

  const signOut = async () => {
    await authService.signOut();
    reset();
  };

  return { user, session, loading, error, signIn, signUp, signOut };
}
