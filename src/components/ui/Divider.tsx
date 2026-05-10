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
    backgroundColor: '#D9D9D9',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[3],
  },
  label: {
    fontSize: 13,
    color: colors.text.secondary,
    fontFamily: 'MadeTommy-Regular',
  },
});
