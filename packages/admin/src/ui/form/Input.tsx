import type { UseFormRegister } from 'react-hook-form';
import { FormElement } from './index';

interface InputProps {
  label: string;
  name: string;
  register: UseFormRegister<any>;
  required?: boolean;
  type?: string;
}

export default function Input({
  label,
  name,
  register,
  required,
  type = 'text',
}: InputProps) {
  return (
    <FormElement name={name} label={label}>
      <input
        id={name}
        type={type}
        {...register(name, { required })}
        className="border border-red-300 p-2 focus:outline-none rounded-sm"
      />
    </FormElement>
  );
}
