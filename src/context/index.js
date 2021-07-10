import { createContext, useEffect, useState } from "react";
import { generateLetterSet, generateWordList } from "../utils";

export const Context = createContext();
Context.displayName = "BeeContext";

export const Provider = ({ children }) => {
  const [currentLetters, setCurrentLetters] = useState([]);
  const [foundWords, setFoundWords] = useState([]);
  const [possibleWords, setPossibleWords] = useState([]);
  const [currentGuess, setCurrentGuess] = useState([]);
  const [displayLetters, setDisplayLetters] = useState([]);

  useEffect(() => {
    if (possibleWords.length < 10) {
      setCurrentLetters(generateLetterSet());
    }
  }, [possibleWords]);

  useEffect(() => {
    setDisplayLetters(currentLetters);
    setFoundWords([]);
    setPossibleWords(generateWordList(currentLetters));
  }, [currentLetters]);

  const shuffleLetters = () => {
    setDisplayLetters((curr) => {
      const main = curr[3];
      const others = curr
        .filter((_, i) => i !== 3)
        .sort(() => (Math.random() >= 0.5 ? 1 : -1));
      others.splice(3, 0, main);
      return [...others];
    });
  };

  const makeGuess = () => {
    if (!currentGuess.includes(currentLetters[3])) {
    } else if (currentGuess.length < 4) {
    } else if (foundWords.includes(currentGuess.join("").toLowerCase())) {
    } else if (possibleWords.includes(currentGuess.join("").toLowerCase())) {
      setFoundWords((curr) => [...curr, currentGuess.join("").toLowerCase()]);
    }
    setCurrentGuess([]);
  };

  const contextValue = {
    foundWords,
    setFoundWords,
    currentLetters,
    setCurrentLetters,
    possibleWords,
    setPossibleWords,
    currentGuess,
    setCurrentGuess,
    displayLetters,
    setDisplayLetters,
    shuffleLetters,
    makeGuess,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
