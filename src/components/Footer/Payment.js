import React from "react";

function Payment() {
  return (
    <>
      <ul className="payment">
        <li>
          <a href="/#">
            <i className="fa-2x fab fa-cc-mastercard"></i>
          </a>
        </li>
        <li>
          <a href="/#">
            <i className="fa-2x fab fa-cc-visa"></i>
          </a>
        </li>
        <li>
          <a href="/#">
            <i className="fa-2x fab fa-cc-stripe"></i>
          </a>
        </li>
        <li>
          <a href="/#">
            <i className="fa-2x fab fa-cc-paypal"></i>
          </a>
        </li>
        <li>
          <a href="/#">
            <i className="fa-2x fab fa-cc-jcb"></i>
          </a>
        </li>
        <li>
          <a href="/#">
            <i className="fa-2x fab fa-cc-discover"></i>
          </a>
        </li>
        <li>
          <a href="/#">
            <i className="fa-2x fab fa-cc-amazon-pay"></i>
          </a>
        </li>
      </ul>
    </>
  );
}

export default Payment;
