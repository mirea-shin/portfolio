import type { ReactNode } from 'react';

interface FormElementProps {
  name: string;
  label: string;
  children: ReactNode;
}

export default function FormElement({
  name,
  label,
  children,
}: FormElementProps) {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="mb-2">
        {label}
      </label>
      {children}
    </div>
  );
}
