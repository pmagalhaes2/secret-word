import { Container } from "./styles";

interface buttonProps {
  title: string;
  onClick?: () => void;
}

export const Button = ({ title, onClick }: buttonProps) => {
  return (
    <Container>
      <button onClick={onClick}>{title}</button>
    </Container>
  );
};
