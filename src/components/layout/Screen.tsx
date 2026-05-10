import React from 'react';
import { ScrollView, View, StyleSheet, type ViewProps } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, spacing } from '@/design';

interface ScreenProps extends ViewProps {
  scroll?: boolean;
  padded?: boolean;
}

export function Screen({ scroll = false, padded = true, style, children, ...props }: ScreenProps) {
  const content = scroll
    ? <ScrollView contentContainerStyle={[styles.content, padded && styles.padded]} showsVerticalScrollIndicator={false}>{children}</ScrollView>
    : <View style={[styles.content, padded && styles.padded, style]} {...props}>{children}</View>;

  return (
    <SafeAreaView style={styles.safe} edges={['top', 'left', 'right']}>
      {content}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background.primary },
  content: { flex: 1 },
  padded: { paddingHorizontal: spacing[4] },
});
