import React, { useContext } from "react";
import { Button, Container } from "react-bootstrap";
import "./Cart.css";
import Rates from "../Cards/Rates";
import { CartContext } from "../../contextAPI/Context";

function CartList(props) {
  const [items, setItems] = useContext(CartContext).item;

  const rate = true;

  const save = items.find((list) => list.id === props.id);
  const saveItem = save === undefined ? false : true;

  const onSetSave = () => {
    const newItem = {
      id: props.id,
      name: props.name,
      price: props.price,
      url: props.url,
    };
    const exist = items.find((list) => list.id === props.id);
    if (!exist) {
      setItems(() => [...items, newItem]);
    } else {
      setItems(items.filter((list) => list.id !== props.id && list));
    }
  };

  return (
    <Container className="container-cart">
      <div className="cart-img">
        <img src={props.url} alt=""></img>
      </div>
      <div className="cart-info">
        <h2 className="cart-name">{props.name}</h2>
        <Button
          onClick={() => props.removeCart(props.id)}
          className="btn-close"
        >
          <span className="fas fa-times"></span>
        </Button>
        <p className="cart-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit
        </p>
        <div className="btn-addRemove">
          <p className="qtyName">Quantity:</p>
          <Button
            onClick={() => props.removeQuantity(props.id)}
            className="btn-qty"
          >
            -
          </Button>
          <p className="qty-container">{props.qty}</p>
          <Button
            onClick={() => props.addQuantity(props.id)}
            className="btn-qty"
          >
            +
          </Button>
        </div>
        <div className="cart-footer">
          <Button
            variant="light"
            onClick={onSetSave}
            className={
              saveItem
                ? "heart btn-save shadow-none"
                : "btn-save not-save shadow-none"
            }
          >
            <span
              className={saveItem ? "fas fa-heart mr-2" : "far fa-heart mr-2"}
            ></span>
            Save for later
          </Button>
          <h2 className="cart-price">
            <p className="price">Price:</p>
            <span style={{ fontSize: "20px" }}>₱</span>
            {props.price * props.qty}
          </h2>
        </div>
        <div className="ratings d-flex mt-3">
          <Rates checked={rate} />
          <Rates checked={rate} />
          <Rates checked={rate} />
          <Rates checked={rate} />
          <Rates checked={rate} />
        </div>
      </div>
    </Container>
  );
}

export default CartList;
