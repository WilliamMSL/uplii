import { useState } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { router } from 'expo-router';
import { Screen } from '@/components/layout';
import { NavHeader, UText, Input, Button, ChatBubble } from '@/components/ui';
import { spacing } from '@/design';

export default function OnboardingName() {
  const [name, setName] = useState('');

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <Screen>
      <NavHeader steps={{ current: 3, total: 4 }} />

      <View style={styles.content}>
        <View style={styles.headerRow}>
          <ChatBubble
            message="Quel est ton prénom ?"
            triangleSide="right"
            style={styles.bubble}
          />
          <UText style={styles.panda}>🐼</UText>
        </View>

        <Input
          value={name}
          onChangeText={setName}
          placeholder="Ton prénom"
          autoCapitalize="words"
          autoFocus
        />
      </View>

      <View style={styles.footer}>
        <Button
          label="Continuer"
          onPress={() => router.push('/onboarding/ready')}
          disabled={name.trim().length === 0}
        />
      </View>
    </Screen>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingTop: spacing[4],
    gap: spacing[6],
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[3],
  },
  bubble: { flex: 1 },
  panda: { fontSize: 80, lineHeight: 100 },
  footer: {
    paddingHorizontal: spacing[4],
    paddingBottom: spacing[8],
    paddingTop: spacing[4],
  },
});
