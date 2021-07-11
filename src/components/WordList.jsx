import { useContext } from "react";
import { Context } from "../context";
import "./WordList.css";

const WordList = () => {
  const { foundWords, possibleWords } = useContext(Context);

  return (
    <section>
      FOUND WORDS <br/> {foundWords.length} / {possibleWords.length}
      <hr/>
      <ul>
        {foundWords.map((word) => <li key={word}>{word}</li>)}
      </ul>
    </section>
  )
}

export default WordList;
