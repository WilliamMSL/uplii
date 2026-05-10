import React from 'react';
import { View, TouchableOpacity, StyleSheet, type ViewStyle } from 'react-native';
import { colors, spacing, borders } from '@/design';
import { UText } from './Text';

interface TabBarItem {
  id: string;
  icon: React.ReactNode;
  label?: string;
}

interface TabBarProps {
  tabs: TabBarItem[];
  selected: string;
  onChange: (id: string) => void;
  style?: ViewStyle;
}

export function TabBar({ tabs, selected, onChange, style }: TabBarProps) {
  return (
    <View style={[styles.container, style]}>
      {tabs.map((tab) => {
        const isSelected = tab.id === selected;
        return (
          <TouchableOpacity
            key={tab.id}
            onPress={() => onChange(tab.id)}
            activeOpacity={0.8}
            style={[styles.tab, isSelected && styles.tabSelected]}
          >
            <View style={styles.iconContainer}>{tab.icon}</View>
            {tab.label && (
              <UText
                style={[
                  styles.label,
                  isSelected ? styles.labelSelected : styles.labelDefault,
                ]}
              >
                {tab.label}
              </UText>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.background.primary,
    borderTopWidth: 1,
    borderTopColor: colors.ui.border,
    paddingBottom: spacing[2],
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: spacing[2],
    gap: spacing[1],
  },
  tabSelected: {
    backgroundColor: 'transparent',
  },
  iconContainer: {
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 10,
    fontFamily: 'MadeTommy-Medium',
  },
  labelDefault: {
    color: colors.text.secondary,
  },
  labelSelected: {
    color: colors.brand.primary,
  },
});
