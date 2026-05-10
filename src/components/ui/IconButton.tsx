import React, { useRef } from 'react';
import { Animated, Pressable, ActivityIndicator, StyleSheet, type ViewStyle } from 'react-native';
import { colors, spacing, borders } from '@/design';

type Variant = 'primary' | 'secondary' | 'ghost' | 'tertiary';

interface IconButtonProps {
  icon: React.ReactNode;
  onPress?: () => void;
  variant?: Variant;
  loading?: boolean;
  disabled?: boolean;
  style?: ViewStyle;
}

const PRESS_DEPTH = 4;

export function IconButton({
  icon,
  onPress,
  variant = 'primary',
  loading = false,
  disabled = false,
  style,
}: IconButtonProps) {
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

  return (
    <Pressable onPress={onPress} onPressIn={pressIn} onPressOut={pressOut} disabled={isDisabled} style={style}>
      <Animated.View
        style={[
          styles.base,
          styles[variant],
          isDisabled && styles.disabled,
          {
            transform: [{ translateY }],
            borderBottomWidth,
            borderBottomColor: variantBorderColor[variant],
          },
        ]}
      >
        {loading
          ? <ActivityIndicator color={spinnerColor} size="small" />
          : <Animated.View style={styles.iconContainer}>{icon}</Animated.View>
        }
      </Animated.View>
    </Pressable>
  );
}

const variantBorderColor: Record<Variant, string> = {
  primary:   colors.brand.primaryPressed,
  secondary: colors.ui.border,
  ghost:     'transparent',
  tertiary:  colors.tertiary.pressed,
};

const styles = StyleSheet.create({
  base: {
    width: 64,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: borders.radius.md,
  },
  primary: {
    backgroundColor: colors.brand.primary,
  },
  secondary: {
    backgroundColor: colors.background.primary,
    borderWidth: 1.5,
    borderColor: colors.ui.border,
  },
  ghost: {
    backgroundColor: 'transparent',
  },
  tertiary: {
    backgroundColor: colors.tertiary.default,
  },
  disabled: {
    opacity: 0.5,
  },
  iconContainer: {
    width: 31,
    height: 31,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
