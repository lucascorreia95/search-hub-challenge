import { ThemeProvider } from 'styled-components';

import AppRoutes from './routes';
import Context from './store';
import { theme } from './theme';
import Footer from './layout/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Context>
        <AppRoutes />
        <Footer />
      </Context>
    </ThemeProvider>
  );
}

export default App;
