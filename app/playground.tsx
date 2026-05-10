import { ScrollView, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { ChatBubble } from '@/components/ui/ChatBubble';
import { CircleButton } from '@/components/ui/CircleButton';
import { CircleProgress } from '@/components/ui/CircleProgress';
import { IconButton } from '@/components/ui/IconButton';
import { SettingCard } from '@/components/ui/SettingCard';
import { Steps } from '@/components/ui/Steps';
import { StatCard } from '@/components/ui/StatCard';
import { TabBar } from '@/components/ui/TabBar';
import { UText } from '@/components/ui/Text';
import { Input } from '@/components/ui/Input';
import { Card } from '@/components/ui/Card';
import { Avatar } from '@/components/ui/Avatar';
import { Divider } from '@/components/ui/Divider';
import { TabSelector } from '@/components/ui/TabSelector';
import { CheckboxItem } from '@/components/ui/CheckboxItem';
import { PhoneIcon, ChatIcon, ChartsIcon, ProfileIcon } from '@/components/icons/TabBarIcons';
import { colors, spacing } from '@/design';

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <View style={styles.section}>
      <UText variant="h3" style={styles.sectionTitle}>{title}</UText>
      {children}
    </View>
  );
}

function Row({ children }: { children: React.ReactNode }) {
  return <View style={styles.row}>{children}</View>;
}

