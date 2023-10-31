import { ReactNode } from 'react';
export interface CardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  color: string;
}
function Card({ icon, title, description, color }: CardProps) {
  const colors: any = {
    slate: {
      background: 'bg-slate-800',
      hover: 'bg-slate-900',
      iconBackground: 'bg-slate-600/50',
      iconHover: 'bg-slate-700',
    },
    purple: {
      background: 'bg-purple-300/10',
      hover: 'bg-purple-600/60',
      iconBackground: 'bg-purple-300/10',
      iconHover: 'bg-purple-600/60',
    },
    yellow: {
      background: 'bg-amber-300/10',
      hover: 'bg-amber-600/60',
      iconBackground: 'bg-amber-300/10',
      iconHover: 'bg-amber-600/60',
    },
    red: {
      background: 'bg-red-300/10',
      hover: 'bg-red-600/60',
      iconBackground: 'bg-red-300/10',
      iconHover: 'bg-red-600/60',
    },
  };
  return (
    <div
      className={`${colors[color].background} text-slate-100 flex flex-col gap-4 justify-start p-6 rounded-md h-full transition-all ease-out duration-500 group hover:${colors[color].hover}`}
    >
      <div
        className={`${colors[color].iconBackground} w-10 h-10 rounded-lg rounded-br-2xl flex justify-center items-center transition-all ease-out duration-500 group-hover:${colors[color].iconHover}`}
      >
        {icon}
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p className="text-lg leading-none">{description}</p>
      </div>
    </div>
  );
}

export default Card;
