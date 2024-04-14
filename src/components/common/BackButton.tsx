import { ArrowLeft } from 'phosphor-react';
import { ButtonHTMLAttributes } from 'react';

function BackButton({ onClick }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      onClick={onClick}
      className="w-8 h-8 bg-zinc-400/30 p-2 grid place-content-center rounded-full"
    >
      <ArrowLeft size={20} color="#3f3f46" weight="duotone" />
    </button>
  );
}

export default BackButton;
