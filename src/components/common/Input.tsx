import { InputHTMLAttributes, ReactNode, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: ReactNode;
  helperText?: string;
  color?: 'bg-zinc-100/70' | 'bg-zinc-200';
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ icon, helperText, color = 'bg-zinc-200', ...props }, ref) => (
    <div className="w-full flex flex-col justify-center items-start">
      <div className="w-full relative flex justify-center items-center">
        <div className="absolute left-0 ml-3 ">{icon}</div>

        <input
          {...props}
          ref={ref}
          className={`w-full ${color} text-zinc-700 text-lg font-medium p-[.4rem] rounded-md pl-9 border-none outline outline-0 outline-slate-100 transition-all duration-300 ease-in-out focus:outline-slate-800/20 focus:outline-1 focus:shadow-blue-400/10 focus:shadow-md ${
            helperText && 'outline-red-500 focus:outline-1'
          }`}
        />
      </div>

      <p className="text-red-500">{helperText}</p>
    </div>
  )
);

export default Input;
