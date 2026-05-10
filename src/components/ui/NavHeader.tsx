import React from 'react';
import { View, TouchableOpacity, StyleSheet, type ViewStyle } from 'react-native';
import { colors, spacing } from '@/design';
import { Steps } from './Steps';
import { UText } from './Text';
import { ChevronLeftIcon } from './icons';

interface NavHeaderProps {
  onBack?: () => void;
  steps?: { current: number; total: number };
  rightLabel?: string;
  onRightPress?: () => void;
  style?: ViewStyle;
}

export function NavHeader({ onBack, steps, rightLabel, onRightPress, style }: NavHeaderProps) {
  return (
    <View style={[styles.container, style]}>

      <View style={styles.side}>
        {onBack && (
          <TouchableOpacity onPress={onBack} activeOpacity={0.7} style={styles.backButton}>
            <ChevronLeftIcon />
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.center}>
        {steps && (
          <Steps current={steps.current} total={steps.total} />
        )}
      </View>

      <View style={[styles.side, styles.sideRight]}>
        {rightLabel && (
          <TouchableOpacity onPress={onRightPress} activeOpacity={0.7}>
            <UText style={styles.rightLabel}>{rightLabel}</UText>
          </TouchableOpacity>
        )}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[3],
    minHeight: 52,
  },
  side: {
    width: 64,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  sideRight: {
    alignItems: 'flex-end',
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    padding: spacing[1],
  },
  rightLabel: {
    fontSize: 14,
    fontFamily: 'MadeTommy-Medium',
    color: colors.text.secondary,
  },
});
