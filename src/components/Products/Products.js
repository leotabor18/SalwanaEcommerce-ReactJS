import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Card from "../Cards/Card_";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Products.css";
import { CartContext } from "../../contextAPI/Context";
const Products = () => {
  const list = useContext(CartContext).list[0];

  return (
    <Container className="products mt-4">
      <h5 className="font-weight-light font-weight-bold text-muted">
        Popular Products
      </h5>
      <Row className="mt-4">
        {list.map((list) => {
          return (
            <Col lg={3} md={4} sm={6} xs={12} key={list._id}>
              <Card
                rate={list.rate}
                url={list.url}
                name={list.name}
                price={list.price}
                id={list._id}
                quantity={0}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Products;
