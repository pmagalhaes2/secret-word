import { Button } from "../Button";
import { Container } from "./styles";

interface IProps {
  retry: () => void;
  score: number;
}

export const GameOver = ({ retry, score }: IProps) => {
  return (
    <Container>
      <h1>Fim de Jogo!</h1>
      <h2>A sua pontuação foi: <span>{score}</span></h2>
      <Button title={"Resetar jogo"} onClick={retry} />
    </Container>
  );
};
