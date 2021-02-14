import Routes from "./routes";
import Context from "./store";

import Footer from "./layout/Footer";

function App() {
  return (
    <Context>
      <Routes />
      <Footer />
    </Context>
  );
}

export default App;
