import React from 'react';
import { View, StyleSheet, type ViewStyle } from 'react-native';
import { UText } from './Text';
import { fonts, borders } from '@/design';

interface BadgeProps {
  label: string;
  style?: ViewStyle;
}

export function Badge({ label, style }: BadgeProps) {
  return (
    <View style={[styles.container, style]}>
      <UText style={styles.label}>{label}</UText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F7',
    borderRadius: borders.radius.full,
    paddingVertical: 6,
    paddingHorizontal: 8,
    alignSelf: 'center',
  },
  label: {
    fontSize: 12,
    fontFamily: fonts.medium,
    color: '#5F5F66',
  },
});
