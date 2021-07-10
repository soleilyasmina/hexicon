import { useContext } from "react";
import Attempt from "./components/Attempt";
import Hexagon from "./components/Hexagon";
import { Context } from "./context";
import "./App.css";

function App() {
  const { currentLetters } = useContext(Context);

  return (
    <div className="App">
      <Attempt />
      <main className="hexagon-container">
        {currentLetters.map((letter, index) => (
          <Hexagon letter={letter} index={index} />
        ))}
      </main>
    </div>
  );
}

export default App;
