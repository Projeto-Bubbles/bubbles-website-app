import { ArrowLeft } from 'phosphor-react';
import { ButtonHTMLAttributes } from 'react';

function BackButton({ onClick }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      onClick={onClick}
      className="w-8 h-8 p-2 grid place-content-center bg-zinc-200 rounded-full"
    >
      <ArrowLeft size={20} color="#3f3f46" weight="duotone" />
    </button>
  );
}

export default BackButton;
