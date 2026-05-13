import { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Screen } from '@/components/layout';
import { UText, Button, Divider, ProfilHeader, StatCard, SettingCard } from '@/components/ui';
import { useProfile } from '@/features/profile/useProfile';
import { useAuth } from '@/features/auth/useAuth';
import { LoadingOverlay } from '@/components/shared';
import { spacing, colors } from '@/design';

export default function Profile() {
  const { user, signOut } = useAuth();
  const { profile, loading, fetchProfile } = useProfile();

  useEffect(() => { fetchProfile(); }, []);

  if (loading && !profile) return <LoadingOverlay />;

  const joinedYear = user?.created_at ? new Date(user.created_at).getFullYear() : undefined;

  return (
    <Screen scroll>
      <ProfilHeader
        name={profile?.full_name}
        avatarUri={profile?.avatar_url}
        joinedYear={joinedYear}
      />

      <View style={styles.stats}>
        <StatCard
          style={styles.statCard}
          icon={<Text style={styles.emoji}>✅</Text>}
          label="Taux d'achèvement"
          value="78%"
        />
        <StatCard
          style={styles.statCard}
          icon={<Text style={styles.emoji}>🎯</Text>}
          label="Programmes réalisés"
          value="12"
        />
        <StatCard
          style={styles.statCard}
          icon={<Text style={styles.emoji}>⏳</Text>}
          label="Programmes en cours"
          value="3"
        />
        <StatCard
          style={styles.statCard}
          icon={<Text style={styles.emoji}>🏆</Text>}
          label="Série la plus longue"
          value="21 j"
        />
      </View>

      <StatCard
        horizontal
        icon={<Text style={styles.emoji}>🔥</Text>}
        label="Série en cours"
        value="7 j"
      />

      <View style={styles.settingsGroup}>
        <SettingCard label="Mon compte" />
        <SettingCard label="Notifications" />
        <SettingCard label="Abonnement" />
        <SettingCard label="Langage" />
        <SettingCard label="Thème" />
      </View>

      <View style={styles.settingsGroup}>
        <SettingCard label="Centre d'aide" />
        <SettingCard label="Remarques" />
      </View>

      <View style={styles.settingsGroup}>
        <SettingCard label="Conditions d'utilisation" />
        <SettingCard label="Politique de confidentialité" />
        <SettingCard label="Remerciements" />
      </View>

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
  stats: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing[2],
    marginTop: spacing[4],
    marginBottom: spacing[2],
  },
  statCard: {
    flex: 1,
    minWidth: '45%',
  },
  settingsGroup: { gap: spacing[2], marginTop: spacing[2] },

  signOut: { marginTop: spacing[6] },
  emoji: { fontSize: 34, lineHeight: 42, textAlign: 'center' },
});
