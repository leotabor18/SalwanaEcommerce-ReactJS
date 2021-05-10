import React from "react";
import Title from "./Title";
import { Container } from "react-bootstrap";

function Categories() {
  return (
    <Container className="category">
      <Title title="Categories" />
      <ul className="categories">
        <li>
          <a href="/">Clothing</a>
        </li>
        <li>
          <a href="/">Accesories</a>
        </li>
        <li>
          <a href="/">Plants</a>
        </li>
        <li>
          <a href="/">Foods</a>
        </li>
        <li>
          <a href="/">Appliances</a>
        </li>
        <li>
          <a href="/">Decoration</a>
        </li>
      </ul>
    </Container>
  );
}

export default Categories;
