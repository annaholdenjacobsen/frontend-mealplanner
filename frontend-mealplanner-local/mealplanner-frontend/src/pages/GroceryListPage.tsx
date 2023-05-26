import { Container, Image, Table } from "react-bootstrap";
import NavbarComponent from "../components/Navbar";
import { exGroceries } from "../examplemeals";
import Badge from "react-bootstrap/Badge";

export const GroceryListPage = () => {
  return (
    <>
      <Container>
        <NavbarComponent />
        <Container className="ingredients-picture">
          <Image
            fluid={true}
            alt=""
            src="/src/assets/grocieries.jpg"
            width="920px"
            height="auto"
          />
        </Container>
        <Container className="meal-info">
          <Container className="meal-info">
            <h1 className="ingredients-h1"> Groceries</h1>
            <p className="ingredients-text">
              Here you can find all grocieries needed for your MealPlan
            </p>
          </Container>
          <Container className="meal-info">
            <Table striped bordered hover size="sm">
              <thead className="table-headings">
                <th>Ingredient</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Purchased</th>
              </thead>
              <tbody className="ingredients-text">
                {exGroceries.map((grocerie) => (
                  <tr>
                    <td>{grocerie.name}</td>
                    <td>
                      {grocerie.quantity} {grocerie.unit}
                    </td>
                    <td>{grocerie.price} AUD</td>
                    <td>
                      {grocerie.isPurchased ? (
                        <Badge bg="success">Yes</Badge>
                      ) : (
                        <Badge bg="danger">No</Badge>
                      )}
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

export default GroceryListPage;
