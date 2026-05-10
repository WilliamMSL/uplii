import React from 'react';
import { View, StyleSheet, type ViewStyle } from 'react-native';
import { colors } from '@/design';

interface StepsProps {
  current: number;
  total: number;
  color?: string;
  style?: ViewStyle;
}

export function Steps({ current, total, color = colors.brand.primary, style }: StepsProps) {
  return (
    <View style={[styles.container, style]}>
      {Array.from({ length: total }).map((_, index) => (
        <View
          key={index}
          style={[
            styles.step,
            index === current && styles.stepActive,
            index !== current && styles.stepInactive,
            {
              backgroundColor: index === current ? color : colors.ui.border,
              width: index === current ? 23 : 8,
            },
          ]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },
  step: {
    height: 8,
    borderRadius: 4,
  },
  stepActive: {
    width: 23,
  },
  stepInactive: {
    width: 8,
  },
});
