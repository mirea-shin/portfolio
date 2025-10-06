import React, { ReactNode } from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: ${(props) => props.theme.colors.background};

  width: 360px;
  height: 500px;

  border: 1px solid #eee;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  overflow: hidden;
  justify-content: center;
  align-items: center;

  &:hover {
    background: #fff;
    transform: translateY(-4px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.08);
  }
`;

interface ProjectCardProps {
  children: ReactNode;
}

export default function ProjectCard({ children }: ProjectCardProps) {
  return <Card>{children}</Card>;
}
