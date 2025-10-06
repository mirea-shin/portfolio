import React, { ReactNode } from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  border-bottom: 1px solid ${(props) => props.theme.colors.text};

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: sticky;
  top: 0;
  width: 100%;
  height: 4rem;
  padding: 0 2rem;
`;

interface HeaderProps {
  children: ReactNode;
}

export default function Header({ children }: HeaderProps) {
  return (
    <HeaderWrapper>
      <div>M.Shin</div>
      <nav>{children}</nav>
    </HeaderWrapper>
  );
}
