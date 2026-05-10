import { create } from 'zustand';

interface OnboardingState {
  step: number;
  completed: boolean;
  nextStep: () => void;
  prevStep: () => void;
  complete: () => void;
  reset: () => void;
}

export const useOnboardingStore = create<OnboardingState>((set) => ({
  step: 0,
  completed: false,
  nextStep: () => set((s) => ({ step: s.step + 1 })),
  prevStep: () => set((s) => ({ step: Math.max(0, s.step - 1) })),
  complete: () => set({ completed: true }),
  reset: () => set({ step: 0, completed: false }),
}));
