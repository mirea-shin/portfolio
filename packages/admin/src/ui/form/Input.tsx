import type { UseFormRegister } from 'react-hook-form';
import { FormElement } from './index';

import styled from 'styled-components';

interface InputProps {
  label: string;
  name: string;
  register: UseFormRegister<any>;
  required?: boolean;
  type?: string;
  error?: boolean;
}

const InputWrapper = styled.input`
  border: 1px solid ${(props) => props.theme.colors.text};
`;

export default function Input({
  label,
  name,
  register,
  required,
  type = 'text',
  error,
}: InputProps) {
  return (
    <FormElement name={name} label={label} error={error}>
      <InputWrapper
        id={name}
        type={type}
        {...register(name, { required })}
        className="p-2 rounded-sm focus:outline-none shadow focus:bg-white transition-all duration-150"
      />
    </FormElement>
  );
}
