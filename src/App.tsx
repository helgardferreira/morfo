import { Counter } from "./features/counter/Counter";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <header>
        <Counter />
      </header>
    </div>
  );
}

export default App;
