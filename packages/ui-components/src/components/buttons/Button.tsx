import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ButtnWrapper = styled(motion.button)<{ border: boolean }>`
  cursor: pointer;
  padding: 0.5rem 1.5rem;
  border-radius: 1.5rem;

  ${(props) =>
    props.border ? `border: ${props.theme.colors.text} 1px solid` : ''};
  background: ${(props) =>
    props.border ? props.theme.colors.background : props.theme.colors.text};
  color: ${(props) =>
    props.border ? props.theme.colors.text : props.theme.colors.background};

  &:hover {
    background: ${(props) =>
      props.border ? '' : props.theme.colors.textSecondary};
  }
`;

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset' | undefined;
  border: boolean;
  label: string;
  onClick: () => void;
}

export default function Button({
  type = 'button',
  border = false,
  label,
  onClick,
}: ButtonProps) {
  return (
    <ButtnWrapper
      border={border}
      type={type}
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
    >
      {label}
    </ButtnWrapper>
  );
}
