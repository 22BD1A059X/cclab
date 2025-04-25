import React from "react";
import ProductCard from "./Productcard"; // Ensure correct filename casing
import { Container, Row, Col } from "react-bootstrap";
// import watchImg from "../assets/watch.jpg";
// import cameraImg from "../assets/camera.jpg";

const featuredProducts = [
  { id: 4, name: "Smart Watch", price: 299},
  { id: 5, name: "Camera", price: 799 }
];

const FeaturedProducts = () => {
  return (
    <Container className="my-4">
      <h3 className="text-center">Featured Products</h3>
      <Row>
        {featuredProducts.map((product) => (
          <Col key={product.id} xs={12} md={6} className="mb-4">
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FeaturedProducts;
