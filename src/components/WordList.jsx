import { useContext } from "react";
import { Context } from "../context";
import "./WordList.css";

const WordList = () => {
  const { foundWords } = useContext(Context);

  return (
    <section>
      FOUND WORDS
      <ul>
        {foundWords.map((word) => <li key={word}>{word}</li>)}
      </ul>
    </section>
  )
}

export default WordList;
