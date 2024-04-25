interface ChatSenderMessage {
  message: string;
}

export function ChatSenderMessage({ message }: ChatSenderMessage) {
  return (
    <div className="bg-blue-200 text-zinc-700 w-max max-w-sm p-4 rounded-md rounded-br-sm self-end">
      <p className="text-xl font-medium">{message}</p>
    </div>
  );
}
