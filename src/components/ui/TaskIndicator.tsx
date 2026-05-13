import React from 'react';
import { View, StyleSheet, type ViewStyle } from 'react-native';

interface TaskIndicatorProps {
  children?: React.ReactNode;
  style?: ViewStyle;
}

export function TaskIndicator({ children, style }: TaskIndicatorProps) {
  return (
    <View style={[styles.container, style]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 140,
    borderWidth: 1,
    borderColor: '#50BBEC',
    backgroundColor: '#E4F7FF',
    borderRadius: 10,
  },
});
