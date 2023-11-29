import { InputHTMLAttributes, ReactNode, forwardRef } from 'react';
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: ReactNode;
  helperText?:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined;
  color?: 'bg-zinc-100/70' | 'bg-zinc-200';
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ icon, helperText, color = 'bg-zinc-200', label, ...props }, ref) => (
    <div className="w-full text-zinc-700 flex flex-col justify-center items-start gap-1 relative">
      {label && <label className="font-medium">{label}</label>}

      <div className="w-full relative flex justify-center items-center">
        <div className="absolute left-0 ml-3 ">{icon}</div>

        <input
          {...props}
          ref={ref}
          className={`w-full ${color} text-zinc-700 text-lg font-medium p-[.4rem] rounded-md ${
            icon && 'pl-9'
          } border-none outline outline-1 transition-all duration-300 ease-in-out  focus:shadow-blue-400/10 focus:shadow-md ${
            helperText
              ? 'outline-red-500'
              : 'outline-slate-100 focus:outline-slate-800/20'
          }`}
        />
      </div>

      <p className="text-red-500 absolute -bottom-6 ">
        {helperText?.toString()}
      </p>
    </div>
  )
);

export default Input;
