import Modal from "./Modal";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Social from "./Social";
import "./Account.css";
import { Link } from "react-router-dom";

const Signup = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className="signup shadow">
      <Form>
        <h1>Create an Account</h1>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Phone number"
            className="shadow-none signup-input"
          />
          <i className="fa-lg fas fa-mobile-alt"></i>
        </Form.Group>
        <Button
          className="btn-submit shadow-none"
          onClick={() => setModalShow(true)}
        >
          Submit
        </Button>
      </Form>
      <div className="hr">
        <hr />
        <p>or</p>
        <hr />
      </div>
      <Social />
      <p className="terms">
        By signing up, you agree to our <a href="/">Terms of Service</a> &
        <a href="/"> Privacy Policy</a>
      </p>
      <div className="signup-footer">
        <p>Already have an account? </p>
        <Link to="/login">Login</Link>
      </div>
      <Modal size="sm" show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

export default Signup;
