import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          <Col md={6}>
            <p>© 2025 ShopLogo. All rights reserved.</p>
          </Col>
          <Col md={6} className="text-md-end">
            <a href="#" className="text-white mx-2">Facebook</a>
            <a href="#" className="text-white mx-2">Twitter</a>
            <a href="#" className="text-white mx-2">Instagram</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
