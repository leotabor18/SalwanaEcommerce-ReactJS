import React, { useContext } from "react";
import "./Navbar.css";
import Logo from "../../images/Logo.png";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { CartContext } from "../../contextAPI/Context";

const Navbar_ = () => {
  const cart = useContext(CartContext).cart[0];

  return (
    <Navbar className="nav" bg="light shadow-sm" expand="lg">
      <Container className="nav-container">
        <Link to="/">
          <img
            src={Logo}
            alt="Logo_pic"
            style={{ width: "200px", height: "60px" }}
          ></img>
        </Link>
        <div className="collapse-container">
          <Link to="/cart" className="nav-link cart-collapse">
            <i className="fas fa-shopping-cart fa-lg"></i>
            <span className="cart-number">{cart.length}</span>
          </Link>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            style={{ border: "none" }}
          >
            <span className="fas fa-angle-down"></span>
          </Navbar.Toggle>
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="form-control shadow-none"
              />
              <Button className="btn btn-search">
                <span className="fas fa-search"></span>
              </Button>
            </Form>
            <ul className="navbar-list">
              <li className="nav-item">
                <Link className="nav-link btn shadow-none" to="/items">
                  <i className="far fa-heart fa-lg mr-2"></i>
                  My Items
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link btn user-link shadow-none"
                  to="/signup"
                >
                  <span className="far fa-user fa-lg mr-2"></span>
                  Sign Up
                </Link>
              </li>
              <li>
                <Link to="/cart" className="nav-link cart">
                  <i className="fas fa-shopping-cart fa-lg"></i>
                  <span className="cart-number">{cart.length}</span>
                </Link>
              </li>
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbar_;
