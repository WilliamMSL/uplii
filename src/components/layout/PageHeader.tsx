import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar } from '@/components/ui/Avatar';
import { UText } from '@/components/ui/Text';
import { FlameIcon } from '@/components/icons/FlameIcon';
import { useProfile } from '@/features/profile/useProfile';
import { colors, spacing, fonts } from '@/design';

interface PageHeaderProps {
  streak?: number;
  title?: string;
  children?: React.ReactNode;
}

export function PageHeader({ streak = 0, title, children }: PageHeaderProps) {
  const { profile } = useProfile();

  const firstName = profile?.full_name?.split(' ')[0] ?? null;
  const greeting  = firstName ? `Salut, ${firstName} !` : 'Salut !';

  return (
    <View style={styles.wrapper}>
      <View style={styles.top}>
        <View style={styles.left}>
          {!title && <Avatar name={firstName ?? undefined} size={40} />}
          <UText variant="h3">{title ?? greeting}</UText>
        </View>
        <View style={styles.flame}>
          <UText style={styles.flameCount}>{streak}</UText>
          <FlameIcon width={20} height={25} />
        </View>
      </View>
      {children && <View style={styles.sub}>{children}</View>}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    gap: spacing[4],
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[3],
  },
  flame: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[1],
  },
  flameCount: {
    fontFamily: fonts.bold,
    fontSize: 18,
    color: colors.text.primary,
  },
});
