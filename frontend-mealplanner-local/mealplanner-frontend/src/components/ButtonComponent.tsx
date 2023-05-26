import { Container } from "react-bootstrap";

type props = {
  children: React.ReactNode;
  onClick: () => void;
};

export const ButtonComponent: React.FC<props> = ({ children, onClick }) => {
  return (
    <>
      <Container>
        <button onClick={onClick} className="button">
          {children}
        </button>
      </Container>
    </>
  );
};
