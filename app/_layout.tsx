import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { useSession } from '@/hooks/useSession';
import { useAppState } from '@/hooks/useAppState';

SplashScreen.preventAutoHideAsync();

function RootLayoutInner() {
  useSession();
  useAppState();

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="playground" />
      <Stack.Screen name="onboarding" />
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="(app)" />
    </Stack>
  );
}

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    'MadeTommy-Thin':             require('../assets/fonts/MadeTommy-Thin.otf'),
    'MadeTommy-ThinOutline':      require('../assets/fonts/MadeTommy-ThinOutline.otf'),
    'MadeTommy-Light':            require('../assets/fonts/MadeTommy-Light.otf'),
    'MadeTommy-LightOutline':     require('../assets/fonts/MadeTommy-LightOutline.otf'),
    'MadeTommy-Regular':          require('../assets/fonts/MadeTommy-Regular.otf'),
    'MadeTommy-RegularOutline':   require('../assets/fonts/MadeTommy-RegularOutline.otf'),
    'MadeTommy-Medium':           require('../assets/fonts/MadeTommy-Medium.otf'),
    'MadeTommy-MediumOutline':    require('../assets/fonts/MadeTommy-MediumOutline.otf'),
    'MadeTommy-Bold':             require('../assets/fonts/MadeTommy-Bold.otf'),
    'MadeTommy-BoldOutline':      require('../assets/fonts/MadeTommy-BoldOutline.otf'),
    'MadeTommy-ExtraBold':        require('../assets/fonts/MadeTommy-ExtraBold.otf'),
    'MadeTommy-ExtraBoldOutline': require('../assets/fonts/MadeTommy-ExtraBoldOutline.otf'),
    'MadeTommy-Black':            require('../assets/fonts/MadeTommy-Black.otf'),
    'MadeTommy-BlackOutline':     require('../assets/fonts/MadeTommy-BlackOutline.otf'),
  });

  useEffect(() => {
    if (fontsLoaded || fontError) SplashScreen.hideAsync();
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) return null;

  return (
    <SafeAreaProvider>
      <RootLayoutInner />
    </SafeAreaProvider>
  );
}
