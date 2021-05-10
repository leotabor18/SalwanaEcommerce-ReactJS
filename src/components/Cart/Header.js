import React from "react";
import { Container } from "react-bootstrap";

const Header = ({ title, sub }) => {
  return (
    <Container className="cart-title">
      <h1>{title}</h1>
      <p>{sub}</p>
    </Container>
  );
};

export default Header;
