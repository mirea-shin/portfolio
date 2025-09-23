import { Routes, Route } from 'react-router-dom';
import { NotFoundPage } from 'ui-components';

export default function ClientRoutes() {
  return (
    <Routes>
      <Route path="/" element={<NotFoundPage />} />
    </Routes>
  );
}
