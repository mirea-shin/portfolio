import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterContent>
        Portfolio © 2025 | Built by Mirea Shin [ GitHub ] [ Portfolio ]
      </FooterContent>
    </FooterWrapper>
  );
}
