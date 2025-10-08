import React from 'react';
import styled from 'styled-components';

interface BadgeProps {
  label: string;
  border?: boolean;
  className?: string;
  active?: boolean;
}

const StatusBadge = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'border',
})<{ border: boolean; active: boolean }>`
  border-radius: 0.75rem;
  padding: 0.25rem 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  /* ✅ 전환 효과 */
  transition: background-color 0.25s ease, color 0.25s ease,
    border-color 0.25s ease, transform 0.2s ease;

  ${(props) =>
    props.border
      ? `
        background: ${props.theme.colors.background};
        color: ${props.theme.colors.text};
        border: 1px solid ${props.theme.colors.text};


        ${
          props.active &&
          `&:hover {
          background: ${props.theme.colors.text};
          color: ${props.theme.colors.background};
          border: 1px solid transparent;
          transform: translateY(-1px); /* 살짝 떠오르는 효과 */
        }`
        }
    
      `
      : `
        background: ${props.theme.colors.text};
        color: ${props.theme.colors.background};

        &:hover {
          opacity: 0.9;
          transform: translateY(-1px);
        }
      `}
`;

export default function Badge({
  label,
  className,
  border = false,
  active = false,
}: BadgeProps) {
  return (
    <StatusBadge className={className} border={border} active={active}>
      <span>{label}</span>
    </StatusBadge>
  );
}
