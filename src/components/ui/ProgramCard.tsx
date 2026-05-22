import React from 'react';
import { View, StyleSheet, type ViewStyle } from 'react-native';
import { borders, colors, fonts } from '@/design';
import { UText } from './Text';

interface ProgramCardProps {
  title: string;
  icon?: React.ReactNode;
  progress: number;
  currentDay: number;
  totalDays: number;
  color?: string;
  style?: ViewStyle;
}

export function ProgramCard({
  title,
  icon,
  progress,
  currentDay,
  totalDays,
  color = '#FF8547',
  style,
}: ProgramCardProps) {
  const pct = Math.max(0, Math.min(100, progress));

  return (
    <View style={[styles.card, style]}>
      <View style={styles.row}>
        {icon && <View style={styles.icon}>{icon}</View>}
        <UText style={styles.title}>{title}</UText>
      </View>

      <View style={styles.progressRow}>
        <View style={styles.track}>
          <View style={[styles.fill, { width: `${pct}%`, backgroundColor: color }]} />
        </View>
        <UText style={styles.percent}>{Math.round(pct)}%</UText>
      </View>

      <UText style={styles.dayLabel}>Jour {currentDay}/{totalDays}</UText>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: borders.radius.md,
    borderWidth: 1,
    borderColor: colors.ui.border,
    backgroundColor: colors.background.primary,
    paddingVertical: 12,
    paddingHorizontal: 14,
    gap: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  icon: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.medium,
    color: colors.text.primary,
    flex: 1,
  },
  progressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  track: {
    flex: 1,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#EEF0F2',
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
    borderRadius: 4,
  },
  percent: {
    fontSize: 12,
    fontFamily: fonts.regular,
    color: colors.text.secondary,
  },
  dayLabel: {
    fontSize: 12,
    fontFamily: fonts.regular,
    color: colors.text.secondary,
    alignSelf: 'flex-end',
  },
});
