import React from 'react';
import styled from 'styled-components';

import { AnimatePresence, motion } from 'framer-motion';

import { FiLoader } from 'react-icons/fi';

const LoadingWrapper = styled(motion.div)<LoadingProps>`
  opacity: 0.8;
  ${(props) => {
    switch (props.size) {
      case 's':
      case 'm':
        return `font-size: 3.5rem`;

      case 'l':
        return `font-size: 5rem`;
      default:
    }
  }};
`;

interface LoadingProps {
  size?: 's' | 'm' | 'l';
}

export default function Loading({ size = 'm' }: LoadingProps) {
  return (
    <AnimatePresence>
      <LoadingWrapper
        animate={{ rotate: 360 }}
        size={size}
        transition={{
          repeat: Infinity, // 무한 반복
          duration: 2, // 한 바퀴 도는 데 걸리는 시간 (초)
          ease: 'linear', // 일정한 속도로 회전
        }}
        exit={{ opacity: 0 }}
      >
        <FiLoader />
      </LoadingWrapper>
    </AnimatePresence>
  );
}
