import { Button } from "react-bootstrap";
import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import "./Card.css";
import Rates from "./Rates";
import { CartContext } from "../../contextAPI/Context";

const Card_ = (props) => {
  const [cart, setCart] = useContext(CartContext).cart;
  const rate = true;
  const addToCart = () => {
    const item = {
      id: props.id,
      name: props.name,
      price: props.price,
      url: props.url,
      quantity: props.quantity + 1,
    };
    const exist = cart.find((list) => list.id === item.id);
    if (exist) {
      setCart(
        cart.map((list) =>
          list.id === item.id ? { ...exist, qty: exist.qty + 1 } : list
        )
      );
    } else {
      setCart(() => [...cart, { ...item, qty: 1 }]);
    }
  };
  return (
    <Card className="shadow-sm">
      <div className="image-container">
        <Card.Img
          variant="top"
          src={props.url}
          style={{ width: "100%", height: "250px" }}
        />
      </div>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit
        </Card.Text>
        <div className="card-footer">
          <div className="ratings d-flex">
            <Rates checked={rate} />
            <Rates checked={rate} />
            <Rates checked={rate} />
            <Rates checked={rate} />
            <Rates checked={rate} />
          </div>
          <p className="price">
            <span style={{ fontSize: "13px" }}>₱</span>
            {props.price}
          </p>
        </div>
        <Button variant="info" onClick={addToCart} className="btn-add">
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Card_;
