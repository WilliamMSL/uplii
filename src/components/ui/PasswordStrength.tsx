import React from 'react';
import { View, StyleSheet } from 'react-native';
import { spacing } from '@/design';

interface PasswordStrengthProps {
  password: string;
}

function calcStrength(password: string): number {
  if (!password) return 0;
  let score = 0;
  if (password.length >= 6) score++;
  if (password.length >= 10) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;
  return score;
}

export function PasswordStrength({ password }: PasswordStrengthProps) {
  const strength = calcStrength(password);
  return (
    <View style={styles.container}>
      {Array.from({ length: 5 }, (_, i) => (
        <View
          key={i}
          style={[styles.bar, { backgroundColor: i < strength ? '#7CB342' : '#E0E0E0' }]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: spacing[2],
  },
  bar: {
    flex: 1,
    height: 4,
    borderRadius: 2,
  },
});
