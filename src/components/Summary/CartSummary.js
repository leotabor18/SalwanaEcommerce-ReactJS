import React from "react";
import { Container } from "react-bootstrap";

function CartSummary(props) {
  return (
    <Container className="cart-summary">
      <div className="cart-name-quantity">
        <p className="cart-quantity">{props.qty}</p>
        <h3 className="cart-name">{props.name}</h3>
      </div>
      <p className="cart-price">
        <span style={{ fontSize: "15px", marginRight: "3px" }}>₱</span>
        {props.price * props.qty}
      </p>
    </Container>
  );
}

export default CartSummary;
