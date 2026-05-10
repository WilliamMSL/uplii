import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { colors, borders } from '@/design';

interface CheckboxProps {
  checked: boolean;
  size?: number;
}

function Checkmark({ size }: { size: number }) {
  return (
    <Svg width={size * 0.55} height={size * 0.55} viewBox="0 0 12 12" fill="none">
      <Path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

export function Checkbox({ checked, size = 22 }: CheckboxProps) {
  return (
    <View style={[styles.box, { width: size, height: size }, checked && styles.boxChecked]}>
      {checked && <Checkmark size={size} />}
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    borderRadius: borders.radius.sm,
    borderWidth: 1.5,
    borderColor: colors.neutral[200],
    backgroundColor: colors.background.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxChecked: {
    backgroundColor: colors.brand.primary,
    borderColor: colors.brand.primary,
  },
});
