import React from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, type ViewProps } from 'react-native';

export function KeyboardAware({ style, children, ...props }: ViewProps) {
  return (
    <KeyboardAvoidingView
      style={[styles.container, style]}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      {...props}
    >
      {children}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
