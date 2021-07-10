import { useContext } from "react";
import Attempt from "./components/Attempt";
import Hexagon from "./components/Hexagon";
import Options from "./components/Options";
import { Context } from "./context";
import "./App.css";

function App() {
  const { displayLetters } = useContext(Context);

  return (
    <div className="App">
      <Attempt />
      <main className="hexagon-container">
        {displayLetters.map((letter, index) => (
          <Hexagon letter={letter} index={index} />
        ))}
      </main>
      <Options />
    </div>
  );
}

export default App;
