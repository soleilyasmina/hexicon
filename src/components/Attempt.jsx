import { useContext } from "react";
import { Context } from "../context";
import "./Attempt.css";

const Attempt = () => {
  const { currentGuess, setCurrentGuess } = useContext(Context);

  return (
    <form>
      <input value={currentGuess.join('')} />
      {currentGuess.length > 0 && <span onClick={() => setCurrentGuess([])}>x</span>}
    </form>
  )
}

export default Attempt;
