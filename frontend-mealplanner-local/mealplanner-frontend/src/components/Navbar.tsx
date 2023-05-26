import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";

export function NavbarComponent() {
  return (
    <>
      <Navbar fixed="top" expand="lg" className="navcolor" variant="dark">
        <Container>
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <Image
              fluid={true}
              alt=""
              src="/src/assets/logo.png"
              width="50"
              height="50"
              className="d-inline-block align-top ms-4"
            />{" "}
            <span className="brand-text ms-2">MealPlanner</span>
          </Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link href="#groceries" className="mr-4">
              <div className="nav-link-wrapper">
                <Image
                  fluid={true}
                  alt="Groceries"
                  src="/src/assets/shopping-cart.png"
                  width="35"
                  height="35"
                  className="d-inline-block align-top"
                  title="Groceries"
                />
              </div>
            </Nav.Link>
            <Nav.Link href="#ingredients">
              <div className="nav-link-wrapper">
                <Image
                  fluid={true}
                  alt="Ingredients"
                  src="/src/assets/harvest.png"
                  width="35"
                  height="35"
                  className="d-inline-block align-top"
                  title="Ingredients"
                />
              </div>
            </Nav.Link>
            <Nav.Link href="#user">
              <div className="nav-link-wrapper">
                <Image
                  fluid={true}
                  alt="Profile"
                  src="/src/assets/avatar.png"
                  width="35"
                  height="35"
                  className="d-inline-block align-top"
                  title="Profile"
                />
              </div>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;
