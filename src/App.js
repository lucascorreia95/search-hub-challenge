import { ThemeProvider } from "styled-components";

import Routes from "./routes";
import Context from "./store";
import { theme } from "./theme";
import Footer from "./layout/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Context>
        <Routes />
        <Footer />
      </Context>
    </ThemeProvider>
  );
}

export default App;
