import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { Screen } from '@/components/layout';
import { NavHeader, UText, CheckboxItem, Button, ChatBubble } from '@/components/ui';
import { spacing, colors } from '@/design';

const OPTIONS = [
  { title: '5min/jour',  description: 'Tranquille' },
  { title: '15min/jour', description: 'Motivé' },
  { title: '30min/jour', description: 'À fond' },
];

export default function OnboardingRhythm() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <Screen scroll>
      <NavHeader steps={{ current: 2, total: 3 }} />

      <View style={styles.headerRow}>
        <ChatBubble
          message="Quel rythme te convient ?"
          triangleSide="right"
          style={styles.bubble}
        />
        <UText style={styles.panda}>🐼</UText>
      </View>

      <UText style={styles.subtitle}>Tu pourras changer plus tard</UText>

      <View style={styles.list}>
        {OPTIONS.map(({ title, description }) => (
          <CheckboxItem
            key={title}
            title={title}
            description={description}
            checked={selected === title}
            onToggle={() => setSelected(prev => prev === title ? null : title)}
          />
        ))}
      </View>

      <Button
        label="Terminer"
        onPress={() => router.push('/onboarding/ready')}
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
