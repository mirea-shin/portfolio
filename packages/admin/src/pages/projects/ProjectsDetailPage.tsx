import React from 'react';

import { ProjectForm } from '../../features/projects';
import { DetailPageLayout } from '../../ui/layouts';

export default function ProjectsDetailPage() {
  return (
    <DetailPageLayout style={{ padding: '50px' }}>
      <ProjectForm />
    </DetailPageLayout>
  );
}
