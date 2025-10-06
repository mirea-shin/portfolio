import React from 'react';
import styled from 'styled-components';

import { IoLogoGithub } from 'react-icons/io5';

interface BtnProps {
  size: 's' | 'm' | 'l';
}

const Button = styled.button<BtnProps>`
  font-size: ${(props) => {
    switch (props.size) {
      case 's':
        return `1rem`;
      case 'm':
        return `1.5rem;`;
      case 'l':
        return `2.5rem`;
      default:
        return `1.5rem;`;
    }
  }};
  margin: 0 0.5rem;
`;

interface LinkBtnProps {
  type: 'github' | 'live';
  size?: 's' | 'm' | 'l';
  link: string;
}

export default function LinkBtn({ type, size = 'm', link }: LinkBtnProps) {
  return (
    <Button size={size}>
      <a href={link} target="_blank">
        {type === 'github' && <IoLogoGithub />}
      </a>
    </Button>
  );
}
