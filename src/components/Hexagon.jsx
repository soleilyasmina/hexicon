import "./Hexagon.css";

const Hexagon = (props) => {
  return (
    <div className={`hexagon ${props.index === 3 ?  "main" : ""}`}>
      {props.letter}
    </div>
  )
}

export default Hexagon;
