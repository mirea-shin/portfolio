import React from 'react';
import { PageLayout, Header, Footer, MainWrapper } from 'ui-components';

import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <PageLayout>
      <Header>Navigation!!!</Header>
      <MainWrapper>
        <Outlet />
      </MainWrapper>
      <Footer />
    </PageLayout>
  );
}
