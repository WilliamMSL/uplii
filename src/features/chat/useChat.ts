import { useChatStore } from './chatStore';
import { chatService } from './chatService';
import type { Message } from '@/types';

export function useChat() {
  const { messages, isStreaming, addMessage, setStreaming, clearMessages } = useChatStore();

  const sendMessage = async (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content,
      created_at: new Date().toISOString(),
    };
    addMessage(userMessage);
    setStreaming(true);

    try {
      const reply = await chatService.sendMessage([...messages, userMessage]);
      addMessage({ id: (Date.now() + 1).toString(), role: 'assistant', content: reply, created_at: new Date().toISOString() });
    } catch (e) {
      addMessage({ id: (Date.now() + 1).toString(), role: 'assistant', content: "Une erreur s'est produite.", created_at: new Date().toISOString() });
    } finally {
      setStreaming(false);
    }
  };

  return { messages, isStreaming, sendMessage, clearMessages };
}
