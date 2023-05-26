import { Container } from "react-bootstrap";
import NavbarComponent from "../components/Navbar";
import { SideBar } from "../components/SideBar";

export const UserPage: React.FC = () => {
  return (
    <>
      <NavbarComponent />
      <Container className="userpage">
        <SideBar />
        <Container className="userpage-title">
          <h1>My Profile</h1>
          <Container className="userinfo">
            <Container>Username: Anna Jacobsen </Container>
            <Container>Email: anna.jacobsen@gmail.com</Container>
          </Container>
        </Container>
        <Container className="userpage-title">
            
            </Container>
            <Container className="userpage-title"></Container>
            <Container className="userpage-title"></Container>
      </Container>
    </>
  );
};
