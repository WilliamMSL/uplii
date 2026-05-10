import { Redirect, router } from 'expo-router';
import { useEffect, useState } from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { storage, STORAGE_KEYS } from '@/utils';
import { useAuthStore } from '@/features/auth/authStore';
import { LoadingOverlay } from '@/components/shared';
import { UText } from '@/components/ui';
import { colors, spacing, borders } from '@/design';

export default function Index() {
  const { session } = useAuthStore();
  const [onboardingSeen, setOnboardingSeen] = useState<boolean | null>(null);

  useEffect(() => {
    storage.get(STORAGE_KEYS.ONBOARDING_SEEN).then((val) => setOnboardingSeen(val === 'true'));
  }, []);

  if (__DEV__) return <Redirect href="/(auth)/welcome" />;

  if (onboardingSeen === null) return <LoadingOverlay />;

  return (
    <View style={{ flex: 1 }}>
      {!onboardingSeen && <Redirect href="/onboarding" />}
      {onboardingSeen && !session && <Redirect href="/(auth)/login" />}
      {onboardingSeen && !!session && <Redirect href="/(app)/(tabs)/home" />}
    </View>
  );
}

const styles = StyleSheet.create({
  devFab: {
    position: 'absolute',
    bottom: spacing[8],
    right: spacing[4],
    backgroundColor: colors.brand.primaryPressed,
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[2],
    borderRadius: borders.radius.full,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  devLabel: {
    color: colors.text.inverse,
    fontSize: 12,
    fontFamily: 'MadeTommy-Bold',
  },
});
