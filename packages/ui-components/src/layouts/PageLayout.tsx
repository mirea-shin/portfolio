import React, { ReactNode } from 'react';

import styled from 'styled-components';

const PageLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 100%;
`;

export const MainWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface PageLayoutProps {
  children: ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return <PageLayoutWrapper>{children}</PageLayoutWrapper>;
}
