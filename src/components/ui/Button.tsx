import React, { useRef } from 'react';
import { Animated, Pressable, ActivityIndicator, StyleSheet, View, type ViewStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, spacing, borders, typography } from '@/design';
import { UText } from './Text';

type Variant = 'primary' | 'secondary' | 'ghost' | 'tertiary' | 'golden';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps {
  label: string;
  onPress?: () => void;
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  style?: ViewStyle;
}

const PRESS_DEPTH = 4;

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

const sizeHeights: Record<Size, number> = { sm: 38, md: 50, lg: 58 };
const sizePaddingH: Record<Size, number> = { sm: spacing[3], md: spacing[5], lg: spacing[6] };

export function Button({
  label,
  onPress,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  leftIcon,
  style,
}: ButtonProps) {
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

  const innerView = (
    <Animated.View
      style={[
        styles.base,
        styles[size],
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
        : <UText style={[styles.label, variantLabelStyle[variant]]}>{label}</UText>
      }
    </Animated.View>
  );

  if (variant === 'golden') {
    return (
      <Pressable onPress={onPress} onPressIn={pressIn} onPressOut={pressOut} disabled={isDisabled} style={style}>
        <AnimatedLinearGradient
          colors={['#FFE38F', '#ECC96B', '#D9AE47']}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1.5 }}
          style={[
            {
              height: sizeHeights[size],
              borderRadius: borders.radius.md,
              alignItems: 'center',
              justifyContent: 'center',
              paddingHorizontal: sizePaddingH[size],
            },
            isDisabled && styles.disabled,
            {
              transform: [{ translateY }],
              borderBottomWidth,
              borderBottomColor: '#8E732F',
            },
          ]}
        >
          {loading ? (
            <ActivityIndicator color="#37342D" size="small" />
          ) : (
            <View style={styles.content}>
              {leftIcon}
              <UText style={[styles.label, { color: '#37342D' }]}>{label}</UText>
            </View>
          )}
        </AnimatedLinearGradient>
      </Pressable>
    );
  }

  return (
    <Pressable onPress={onPress} onPressIn={pressIn} onPressOut={pressOut} disabled={isDisabled} style={style}>
      <Animated.View
        style={[
          styles.base,
          styles[variant],
          styles[size],
          isDisabled && styles.disabled,
          {
            transform: [{ translateY }],
            borderBottomWidth,
            borderBottomColor: variantBorderColor[variant],
          },
        ]}
      >
        {loading ? (
          <ActivityIndicator color={spinnerColor} size="small" />
        ) : (
          <View style={styles.content}>
            {leftIcon}
            <UText style={[styles.label, variantLabelStyle[variant]]}>{label}</UText>
          </View>
        )}
      </Animated.View>
    </Pressable>
  );
}

const variantBorderColor: Record<Variant, string> = {
  primary:   colors.brand.primaryPressed,  // #3998C3
  secondary: colors.ui.border,             // #D0D0D8
  ghost:     'transparent',
  tertiary:  colors.tertiary.pressed,      // #1D4459
  golden:    'transparent',
};

const variantLabelStyle: Record<Variant, object> = {
  primary:   { color: colors.text.inverse },
  secondary: { color: colors.brand.primary },
  ghost:     { color: colors.brand.primary },
  tertiary:  { color: colors.text.inverse },
  golden:    { color: colors.text.primary },
};

const styles = StyleSheet.create({
  base: {
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
    backgroundColor: colors.tertiary.default,  // #2A607D
  },
  sm: { height: 38, paddingHorizontal: spacing[3] },
  md: { height: 50, paddingHorizontal: spacing[5] },
  lg: { height: 58, paddingHorizontal: spacing[6] },
  disabled: { opacity: 0.5 },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  label: {
    fontFamily: 'MadeTommy-Bold',
    fontSize: typography.fontSize.base,
    letterSpacing: 0.3,
  },
});
