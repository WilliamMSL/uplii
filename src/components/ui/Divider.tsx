import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors, spacing } from '@/design';
import { UText } from './Text';

interface DividerProps {
  label?: string;
}

export function Divider({ label }: DividerProps = {}) {
  if (!label) {
    return <View style={styles.line} />;
  }
  return (
    <View style={styles.row}>
      <View style={styles.line} />
      <UText style={styles.label}>{label}</UText>
      <View style={styles.line} />
    </View>
  );
}

const styles = StyleSheet.create({
  line: {
    flex: 1,
    height: 1,
    backgroundColor: colors.ui.border,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[3],
  },
  label: {
    fontSize: 12,
    color: colors.ui.border,
    fontFamily: 'MadeTommy-Regular',
  },
});
