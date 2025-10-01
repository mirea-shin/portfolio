import React, { useEffect } from 'react';
import { useModal } from '../index';

export default function Modal({
  children,
  handleOnClose,
}: {
  children: React.ReactNode;
  handleOnClose?: () => void;
}) {
  const { isOpen, onClose, onOpen } = useModal();

  useEffect(() => {
    if (!isOpen) return;

    const modalTime = setTimeout(() => {
      onClose();
      if (handleOnClose) handleOnClose();
    }, 4000);

    // cleanup에서 타이머 정리
    return () => clearTimeout(modalTime);
  }, [isOpen, onClose, handleOnClose]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        if (handleOnClose) handleOnClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
      console.log('why?');
    };
  }, [onClose, onOpen]);

  if (!isOpen) return <></>;

  return (
    <div className="bg-red-300">
      <button
        onClick={() => {
          onClose();
          if (handleOnClose) handleOnClose();
        }}
        className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
      >
        ×
      </button>
      {children}
    </div>
  );
}
