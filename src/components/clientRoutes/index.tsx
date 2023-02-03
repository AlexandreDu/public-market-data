import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../../pages';

export function ClientRoutes() {
  return (
    <Routes>
      <Route path={'/'} element={<HomePage />} />
    </Routes>
  );
}
