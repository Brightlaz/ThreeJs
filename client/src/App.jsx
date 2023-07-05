import Canvas from "./canvas";
import Customizer from "./pages/Customizer";
import Home from "./pages/Home";
import ErrorBoundary from "./hooks/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <main className="transition-all ease-in app">
        <Home />
        <Canvas />
        <Customizer />
      </main>
    </ErrorBoundary>
  );
}

export default App;
