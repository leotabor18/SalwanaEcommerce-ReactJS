import React from "react";
import { Container } from "react-bootstrap";
import Signup from "../components/AccountPage/Signup";
import "./Account.css";

function Account() {
  return (
    <Container className="account-page">
      <Signup />
    </Container>
  );
}

export default Account;
