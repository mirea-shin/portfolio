import React from 'react';
import styled from 'styled-components';

const PageWrapper = styled.div`
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
`;

export default function NotFoundPage() {
  return <PageWrapper>흠냐리</PageWrapper>;
}
