import type { UseFormRegister } from 'react-hook-form';
import { FormElement } from './index';

import styled from 'styled-components';

interface TextareaProps {
  label: string;
  name: string;
  register: UseFormRegister<any>;
  required?: boolean;
}

const TextAreaWrapper = styled.input`
  border: 1px solid ${(props) => props.theme.colors.text};
`;

export default function Textarea({
  label,
  name,
  register,
  required,
}: TextareaProps) {
  return (
    <FormElement name={name} label={label}>
      <TextAreaWrapper
        id={name}
        {...register(name, { required })}
        className="border border-red-300 p-2 focus:outline-none rounded-sm "
        style={{ resize: 'none' }}
      />
    </FormElement>
  );
}
