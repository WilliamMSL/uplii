import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Button } from '@/components/ui/Button';
import { UText } from '@/components/ui/Text';
import { colors, spacing } from '@/design';

export default function Welcome() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>

        <View style={styles.hero}>
          {/* Mascotte ici */}
          <UText style={styles.emoji}>🐼</UText>
          <UText variant="h1" style={styles.title}>Uplii</UText>
          <UText variant="body" style={styles.subtitle}>
            Apprends, progresse et atteins tes objectifs chaque jour.
          </UText>
        </View>

        <View style={styles.actions}>
          <Button
            label="Se connecter"
            variant="primary"
            size="lg"
            onPress={() => router.push('/(auth)/login')}
          />
          <Button
            label="J'ai un compte"
            variant="secondary"
            size="lg"
            onPress={() => router.push('/(auth)/signup')}
          />
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.background.primary,
  },
  container: {
    flex: 1,
    paddingHorizontal: spacing[5],
    justifyContent: 'space-between',
    paddingBottom: spacing[8],
  },
  hero: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing[4],
  },
  emoji: {
    fontSize: 80,
    lineHeight: 96,
  },
  title: {
    textAlign: 'center',
  },
  subtitle: {
    textAlign: 'center',
    color: colors.text.secondary,
    maxWidth: 280,
  },
  actions: {
    gap: spacing[3],
    paddingBottom: 4,
  },
});
