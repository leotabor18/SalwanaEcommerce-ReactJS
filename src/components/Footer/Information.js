import React from "react";
import Title from "./Title";
import { Container } from "react-bootstrap";

function Information() {
  return (
    <Container className="information">
      <Title title="Information" />
      <ul className="info">
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Contacts</a>
        </li>
        <li>
          <a href="/">Terms & Condition</a>
        </li>
        <li>
          <a href="/">Address</a>
        </li>
        <li>
          <a href="/">Delivery</a>
        </li>
        <li>
          <a href="/">Partnership</a>
        </li>
      </ul>
    </Container>
  );
}

export default Information;
