import React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import { colors } from '@/design';

interface IconProps {
  color?: string;
  size?: number;
}

export function ChevronLeftIcon({ color = colors.text.primary, size = 24 }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path d="M15 18l-6-6 6-6" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

export function EyeOpenIcon({ color = colors.text.disabled, size = 20 }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path d="M3 12c0-4 4-7 9-7s9 3 9 7-4 7-9 7-9-3-9-7z" stroke={color} strokeWidth={1.5} />
      <Circle cx="12" cy="12" r="3" stroke={color} strokeWidth={1.5} />
    </Svg>
  );
}

export function EyeClosedIcon({ color = colors.text.disabled, size = 20 }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path d="M2 2l20 20" stroke={color} strokeWidth={1.5} strokeLinecap="round" />
      <Path d="M6.7 6.7C4.6 8.1 3 10 3 12c0 4 4 7 9 7 1.8 0 3.4-.5 4.8-1.3" stroke={color} strokeWidth={1.5} strokeLinecap="round" />
      <Path d="M9.9 5.1C10.6 5 11.3 5 12 5c5 0 9 3 9 7 0 1.1-.3 2.2-.9 3.1" stroke={color} strokeWidth={1.5} strokeLinecap="round" />
    </Svg>
  );
}

export function UserIcon({ color = colors.text.disabled, size = 20 }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Circle cx="12" cy="8" r="4" stroke={color} strokeWidth={1.5} />
      <Path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke={color} strokeWidth={1.5} strokeLinecap="round" />
    </Svg>
  );
}

export function LockIcon({ color = colors.text.disabled, size = 20 }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path d="M5 11h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2z" stroke={color} strokeWidth={1.5} />
      <Path d="M8 11V7a4 4 0 0 1 8 0v4" stroke={color} strokeWidth={1.5} strokeLinecap="round" />
    </Svg>
  );
}

export function GoogleIcon({ color = colors.text.primary, size = 22 }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M21.35 11.1H12.18v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27 3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10 5.35 0 9.25-3.67 9.25-9.09 0-1.15-.15-1.81-.15-1.81z"
        fill={color}
      />
    </Svg>
  );
}

export function AppleIcon({ color = colors.text.primary, size = 22 }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.37 2.83zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"
        fill={color}
      />
    </Svg>
  );
}

export function FacebookIcon({ color = colors.text.primary, size = 22 }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M17 2h-3a5 5 0 0 0-5 5v3H6v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2z"
        fill={color}
      />
    </Svg>
  );
}
