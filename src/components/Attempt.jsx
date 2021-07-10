import { useContext } from "react";
import { Context } from "../context";
import "./Attempt.css";

const Attempt = () => {
  const { currentGuess } = useContext(Context);

  return (
    <form>
      <input value={currentGuess.join('')} />
    </form>
  )
}

export default Attempt;
