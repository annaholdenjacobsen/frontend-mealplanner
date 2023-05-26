import { Ingredients, Meal } from "../utils";
import { Container, Image, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
//import { useParams } from "react-router-dom";
import NavbarComponent from "../components/Navbar";
import { ButtonComponent } from "../components/ButtonComponent";
import { exIngredients } from "../examplemeals";

type props = {
  Meal: Meal;
};

export const MealPage: React.FC<props> = ({ Meal }) => {
  //const { id } = useParams<{ id: string }>();
  // Query meal from database

  /*
  const haveIngredients = () => {
    // Query ingredients from database
     const mealIngredients = Meal.ingredients;
    const ownedIngredients = exIngredients;
    const ingredientsToBuy: Ingredients[] = [];

    if (ownedIngredients) {
        mealIngredients.forEach((mealIngredient) => {
        if (!(mealIngredient.name in ownedIngredients)) {
            ingredientsToBuy.push(mealIngredient);

        } else if (ownedIngredients.find((ingredient: { name: string; }) => ingredient.name === mealIngredient.name)) {
            const ownedingredient = ownedIngredients.find((ingredient: { name: string; }) => ingredient.name === mealIngredient.name);
            if (ownedingredient) {
                if (mealIngredient.quantity > ownedingredient.quantity) {
                    ingredientsToBuy.push(mealIngredient);
                }
    
        }
        }});
    } };
*/
  const addToMealPlan = () => {
    return;
  };

  return (
    <>
      <NavbarComponent />
      <Container className="meal-page">
        <Image className="meal-image" src={Meal.image} />
        <Container className="meal-info">
          <Container className="ingredient-header">
            <Container className="meal-info-text">
              <h1 className="meal-title">{Meal.name}</h1>
              <h2 className="meal-price">{Meal.price} AUD</h2>
            </Container>
            <Container className="ingredient-button">
              <ButtonComponent onClick={addToMealPlan}>
                {" "}
                Add to MealPlan{" "}
              </ButtonComponent>
            </Container>
          </Container>
          <Container className="meal-info">
            <h3 className="meal-ingredients-title">Ingredients</h3>
            <Table striped bordered hover size="sm">
              <thead className="table-headings">
                <th>Ingredient</th>
                <th>Quantity</th>
              </thead>
              <tbody className="ingredients-text">
                {Meal.ingredients.map((ingredient) => (
                  <tr>
                    <td>{ingredient.name}</td>
                    <td>
                      {ingredient.quantity} {ingredient.unit}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Container>
        </Container>
      </Container>
    </>
  );
};

export default MealPage;
