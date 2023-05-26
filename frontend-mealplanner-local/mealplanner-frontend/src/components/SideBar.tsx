import { Button, Container } from "react-bootstrap";
import { ButtonComponent } from "./ButtonComponent";

export const SideBar: React.FC = () => {
  return (
    <>
      <Container className="sidebar">
        <Container className="sidebar-top">
        <button className="sidebar-button" onClick={() => {}}>My Profile </button>
          <button className="sidebar-button" onClick={() => {}}>My MealPlan </button>
        </Container>
        <Container className="sidebar-bottom">
          <button className="sidebar-button" onClick={() => {}}>Log Out </button>
        </Container>
      </Container>
    </>
  );
};
