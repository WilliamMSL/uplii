import { useState, useRef } from 'react';
import { View, Animated, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { Screen } from '@/components/layout';
import { NavHeader, ChatBubble, Button, UText } from '@/components/ui';
import { useOnboarding } from '@/features/onboarding/useOnboarding';
import { spacing } from '@/design';

const MESSAGES: (string | null)[] = [
  null,
  "Salut, moi c'est Uplii !",
  "Je serai ton coach perso à partir d'aujourd'hui",
  "On va progresser en s'amusant ensemble",
  "Fitness, bien-être, nouvelles compétences.. je suis là pour tout",
  "Mais avant, dis-moi en un peu plus sur toi !",
];

const TOTAL = MESSAGES.length;

export default function OnboardingMascot() {
  const [step, setStep] = useState(0);
  const { completeOnboarding } = useOnboarding();
  const opacity = useRef(new Animated.Value(1)).current;

  const transition = (callback: () => void) => {
    Animated.timing(opacity, { toValue: 0, duration: 150, useNativeDriver: true }).start(() => {
      callback();
      Animated.timing(opacity, { toValue: 1, duration: 200, useNativeDriver: true }).start();
    });
  };

  const handleNext = () => {
    if (step === TOTAL - 1) {
      router.push('/onboarding/goals');
      return;
    }
    transition(() => setStep(s => s + 1));
  };

  return (
    <Screen>
      <NavHeader
        steps={{ current: step, total: TOTAL }}
        rightLabel="Passer"
        onRightPress={() => router.push('/onboarding/goals')}
      />

      <Animated.View style={[styles.content, { opacity }]}>
        <View style={styles.mascotArea}>
          {MESSAGES[step] && (
            <ChatBubble
              message={MESSAGES[step]!}
              typewriter
              style={styles.bubble}
            />
          )}
          <UText style={styles.mascot}>🐼</UText>
        </View>

        <Button
          label={step === TOTAL - 1 ? "C'est parti !" : 'Continuer'}
          onPress={handleNext}
        />
      </Animated.View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingBottom: spacing[8],
    justifyContent: 'space-between',
  },
  mascotArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: spacing[6],
  },
  mascot: {
    fontSize: 100,
    lineHeight: 120,
  },
  bubble: {
    alignSelf: 'center',
  },
});
