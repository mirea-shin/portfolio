import { BrowserRouter } from 'react-router-dom';
import ClientRoutes from './routes';

function App() {
  return (
    <BrowserRouter>
      <ClientRoutes />
    </BrowserRouter>
  );
}

export default App;
