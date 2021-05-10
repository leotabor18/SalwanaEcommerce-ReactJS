import React, { useContext } from "react";
import { CartContext } from "../contextAPI/Context";
import CartList from "../components/Cart/CartList";
import { Col, Container, Row } from "react-bootstrap";
import "./Cart.css";
import Summary from "../components/Summary/Summary";
import Header from "../components/Cart/Header";

const Cart = () => {
  const [cart, setCart] = useContext(CartContext).cart;
  const addQuantity = (id) => {
    setCart(
      cart.map((list) =>
        list.id === id ? { ...list, qty: list.qty + 1 } : list
      )
    );
  };

  const removeQuantity = (id) => {
    setCart(
      cart.map((list) =>
        list.id === id
          ? { ...list, qty: list.qty > 0 ? list.qty - 1 : 0 }
          : list
      )
    );
  };
  const removeCart = (id) => {
    setCart(cart.filter((list) => list.id !== id));
  };
  return (
    <Container className="cart-container">
      <Row>
        <Col lg={7} sm={12} xs={12} className="cart-list shadow">
          <Header title="My Cart" sub="Items are reserved for 60 mins" />

          {cart.length === 0 ? (
            <>
              <hr></hr>
              <p className="empty">Your cart is Empty!</p>
            </>
          ) : (
            cart
              .map((list, index) => {
                return (
                  <div key={index}>
                    <hr></hr>
                    <CartList
                      name={list.name}
                      price={list.price}
                      url={list.url}
                      qty={list.qty}
                      id={list.id}
                      addQuantity={addQuantity}
                      removeQuantity={removeQuantity}
                      removeCart={removeCart}
                    />
                  </div>
                );
              })
              .reverse()
          )}
        </Col>
        <Col lg={4} sm={12} xs={12} className="p-0 shadow cart-sum">
          <Summary />
        </Col>
      </Row>
      <p className="reminders mt-5">
        ***All products are belong to
        <a className="reminder-link" href="/#">
          {" "}
          OTAP Store -ANGELES CITY
        </a>
        . Prices and ratings are untrue, and they just used on this site for
        demonstration only ***
      </p>
    </Container>
  );
};

export default Cart;
