import React, { ReactNode } from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  display: flex;
  justify-content: space-between;
`;

interface HeaderProps {
  children: ReactNode;
}

export default function Header({ children }: HeaderProps) {
  return (
    <HeaderWrapper>
      <div>여기근데 </div>
      <div>{children}</div>
    </HeaderWrapper>
  );
}
