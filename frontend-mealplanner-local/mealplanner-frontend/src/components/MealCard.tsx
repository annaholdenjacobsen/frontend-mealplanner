import Button from "react-bootstrap/Button";
import React from "react";
import Card from "react-bootstrap/Card";
import { Meal } from "../utils";
//import { Link } from "react-router-dom";

type Props = {
  Meal: Meal;
};

const MealCard: React.FC<Props> = ({ Meal }) => {
  return (
    <Card className="MealCard">
      <Card.Img className="card-image" variant="top" src={Meal.image} />
      <Card.Body className="card-info">
        <Card.Title className="card-title">{Meal.name}</Card.Title>
        <Card.Text>{Meal.price} AUD </Card.Text>
        <Button variant="primary" size="sm">
          Learn More
        </Button>
      </Card.Body>
    </Card>
  );
};

export default MealCard;

//<Card.Img className="card-image" variant="top" src={Meal.image} />
