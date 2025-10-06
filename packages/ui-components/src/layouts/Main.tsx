import React, { ReactNode } from 'react';
import styled from 'styled-components';

const MainWrapper = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

interface MainProps {
  children: ReactNode;
}

export default function Main({ children }: MainProps) {
  return <MainWrapper>{children}</MainWrapper>;
}
