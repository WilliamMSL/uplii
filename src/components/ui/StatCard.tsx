import React from 'react';
import { View, StyleSheet, type ViewStyle } from 'react-native';
import { colors, borders, spacing } from '@/design';
import { UText } from './Text';

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  horizontal?: boolean;
  style?: ViewStyle;
}

export function StatCard({ icon, label, value, horizontal = false, style }: StatCardProps) {
  if (horizontal) {
    return (
      <View style={[styles.container, styles.containerHorizontal, style]}>
        <View style={styles.headerHorizontal}>
          <View style={styles.iconContainer}>
            {icon}
          </View>
          <UText style={styles.label}>{label}</UText>
        </View>
        <UText style={styles.value}>{value}</UText>
      </View>
    );
  }

  return (
    <View style={[styles.container, style]}>
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          {icon}
        </View>
        <UText style={styles.label}>{label}</UText>
      </View>
      <UText style={styles.value}>{value}</UText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.ui.border,
    borderRadius: borders.radius.md,
    padding: spacing[3],
    gap: spacing[3],
  },
  containerHorizontal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: spacing[3],
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
  },
  headerHorizontal: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[3],
    flex: 1,
  },
  iconContainer: {
    width: 26,
    height: 26,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  label: {
    fontSize: 14,
    fontFamily: 'MadeTommy-Regular',
    color: colors.text.secondary,
  },
  value: {
    fontSize: 24,
    fontFamily: 'MadeTommy-Medium',
    color: colors.text.primary,
  },
});
