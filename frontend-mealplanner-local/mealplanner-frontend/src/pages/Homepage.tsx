import { Container } from "react-bootstrap";
//import MealCard from "../components/MealCard";
import NavbarComponent from "../components/Navbar";
//import { Meal } from "../utils";
import { exmeals } from "../examplemeals";
import CardContainer from "../components/CardContainer";
import Image from "react-bootstrap/Image";

export function HomePage() {
  return (
    <>
      <Container>
        <NavbarComponent />
        <Container className="discovery-image-container">
          <Image
            fluid={true}
            alt=""
            src="/src/assets/discovery-background.png"
            width="936px"
            height="auto"
            className="discoveryImage"
          />
        </Container>
        <Container className="discovery-parter"> </Container>
        <Container className="space">
          <CardContainer Meals={exmeals} />
        </Container>
      </Container>
    </>
  );
}

export default HomePage;
