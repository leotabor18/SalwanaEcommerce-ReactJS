import React from "react";
import { Button } from "react-bootstrap";

function Social() {
  return (
    <div className="alt-signup">
      <Button className="social">
        <span className="fa-2x fab fa-facebook"></span>
        Facebook
      </Button>
      <Button variant="danger" className="social">
        <span className="fa-2x fab fa-google"></span>
        Google
      </Button>
    </div>
  );
}

export default Social;
