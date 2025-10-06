import React, { ReactNode } from 'react';

import styled from 'styled-components';

const PageLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 100%;

  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
`;

interface PageLayoutProps {
  children: ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return <PageLayoutWrapper>{children}</PageLayoutWrapper>;
}
