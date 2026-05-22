import React, { useRef } from 'react';
import { Animated, Pressable, ActivityIndicator, StyleSheet, type ViewStyle } from 'react-native';
import { colors, borders } from '@/design';
import { UText } from './Text';

type Variant = 'primary' | 'secondary' | 'ghost' | 'tertiary';

interface CircleButtonProps {
  topText: string;
  bottomText: string;
  onPress?: () => void;
  variant?: Variant;
  loading?: boolean;
  disabled?: boolean;
  width?: number;
  height?: number;
  topFontSize?: number;
  bottomFontSize?: number;
  style?: ViewStyle;
}

const PRESS_DEPTH = 4;

export function CircleButton({
  topText,
  bottomText,
  onPress,
  variant = 'primary',
  loading = false,
  disabled = false,
  width = 73,
  height = 61,
  topFontSize = 32,
  bottomFontSize = 16,
  style,
}: CircleButtonProps) {
  const translateY = useRef(new Animated.Value(0)).current;
  const borderBottomWidth = useRef(new Animated.Value(PRESS_DEPTH)).current;

  const pressIn = () => {
    Animated.parallel([
      Animated.spring(translateY, { toValue: PRESS_DEPTH, useNativeDriver: false, speed: 50, bounciness: 0 }),
      Animated.spring(borderBottomWidth, { toValue: 0, useNativeDriver: false, speed: 50, bounciness: 0 }),
    ]).start();
  };

  const pressOut = () => {
    Animated.parallel([
      Animated.spring(translateY, { toValue: 0, useNativeDriver: false, speed: 30, bounciness: 4 }),
      Animated.spring(borderBottomWidth, { toValue: PRESS_DEPTH, useNativeDriver: false, speed: 30, bounciness: 4 }),
    ]).start();
  };

  const isDisabled = disabled || loading;

  const DISABLED_BG     = '#DDDDDD';
  const DISABLED_TEXT   = '#B6B6B6';
  const DISABLED_BORDER = '#B6B6B6';

  const spinnerColor = isDisabled
    ? DISABLED_TEXT
    : variant === 'primary' || variant === 'tertiary'
      ? colors.text.inverse
      : colors.brand.primary;

  const variantBg = {
    primary: colors.brand.primary,
    secondary: colors.background.primary,
    ghost: 'transparent',
    tertiary: colors.tertiary.default,
  };

  const variantBorder = {
    primary: colors.brand.primaryPressed,
    secondary: colors.ui.border,
    ghost: 'transparent',
    tertiary: colors.tertiary.pressed,
  };

  const bg          = isDisabled ? DISABLED_BG     : variantBg[variant];
  const borderColor = isDisabled ? DISABLED_BORDER : variantBorder[variant];
  const textColor   = isDisabled
    ? DISABLED_TEXT
    : variant === 'secondary' ? colors.text.primary : colors.text.inverse;
  const subTextColor = isDisabled
    ? DISABLED_TEXT
    : variant === 'secondary' ? colors.text.secondary : colors.text.inverse;

  const borderRadius = Math.min(width, height) / 2;

  return (
    <Pressable onPress={onPress} onPressIn={pressIn} onPressOut={pressOut} disabled={isDisabled} style={style}>
      <Animated.View
        style={[
          {
            width,
            height,
            borderRadius,
            backgroundColor: bg,
            borderWidth: variant === 'secondary' && !isDisabled ? 1.5 : 0,
            borderColor: variant === 'secondary' && !isDisabled ? colors.ui.border : 'transparent',
            alignItems: 'center',
            justifyContent: 'center',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: isDisabled ? 0 : 0.15,
            shadowRadius: 3,
            elevation: isDisabled ? 0 : 4,
          },
          {
            transform: [{ translateY }],
            borderBottomWidth,
            borderBottomColor: borderColor,
          },
        ]}
      >
        {loading ? (
          <ActivityIndicator color={spinnerColor} size="small" />
        ) : (
          <UText style={{ textAlign: 'center' }}>
            <UText
              style={{
                fontSize: topFontSize,
                fontFamily: 'MadeTommy-Bold',
                color: textColor,
                lineHeight: topFontSize,
              }}
            >
              {topText}
            </UText>
            {'\n'}
            <UText
              style={{
                fontSize: bottomFontSize,
                fontFamily: 'MadeTommy-Regular',
                color: subTextColor,
                textTransform: 'uppercase',
                lineHeight: bottomFontSize,
              }}
            >
              {bottomText}
            </UText>
          </UText>
        )}
      </Animated.View>
    </Pressable>
  );
}
