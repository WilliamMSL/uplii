import { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { Screen, PageHeader } from '@/components/layout';
import { DayPill, TaskIndicator } from '@/components/ui';
import { useProfile } from '@/features/profile/useProfile';
import { spacing } from '@/design';

const DAY_LABELS = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'] as const;

function getWeekDays() {
  const today = new Date();
  const dow = today.getDay();
  const monday = new Date(today);
  monday.setDate(today.getDate() - (dow === 0 ? 6 : dow - 1));

  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    return {
      key:     d.toISOString().split('T')[0],
      label:   DAY_LABELS[d.getDay()],
      date:    d.getDate(),
      isToday: d.toDateString() === today.toDateString(),
    };
  });
}

export default function Home() {
  const { fetchProfile } = useProfile();
  const [selectedDay, setSelectedDay] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });

  useEffect(() => { fetchProfile(); }, []);

  const days = getWeekDays();

  return (
    <Screen>
      <PageHeader streak={0}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: spacing[2] }}
        >
          {days.map((d) => (
            <DayPill
              key={d.key}
              label={d.label}
              date={d.date}
              active={d.key === selectedDay}
              onPress={() => setSelectedDay(d.key)}
            />
          ))}
        </ScrollView>
      </PageHeader>
      <TaskIndicator style={{ marginTop: 20 }} />
    </Screen>
  );
}
