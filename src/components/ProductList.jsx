import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "./Productcard";
// import "../assets";
const products = [
  { id: 1, name: "Laptop", price: 999, image:"../assets/laptop.jpg"},
  { id: 2, name: "Smartphone", price: 599, image: "../assets/smartphone.jpg" },
  { id: 3, name: "Headphones", price: 199, image: "../assets/head.jpg" },
];

const ProductList = () => {
  return (
    <Container className="my-4">
      <h3 className="text-center">Latest Products</h3>
      <Row>
        {products.map((product) => (
          <Col key={product.id} xs={12} md={4} className="mb-4">
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
