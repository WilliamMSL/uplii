import { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Screen, PageHeader } from '@/components/layout';
import { DayPill, TaskIndicator, TaskCard, UText, TaskPromptCard, EmptyTasksIllustration, ChevronLeftIcon, ChevronRightIcon, ProgramCard } from '@/components/ui';
import { BookIcon } from '@/components/icons/TaskIcons';
import { ProgramIcon } from '@/components/icons/TabBarIcons';
import { useProfile } from '@/features/profile/useProfile';
import { colors, fonts, spacing, borders } from '@/design';

const DAY_LABELS = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'] as const;
const WEEKDAY_HEADERS = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'] as const;
const MONTH_LABELS = [
  'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
  'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre',
] as const;

function getCalendarGrid(cursor: Date) {
  const year = cursor.getFullYear();
  const month = cursor.getMonth();
  const firstOfMonth = new Date(year, month, 1);
  const dowFirst = firstOfMonth.getDay();
  const offset = dowFirst === 0 ? 6 : dowFirst - 1;
  const gridStart = new Date(year, month, 1 - offset);

  return Array.from({ length: 42 }, (_, i) => {
    const d = new Date(gridStart);
    d.setDate(gridStart.getDate() + i);
    return d;
  });
}

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

  const [tasks, setTasks] = useState([
    { id: '1', title: 'Méditation matinale', category: 'Bien-être', time: '08:00', variant: 'purple' as const, checked: false },
    { id: '2', title: 'Séance de sport',     category: 'Fitness',   time: '12:30', variant: 'orange' as const, checked: false },
    { id: '3', title: 'Lecture',             category: 'Apprentissage', time: '21:00', variant: 'blue' as const, checked: false },
  ]);

  const toggleTask = (id: string) =>
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, checked: !t.checked } : t)));

  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [calendarCursor, setCalendarCursor] = useState(() => new Date());

  const days = getWeekDays();
  const grid = getCalendarGrid(calendarCursor);
  const todayKey = new Date().toISOString().split('T')[0];

  const programDots: Record<string, string> = (() => {
    const t = new Date();
    const iso = (d: Date) => d.toISOString().split('T')[0];
    const offset = (n: number) => { const d = new Date(t); d.setDate(t.getDate() + n); return iso(d); };
    return {
      [offset(-3)]: '#FF8547',
      [offset(-1)]: '#50BBEC',
      [offset(1)]:  '#FF8547',
      [offset(2)]:  '#50BBEC',
      [offset(5)]:  '#FF8547',
    };
  })();

  return (
    <Screen scroll>
      {showCalendar ? (
        <View style={styles.calendar}>
          <View style={styles.calendarHeader}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => setCalendarCursor((c) => new Date(c.getFullYear(), c.getMonth() - 1, 1))}
            >
              <ChevronLeftIcon />
            </TouchableOpacity>
            <UText style={styles.calendarTitle}>
              {MONTH_LABELS[calendarCursor.getMonth()]} {calendarCursor.getFullYear()}
            </UText>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => setCalendarCursor((c) => new Date(c.getFullYear(), c.getMonth() + 1, 1))}
            >
              <ChevronRightIcon />
            </TouchableOpacity>
          </View>

          <View style={styles.weekdayRow}>
            {WEEKDAY_HEADERS.map((w) => (
              <UText key={w} style={styles.weekdayLabel}>{w}</UText>
            ))}
          </View>

          <View style={styles.grid}>
            {Array.from({ length: 6 }, (_, weekIdx) => (
              <View key={weekIdx} style={styles.gridRow}>
                {grid.slice(weekIdx * 7, weekIdx * 7 + 7).map((d) => {
                  const key = d.toISOString().split('T')[0];
                  const inMonth = d.getMonth() === calendarCursor.getMonth();
                  const isToday = key === todayKey;
                  const isSelected = key === selectedDay;
                  return (
                    <TouchableOpacity
                      key={key}
                      activeOpacity={0.7}
                      onPress={() => { setSelectedDay(key); setShowCalendar(false); }}
                      style={[
                        styles.dateCell,
                        isSelected && styles.dateCellActive,
                        !isSelected && isToday && styles.dateCellToday,
                      ]}
                    >
                      <UText
                        style={[
                          styles.dateCellText,
                          !inMonth && styles.dateCellMuted,
                          isSelected && styles.dateCellTextActive,
                        ]}
                      >
                        {d.getDate()}
                      </UText>
                      {programDots[key] && (
                        <View
                          style={[
                            styles.programDot,
                            { backgroundColor: isSelected ? '#fff' : programDots[key] },
                          ]}
                        />
                      )}
                    </TouchableOpacity>
                  );
                })}
              </View>
            ))}
          </View>
        </View>
      ) : (
        <PageHeader streak={0}>
          <View style={styles.dayRow}>
            {days.map((d) => (
              <DayPill
                key={d.key}
                label={d.label}
                date={d.date}
                active={d.key === selectedDay}
                onPress={() => setSelectedDay(d.key)}
              />
            ))}
            <TouchableOpacity
              style={styles.addPill}
              activeOpacity={0.7}
              onPress={() => setShowCalendar(true)}
            >
              <UText style={styles.addPillText}>+</UText>
            </TouchableOpacity>
          </View>
        </PageHeader>
      )}
      <TaskIndicator style={{ marginTop: 20 }} />

      <View style={styles.section}>
        <UText style={styles.sectionTitle}>Programmes en cours</UText>
        <ProgramCard
          title="Routine du matin"
          icon={<ProgramIcon width={20} height={22} />}
          progress={50}
          currentDay={26}
          totalDays={30}
          color="#FF8547"
        />
      </View>

      <View style={styles.section}>
        <UText style={styles.sectionTitle}>Mes tâches du jour</UText>
        <View style={styles.taskList}>
          {tasks.map((t) => (
            <TaskCard
              key={t.id}
              title={t.title}
              category={t.category}
              time={t.time}
              variant={t.variant}
              checked={t.checked}
              onToggle={() => toggleTask(t.id)}
              icon={<BookIcon />}
              expanded={expandedId === t.id}
              onExpandToggle={() => setExpandedId((id) => (id === t.id ? null : t.id))}
            />
          ))}
        </View>

        <TaskPromptCard
          title="Plus de tâches ?"
          subtitle="Discute avec Uplii pour qu'il t'ajoute une nouvelle mission."
          buttonLabel="Discuter avec Uplii"
        />
        <TaskPromptCard
          illustration={<EmptyTasksIllustration />}
          title="Aucune tâche pour aujourd'hui"
          subtitle="Profite-en pour te reposer ou discute avec Uplii pour qu'il t'ajoute une nouvelle mission."
          buttonLabel="Discuter avec Uplii"
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  section: {
    marginTop: spacing[6],
    gap: spacing[3],
  },
  sectionTitle: {
    fontSize: 22,
    fontFamily: fonts.medium,
  },
  taskList: {
    gap: spacing[2],
  },
  dayRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  addPill: {
    flex: 1,
    minWidth: 36,
    maxWidth: 54,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: borders.radius.md,
    borderWidth: 1,
    borderColor: colors.ui.border,
    backgroundColor: colors.background.primary,
  },
  addPillText: {
    fontSize: 22,
    lineHeight: 24,
    fontFamily: fonts.medium,
    color: colors.text.secondary,
  },
  calendar: {
    gap: spacing[3],
  },
  calendarHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  calendarTitle: {
    fontSize: 22,
    fontFamily: fonts.medium,
    textTransform: 'capitalize',
  },
  weekdayRow: {
    flexDirection: 'row',
    gap: 6,
  },
  weekdayLabel: {
    flex: 1,
    minWidth: 36,
    maxWidth: 54,
    textAlign: 'center',
    fontSize: 11,
    fontFamily: fonts.regular,
    color: colors.text.secondary,
  },
  grid: {
    gap: 6,
  },
  gridRow: {
    flexDirection: 'row',
    gap: 6,
  },
  dateCell: {
    flex: 1,
    minWidth: 36,
    maxWidth: 54,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: borders.radius.md,
    borderWidth: 1,
    borderColor: colors.ui.border,
    backgroundColor: colors.background.primary,
  },
  dateCellActive: {
    backgroundColor: colors.brand.primary,
    borderColor: colors.brand.primary,
  },
  dateCellToday: {
    borderColor: colors.brand.primary,
  },
  dateCellText: {
    fontSize: 16,
    fontFamily: fonts.medium,
    color: colors.text.primary,
  },
  dateCellTextActive: {
    color: colors.text.inverse,
  },
  dateCellMuted: {
    color: colors.text.disabled,
  },
  programDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    marginTop: 3,
  },
});
