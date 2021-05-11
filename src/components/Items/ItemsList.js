import React from "react";
import { Button, Container } from "react-bootstrap";
import Rates from "../Cards/Rates";
import "./Items.css";

function ItemsList(props) {
  const rate = true;
  return (
    <Container className="container-list">
      <div className="list-img">
        <img src={props.url} alt=""></img>
      </div>
      <div className="list-info">
        <h2 className="list-name">{props.name}</h2>
        <Button
          onClick={() => props.removeItems(props.id)}
          className="btn-close"
        >
          <span className="fas fa-times"></span>
        </Button>
        <p className="list-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit
        </p>

        <div className="list-footer">
          <div className="ratings d-flex">
            <Rates checked={rate} />
            <Rates checked={rate} />
            <Rates checked={rate} />
            <Rates checked={rate} />
            <Rates checked={rate} />
          </div>
          <h2 className="list-price">
            <p className="price">Price:</p>
            <span style={{ fontSize: "20px" }}>₱</span>
            {props.price}
          </h2>
        </div>
      </div>
    </Container>
  );
}

export default ItemsList;
