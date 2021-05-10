import React from "react";
import { Container } from "react-bootstrap";

function Total(props) {
  return (
    <Container className="total">
      <div className="sub-total">
        <h3>SubTotal</h3>
        <h3>
          {" "}
          <span style={{ fontSize: "15px" }}>₱</span>
          {props.subTotal}
        </h3>
      </div>
      <div className="sub-total">
        <h3 className="other-fee">Shipping Fee</h3>
        <h3 className="other-fee">{props.shippingFee}</h3>
      </div>
      <div className="sub-total">
        <h3 className="other-fee">Discount</h3>
        <h3 className="other-fee">{props.discount}</h3>
      </div>
      <p>
        5% Discount for the minimum purchase of{" "}
        <span style={{ fontSize: "15px" }}>₱</span>5000
      </p>
    </Container>
  );
}

export default Total;
