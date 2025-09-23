import { Routes, Route } from 'react-router-dom';
import { NotFoundPage } from 'ui-components';

export default function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<NotFoundPage />} />
      <Route
        path="/admin"
        element={<div className="border border-red-300">admin</div>}
      />
    </Routes>
  );
}
