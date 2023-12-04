import { ReactNode, SelectHTMLAttributes, forwardRef } from 'react';
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  icon?: ReactNode;
  helperText?:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined;
  color?: 'bg-zinc-100/70' | 'bg-zinc-200';
  options: { value: any; label: string }[];
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    { label, icon, helperText, color = 'bg-zinc-200', options, ...props },
    ref
  ) => (
    <div className="w-full text-zinc-700 flex flex-col justify-center items-start gap-1 relative">
      {label && <label className="font-medium">{label}</label>}

      <div className="w-full relative flex justify-center items-center">
        <div className="absolute left-0 ml-3 ">{icon}</div>

        <select
          {...props}
          ref={ref}
          className={`w-full ${color} text-zinc-700 text-lg font-medium p-[.4rem] rounded-md ${
            icon && 'pl-9'
          } border-none outline outline-1 transition-all duration-300 ease-in-out  focus:shadow-blue-400/10 focus:shadow-md ${
            helperText
              ? 'outline-red-500'
              : 'outline-slate-100 focus:outline-slate-800/20'
          }`}
        >
          <option value="">Selecione</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <p className="text-red-500 absolute -bottom-6 ">
        {helperText?.toString()}
      </p>
    </div>
  )
);

export default Select;
