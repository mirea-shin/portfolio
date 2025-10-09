import { useState } from 'react';
import type { UseFormRegister } from 'react-hook-form';
import { FormElement } from './index';

import styled from 'styled-components';

interface TextareaProps {
  label: string;
  name: string;
  register: UseFormRegister<any>;
  required?: boolean;
  className?: string;
  error?: boolean;
}

const TextAreaWrapper = styled.textarea`
  border: 1px solid ${(props) => props.theme.colors.text};
`;

export default function Textarea({
  label,
  name,
  register,
  required,
  className,
  error,
}: TextareaProps) {
  const [isComposing, setIsComposing] = useState(false);

  const handleComposition = (
    e: React.CompositionEvent<HTMLTextAreaElement>
  ) => {
    if (e.type === 'compositionstart') setIsComposing(true);
    if (e.type === 'compositionend') setIsComposing(false);
  };

  const handleTextareaKeyDown = (
    e: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (!isComposing && e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      const target = e.target as HTMLTextAreaElement;
      const { selectionStart, selectionEnd, value } = target;
      const newValue =
        value.slice(0, selectionStart) + '\n' + value.slice(selectionEnd);
      target.value = newValue;
      target.selectionStart = target.selectionEnd = selectionStart + 1;
    }
  };

  return (
    <FormElement name={name} label={label} error={error}>
      <TextAreaWrapper
        id={name}
        {...register(name, { required })}
        className={`p-2 rounded-sm shadow transition-all duration-150 focus:outline-none focus:bg-white ${className}`}
        style={{ resize: 'none' }}
        onKeyDown={handleTextareaKeyDown}
        rows={4} // 필요하면 높이 조정
        onCompositionStart={handleComposition}
        onCompositionEnd={handleComposition}
      />
    </FormElement>
  );
}
