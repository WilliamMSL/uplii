import React from 'react';
import { View, TouchableOpacity, StyleSheet, type ViewStyle } from 'react-native';
import { colors, borders, spacing } from '@/design';
import { UText } from './Text';
import Svg, { Path } from 'react-native-svg';

interface SettingCardProps {
  label: string;
  onPress?: () => void;
  style?: ViewStyle;
}

function ChevronIcon() {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M9 6l6 6-6 6"
        stroke={colors.text.secondary}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function SettingCard({ label, onPress, style }: SettingCardProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={[styles.container, style]}
    >
      <UText style={styles.label}>{label}</UText>
      <ChevronIcon />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.ui.border,
    borderRadius: borders.radius.md,
    padding: spacing[3],
    minHeight: 58,
  },
  label: {
    fontSize: 14,
    lineHeight: 18,
    fontFamily: 'MadeTommy-Regular',
    color: '#575757',
    flex: 1,
  },
});
