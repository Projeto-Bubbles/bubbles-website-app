import { ChatTeardropDots } from 'phosphor-react';

export function ChatStartConversation() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="bg-slate-100/10 backdrop-blur-sm rounded-xl p-8 pt-20 flex flex-col justify-center items-start gap-4">
        <div className="size-20 bg-slate-300 rounded-lg grid place-content-center mb-2 animate-pulse">
          <ChatTeardropDots size={64} color="#f1f5f9" weight="duotone" />
        </div>

        <h1 className="font- text-zinc-700 text-7xl leading-none">
          O que suas bolhas <br />
          estão conversando...?
        </h1>

        <h2 className="font-medium text-zinc-600 text-3xl leading-none">
          Entre na conversa!
        </h2>
      </div>
    </div>
  );
}
