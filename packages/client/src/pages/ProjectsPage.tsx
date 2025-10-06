import React from 'react';
import styled from 'styled-components';

import Projects from '../features/projects/components/Projects';

const ProjectPageWrapper = styled.div`
  // display: flex;
  // flex-direction: column;
  // flex: 1;
  // justify-content: center;
  // border: 1px solid green;
`;

export default function ProjectsPage() {
  return (
    <div>
      <Projects />
    </div>
  );
}
