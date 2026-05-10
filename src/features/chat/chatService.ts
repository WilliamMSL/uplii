import type { Message } from '@/types';

// Remplace cette URL par ton endpoint IA (ex: API Route Supabase Edge Function)
const AI_ENDPOINT = process.env.EXPO_PUBLIC_AI_ENDPOINT ?? '';

export const chatService = {
  sendMessage: async (messages: Message[]): Promise<string> => {
    const res = await fetch(AI_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages }),
    });
    if (!res.ok) throw new Error('Erreur lors de la réponse IA');
    const data = await res.json();
    return data.content as string;
  },
};
