import React from 'react';
import { View, StyleSheet, type ViewProps } from 'react-native';
import { colors, spacing, borders, shadows } from '@/design';

export function Card({ style, children, ...props }: ViewProps) {
  return (
    <View style={[styles.card, style]} {...props}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.background.primary,
    borderRadius: borders.radius.lg,
    padding: spacing[4],
    ...shadows.md,
  },
});
