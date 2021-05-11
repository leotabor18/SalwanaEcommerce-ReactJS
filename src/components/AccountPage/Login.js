import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import Social from "./Social";
import "./Account.css";
import "../../Pages/Account.css";

function Login() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <Container className="account-page">
      <div className="login shadow">
        <Form>
          <h1>Login</h1>
          <Form.Group controlId="phone">
            <Form.Control
              type="text"
              placeholder="Phone number"
              className="shadow-none login-input"
            />
            <i className="fa-lg fas fa-mobile-alt"></i>
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Control
              type="password"
              placeholder="Password"
              className="shadow-none login-input"
            />
            <i className="fa-md fas fa-lock"></i>
          </Form.Group>
          <Button
            className="btn-submit shadow-none"
            onClick={() => setModalShow(true)}
          >
            Next
          </Button>
        </Form>
        <div className="hr">
          <hr />
          <p>or</p>
          <hr />
        </div>
        <Social />

        <div className="login-footer">
          <p>Create an Account? </p>
          <Link to="/signup">Signup</Link>
        </div>
        <Modal size="sm" show={modalShow} onHide={() => setModalShow(false)} />
      </div>
    </Container>
  );
}

export default Login;
