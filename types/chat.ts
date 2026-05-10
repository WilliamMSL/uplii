export type Role = 'user' | 'assistant';

export interface Message {
  id: string;
  role: Role;
  content: string;
  created_at: string;
}

export interface Conversation {
  id: string;
  messages: Message[];
}
