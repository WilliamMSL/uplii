import React from 'react';
import { View, StyleSheet, type ViewStyle } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';
import { colors } from '@/design';

interface CircleProgressProps {
  progress: number; // 0-100
  icon: React.ReactNode;
  locked?: boolean;
  size?: number;
  style?: ViewStyle;
}

export function CircleProgress({
  progress,
  icon,
  locked = false,
  size = 80,
  style
}: CircleProgressProps) {
  const radius = (size - 8) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  const progressColor = locked ? colors.ui.border : colors.brand.primary;
  const backgroundColor = locked ? '#f0f0f0' : '#f5f5f5';

  return (
    <View style={[styles.container, { width: size, height: size }, style]}>
      <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {/* Background circle */}
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#e0e0e0"
          strokeWidth={3}
          fill="none"
        />

        {/* Progress circle */}
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={progressColor}
          strokeWidth={3}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          style={{ transform: `rotate(-90deg)`, transformOrigin: `${size / 2}px ${size / 2}px` }}
        />
      </Svg>

      {/* Icon center */}
      <View style={[styles.iconContainer, { opacity: locked ? 0.5 : 1 }]}>
        {icon}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
