import { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Link, router } from 'expo-router';
import { Screen, KeyboardAware } from '@/components/layout';
import { UText, Input, Button, NavHeader, PasswordStrength, Checkbox, Divider, IconButton, UserIcon, LockIcon, GoogleIcon, AppleIcon, FacebookIcon } from '@/components/ui';
import { useAuth } from '@/features/auth/useAuth';
import { spacing, colors } from '@/design';

export default function Signup() {
  const { signUp, loading, error } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [agreed, setAgreed] = useState(false);

  return (
    <Screen>
      <NavHeader onBack={() => router.back()} />
      <KeyboardAware>
        <View style={styles.container}>
          <UText style={styles.title}>Rejoins l'aventure !</UText>

          <View style={styles.form}>
            <Input
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              placeholder="Email"
              leftIcon={<UserIcon />}
            />

            <View style={styles.passwordGroup}>
              <Input
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                placeholder="Mot de passe"
                leftIcon={<LockIcon />}
                error={error ?? undefined}
              />
              {password.length > 0 && <PasswordStrength password={password} />}
              <Input
                value={confirm}
                onChangeText={setConfirm}
                secureTextEntry
                placeholder="Confirmer le mot de passe"
                leftIcon={<LockIcon />}
              />

              <TouchableOpacity
                style={styles.terms}
                onPress={() => setAgreed(v => !v)}
                activeOpacity={0.7}
              >
                <Checkbox checked={agreed} />
                <UText style={styles.termsText}>
                  {'J\'accepte les '}
                  <UText style={styles.termsLink}>Conditions d'utilisation</UText>
                  {' et la '}
                  <UText style={styles.termsLink}>Politique de confidentialité</UText>
                </UText>
              </TouchableOpacity>
            </View>
          </View>

          <Button
            label="Créer mon compte"
            onPress={async () => {
              const ok = await signUp({ email, password });
              if (ok) router.replace('/onboarding');
            }}
            loading={loading}
            style={styles.button}
          />

          <Divider label="ou continuer avec" />

          <View style={styles.socialRow}>
            <IconButton icon={<GoogleIcon />} variant="secondary" onPress={() => {}} />
            <IconButton icon={<AppleIcon />} variant="secondary" onPress={() => {}} />
            <IconButton icon={<FacebookIcon />} variant="secondary" onPress={() => {}} />
          </View>

          <Link href="/(auth)/login" asChild>
            <UText variant="small" style={styles.link}>Déjà un compte ? Se connecter</UText>
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
  passwordGroup: { gap: spacing[3] },
  terms: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing[3],
    marginTop: spacing[3],
  },
  termsText: {
    flex: 1,
    fontSize: 13,
    lineHeight: 20,
    color: colors.text.secondary,
  },
  termsLink: {
    fontSize: 13,
    color: colors.brand.primary,
  },
  button: { marginTop: spacing[2] },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: spacing[4],
  },
  link: { textAlign: 'center', color: colors.brand.primary },
});
