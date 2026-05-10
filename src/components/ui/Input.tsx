import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, type TextInputProps } from 'react-native';
import { colors, spacing, borders, typography } from '@/design';
import { UText } from './Text';
import { EyeOpenIcon, EyeClosedIcon } from './icons';

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  leftIcon?: React.ReactNode;
}

export function Input({ label, error, leftIcon, secureTextEntry, style, ...props }: InputProps) {
  const [secure, setSecure] = useState(secureTextEntry ?? false);

  return (
    <View style={styles.wrapper}>
      <View style={[styles.row, error && styles.rowError]}>
        {leftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}
        <TextInput
          style={[
            styles.input,
            { paddingLeft: leftIcon ? spacing[2] : spacing[4] },
            { paddingRight: secureTextEntry ? spacing[2] : spacing[4] },
            style,
          ]}
          placeholderTextColor={colors.text.disabled}
          secureTextEntry={secure}
          {...props}
        />
        {secureTextEntry && (
          <TouchableOpacity onPress={() => setSecure(s => !s)} style={styles.rightIcon} activeOpacity={0.7}>
            {secure ? <EyeOpenIcon /> : <EyeClosedIcon />}
          </TouchableOpacity>
        )}
      </View>
      {error && <UText variant="caption" style={styles.error}>{error}</UText>}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { gap: spacing[1] },
  row: {
    height: 52,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: borders.width.thin,
    borderColor: colors.neutral[200],
    borderRadius: borders.radius.md,
    backgroundColor: colors.background.primary,
  },
  rowError: { borderColor: colors.semantic.error },
  leftIcon: {
    paddingLeft: spacing[4],
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightIcon: {
    paddingHorizontal: spacing[4],
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  input: {
    flex: 1,
    height: '100%',
    fontSize: typography.fontSize.base,
    color: colors.text.primary,
  },
  error: { color: colors.semantic.error },
});
