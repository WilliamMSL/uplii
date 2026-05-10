import AsyncStorage from '@react-native-async-storage/async-storage';

export const storage = {
  get: async (key: string): Promise<string | null> => {
    try { return await AsyncStorage.getItem(key); }
    catch { return null; }
  },
  set: async (key: string, value: string): Promise<void> => {
    try { await AsyncStorage.setItem(key, value); }
    catch {}
  },
  remove: async (key: string): Promise<void> => {
    try { await AsyncStorage.removeItem(key); }
    catch {}
  },
};

export const STORAGE_KEYS = {
  ONBOARDING_SEEN: 'onboarding_seen',
} as const;
