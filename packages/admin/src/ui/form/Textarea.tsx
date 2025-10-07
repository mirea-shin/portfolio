import type { UseFormRegister } from 'react-hook-form';
import { FormElement } from './index';

interface TextareaProps {
  label: string;
  name: string;
  register: UseFormRegister<any>;
  required?: boolean;
}

export default function Textarea({
  label,
  name,
  register,
  required,
}: TextareaProps) {
  return (
    <FormElement name={name} label={label}>
      <textarea
        id={name}
        {...register(name, { required })}
        className="border border-red-300 p-2 focus:outline-none rounded-sm "
        style={{ resize: 'none' }}
      />
    </FormElement>
  );
}
