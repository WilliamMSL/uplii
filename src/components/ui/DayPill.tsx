import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { UText } from './Text';
import { colors, borders, fonts } from '@/design';

interface DayPillProps {
  label: string;
  date: number;
  active?: boolean;
  onPress?: () => void;
}

export function DayPill({ label, date, active = false, onPress }: DayPillProps) {
  return (
    <TouchableOpacity
      style={[styles.pill, active && styles.pillActive]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <UText style={[styles.label, active && styles.textActive]}>{label}</UText>
      <UText style={[styles.date,  active && styles.textActive]}>{date}</UText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  pill: {
    width: 36,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3,
    borderRadius: borders.radius.md,
    borderWidth: 1,
    borderColor: colors.ui.border,
    backgroundColor: colors.background.primary,
  },
  pillActive: {
    backgroundColor: colors.brand.primary,
    borderColor: colors.brand.primary,
  },
  label: {
    fontSize: 11,
    lineHeight: 11,
    fontFamily: fonts.regular,
    color: colors.text.secondary,
  },
  date: {
    fontSize: 16,
    lineHeight: 16,
    fontFamily: fonts.medium,
    color: colors.text.primary,
  },
  textActive: {
    color: colors.text.inverse,
  },
});
