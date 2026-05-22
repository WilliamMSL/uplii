import React from 'react';
import { View, StyleSheet, type ViewStyle } from 'react-native';
import { fonts } from '@/design';
import { UText } from './Text';
import { Button } from './Button';

interface TaskPromptCardProps {
  title: string;
  subtitle: string;
  buttonLabel: string;
  onPress?: () => void;
  illustration?: React.ReactNode;
  style?: ViewStyle;
}

export function TaskPromptCard({
  title,
  subtitle,
  buttonLabel,
  onPress,
  illustration,
  style,
}: TaskPromptCardProps) {
  return (
    <View style={[styles.card, style]}>
      {illustration && <View style={styles.illustration}>{illustration}</View>}
      <UText style={styles.title}>{title}</UText>
      <UText style={styles.subtitle}>{subtitle}</UText>
      <View style={styles.buttonWrap}>
        <Button label={buttonLabel} variant="primary" onPress={onPress} style={{ width: '100%' }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#50BBEC',
    backgroundColor: '#E4F7FF',
    borderRadius: 10,
    paddingVertical: 25,
    paddingHorizontal: 16,
    gap: 8,
    alignItems: 'center',
  },
  illustration: {
    marginBottom: 4,
  },
  title: {
    fontSize: 18,
    fontFamily: fonts.medium,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 16,
    fontFamily: fonts.regular,
    color: '#4E5A5F',
    textAlign: 'center',
    maxWidth: 240,
  },
  buttonWrap: {
    marginTop: 8,
    width: '100%',
    maxWidth: 240,
  },
});
