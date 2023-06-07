import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { Button } from "../Button";
import { Container } from "./styles";

interface IProps {
  verifyLetter: (letter: string) => void;
  pickedWord: string;
  pickedCategory: string;
  letters: string[];
  guessedLetters: string[];
  wrongLetters: string[];
  guesses: number;
  score: number;
}
export const Game = ({
  verifyLetter,
  pickedCategory,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
}: IProps) => {
  const [letter, setLetter] = useState("");
  const inputRef = useRef<null | HTMLElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    verifyLetter(letter);

    setLetter("");

    inputRef.current?.focus();
  };

  return (
    <Container>
      <p>
        <span>Pontuação: 000</span>
      </p>
      <h1>Adivinhe a palavra:</h1>
      <h3>
        Dica sobre a palavra: <span>{pickedCategory}</span>
      </h3>
      <p>Você ainda tem {guesses} tentativa(s).</p>
      <div>
        {letters.map((letter, index) =>
          guessedLetters.includes(letter) ? (
            <span key={index}>{letter}</span>
          ) : (
            <span key={index}></span>
          )
        )}
      </div>
      <div className="letter-container">
        <p>Tente adivinhar uma letra da palavra:</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="letter"
            id="letter"
            maxLength={1}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setLetter(e.target.value)
            }
            value={letter}
            ref={inputRef as any}
            required
          />
          <Button title="Jogar" />
        </form>
      </div>
      <div className="wrog-letters-container">
        <p>Letras já utilizadas:</p>
        {wrongLetters.map((letter, index) => {
          return <span key={index}>{letter}, </span>;
        })}
      </div>
      {/* <Button title={"Finalizar jogo"} onClick={verifyLetter} /> */}
    </Container>
  );
};
