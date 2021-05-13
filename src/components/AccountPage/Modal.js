import { Button } from "react-bootstrap";
import React from "react";
import Modal from "react-bootstrap/Modal";

function Modal_(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Title id="example-modal-sizes-title-sm">Demo</Modal.Title>
      <Modal.Body>
        <p>
          Thank you so much for visiting my simple E-commerce website! To know
          more about me, please visit my portfolio
        </p>
        <a target="_blank" href="https://leonardotabor.herokuapp.com/">
          Leonardo E. Tabor
        </a>
        <p className="react-credits">
          Powered by <span class="fa-2x fab fa-react"></span>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button className="modal-close" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Modal_;
