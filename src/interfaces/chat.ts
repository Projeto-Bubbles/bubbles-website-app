export interface ChatMessage {
  id: number;
  user: { id: number; username: string };
  bubble: { id: number; name: string };
  message: string;
}
