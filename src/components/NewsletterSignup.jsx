import React from "react";
import { Container, Form, Button } from "react-bootstrap";

const NewsletterSignup = () => {
  return (
    <Container className="text-center bg-light py-4">
      <h4>Subscribe to Our Newsletter</h4>
      <Form className="d-flex justify-content-center">
        <Form.Control type="email" placeholder="Enter email" className="w-50" />
        <Button variant="primary" className="ms-2">Subscribe</Button>
      </Form>
    </Container>
  );
};

export default NewsletterSignup;
