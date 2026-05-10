import { Tabs } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TabBar } from '@/components/ui/TabBar';
import { ChatIcon, PhoneIcon, ChartsIcon, ProfileIcon } from '@/components/icons/TabBarIcons';
import { spacing } from '@/design';

const TAB_ICONS: Record<string, { icon: React.ReactNode }> = {
  home:    { icon: <PhoneIcon /> },
  chat:    { icon: <ChatIcon /> },
  charts:  { icon: <ChartsIcon /> },
  profile: { icon: <ProfileIcon /> },
};

function CustomTabBar({ state, navigation }: any) {
  const insets = useSafeAreaInsets();

  const tabs = state.routes.map((route: any) => ({
    id: route.name,
    ...(TAB_ICONS[route.name] ?? { icon: null, label: route.name }),
  }));

  return (
    <TabBar
      tabs={tabs}
      selected={state.routes[state.index].name}
      onChange={(id) => navigation.navigate(id)}
      style={{ paddingBottom: insets.bottom + spacing[2] }}
    />
  );
}

export default function TabsLayout() {
  return (
    <Tabs
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tabs.Screen name="home"    options={{ title: 'Home' }} />
      <Tabs.Screen name="chat"    options={{ title: 'Chat' }} />
      <Tabs.Screen name="charts"  options={{ title: 'Charts' }} />
      <Tabs.Screen name="profile" options={{ title: 'Profil' }} />
    </Tabs>
  );
}
