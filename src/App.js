import Routes from "./routes";
import Context from "./store";

function App() {
  return (
    <Context>
      <Routes />
    </Context>
  );
}

export default App;
