import { ReactNode } from 'react';

import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  color: string;
  icon?: ReactNode;
  isLight?: boolean;
}

function Button({
  text,
  color,
  icon,
  disabled,
  isLight,
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full h-8 flex justify-center items-center gap-2 ${color} items-center rounded-full px-4 py-1 ${
        isLight ? 'text-slate-100' : 'text-slate-700'
      } text-md font-bold uppercase transition duration-300 ease-in-out ${
        !disabled ? 'hover:brightness-90' : 'bg-zinc-300 cursor-default'
      } group`}
    >
      {icon && <span>{icon}</span>}
      {text}
    </button>
  );
}

export default Button;
