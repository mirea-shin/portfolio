import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import { Button } from '../components';

import styled from 'styled-components';

const NotFoundPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Title = styled(motion.h1)`
  font-size: 7.25rem;
`;

const SubTitle = styled(motion.p)`
  font-size: 1.6rem;
  color: ${(props) => props.theme.colors.textSecondary};
  line-height: 2.2;
  font-weight: 300;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <NotFoundPageWrapper>
      <AnimatePresence>
        <Container>
          <Title initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            404
          </Title>
          <Container>
            <SubTitle>This page could not be found.</SubTitle>
            <Button
              label="Back to home"
              border={false}
              onClick={() => {
                navigate('/');
              }}
            />
          </Container>
        </Container>
      </AnimatePresence>
    </NotFoundPageWrapper>
  );
}
