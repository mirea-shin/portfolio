import React from 'react';
import { PageLayout, Header, Footer, Main } from 'ui-components';

import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';

export default function Layout() {
  return (
    <PageLayout>
      <Header>
        <Navigation />
      </Header>
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </PageLayout>
  );
}
