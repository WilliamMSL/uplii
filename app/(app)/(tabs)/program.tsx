import { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Screen } from '@/components/layout';
import { PageHeader } from '@/components/layout';
import { TabSelector, Divider } from '@/components/ui';
import { CircleButton } from '@/components/ui/CircleButton';
import { spacing } from '@/design';

const TABS = [
  { id: 'all',        label: 'Tout' },
  { id: 'sport',      label: 'Sport' },
  { id: 'meditation', label: 'Méditation' },
];

type Status  = 'completed' | 'current' | 'locked';
type Variant = 'primary' | 'secondary' | 'tertiary';

interface ProgramDay {
  id: string;
  day: string;
  month: string;
  status: Status;
  offset: number;
}

interface ProgramWeek {
  label: string;
  days: ProgramDay[];
}

const WEEKS: ProgramWeek[] = [
  {
    label: 'Semaine 2',
    days: [
      { id: '8', day: '31', month: 'Mai', status: 'locked', offset: -30 },
      { id: '7', day: '28', month: 'Mai', status: 'locked', offset: -70 },
      { id: '6', day: '24', month: 'Mai', status: 'locked', offset: -70 },
      { id: '5', day: '20', month: 'Mai', status: 'locked', offset: -30 },
    ],
  },
  {
    label: 'Semaine 1',
    days: [
      { id: '4', day: '17', month: 'Mai', status: 'current',   offset:  30 },
      { id: '3', day: '12', month: 'Mai', status: 'completed', offset:  70 },
      { id: '2', day: '8',  month: 'Mai', status: 'completed', offset:  70 },
      { id: '1', day: '5',  month: 'Mai', status: 'completed', offset:  30 },
    ],
  },
];

const STATUS_VARIANT: Record<Status, Variant> = {
  completed: 'tertiary',  // dark teal = "done"
  current:   'primary',   // brand blue = "active"
  locked:    'secondary', // outlined / inactive
};

export default function Program() {
  const [selected, setSelected] = useState('all');

  return (
    <Screen padded={false}>
      <View style={styles.header}>
        <PageHeader title="Mes programmes" streak={0} />
        <TabSelector tabs={TABS} selected={selected} onChange={setSelected} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {WEEKS.map((week) => (
          <View key={week.label}>
            <View style={styles.dividerWrap}>
              <Divider label={week.label} />
            </View>

            <View style={styles.path}>
              {week.days.map((d) => (
                <View key={d.id} style={[styles.row, { transform: [{ translateX: d.offset }] }]}>
                  <CircleButton
                    topText={d.day}
                    bottomText={d.month}
                    variant={STATUS_VARIANT[d.status]}
                    disabled={d.status === 'locked'}
                    width={72}
                    height={72}
                    topFontSize={34}
                    bottomFontSize={16}
                  />
                </View>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
    </Screen>
  );
}

/* ───────────────────────── Styles ───────────────────────── */

const styles = StyleSheet.create({
  header: {
    gap: 22,
    paddingHorizontal: spacing[4],
    paddingTop: spacing[4],
    paddingBottom: spacing[4],
  },
  scrollContent: {
    paddingBottom: spacing[12],
    paddingTop: spacing[4],
  },

  /* Divider */
  dividerWrap: {
    paddingHorizontal: spacing[4],
    marginBottom: spacing[6],
  },

  /* Path */
  path: {
    alignItems: 'center',
    gap: spacing[5],
    marginBottom: spacing[8],
  },
  row: {
    width: 72,
    height: 72,
  },
});
