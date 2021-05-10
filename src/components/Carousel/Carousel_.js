import React, { useContext } from "react";
import "./Carousel.css";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { CartContext } from "../../contextAPI/Context";
const Carousel_ = () => {
  const list = useContext(CartContext).list[0];

  return (
    <Container>
      <Carousel>
        {list.map((list) => {
          return (
            <Carousel.Item
              interval={10000}
              key={list._id}
              style={{ background: "#000" }}
            >
              <img
                className="d-block w-100"
                src={list.url}
                alt="First slide"
                style={{ height: "100%", opacity: "0.5" }}
              />
            </Carousel.Item>
          );
        })}
        <Carousel.Caption>
          <h1>Featuring the Kapampangan Local Products</h1>
          <p>
            ( Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
            nesciunt doloremque?)
          </p>
          <Button className="shadow-none" variant="light">
            Buy now
          </Button>
        </Carousel.Caption>
      </Carousel>
    </Container>
  );
};

export default Carousel_;
