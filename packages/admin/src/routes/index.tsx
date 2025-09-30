import { Routes, Route } from 'react-router-dom';
import { NotFoundPage } from 'ui-components';
import {
  AboutPage,
  AboutDetailPage,
  ProjectsPage,
  ProjectsDetailPage,
} from '../pages';

export default function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<div>ADMIN</div>} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/about/:id" element={<AboutDetailPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/projects/:id" element={<ProjectsDetailPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
