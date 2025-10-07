import { BrowserRouter } from 'react-router-dom';
import AdminRoutes from './routes';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from 'shared';

function App() {
  const isDarkMode = false;
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <BrowserRouter>
        <AdminRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
