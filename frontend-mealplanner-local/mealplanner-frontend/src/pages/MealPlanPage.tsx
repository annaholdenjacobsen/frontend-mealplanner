import { Container } from "react-bootstrap";
//import MealCard from "../components/MealCard";
import NavbarComponent from "../components/Navbar";
//import { Meal } from "../utils";
import { exmeals } from "../examplemeals";
import CardContainer from "../components/CardContainer";
import Image from "react-bootstrap/Image";
import { SideBar } from "../components/SideBar";

export function MealPlanPage() {
  return (
    <>
      <Container>
        <NavbarComponent />
        <Container className="mealplanner-page-outline">
          <SideBar />
          <Container className="mealplanner-page">
            <Container className="mealplan-picture-container">
              <Image
                fluid={true}
                alt=""
                src="/src/assets/userpage.jpg"
                width="1100px"
                height="auto"
                className="discoveryImage"
              />
            </Container>
            <Container>
              <Container className="mealplan-title"> My MealPlan </Container>
              <Container className="space">
                <CardContainer Meals={exmeals} />
              </Container>
            </Container>
          </Container>
        </Container>
      </Container>
    </>
  );
}

export default MealPlanPage;
