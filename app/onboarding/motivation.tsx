import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { Screen } from '@/components/layout';
import { NavHeader, UText, CheckboxItem, Button, ChatBubble } from '@/components/ui';
import { spacing, colors } from '@/design';

const OPTIONS = [
  'Me dépasser',
  'Trouver mon équilibre',
  'Progresser chaque jour',
  'Atteindre un objectif',
];

export default function OnboardingMotivation() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <Screen scroll>
      <NavHeader steps={{ current: 1, total: 3 }} />

      <View style={styles.headerRow}>
        <ChatBubble
          message="Quel est ton objectif ?"
          triangleSide="right"
          style={styles.bubble}
        />
        <UText style={styles.panda}>🐼</UText>
      </View>

      <UText style={styles.subtitle}>Choisis celui qui te parle le plus</UText>

      <View style={styles.list}>
        {OPTIONS.map(option => (
          <CheckboxItem
            key={option}
            title={option}
            checked={selected === option}
            onToggle={() => setSelected(prev => prev === option ? null : option)}
          />
        ))}
      </View>

      <Button
        label="Continuer"
        onPress={() => router.push('/onboarding/rhythm')}
      />
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
    paddingBottom: spacing[6],
  },
});
