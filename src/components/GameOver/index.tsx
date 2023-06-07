import { Button } from "../Button";

interface IProps {
  retry: () => void;
}

export const GameOver = ({ retry }: IProps) => {
  return (
    <div>
      <h1>Game Over</h1>
      <Button title={"Resetar jogo"} onClick={retry} />
    </div>
  );
};
