import { ReactNode } from 'react';

interface InputProps {
  type: 'text' | 'number' | 'email' | 'password' | 'date';
  value?: string;
  placeholder: string;
  icon?: ReactNode;
  disabled?: boolean;
  onChange?: (e?: any) => void;
  onBlur?: (e?: any) => void;
}

function Input({
  type,
  value,
  placeholder,
  icon,
  disabled,
  onChange,
  onBlur,
}: InputProps) {
  return (
    <div className="w-full relative flex justify-center items-center">
      <div className="absolute left-0 ml-3 cursor-pointer">{icon}</div>

      <input
        type={type}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
        onBlur={onBlur}
        className="w-full bg-slate-100/80 text-zinc-700 text-lg font-medium p-[.4rem] rounded-md pl-9 border-none outline-1 outline-slate-400/0 transition-all duration-300 ease-in-out focus:outline-slate-500"
      />
    </div>
  );
}

export default Input;
