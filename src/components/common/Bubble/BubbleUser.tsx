import { User } from 'phosphor-react';

export function BubbleUser({ name }: { name: string }) {
  return (
    <div className="w-full bg-[#111b30] hover:bg-[#0d1425] flex items-center justify-start gap-4 p-3 rounded-lg transition-all duration-300 ease-in-out">
      <div className="bg-blue-300/10 w-6 h-6 rounded-full grid place-content-center">
        <User size={14} color="#f1f5f9" weight="duotone" />
      </div>

      <h1 className="text-slate-100 text-lg font-normal">{name}</h1>
    </div>
  );
}
