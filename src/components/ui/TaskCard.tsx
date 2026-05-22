import React, { useState } from 'react';
import { TouchableOpacity, View, StyleSheet, type ViewStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { borders, fonts } from '@/design';
import { UText } from './Text';
import { Button } from './Button';
import { ClockIcon, BoltIcon, PlayIcon } from '@/components/icons/TaskIcons';

export type TaskCardVariant = 'purple' | 'yellow' | 'blue' | 'orange' | 'green';

interface VariantPalette {
  background: string;
  border: string;
  checkbox: string;
  icon: string;
}

const palettes: Record<TaskCardVariant, VariantPalette> = {
  purple: {
    background: '#D8C8F0',
    border: '#B69EE0',
    checkbox: '#6A4FB5',
    icon: '#3F2A7E',
  },
  yellow: {
    background: '#FBE9A0',
    border: '#E9D478',
    checkbox: '#B5933B',
    icon: '#6F5410',
  },
  blue: {
    background: '#A8D8F0',
    border: '#74BEDF',
    checkbox: '#2E7CA8',
    icon: '#0F4868',
  },
  orange: {
    background: '#F8C8A8',
    border: '#E5A47A',
    checkbox: '#B86A3C',
    icon: '#7A3D14',
  },
  green: {
    background: '#B8E0C0',
    border: '#86C495',
    checkbox: '#3F8E5B',
    icon: '#1F5A30',
  },
};

interface TaskCardProps {
  title: string;
  category: string;
  time?: string;
  variant?: TaskCardVariant;
  checked: boolean;
  onToggle: () => void;
  onStart?: () => void;
  icon?: React.ReactNode;
  schedule?: string;
  xp?: number;
  expanded?: boolean;
  onExpandToggle?: () => void;
  style?: ViewStyle;
}

function Checkmark({ size = 14, color = '#fff' }: { size?: number; color?: string }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 12 12" fill="none">
      <Path
        d="M2 6l3 3 5-5"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function TaskCard({
  title,
  category,
  time,
  variant = 'blue',
  checked,
  onToggle,
  onStart,
  icon,
  schedule = "Aujourd'hui 18h",
  xp = 50,
  expanded: expandedProp,
  onExpandToggle,
  style,
}: TaskCardProps) {
  const palette = palettes[variant];
  const subtitle = time ? `${category} · ${time}` : category;
  const [internalExpanded, setInternalExpanded] = useState(false);
  const isControlled = expandedProp !== undefined;
  const expanded = isControlled ? expandedProp : internalExpanded;

  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={() => (isControlled ? onExpandToggle?.() : setInternalExpanded((v) => !v))}
      style={[
        styles.card,
        {
          backgroundColor: palette.background,
          borderColor: palette.border,
        },
        style,
      ]}
    >
      <View style={styles.row}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={onToggle}
          hitSlop={8}
          style={[
            styles.checkbox,
            { borderColor: palette.checkbox },
            checked && { backgroundColor: palette.checkbox },
          ]}
        >
          {checked && <Checkmark />}
        </TouchableOpacity>

        <View style={styles.textGroup}>
          <UText
            style={[
              styles.title,
              { color: palette.icon },
              checked && styles.strikethrough,
            ]}
          >
            {title}
          </UText>
          <UText
            style={[
              styles.subtitle,
              { color: palette.checkbox },
              checked && styles.strikethrough,
            ]}
          >
            {subtitle}
          </UText>
        </View>

        {icon && (
          <View style={styles.icon}>
            {React.isValidElement(icon)
              ? React.cloneElement(icon as React.ReactElement<any>, { color: palette.icon })
              : icon}
          </View>
        )}
      </View>

      {expanded && (
        <View style={styles.expand}>
          <View style={styles.metaRow}>
            <View style={styles.metaItem}>
              <ClockIcon />
              <UText style={[styles.metaText, { color: palette.icon }]}>{schedule}</UText>
            </View>
            <View style={styles.metaItem}>
              <BoltIcon />
              <UText style={[styles.metaText, { color: palette.icon }]}>+{xp} XP</UText>
            </View>
          </View>
          <Button label="C'est parti" variant="tertiary" onPress={onStart} leftIcon={<PlayIcon />} style={styles.button} />
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    minHeight: 56,
    borderRadius: borders.radius.md,
    borderWidth: 1.5,
    borderLeftWidth: 6,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  expand: {
    marginTop: 12,
    gap: 10,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  metaText: {
    fontSize: 12,
    fontFamily: fonts.medium,
  },
  button: {
    alignSelf: 'stretch',
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: borders.radius.sm,
    borderWidth: 1.5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textGroup: {
    flex: 1,
    gap: 0,
  },
  title: {
    fontSize: 18,
    lineHeight: 20,
    fontFamily: fonts.medium,
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 16,
    fontFamily: fonts.regular,
    opacity: 0.9,
  },
  strikethrough: {
    textDecorationLine: 'line-through',
    opacity: 0.55,
  },
  icon: {
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
