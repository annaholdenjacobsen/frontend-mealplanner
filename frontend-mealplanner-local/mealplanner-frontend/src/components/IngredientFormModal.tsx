import React, { useState } from "react";
import { Modal, Button, Form, Container } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type props = {
    show: boolean;
    handleClose: () => void;
};

export const IngredientFormModal: React.FC<props> = ({ show, handleClose }) => {
  const [ingredientName, setIngredientName] = useState("");
  const [ingredientQuantity, setIngredientQuantity] = useState("");
  const [ingredientUnit, setIngredientUnit] = useState("");
  const [ingredientExpiryDate, setIngredientExpiryDate] = useState<Date | null>(null);

  //bruke context api for å hente ut bruker og ingredientser

  const handleDateChange = (date: Date) => {
    setIngredientExpiryDate(date);
  };

  const handleSubmit = () => {

    // Add ingredient to database
    console.log(ingredientName);
    console.log(ingredientQuantity);
    console.log(ingredientUnit);
    console.log(ingredientExpiryDate);

    // Close the modal
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Ingredient</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="ingredient">
            <Container className="form-group">
              <Container className="form-group-items">
                <Form.Label>Ingredient Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter ingredient name"
                  value={ingredientName}
                  onChange={(e) => setIngredientName(e.target.value)}
                />
              </Container>
              <Container className="form-group-items">
                <Form.Label>Ingredient Quantity</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter ingredient quantity"
                  value={ingredientQuantity}
                  onChange={(e) => setIngredientQuantity(e.target.value)}
                />
              </Container>
              <Container className="form-group-items">
                <Form.Label>Ingredient Unit</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter ingredient unit"
                  value={ingredientUnit}
                  onChange={(e) => setIngredientUnit(e.target.value)}
                />
              </Container>
              <Container className="form-group-items">
                <Form.Label>Ingredient Expiry Date</Form.Label>
                <DatePicker
                  selected={ingredientExpiryDate}
                  onChange={handleDateChange}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="Select expiry date"
                />
              </Container>
            </Container>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleSubmit}>
          Add Ingredient
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default IngredientFormModal;
