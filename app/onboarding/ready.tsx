import { View, StyleSheet } from 'react-native';
import { Screen } from '@/components/layout';
import { UText, Button } from '@/components/ui';
import { useOnboarding } from '@/features/onboarding/useOnboarding';
import { spacing, colors } from '@/design';

export default function OnboardingReady() {
  const { completeOnboarding } = useOnboarding();

  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.content}>
          <UText style={styles.mascot}>🐼</UText>
          <UText style={styles.title}>Tout est prêt !</UText>
        </View>
        <Button
          label="Commencer l'aventure"
          onPress={completeOnboarding}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: spacing[8],
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: spacing[5],
  },
  mascot: {
    fontSize: 100,
    lineHeight: 120,
  },
  title: {
    fontSize: 36,
    lineHeight: 44,
    fontFamily: 'MadeTommy-Bold',
    color: colors.text.primary,
    textAlign: 'center',
  },
});
