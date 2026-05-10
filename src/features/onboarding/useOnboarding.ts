import { router } from 'expo-router';
import { useOnboardingStore } from './onboardingStore';
import { storage, STORAGE_KEYS } from '@/utils';

export function useOnboarding() {
  const { step, nextStep, prevStep, complete } = useOnboardingStore();

  const completeOnboarding = async () => {
    complete();
    await storage.set(STORAGE_KEYS.ONBOARDING_SEEN, 'true');
    router.replace('/(app)/(tabs)/chat');
  };

  return { step, nextStep, prevStep, completeOnboarding };
}
