import { createContext, useEffect, useState } from "react";
import { generateLetterSet, generateWordList } from "../utils";

export const Context = createContext();
Context.displayName = "BeeContext";

export const Provider = ({ children }) => {
  const [currentLetters, setCurrentLetters] = useState([]);
  const [foundWords, setFoundWords] = useState([]);
  const [possibleWords, setPossibleWords] = useState([]);
  const [currentGuess, setCurrentGuess] = useState([]);

  useEffect(() => {
    if (possibleWords.length < 10) {
      setCurrentLetters(generateLetterSet());
    }
  }, [possibleWords]);

  useEffect(() => {
    setFoundWords([]);
    setPossibleWords(generateWordList(currentLetters));
  }, [currentLetters]);

  const contextValue = {
    foundWords,
    setFoundWords,
    currentLetters,
    setCurrentLetters,
    possibleWords,
    setPossibleWords,
    currentGuess,
    setCurrentGuess,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
