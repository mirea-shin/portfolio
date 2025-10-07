import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { motion } from 'framer-motion';

const Card = styled(motion.div)`
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};

  width: 360px;
  height: 500px;

  border: 1px solid #eee;
  border-radius: 5px;
  padding: 1.5rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  overflow: hidden;
  justify-content: center;
  align-items: center;

  &:hover {
    background: ${(props) => props.theme.colors.card};
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.08);
  }

  &:hover .linkArrow {
    // color: ${(props) => props.theme.colors.primary};
    transform: translateY(-5px);
  }
`;

interface ProjectCardProps {
  children: ReactNode;
  idx: number;
}

export default function ProjectCard({ children, idx }: ProjectCardProps) {
  return (
    <Card
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.2, duration: 0.2, ease: 'easeInOut' }}
      whileHover={{ y: -3 }}
    >
      {children}
    </Card>
  );
}
