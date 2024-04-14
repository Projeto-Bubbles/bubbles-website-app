export interface ChatMessage {
  user?: { id: number; username: string };
  message: string;
}
