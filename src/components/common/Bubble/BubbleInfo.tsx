import { ReactNode } from 'react';

export interface BubbleInfo {
  icon: ReactNode;
  title: string;
  insight: number;
}

export function BubbleInfo({ icon, title, insight }: BubbleInfo) {
  return (
    <div className="bg-[#111b30] flex items-center justify-around p-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-[#0d1425] cursor-pointer ring-1 ring-transparent hover:ring-blue-200">
      <div className="bg-blue-300/10 w-8 h-8 rounded-lg grid place-content-center">
        {icon}
      </div>

      <div className="flex flex-col items-start justify-between">
        <h2 className="text-blue-100 text-sm font-semibold leading-none">
          {title}
        </h2>
        <h1 className="text-3xl font-light leading-none">{insight}</h1>
      </div>
    </div>
  );
}
