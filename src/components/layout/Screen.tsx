import React from 'react';
import { ScrollView, View, StyleSheet, type ViewProps } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, spacing } from '@/design';

interface ScreenProps extends ViewProps {
  scroll?: boolean;
  padded?: boolean;
  backgroundColor?: string;
}

export function Screen({ scroll = false, padded = true, backgroundColor, style, children, ...props }: ScreenProps) {
  const content = scroll
    ? <ScrollView contentContainerStyle={[styles.scrollContent, padded && styles.padded]} showsVerticalScrollIndicator={false}>{children}</ScrollView>
    : <View style={[styles.content, padded && styles.padded, style]} {...props}>{children}</View>;

  return (
    <SafeAreaView style={[styles.safe, backgroundColor ? { backgroundColor } : null]} edges={['top', 'left', 'right']}>
      {content}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background.primary },
  content: { flex: 1 },
  scrollContent: { flexGrow: 1, paddingBottom: spacing[8] },
  padded: { paddingHorizontal: spacing[4], paddingTop: spacing[4] },
});
