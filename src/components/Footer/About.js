import React from "react";
import Title from "./Title";
import { Container } from "react-bootstrap";
import Payment from "./Payment";
const About = () => {
  return (
    <Container className="about">
      <Title title="About" />
      <div className="about-body">
        <p className="about-tag">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
          perspiciatis exercitationem dolorem blanditiis pariatur sit
          repudiandae voluptates reprehenderit labore minus!
        </p>
        <Payment />
        <p className="secure-tag">
          <span className="fas fa-lock mr-2"></span>Secured Online Payment
        </p>
      </div>
    </Container>
  );
};

export default About;
