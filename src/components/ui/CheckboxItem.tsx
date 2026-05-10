import React from 'react';
import { TouchableOpacity, View, StyleSheet, type ViewStyle } from 'react-native';
import { colors, borders, fonts, typography } from '@/design';
import { UText } from './Text';
import { Checkbox } from './Checkbox';

interface CheckboxItemProps {
  title: string;
  description?: string;
  checked: boolean;
  onToggle: () => void;
  icon?: React.ReactNode;
  style?: ViewStyle;
}

export function CheckboxItem({ title, description, checked, onToggle, icon, style }: CheckboxItemProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onToggle}
      style={[styles.row, checked && styles.rowChecked, style]}
    >
      {icon && (
        <View style={styles.icon}>
          {icon}
        </View>
      )}

      <View style={styles.textGroup}>
        <UText style={styles.title}>{title}</UText>
        {description && (
          <UText style={styles.description}>{description}</UText>
        )}
      </View>

      <Checkbox checked={checked} size={29} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 55,
    backgroundColor: colors.background.surface,  // #F5F5F7
    borderWidth: 1,
    borderColor: colors.ui.border,               // #D0D0D8
    borderRadius: borders.radius.md,
    paddingHorizontal: 20,
    paddingVertical: 12,
    gap: 16,
  },
  rowChecked: {
    backgroundColor: '#E4F7FF',
    borderColor: colors.brand.primary,           // #50BBEC
  },
  icon: {
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    alignSelf: 'center',
    overflow: 'hidden',
  },
  textGroup: {
    flex: 1,
    gap: 0,
    alignSelf: 'center',
  },
  title: {
    fontSize: typography.fontSize.base,          // 16px
    fontFamily: fonts.bold,
    color: colors.text.primary,
  },
  description: {
    fontSize: 14,
    fontFamily: fonts.regular,
    color: colors.text.secondary,
    marginTop: -3,
  },
});
