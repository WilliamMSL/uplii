import { useProfileStore } from './profileStore';
import { profileService } from './profileService';
import { useAuth } from '@/features/auth/useAuth';
import type { Profile } from '@/types';

export function useProfile() {
  const { user } = useAuth();
  const { profile, loading, setProfile, setLoading } = useProfileStore();

  const fetchProfile = async () => {
    if (!user) return;
    setLoading(true);
    try {
      const data = await profileService.fetch(user.id);
      setProfile(data);
    } finally {
      setLoading(false);
    }
  };

  const updateProfile = async (updates: Partial<Profile>) => {
    if (!user) return;
    setLoading(true);
    try {
      await profileService.update(user.id, updates);
      setProfile(profile ? { ...profile, ...updates } : null);
    } finally {
      setLoading(false);
    }
  };

  return { profile, loading, fetchProfile, updateProfile };
}
