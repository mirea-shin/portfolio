import { Routes, Route } from 'react-router-dom';
import { NotFoundPage } from 'ui-components';

import AboutPage from '../pages/AboutPage';
import ProjectPage from '../pages/ProjectsPage';

import Layout from '../ui/Layout';

export default function ClientRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<div>CLIENT</div>} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
