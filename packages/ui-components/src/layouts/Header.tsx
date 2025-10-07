import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const HeaderWrapper = styled.header`
  border-bottom: 1px solid ${(props) => props.theme.colors.textMuted};
  color: ${(props) => props.theme.colors.textSecondary};
  background: ${(props) => props.theme.colors.background};

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: sticky;
  top: 0;
  width: 100%;
  height: 4rem;
  padding: 0 2rem;
  z-index: 50;
`;

const Logo = styled(motion.div)`
  color: ${(props) => props.theme.colors.text};
  font-weight: 300;
  font-size: 1.9rem;
  cursor: pointer;
`;

interface HeaderProps {
  children: ReactNode;
}

export default function Header({ children }: HeaderProps) {
  const navigate = useNavigate();
  return (
    <HeaderWrapper>
      <Logo onClick={() => navigate('/')}>
        <span>&lt;Mirea /&gt;</span>
      </Logo>
      <nav>{children}</nav>
    </HeaderWrapper>
  );
}
