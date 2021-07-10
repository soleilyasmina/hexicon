import { useContext } from "react";
import { Context } from "../context";
import "./Hexagon.css";

const Hexagon = (props) => {
  const { setCurrentGuess } = useContext(Context);

  return (
    <div className={`hexagon ${props.index === 3 ?  "main" : ""}`} onClick={() => setCurrentGuess((curr) => [...curr, props.letter])}>
      {props.letter}
    </div>
  )
}

export default Hexagon;
