import React from "react";
import { Card, Button } from "react-bootstrap";
const ProductCard = ({ product }) => {
  return (
    <Card className="shadow-sm">
      <Card.Img variant="top" src="camera.jpg" alt={product.name} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>${product.price}</Card.Text>
        <Button variant="success">Add to Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
