import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";

const categories = ["Electronics", "Fashion", "Home & Kitchen", "Beauty"];

const Categories = () => {
  return (
    <Container className="my-4">
      <h3 className="text-center">Shop by Category</h3>
      <Row className="justify-content-center">
        {categories.map((category, index) => (
          <Col key={index} xs={6} md={3} className="text-center">
            <Button variant="outline-primary" className="w-100 my-1">{category}</Button>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Categories;
