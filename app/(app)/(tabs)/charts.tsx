import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Screen } from '@/components/layout';
import { UText, TabSelector, DonutChart } from '@/components/ui';
import { fonts, spacing, colors } from '@/design';

const TABS = [
  { id: 'today', label: "Aujourd'hui" },
  { id: 'week',  label: 'Semaine' },
  { id: 'month', label: 'Mois' },
];

export default function Charts() {
  const [selected, setSelected] = useState('today');

  return (
    <Screen>
      <View style={styles.header}>
        <UText style={styles.title}>Progression</UText>
        <TabSelector tabs={TABS} selected={selected} onChange={setSelected} />
      </View>

      <DonutChart
        segments={[
          { value: 25, color: colors.brand.primary },
          { value: 25, color: colors.plus.accent },
          { value: 25, color: '#906ACC' },
          { value: 25, color: colors.ui.border },
        ]}
        gap={14}
        style={{ marginTop: spacing[8] }}
      >
        <UText style={styles.donutValue}>78%</UText>
        <UText style={styles.donutLabel}>achèvement</UText>
      </DonutChart>
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: {
    gap: 22,
  },
  title: {
    fontSize: 22,
    fontFamily: fonts.medium,
    textAlign: 'center',
  },
  donutValue: {
    fontSize: 32,
    fontFamily: fonts.bold,
    textAlign: 'center',
  },
  donutLabel: {
    fontSize: 14,
    fontFamily: fonts.regular,
    color: colors.text.secondary,
    textAlign: 'center',
  },
});
