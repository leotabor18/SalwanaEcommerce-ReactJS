import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer({ total }) {
  return (
    <Container className="summary-footer">
      <div className="total-fee">
        <h3>Total</h3>
        <h3>
          <span style={{ fontSize: "20px" }}>₱</span>
          {total}
        </h3>
      </div>
      {}
      <Link
        to={total !== 0 ? "/signup" : "/cart"}
        className="btn-proceed"
        onClick={() => total === 0 && window.alert("Your cart is empty!")}
      >
        Proceed to Checkout
      </Link>
    </Container>
  );
}

export default Footer;
