import { useContext } from "react";
import { Context } from "../context";
import "./Options.css";

const Options = () => {
  const { makeGuess, setCurrentGuess, shuffleLetters } = useContext(Context);

  return (
    <div>
      <button onClick={() => setCurrentGuess([])}>Delete</button>
      <button onClick={shuffleLetters}>⟲</button>
      <button onClick={makeGuess}>Enter</button>
    </div>
  )
};

export default Options;
