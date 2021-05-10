import React from "react";
import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";
import About from "./About";
import Contact from "./Contact";
import Categories from "./Categories";
import Information from "./Information";

const Footer = () => {
  return (
    <Container fluid className="footer  shadow">
      <Row>
        <Col lg={4} md={4} sm={12} xs={12}>
          <About />
        </Col>
        <Col lg={4} md={4} sm={12} xs={12}>
          <Row>
            <Col lg={6} md={6} sm={6} xs={6}>
              <Categories />
            </Col>
            <Col lg={6} md={6} sm={6} xs={6}>
              <Information />
            </Col>
          </Row>
        </Col>
        <Col lg={4} md={4} sm={12} xs={12}>
          <Contact />
        </Col>
        <div className="copyright">
          <p>Build by</p>
          <a href="/">Leonardo E. Tabor</a>
        </div>
      </Row>
    </Container>
  );
};

export default Footer;
