import { create } from 'zustand';
import type { Message } from '@/types';

interface ChatState {
  messages: Message[];
  isStreaming: boolean;
  conversationId: string | null;
  addMessage: (message: Message) => void;
  setStreaming: (streaming: boolean) => void;
  setConversationId: (id: string) => void;
  clearMessages: () => void;
}

export const useChatStore = create<ChatState>((set) => ({
  messages: [],
  isStreaming: false,
  conversationId: null,
  addMessage: (message) => set((s) => ({ messages: [...s.messages, message] })),
  setStreaming: (isStreaming) => set({ isStreaming }),
  setConversationId: (conversationId) => set({ conversationId }),
  clearMessages: () => set({ messages: [], conversationId: null }),
}));
