import { ReactNode, TextareaHTMLAttributes, forwardRef } from 'react';
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  icon?: ReactNode;
  helperText?:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined;
  color?: 'bg-zinc-100/70' | 'bg-zinc-200';
  rows?: number;
  post?: boolean;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      post,
      icon,
      helperText,
      color = 'bg-zinc-200',
      label,
      rows = 4,
      ...props
    },
    ref
  ) => (
    <div className="w-full text-zinc-700 flex flex-col justify-center items-start gap-1 relative">
      {label && <label className="font-medium text-zinc-700">{label}</label>}
      <div className="w-full relative flex justify-center items-center">
        <div className="absolute left-0 ml-3 ">{icon}</div>

        {post ? (
          <textarea
            {...props}
            ref={ref}
            className="w-full text-zinc-700 bg-zinc-200 h-fit font-medium text-2xl"
          />
        ) : (
          <textarea
            {...props}
            ref={ref}
            rows={rows}
            className={`w-full ${color} text-zinc-700 text-lg font-medium p-[.4rem] rounded-md leading-none  ${
              icon && 'pl-9'
            } border-none outline outline-1 transition-all duration-300 ease-in-out  focus:shadow-blue-400/10 focus:shadow-md ${
              helperText
                ? 'outline-red-500'
                : 'outline-slate-100 focus:outline-slate-800/20'
            }`}
          />
        )}
      </div>

      <p className="text-red-500 absolute -bottom-6 ">
        {helperText?.toString()}
      </p>
    </div>
  )
);

export default Textarea;
