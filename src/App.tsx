import { useState } from "react";
import "./App.css";
import StartScreen from "./components/StartScreen";

import { wordsList } from "./data/words";
import { Game } from "./components/Game";
import { GameOver } from "./components/GameOver";

interface wordsProps {
  [key: string]: string[];
}

function App() {
  type stages = "game" | "end" | "start";
  const [gameStage, setGameStage] = useState<stages>("start");
  const [words] = useState<wordsProps>(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState<string[]>([]);

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [wrongLetters, setWrongLetters] = useState<string[]>([]);
  const [guesses, setGuesses] = useState(5);
  const [score] = useState(0);

  const pickWordAndCategory = () => {
    // pick a random category
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * categories.length)];

    // pick a random word in category
    const word =
      words[category][Math.floor(Math.random() * words[category].length)];

    return { category, word };
  };

  // starts the secret word game
  const startGame = () => {
    const { category, word } = pickWordAndCategory();

    // create an array of letters
    const wordLetters = word.toLowerCase().split("");

    setPickedCategory(category);

    setPickedWord(word);

    setLetters(wordLetters);

    setGameStage("game");

    console.log(word);
  };

  // process the letter input
  const verifyLetter = (letter: string) => {
    pickedWord.toLowerCase().includes(letter.toLowerCase())
      ? setGuessedLetters([...guessedLetters, letter])
      : setWrongLetters([...wrongLetters, letter]);

    setGuesses(guesses - 1);

    if (guesses === 0) {
      setGameStage("end");
      setGuesses(5);
      setWrongLetters([]);
      setGuessedLetters([]);
    }
  };

  // restarts the secret word game
  const retry = () => {
    setGameStage("start");
  };

  return (
    <div className="app">
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && (
        <Game
          verifyLetter={verifyLetter}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        />
      )}
      {gameStage === "end" && <GameOver retry={retry} />}
    </div>
  );
}

export default App;
