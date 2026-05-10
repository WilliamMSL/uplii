import { supabase } from '@/services/supabase/client';
import type { Credentials } from '@/types';

const devSession = {
  access_token: 'dev',
  refresh_token: 'dev',
  expires_in: 86400,
  token_type: 'bearer',
  user: { id: 'dev-user', email: 'dev@uplii.app', app_metadata: {}, user_metadata: {}, aud: 'authenticated', created_at: '' },
} as any;

export const authService = {
  signIn: (credentials: Credentials) =>
    __DEV__
      ? Promise.resolve({ data: { session: devSession }, error: null })
      : supabase.auth.signInWithPassword(credentials),

  signUp: (credentials: Credentials) =>
    __DEV__
      ? Promise.resolve({ data: { session: devSession }, error: null })
      : supabase.auth.signUp(credentials),

  signOut: () =>
    supabase.auth.signOut(),

  getSession: () =>
    __DEV__
      ? Promise.resolve({ data: { session: null }, error: null })
      : supabase.auth.getSession(),
};
