import { Button } from "../Button";
import { Container } from "./styles";

interface IProps {
  startGame: () => void;
}

const StartScreen = ({ startGame }: IProps) => {
  return (
    <Container>
      <h1>Secret Word</h1>
      <p>Clique no botão abaixo para começar a jogar</p>
      <Button title="Iniciar o jogo" onClick={startGame} />
    </Container>
  );
};

export default StartScreen;
