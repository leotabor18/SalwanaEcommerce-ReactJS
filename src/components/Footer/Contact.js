import React from "react";
import Title from "./Title";
import { Container, Button } from "react-bootstrap";

function Contact() {
  return (
    <Container>
      <Title title="Contacts" />
      <div className="contacts">
        <p className="address">
          <span className="fas fa-map-marker-alt mr-3"></span>
          Angeles City, Pampanga 2009
        </p>
        <hr />
        <p className="phone">
          <span className="fas fa-phone-alt mr-3"></span>
          +63 9123 456 789
        </p>
        <p className="email">
          <span className="far fa-envelope mr-3"></span>
          salwana@test.com
        </p>
        <div className="social-media">
          <ul>
            <li>
              <Button className="btn-contact" style={{ background: "none" }}>
                <i className="fa-2x fab fa-facebook-square"></i>
              </Button>
            </li>
            <li>
              <Button className="btn-contact" style={{ background: "none" }}>
                <i className="fa-2x fab fa-twitter-square"></i>
              </Button>
            </li>
            <li>
              <Button className="btn-contact" style={{ background: "none" }}>
                <i className="fa-2x fab fa-instagram-square"></i>
              </Button>
            </li>
            <li>
              <Button className="btn-contact" style={{ background: "none" }}>
                <i className="fa-2x fab fa-google-plus-square"></i>
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
}

export default Contact;
