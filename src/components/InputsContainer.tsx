import { FieldPath, UseFormRegister } from 'react-hook-form';
import Input from './Input';
import Button from './Button';

interface InputProps<TInputs extends Record<string, any>> {
  register: UseFormRegister<TInputs>;
  onRemove: () => void;
  span?: string | number;
  name: FieldPath<TInputs>;
}

export default function InputsContainer<TInputs extends Record<string, any>>({
  register,
  onRemove,
  name,
  span,
}: InputProps<TInputs>) {
  return (
    <li className='flex gap-2'>
      <Input
        span={span}
        placeholder='...qualquer texto ou link'
        register={{
          ...register(name, {
            required: true,
          }),
        }}
      />

      <Button type='default' onClick={() => onRemove()}>
        -
      </Button>
    </li>
  );
}
