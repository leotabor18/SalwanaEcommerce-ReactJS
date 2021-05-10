import React, { useContext } from "react";
import "./Summary.css";
import Footer from "./Footer";
import Total from "./Total";
import { Container } from "react-bootstrap";
import CartSummary from "./CartSummary";
import Header from "../Cart/Header";
import { CartContext } from "../../contextAPI/Context";

function Summary() {
  const cart = useContext(CartContext).cart[0];
  const subPrice = cart.reduce((acc, elem) => acc + elem.price, 0);
  const subQty = cart.reduce((acc, elem) => acc + elem.qty, 0);
  const subTotal = subPrice * subQty;
  const shippingFee =
    Math.floor(subTotal / 2000) !== 0 ? Math.floor(subTotal / 2000) * 20 : 0;
  const discount = subTotal > 5000 ? subTotal * 0.05 : 0;

  const total = subTotal + shippingFee - discount;
  return (
    <Container className="summary p-0">
      <Header title="Summary" />
      {cart.length !== 0 && <hr></hr>}
      {cart.map((list) => {
        return (
          <CartSummary
            key={list.id}
            name={list.name}
            qty={list.qty}
            price={list.price}
          />
        );
      })}
      <hr></hr>
      <Total
        subTotal={subTotal}
        shippingFee={shippingFee}
        discount={discount}
      />
      <hr></hr>
      <Footer total={total} />
    </Container>
  );
}

export default Summary;
