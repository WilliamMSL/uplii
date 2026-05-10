import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Link, router } from 'expo-router';
import { Screen, KeyboardAware } from '@/components/layout';
import { UText, Input, Button, NavHeader, UserIcon, LockIcon } from '@/components/ui';
import { useAuth } from '@/features/auth/useAuth';
import { spacing, colors } from '@/design';

export default function Login() {
  const { signIn, loading, error } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Screen>
      <NavHeader onBack={() => router.back()} />
      <KeyboardAware>
        <View style={styles.container}>
          <UText style={styles.title}>Content de te revoir</UText>

          <View style={styles.form}>
            <Input
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              placeholder="Email"
              leftIcon={<UserIcon />}
            />
            <Input
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              placeholder="Mot de passe"
              leftIcon={<LockIcon />}
              error={error ?? undefined}
            />
          </View>

          <Button
            label="Se connecter"
            onPress={async () => {
              const ok = await signIn({ email, password });
              if (ok) router.replace('/(app)/(tabs)/chat');
            }}
            loading={loading}
            style={styles.button}
          />

          <Link href="/(auth)/signup" asChild>
            <UText variant="small" style={styles.link}>Pas encore de compte ? S'inscrire</UText>
          </Link>
        </View>
      </KeyboardAware>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, gap: spacing[6], paddingTop: spacing[4] },
  title: { fontSize: 36, lineHeight: 44, fontFamily: 'MadeTommy-Bold', color: colors.text.primary },
  form: { gap: spacing[4] },
  button: { marginTop: spacing[2] },
  link: { textAlign: 'center', color: colors.brand.primary },
});
