import type { ReactNode } from 'react';

interface FormElementProps {
  name: string;
  label: string;
  children: ReactNode;
  error?: boolean;
}

export default function FormElement({
  name,
  label,
  children,
  error,
}: FormElementProps) {
  return (
    <div className="flex flex-col mb-3 relative">
      <label htmlFor={name} className="mb-2">
        {label}
      </label>
      {children}

      {error && (
        <p className="absolute text-xs text-red-600 -bottom-5">
          {label} is required
        </p>
      )}
    </div>
  );
}
