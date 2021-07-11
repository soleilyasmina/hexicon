import { useContext } from "react";
import Attempt from "./components/Attempt";
import Hexagon from "./components/Hexagon";
import Nav from "./components/Nav";
import Options from "./components/Options";
import WordList from "./components/WordList";
import { Context } from "./context";
import "./App.css";

function App() {
  const { darkMode, displayLetters } = useContext(Context);

  return (
    <div className={`App ${darkMode ? 'dark' : 'light'}`}>
      <Nav />
      <Attempt />
      <main className="hexagon-container">
        {displayLetters.map((letter, index) => (
          <Hexagon letter={letter} index={index} />
        ))}
      </main>
      <Options />
      <WordList />
    </div>
  );
}

export default App;
