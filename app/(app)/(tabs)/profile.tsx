import { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Screen } from '@/components/layout';
import { UText, Avatar, Button, Divider } from '@/components/ui';
import { useProfile } from '@/features/profile/useProfile';
import { useAuth } from '@/features/auth/useAuth';
import { LoadingOverlay } from '@/components/shared';
import { spacing, colors } from '@/design';

export default function Profile() {
  const { user, signOut } = useAuth();
  const { profile, loading, fetchProfile } = useProfile();

  useEffect(() => { fetchProfile(); }, []);

  if (loading) return <LoadingOverlay />;

  return (
    <Screen scroll>
      <View style={styles.header}>
        <Avatar name={profile?.full_name ?? user?.email} size={72} />
        <UText variant="h3">{profile?.full_name ?? 'Mon profil'}</UText>
        <UText variant="caption">{user?.email}</UText>
      </View>

      <Divider />

      {profile?.bio && (
        <View style={styles.section}>
          <UText variant="small" style={styles.label}>Bio</UText>
          <UText variant="body">{profile.bio}</UText>
        </View>
      )}

      <Button
        label="Se déconnecter"
        variant="secondary"
        onPress={signOut}
        style={styles.signOut}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: { alignItems: 'center', gap: spacing[2], paddingVertical: spacing[6] },
  section: { gap: spacing[1], marginVertical: spacing[3] },
  label: { color: colors.text.secondary },
  signOut: { marginTop: spacing[8] },
});
