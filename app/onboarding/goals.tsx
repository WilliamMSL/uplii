import { useState, useRef } from 'react';
import { View, ScrollView, Animated, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { Screen } from '@/components/layout';
import { NavHeader, UText, CheckboxItem, Button, ChatBubble } from '@/components/ui';
import { spacing, colors } from '@/design';

const DOMAINS = [
  { label: 'Fitness',               emoji: '💪' },
  { label: 'Nutrition',             emoji: '🥗' },
  { label: 'Bien-être mental',      emoji: '🧘' },
  { label: 'Nouvelles compétences', emoji: '📚' },
  { label: 'Productivité',          emoji: '⚡' },
  { label: 'Créativité',            emoji: '🎨' },
];

const MOTIVATIONS = [
  'Me dépasser',
  'Trouver mon équilibre',
  'Progresser chaque jour',
  'Atteindre un objectif',
];

const RHYTHMS = [
  { title: '5min/jour',  description: 'Tranquille' },
  { title: '15min/jour', description: 'Motivé' },
  { title: '30min/jour', description: 'À fond' },
];

export default function OnboardingQuestions() {
  const [step, setStep] = useState(0);
  const [goals, setGoals] = useState<string[]>([]);
  const [motivation, setMotivation] = useState<string | null>(null);
  const [rhythm, setRhythm] = useState<string | null>(null);
  const opacity = useRef(new Animated.Value(1)).current;

  const transition = (callback: () => void) => {
    Animated.timing(opacity, { toValue: 0, duration: 150, useNativeDriver: true }).start(() => {
      callback();
      Animated.timing(opacity, { toValue: 1, duration: 200, useNativeDriver: true }).start();
    });
  };

  const handleNext = () => {
    if (step < 2) {
      transition(() => setStep(s => s + 1));
    } else {
      router.push('/onboarding/name');
    }
  };

  const toggleGoal = (label: string) => {
    setGoals(prev => prev.includes(label) ? prev.filter(d => d !== label) : [...prev, label]);
  };

  return (
    <Screen>
      <NavHeader steps={{ current: step, total: 4 }} />

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Animated.View style={{ opacity }}>
          {step === 0 && (
            <>
              <View style={styles.headerRow}>
                <ChatBubble message="Quel est ton objectif ?" triangleSide="right" style={styles.bubble} />
                <UText style={styles.panda}>🐼</UText>
              </View>
              <UText style={styles.subtitle}>Choisis un ou plusieurs domaines</UText>
              <View style={styles.list}>
                {DOMAINS.map(({ label, emoji }) => (
                  <CheckboxItem
                    key={label}
                    title={label}
                    checked={goals.includes(label)}
                    onToggle={() => toggleGoal(label)}
                    icon={<UText style={styles.emoji}>{emoji}</UText>}
                  />
                ))}
              </View>
            </>
          )}

          {step === 1 && (
            <>
              <View style={styles.headerRow}>
                <ChatBubble message="Quel est ton objectif ?" triangleSide="right" style={styles.bubble} />
                <UText style={styles.panda}>🐼</UText>
              </View>
              <UText style={styles.subtitle}>Choisis celui qui te parle le plus</UText>
              <View style={styles.list}>
                {MOTIVATIONS.map(option => (
                  <CheckboxItem
                    key={option}
                    title={option}
                    checked={motivation === option}
                    onToggle={() => setMotivation(prev => prev === option ? null : option)}
                  />
                ))}
              </View>
            </>
          )}

          {step === 2 && (
            <>
              <View style={styles.headerRow}>
                <ChatBubble message="Quel rythme te convient ?" triangleSide="right" style={styles.bubble} />
                <UText style={styles.panda}>🐼</UText>
              </View>
              <UText style={styles.subtitle}>Tu pourras changer plus tard</UText>
              <View style={styles.list}>
                {RHYTHMS.map(({ title, description }) => (
                  <CheckboxItem
                    key={title}
                    title={title}
                    description={description}
                    checked={rhythm === title}
                    onToggle={() => setRhythm(prev => prev === title ? null : title)}
                  />
                ))}
              </View>
            </>
          )}
        </Animated.View>
      </ScrollView>

      <View style={styles.footer}>
        <Button
          label={step === 2 ? 'Terminer' : 'Continuer'}
          onPress={handleNext}
          disabled={
            (step === 0 && goals.length === 0) ||
            (step === 1 && motivation === null) ||
            (step === 2 && rhythm === null)
          }
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: spacing[4],
    paddingBottom: spacing[5],
    gap: spacing[3],
  },
  bubble: { flex: 1 },
  panda: { fontSize: 80, lineHeight: 100 },
  subtitle: {
    fontSize: 14,
    color: colors.text.secondary,
    marginBottom: spacing[4],
  },
  list: {
    gap: spacing[3],
  },
  emoji: {
    fontSize: 20,
    lineHeight: 24,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: spacing[4],
    paddingBottom: spacing[6],
  },
  footer: {
    paddingHorizontal: spacing[4],
    paddingBottom: spacing[8],
    paddingTop: spacing[4],
  },
});
