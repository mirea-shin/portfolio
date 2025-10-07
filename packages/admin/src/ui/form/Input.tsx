import type { UseFormRegister } from 'react-hook-form';
import { FormElement } from './index';

import styled from 'styled-components';

interface InputProps {
  label: string;
  name: string;
  register: UseFormRegister<any>;
  required?: boolean;
  type?: string;
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
}: InputProps) {
  return (
    <FormElement name={name} label={label}>
      <InputWrapper
        id={name}
        type={type}
        {...register(name, { required })}
        className="p-2 focus:outline-none rounded-sm"
      />
    </FormElement>
  );
}
