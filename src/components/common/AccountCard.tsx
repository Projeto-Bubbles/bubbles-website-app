import { ReactElement, ReactNode } from 'react';

interface AccountCardProps {
  children: ReactElement;
  title: string;
  icon: ReactNode;
  background: 'bg-zinc-300' | 'bg-slate-900';
}

export function AccountCard({
  children,
  title,
  icon,
  background,
}: AccountCardProps) {
  return (
    <div
      className={`${background} w-full min-h-[300px] max-h-[600px] p-6 rounded-lg flex flex-col items-start justify-start gap-4`}
    >
      <div className="flex items-center justify-start gap-3">
        <div className="w-7 h-7 grid place-content-center rounded-full bg-slate-500/20">
          {icon}
        </div>

        <h1
          className={`${
            background === 'bg-zinc-300' ? 'text-zinc-700' : 'text-slate-100'
          } font-bold text-2xl`}
        >
          {title}
        </h1>
      </div>

      {children}
    </div>
  );
}
