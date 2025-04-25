import React from "react";
import { Container, Button } from "react-bootstrap";

const HeroBanner = () => {
  return (
    <div className="bg-primary text-white text-center py-5">
      <Container>
        <h1 className="fw-bold">Welcome to Our Store</h1>
        <p className="lead">Best Deals on Electronics & Fashion</p>
        <Button variant="light" size="lg">Shop Now</Button>
      </Container>
    </div>
  );
};

export default HeroBanner;
