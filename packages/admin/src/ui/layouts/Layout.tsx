import React from 'react';

import Navigation from '../Navigation';
import { PageLayout, Header, Footer, Main } from 'ui-components';

import { Outlet } from 'react-router-dom';

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
