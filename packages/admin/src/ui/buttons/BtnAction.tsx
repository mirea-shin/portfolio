import React from 'react';

interface BtnActionProps {
  label: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void;
  color: 'blue' | 'red';
}

export default function BtnAction({
  type = 'button',
  label,
  color,
  onClick,
}: BtnActionProps) {
  return (
    <button
      type={type}
      className={`bg-${color}-500 text-white px-4 py-2 rounded hover:bg-${color}-600 cursor-pointer`}
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
    >
      {label}
    </button>
  );
}
