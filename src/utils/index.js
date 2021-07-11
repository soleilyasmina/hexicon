import words from "an-array-of-english-words";

export const getRandomInteger = (limit) => {
  return Math.floor(Math.random() * limit);
};

export const generateLetterSet = () => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const letters = [];
  for (let i = 0; i < 7; i += 1) {
    if (i === 6 && !/[AEIOU]/.test(letters.join(""))) {
      const randomVowel = getRandomInteger(5);
      letters.push(randomVowel);
    } else {
      const randomIndex = getRandomInteger(alphabet.length);
      letters.push(alphabet.splice(randomIndex, 1)[0]);
    }
  }
  return letters;
};

export const generateWordList = (letters) => {
  const letterSet = new Set(letters);
  return words.reduce((list, word, index) => {
    const wordSet = new Set(word.toUpperCase().split(""));
    const difference = [...wordSet].filter((letter) => !letterSet.has(letter));
    if (!difference.length && wordSet.has(letters[3]) && word.length >= 4) {
      list.push(word);
    }
    return list;
  }, []).sort((a, b) => a.length - b.length);
};

export const alphaLengthSort = (a, b) => {
  if (a.length < b.length) {
    return 1;
  } else if (a.length > b.length) {
    return -1;
  } else if (a < b) {
    return 1;
  } else {
    return -1;
  }
}
