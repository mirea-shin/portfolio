import React from 'react';
import styled from 'styled-components';

import { LinkBtn } from '../components';

const FooterWrapper = styled.footer`
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.textSecondary};

  display: flex;
  justify-content: center;
  align-items: center;

  position: sticky;
  bottom: 0;
  width: 100%;
  height: 3rem;
  padding: 0 2rem;
  font-size: 0.8rem;
`;

const FooterContent = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterContent>
        <span>Portfolio © 2025 | Built by Mirea Shin</span>
        <LinkBtn
          type="github"
          link="https://github.com/mirea-shin?tab=repositories"
        />
      </FooterContent>
    </FooterWrapper>
  );
}
