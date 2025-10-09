import React from 'react';

import { AboutForm } from '../../features/about';

import { DetailPageLayout } from '../../ui/layouts';

export default function AboutDetailPage() {
  return (
    <DetailPageLayout>
      <AboutForm />
    </DetailPageLayout>
  );
}
