import { Routes, Route } from 'react-router-dom';
import { NotFoundPage } from 'ui-components';

import AboutPage from '../pages/AboutPage';

export default function ClientRoutes() {
  return (
    <Routes>
      <Route path="/" element={<div>CLIENT</div>} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
