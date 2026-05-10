import React from 'react';
import { View, StyleSheet } from 'react-native';
import { spacing } from '@/design';
import { UText } from '@/components/ui';

interface EmptyStateProps {
  title: string;
  description?: string;
}

export function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <View style={styles.container}>
      <UText variant="h3">{title}</UText>
      {description && <UText variant="body" style={styles.description}>{description}</UText>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: spacing[6] },
  description: { textAlign: 'center', marginTop: spacing[2] },
});
