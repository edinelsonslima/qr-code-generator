import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface InputProps
  extends Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    'className'
  > {
  span?: string | number;
  register: UseFormRegisterReturn<string>;
}

export default function Input({ span, register, ...props }: InputProps) {
  return (
    <div className='flex w-full transition-all border border-transparent focus-within:border focus-within:border-secondary focus-within:rounded-lg'>
      {span !== undefined && (
        <span className='bg-secondary px-4 py-1 text-white rounded-s-md grid place-items-center'>
          {span}
        </span>
      )}

      <input
        {...register}
        {...props}
        className={`border border-primary py-2 px-4 w-full outline-none ${
          span ? 'rounded-e-md border-l-0' : 'rounded-md'
        }`}
      />
    </div>
  );
}