export default function Playground() {
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [tab2, setTab2] = useState('all');
  const [tab3, setTab3] = useState('actifs');
  const [tab4, setTab4] = useState('semaine');
  const [checks, setChecks] = useState({ a: false, b: true, c: false });
  const [tabBar, setTabBar] = useState('chat');
  const toggle = (k: keyof typeof checks) => setChecks(s => ({ ...s, [k]: !s[k] }));

  const testLoading = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>

        <UText variant="h1" style={styles.pageTitle}>Playground</UText>
        <UText variant="caption">Teste les composants avant de construire les pages</UText>

        <Divider />

        {/* ── Buttons ─────────────────────────────────── */}
        <Section title="Button — Variants">
          <Row>
            <Button label="Primary" variant="primary" />
            <Button label="Secondary" variant="secondary" />
            <Button label="Ghost" variant="ghost" />
          </Row>
          <Row>
            <Button label="Tertiary" variant="tertiary" />
            <Button label="Golden" variant="golden" />
          </Row>
        </Section>

        <Section title="Button — Sizes">
          <View style={styles.col}>
            <Button label="Large" size="lg" />
            <Button label="Medium" size="md" />
            <Button label="Small" size="sm" />
          </View>
        </Section>

        <Section title="IconButton — Variants">
          <Row>
            <IconButton icon={<UText style={{ fontSize: 24 }}>❤️</UText>} variant="primary" />
            <IconButton icon={<UText style={{ fontSize: 24 }}>⭐</UText>} variant="secondary" />
            <IconButton icon={<UText style={{ fontSize: 24 }}>🔔</UText>} variant="ghost" />
            <IconButton icon={<UText style={{ fontSize: 24 }}>⚙️</UText>} variant="tertiary" />
          </Row>
        </Section>

        <Divider />

        <Section title="Steps — Progression">
          <View style={styles.col}>
            <Steps current={0} total={3} />
            <Steps current={1} total={3} />
            <Steps current={2} total={3} />
          </View>
        </Section>

        <Divider />

        <Section title="Button — États">
          <View style={styles.col}>
            <Button label="Normal" />
            <Button label="Loading (appuie)" onPress={testLoading} loading={loading} />
            <Button label="Disabled" disabled />
          </View>
        </Section>

        <Divider />

        {/* ── TabSelector ─────────────────────────────── */}
        <Section title="TabSelector — 2 tabs (hugged)">
          <TabSelector
            tabs={[{ id: 'all', label: 'Tout' }, { id: 'fav', label: 'Favoris' }]}
            selected={tab2}
            onChange={setTab2}
          />
        </Section>

        <Section title="TabSelector — 3 tabs (fill auto)">
          <TabSelector
            tabs={[
              { id: 'actifs', label: 'Actifs' },
              { id: 'termines', label: 'Terminés' },
              { id: 'archives', label: 'Archives' },
            ]}
            selected={tab3}
            onChange={setTab3}
          />
        </Section>

        <Section title="TabSelector — 4 tabs (fill forcé)">
          <TabSelector
            tabs={[
              { id: 'jour', label: 'Jour' },
              { id: 'semaine', label: 'Semaine' },
              { id: 'mois', label: 'Mois' },
              { id: 'annee', label: 'Année' },
            ]}
            selected={tab4}
            onChange={setTab4}
            fill
          />
        </Section>

        <Divider />

        {/* ── CheckboxItem ────────────────────────────── */}
        <Section title="CheckboxItem">
          <View style={styles.col}>
            <CheckboxItem
              title="5min/Jour"
              description="Motivé"
              checked={checks.a}
              onToggle={() => toggle('a')}
              icon={<UText style={{ fontSize: 20, lineHeight: 20 }}>⚡</UText>}
            />
            <CheckboxItem
              title="15min/Jour"
              description="Sérieux"
              checked={checks.b}
              onToggle={() => toggle('b')}
              icon={<UText style={{ fontSize: 20, lineHeight: 20 }}>🔥</UText>}
            />
            <CheckboxItem
              title="30min/Jour"
              description="Intense"
              checked={checks.c}
              onToggle={() => toggle('c')}
              icon={<UText style={{ fontSize: 20, lineHeight: 20 }}>💪</UText>}
            />
            <CheckboxItem
              title="Sans description"
              checked={false}
              onToggle={() => {}}
            />
          </View>
        </Section>

        <Divider />

        {/* ── Typography ──────────────────────────────── */}
        <Section title="Typography">
          <View style={styles.col}>
            <UText variant="h1">Heading 1 — h1</UText>
            <UText variant="h2">Heading 2 — h2</UText>
            <UText variant="h3">Heading 3 — h3</UText>
            <UText variant="body">Body — texte courant de l'application</UText>
            <UText variant="small">Small — labels, meta-infos</UText>
            <UText variant="caption">Caption — timestamps, sous-labels</UText>
          </View>
        </Section>

        <Divider />

        {/* ── TabBar ──────────────────────────────────── */}
        <Section title="TabBar — Navigation">
          <TabBar
            tabs={[
              { id: 'chat', icon: <ChatIcon />, label: 'Chat' },
              { id: 'phone', icon: <PhoneIcon />, label: 'Phone' },
              { id: 'charts', icon: <ChartsIcon />, label: 'Charts' },
              { id: 'profile', icon: <ProfileIcon />, label: 'Profile' },
            ]}
            selected={tabBar}
            onChange={setTabBar}
            style={{ marginHorizontal: -spacing[4], marginBottom: -spacing[4] }}
          />
        </Section>

        <Divider />

        {/* ── Inputs ──────────────────────────────────── */}
        <Section title="Input — États">
          <View style={styles.col}>
            <Input
              label="Email"
              placeholder="vous@exemple.com"
              value={inputValue}
              onChangeText={setInputValue}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <Input
              label="Mot de passe"
              placeholder="8 caractères minimum"
              secureTextEntry
            />
            <Input
              label="Avec erreur"
              placeholder="Champ invalide"
              error="Ce champ est requis"
            />
            <Input
              placeholder="Sans label"
            />
          </View>
        </Section>

        <Divider />

        {/* ── Card ────────────────────────────────────── */}
        <Section title="Card">
          <Card>
            <UText variant="h3">Titre de la card</UText>
            <UText variant="body" style={{ marginTop: spacing[2], color: colors.text.secondary }}>
              Contenu de la card. Peut contenir n'importe quel composant à l'intérieur.
            </UText>
            <View style={{ marginTop: spacing[4] }}>
              <Button label="Action" size="sm" />
            </View>
          </Card>
        </Section>

        <Divider />

        {/* ── Avatar ──────────────────────────────────── */}
        <Section title="Avatar">
          <Row>
            <Avatar name="William Sana" size={64} />
            <Avatar name="A" size={48} />
            <Avatar size={40} />
            <Avatar uri="https://i.pravatar.cc/150" size={56} />
          </Row>
        </Section>

        <Divider />

        <Section title="StatCard — Grid">
          <View style={styles.grid}>
            <StatCard
              icon={<UText style={{ fontSize: 20 }}>⭐</UText>}
              label="Streak courant"
              value="12 jours"
              style={styles.gridItem}
            />
            <StatCard
              icon={<UText style={{ fontSize: 20 }}>🔥</UText>}
              label="Points totaux"
              value="2,450"
              style={styles.gridItem}
            />
            <StatCard
              icon={<UText style={{ fontSize: 20 }}>🎯</UText>}
              label="Objectifs atteints"
              value="8"
              style={styles.gridItem}
            />
            <StatCard
              icon={<UText style={{ fontSize: 20 }}>🏆</UText>}
              label="Badges"
              value="5"
              style={styles.gridItem}
            />
          </View>
        </Section>

        <Section title="StatCard — Horizontal">
          <View style={styles.col}>
            <StatCard
              horizontal
              icon={<UText style={{ fontSize: 20 }}>⭐</UText>}
              label="Streak courant"
              value="12 jours"
            />
            <StatCard
              horizontal
              icon={<UText style={{ fontSize: 20 }}>🔥</UText>}
              label="Points totaux"
              value="2,450"
            />
            <StatCard
              horizontal
              icon={<UText style={{ fontSize: 20 }}>🎯</UText>}
              label="Objectifs atteints"
              value="8"
            />
          </View>
        </Section>

        <Divider />

        <Section title="SettingCard">
          <View style={styles.col}>
            <SettingCard label="Mon compte" onPress={() => {}} />
            <SettingCard label="Notifications" onPress={() => {}} />
            <SettingCard label="Langues" onPress={() => {}} />
            <SettingCard label="À propos" onPress={() => {}} />
          </View>
        </Section>

        <Divider />

        <Section title="ChatBubble — Messages">
          <View style={styles.col}>
            <ChatBubble message="Bonjour! Prêt à apprendre?" />
            <ChatBubble message="Excellent travail! 🎉" typewriter />
            <ChatBubble message="Continue comme ça, tu es sur la bonne voie!" typewriter speed={30} />
          </View>
        </Section>

        <Divider />

        <Section title="CircleButton — Unités">
          <Row>
            <CircleButton topText="8" bottomText="Avril" variant="primary" width={73} height={61} />
            <CircleButton topText="15" bottomText="Avril" variant="secondary" width={73} height={61} />
            <CircleButton topText="22" bottomText="Avril" variant="tertiary" width={73} height={61} />
          </Row>
        </Section>

        <Divider />

        {/* ── Colors ──────────────────────────────────── */}
        <Section title="Palette">
          <View style={styles.col}>
            <ColorRow label="primary" color={colors.brand.primary} />
            <ColorRow label="primaryPressed" color={colors.brand.primaryPressed} />
            <ColorRow label="primaryLight" color={colors.brand.primaryLight} />
            <ColorRow label="primaryLightest" color={colors.brand.primaryLightest} />
            <ColorRow label="plus.background" color={colors.plus.background} />
            <ColorRow label="plus.accent" color={colors.plus.accent} />
            <ColorRow label="text.primary" color={colors.text.primary} />
            <ColorRow label="text.secondary" color={colors.text.secondary} />
            <ColorRow label="text.placeholder" color={colors.text.placeholder} />
            <ColorRow label="text.tag" color={colors.text.tag} />
            <ColorRow label="ui.border" color={colors.ui.border} />
            <ColorRow label="background.surface" color={colors.background.surface} />
          </View>
        </Section>

        <View style={{ height: spacing[10] }} />
      </ScrollView>
    </SafeAreaView>
  );
}

