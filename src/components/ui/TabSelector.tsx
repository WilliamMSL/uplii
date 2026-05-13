import React from 'react';
import { View, TouchableOpacity, StyleSheet, type ViewStyle } from 'react-native';
import { colors, spacing, borders, fonts, typography } from '@/design';
import { UText } from './Text';

interface Tab {
  id: string;
  label: string;
}

interface TabSelectorProps {
  tabs: Tab[];
  selected: string;
  onChange: (id: string) => void;
  fill?: boolean;   // force chaque tab à prendre une largeur égale
  style?: ViewStyle;
}

export function TabSelector({ tabs, selected, onChange, fill, style }: TabSelectorProps) {
  const autoFill = fill ?? tabs.length === 3;

  return (
    <View style={[styles.container, style]}>
      {tabs.map((tab) => {
        const isSelected = tab.id === selected;
        return (
          <TouchableOpacity
            key={tab.id}
            onPress={() => onChange(tab.id)}
            activeOpacity={0.8}
            style={[
              styles.tab,
              autoFill && styles.tabFill,
              isSelected ? styles.tabSelected : styles.tabDefault,
            ]}
          >
            <UText
              style={[
                styles.label,
                isSelected ? styles.labelSelected : styles.labelDefault,
              ]}
            >
              {tab.label}
            </UText>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing[2],
  },
  tab: {
    borderRadius: borders.radius.full,   // 9999px
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[2],
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabFill: {
    flex: 1,
  },
  tabDefault: {
    backgroundColor: colors.background.primary,
    borderWidth: 1,
    borderColor: colors.ui.border,       // #D0D0D8
  },
  tabSelected: {
    backgroundColor: colors.brand.primary, // #50BBEC
    borderWidth: 1,
    borderColor: colors.brand.primary,
  },
  label: {
    fontSize: 14,
    fontFamily: fonts.regular,
  },
  labelDefault: {
    color: colors.text.primary,          // #101010
  },
  labelSelected: {
    color: colors.text.inverse,          // white
  },
});
