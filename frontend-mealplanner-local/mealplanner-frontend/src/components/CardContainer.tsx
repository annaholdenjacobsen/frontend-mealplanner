import React from "react";
import MealCard from "./MealCard";
import { Meal } from "../utils";
import { Container } from "react-bootstrap";

type props = {
  Meals: Meal[];
};



const CardContainer: React.FC<props> = ({ Meals }) => {
  return (
    <>
      <Container className="card-container">
        {Meals.map((meal: Meal) => (
          <MealCard Meal={meal} />
        ))}
      </Container>
    </>
  );
};

export default CardContainer;