function ColorRow({ label, color }: { label: string; color: string }) {
  return (
    <View style={styles.colorRow}>
      <View style={[styles.colorSwatch, { backgroundColor: color, borderWidth: 1, borderColor: colors.ui.border }]} />
      <UText variant="small" style={styles.colorLabel}>{label}</UText>
      <UText variant="caption" style={styles.colorHex}>{color}</UText>
    </View>
  );
}

const styles = StyleSheet.create({
  safe:         { flex: 1, backgroundColor: colors.background.primary },
  container:    { padding: spacing[4] },
  pageTitle:    { marginBottom: spacing[1] },
  section:      { marginVertical: spacing[4], gap: spacing[3] },
  sectionTitle: { color: colors.brand.primary },
  row:          { flexDirection: 'row', flexWrap: 'wrap', gap: spacing[3], alignItems: 'center' },
  col:          { gap: spacing[3] },
  grid:         { flexDirection: 'row', flexWrap: 'wrap', gap: spacing[3] },
  gridItem:     { flex: 1, minWidth: '48%' },
  colorRow:     { flexDirection: 'row', alignItems: 'center', gap: spacing[3] },
  colorSwatch:  { width: 36, height: 36, borderRadius: 8 },
  colorLabel:   { flex: 1, fontFamily: 'MadeTommy-Medium' },
  colorHex:     { fontFamily: 'MadeTommy-Light' },
});
