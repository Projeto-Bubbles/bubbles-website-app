import { User } from 'phosphor-react';
import { ChatMessage } from '../../../interfaces/chat';

export function ChatRecipientMessage({ user, message }: ChatMessage) {
  return (
    <div className="bg-zinc-200 text-zinc-700 w-max max-w-sm p-4 rounded-md rounded-tl-sm ">
      <div className="flex items-center justify-start gap-2">
        <User size={12} color="#423F46" />

        <h2 className="font-bold">{user!!.username}</h2>
      </div>

      <p className="text-xl font-medium">{message}</p>
    </div>
  );
}
