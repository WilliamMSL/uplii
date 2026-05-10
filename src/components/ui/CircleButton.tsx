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

  const spinnerColor = variant === 'primary' || variant === 'tertiary'
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

  const borderRadius = Math.min(width, height) / 2;

  return (
    <Pressable onPress={onPress} onPressIn={pressIn} onPressOut={pressOut} disabled={isDisabled} style={style}>
      <Animated.View
        style={[
          {
            width,
            height,
            borderRadius,
            backgroundColor: variantBg[variant],
            borderWidth: variant === 'secondary' ? 1.5 : 0,
            borderColor: variant === 'secondary' ? colors.ui.border : 'transparent',
            alignItems: 'center',
            justifyContent: 'center',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.15,
            shadowRadius: 3,
            elevation: 4,
          },
          isDisabled && { opacity: 0.5 },
          {
            transform: [{ translateY }],
            borderBottomWidth,
            borderBottomColor: variantBorder[variant],
          },
        ]}
      >
        {loading ? (
          <ActivityIndicator color={spinnerColor} size="small" />
        ) : (
          <UText style={{ textAlign: 'center' }}>
            <UText
              style={{
                fontSize: 32,
                fontFamily: 'MadeTommy-Bold',
                color: variant === 'secondary' ? colors.text.primary : colors.text.inverse,
                lineHeight: 32,
              }}
            >
              {topText}
            </UText>
            {'\n'}
            <UText
              style={{
                fontSize: 16,
                fontFamily: 'MadeTommy-Regular',
                color: variant === 'secondary' ? colors.text.secondary : colors.text.inverse,
                textTransform: 'uppercase',
                lineHeight: 20,
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
