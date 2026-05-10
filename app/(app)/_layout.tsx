import { Redirect } from 'expo-router';
import { Stack } from 'expo-router';
import { useAuthStore } from '@/features/auth/authStore';
import { LoadingOverlay } from '@/components/shared';

export default function AppLayout() {
  const { session, loading } = useAuthStore();

  if (loading) return <LoadingOverlay />;
  if (!session) return <Redirect href="/(auth)/login" />;

  return <Stack screenOptions={{ headerShown: false }} />;
}
