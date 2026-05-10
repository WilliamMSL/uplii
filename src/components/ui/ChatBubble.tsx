import React, { useState, useEffect } from 'react';
import { View, StyleSheet, type ViewStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { colors, borders, spacing } from '@/design';
import { UText } from './Text';

interface ChatBubbleProps {
  message: string;
  typewriter?: boolean;
  speed?: number;
  triangleSide?: 'bottom' | 'right';
  style?: ViewStyle;
}

export function ChatBubble({ message, typewriter = false, speed = 40, triangleSide = 'bottom', style }: ChatBubbleProps) {
  const [displayed, setDisplayed] = useState(typewriter ? '' : message);

  useEffect(() => {
    if (!typewriter) {
      setDisplayed(message);
      return;
    }
    setDisplayed('');
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(message.slice(0, i));
      if (i >= message.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [message, typewriter, speed]);

  if (triangleSide === 'right') {
    return (
      <View style={[styles.rowWrapper, style]}>
        <View style={styles.bubble}>
          <UText style={styles.text}>{displayed}</UText>
        </View>
        <Svg width={12} height={28} viewBox="0 0 10 24" style={styles.triangleRight}>
          <Path d="M 0,0 L 0,24 L 8,14 Q 10,12 8,10 Z" fill={colors.background.surface} />
          <Path d="M 0,0 L 8,10 Q 10,12 8,14 L 0,24" fill="none" stroke={colors.ui.border} strokeWidth={1} />
        </Svg>
      </View>
    );
  }

  return (
    <View style={[styles.container, style]}>
      <View style={styles.bubbleWrapper}>
        <View style={styles.bubble}>
          <UText style={styles.text}>{displayed}</UText>
        </View>
        <Svg width={24} height={12} viewBox="0 0 20 10" style={styles.triangleBottom}>
          <Path
            d="M 0,0 L 16,0 L 2,9 Q 0,10 0,8 L 0,0 Z"
            fill={colors.background.surface}
            stroke={colors.ui.border}
            strokeWidth={1}
          />
        </Svg>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // bottom variant
  container: {
    maxWidth: '85%',
  },
  bubbleWrapper: {
    alignItems: 'stretch',
  },
  triangleBottom: {
    alignSelf: 'center',
    marginLeft: 100,
    marginTop: -1,
  },
  // right variant
  rowWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  triangleRight: {
    marginLeft: -1,
  },
  // shared
  bubble: {
    borderWidth: 1,
    borderColor: colors.ui.border,
    borderRadius: borders.radius.md,
    padding: spacing[4],
    backgroundColor: colors.background.surface,
  },
  text: {
    fontSize: 24,
    fontFamily: 'MadeTommy-Medium',
    color: colors.text.primary,
    lineHeight: 32,
  },
});
