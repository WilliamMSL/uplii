import React from 'react';
import { Text, StyleSheet, type TextProps } from 'react-native';
import { colors, typography } from '@/design';

type Variant = 'h1' | 'h2' | 'h3' | 'body' | 'small' | 'caption';

interface UTextProps extends TextProps {
  variant?: Variant;
}

export function UText({ variant = 'body', style, ...props }: UTextProps) {
  return <Text style={[styles.base, styles[variant], style]} {...props} />;
}

const { fontFamily: f, fontSize: s, lineHeight: lh } = typography;

const styles = StyleSheet.create({
  base: {
    color: colors.text.primary,
    fontFamily: f.regular,
  },
  h1: {
    fontSize: s['3xl'],
    fontFamily: f.bold,
    lineHeight: s['3xl'] * lh.tight,
  },
  h2: {
    fontSize: s['2xl'],
    fontFamily: f.bold,
    lineHeight: s['2xl'] * lh.tight,
  },
  h3: {
    fontSize: s.xl,
    fontFamily: f.bold,
  },
  body: {
    fontSize: s.base,
    fontFamily: f.regular,
    lineHeight: s.base * lh.normal,
  },
  small: {
    fontSize: s.sm,
    fontFamily: f.regular,
  },
  caption: {
    fontSize: s.xs,
    fontFamily: f.light,
    color: colors.text.secondary,
  },
});
