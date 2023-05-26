import { Container, Image, Table } from "react-bootstrap";
import NavbarComponent from "../components/Navbar";
import { exIngredients } from "../examplemeals";
import { ButtonComponent } from "../components/ButtonComponent";
import IngredientFormModal from "../components/IngredientFormModal";
import { useState } from "react";

export const isExpired = (expiredate: Date) => {
  const today = new Date();
  if (expiredate < today) {
    return true;
  }
  return false;
};

export const IngredientsListPage = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Container>
        <NavbarComponent />
        <Container className="ingredients-picture">
          <Image
            fluid={true}
            alt=""
            src="/src/assets/ingredients.jpg"
            width="920px"
            height="auto"
          />
        </Container>
        <Container>
          <Container className="ingredient-header">
            <Container className="meal-info-text">
              <h1 className="ingredients-h1"> Ingredients</h1>
              <p className="ingredients-text">
                Here you can find all the ingredients you have in your pantry.
              </p>
            </Container>
            <Container className="ingredient-button">
              <ButtonComponent onClick={handleShow}>
                {" "}
                Update Ingredients
              </ButtonComponent>
            </Container>
          </Container>
          <Container className="meal-info">
            <IngredientFormModal show={show} handleClose={handleClose} />
            <Table striped bordered hover size="sm">
              <thead className="table-headings">
                <tr>
                  <th>Ingredient</th>
                  <th>Quantity</th>
                  <th>Expiry date</th>
                </tr>
              </thead>
              <tbody className="ingredients-text">
                {exIngredients.map((ingredient) => (
                  <tr>
                    <td>{ingredient.name}</td>
                    <td>
                      {ingredient.quantity} {ingredient.unit}
                    </td>
                    <td
                      className={
                        isExpired(ingredient.expiryDate)
                          ? "expired-text"
                          : "ingredients-text"
                      }
                    >
                      {ingredient.expiryDate.toLocaleDateString()}
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

export default IngredientsListPage;
