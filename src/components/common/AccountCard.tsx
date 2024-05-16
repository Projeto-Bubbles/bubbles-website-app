import { Pencil } from 'phosphor-react';
import { ReactNode } from 'react';

interface AccountCardProps {
  children: ReactNode;
  title: string;
  icon: ReactNode;
  background: 'bg-zinc-300' | 'bg-slate-900';
  editAboutMe?: boolean;
  onEnableTextArea?: () => void;
}

export function AccountCard({
  children,
  title,
  icon,
  background,
  editAboutMe,
  onEnableTextArea,
}: AccountCardProps) {
  return (
    <div
      className={`${background} w-full min-h-[300px] max-h-[400px] p-6 rounded-lg flex flex-col items-start justify-start gap-4`}
    >
      <div className="w-full flex items-center justify-between">
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

        {editAboutMe && (
          <button
            onClick={onEnableTextArea}
            className="justify-self-end w-6 h-6 bg-slate-800 rounded-full grid place-content-center hover:bg-slate-700/80 cursor-pointer transition duration-200 ease-in-out"
          >
            <Pencil size={14} color="#F1F5F9" weight="duotone" />
          </button>
        )}
      </div>

      <div className="w-full overflow-auto flex flex-col items-start justify-start gap-4">
        {children}
      </div>
    </div>
  );
}
